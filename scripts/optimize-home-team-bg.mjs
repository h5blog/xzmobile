/**
 * 从 src/images/home-team-bg.png 生成 WebP / JPEG 与压缩后的 PNG（稿 750 宽，2x 1500）。
 * 运行: node scripts/optimize-home-team-bg.mjs
 */
import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const srcPng = join(root, 'src/images/home-team-bg.png')

async function report(label, buf) {
  console.log(`${label}: ${(buf.length / 1024).toFixed(1)} KB`)
}

const orig = readFileSync(srcPng)
await report('home-team-bg.png (源文件)', orig)

const pipeline750 = sharp(srcPng).rotate().resize(750, null, { withoutEnlargement: true })
const webp750 = await pipeline750.clone().webp({ quality: 82, effort: 6 }).toBuffer()
writeFileSync(join(root, 'src/images/home-team-bg-750.webp'), webp750)
await report('home-team-bg-750.webp', webp750)

const pipeline1500 = sharp(srcPng).rotate().resize(1500, null, { withoutEnlargement: true })
const webp1500 = await pipeline1500.clone().webp({ quality: 82, effort: 6 }).toBuffer()
writeFileSync(join(root, 'src/images/home-team-bg.webp'), webp1500)
await report('home-team-bg.webp', webp1500)

const jpg = await pipeline1500
  .clone()
  .jpeg({ quality: 82, mozjpeg: true, progressive: true })
  .toBuffer()
writeFileSync(join(root, 'src/images/home-team-bg.jpg'), jpg)
await report('home-team-bg.jpg (回退)', jpg)

const pngOpt = await pipeline1500
  .clone()
  .png({ compressionLevel: 9, adaptiveFiltering: true, effort: 10 })
  .toBuffer()
writeFileSync(srcPng, pngOpt)
await report('home-team-bg.png (已就地优化)', pngOpt)

console.log('完成。')
