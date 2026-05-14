/**
 * 首页首屏横幅：从 src/images/home-banner.png 生成 750w / 1500w WebP、JPEG 回退，并压缩源 PNG。
 * 运行: node scripts/optimize-home-banner.mjs
 */
import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const srcPng = join(root, 'src/images/home-banner.png')

async function report(label, buf) {
  const kb = (buf.length / 1024).toFixed(1)
  console.log(`${label}: ${kb} KB`)
}

const orig = readFileSync(srcPng)
await report('home-banner.png (源文件)', orig)

const base = sharp(srcPng).rotate()

const webp750 = await base
  .clone()
  .resize(750, null, { withoutEnlargement: true })
  .webp({ quality: 78, effort: 6 })
  .toBuffer()
writeFileSync(join(root, 'src/images/home-banner-750.webp'), webp750)
await report('home-banner-750.webp', webp750)

const webp1500 = await base
  .clone()
  .resize(1500, null, { withoutEnlargement: true })
  .webp({ quality: 78, effort: 6 })
  .toBuffer()
writeFileSync(join(root, 'src/images/home-banner.webp'), webp1500)
await report('home-banner.webp (2x)', webp1500)

const jpg = await base
  .clone()
  .resize(1500, null, { withoutEnlargement: true })
  .jpeg({ quality: 82, mozjpeg: true, progressive: true })
  .toBuffer()
writeFileSync(join(root, 'src/images/home-banner.jpg'), jpg)
await report('home-banner.jpg (回退)', jpg)

const pngOpt = await base
  .clone()
  .resize(1500, null, { withoutEnlargement: true })
  .png({ compressionLevel: 9, adaptiveFiltering: true, effort: 10 })
  .toBuffer()
writeFileSync(srcPng, pngOpt)
await report('home-banner.png (已就地优化)', pngOpt)

console.log('完成。')
