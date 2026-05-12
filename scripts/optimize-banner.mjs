/**
 * 从 src/images/banner.png 生成首页可用的压缩资源（WebP + JPEG 回退 + 可选窄屏 WebP）。
 * 运行: node scripts/optimize-banner.mjs
 */
import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const srcPng = join(root, 'src/images/banner.png')

const input = sharp(srcPng).rotate()

const meta = await input.metadata()
const w = meta.width ?? 1500

async function report(label, buf) {
  const kb = (buf.length / 1024).toFixed(1)
  console.log(`${label}: ${kb} KB`)
}

const orig = readFileSync(srcPng)
await report('banner.png (源文件)', orig)

// 1x 稿宽 750，对应设计稿全宽
const pipeline750 = sharp(srcPng).rotate().resize(750, null, { withoutEnlargement: true })
const webp750 = await pipeline750.clone().webp({ quality: 76, effort: 6 }).toBuffer()
const out750 = join(root, 'src/images/banner-750.webp')
writeFileSync(out750, webp750)
await report('banner-750.webp', webp750)

// 保持与源图一致宽度（已是 1500 则不再放大）
const pipeline1500 = sharp(srcPng).rotate().resize(1500, null, { withoutEnlargement: true })
const webp1500 = await pipeline1500.clone().webp({ quality: 76, effort: 6 }).toBuffer()
const outWebp = join(root, 'src/images/banner.webp')
writeFileSync(outWebp, webp1500)
await report('banner.webp', webp1500)

const jpg = await pipeline1500
  .clone()
  .jpeg({ quality: 82, mozjpeg: true, progressive: true })
  .toBuffer()
const outJpg = join(root, 'src/images/banner.jpg')
writeFileSync(outJpg, jpg)
await report('banner.jpg (无 WebP 时回退)', jpg)

// 无透明通道，PNG 用压缩参数重写以略微减小体积
const pngOpt = await pipeline1500
  .clone()
  .png({ compressionLevel: 9, adaptiveFiltering: true, effort: 10 })
  .toBuffer()
writeFileSync(srcPng, pngOpt)
await report('banner.png (已就地优化)', pngOpt)

console.log('完成。')
