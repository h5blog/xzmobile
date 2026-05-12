/**
 * 核心技术页横幅：从 src/images/tech-banner.png 生成 750w / 1500w WebP，并压缩源 PNG。
 * 稿展示约 750×257。运行: node scripts/optimize-tech-banner.mjs
 */
import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const srcPng = join(root, 'src/images/tech-banner.png')

async function report(label, buf) {
  console.log(`${label}: ${(buf.length / 1024).toFixed(1)} KB`)
}

const orig = readFileSync(srcPng)
await report('tech-banner.png (源文件)', orig)

const pipeline750 = sharp(srcPng).rotate().resize({ width: 750, withoutEnlargement: true })
const webp750 = await pipeline750.clone().webp({ quality: 82, effort: 6 }).toBuffer()
writeFileSync(join(root, 'src/images/tech-banner-750.webp'), webp750)
await report('tech-banner-750.webp', webp750)

const pipeline1500 = sharp(srcPng).rotate().resize({ width: 1500, withoutEnlargement: true })
const webp1500 = await pipeline1500.clone().webp({ quality: 82, effort: 6 }).toBuffer()
writeFileSync(join(root, 'src/images/tech-banner.webp'), webp1500)
await report('tech-banner.webp (2x)', webp1500)

const pngOpt = await pipeline1500
  .clone()
  .png({ compressionLevel: 9, adaptiveFiltering: true, effort: 10 })
  .toBuffer()
writeFileSync(srcPng, pngOpt)
await report('tech-banner.png (已就地优化)', pngOpt)

console.log('完成。')
