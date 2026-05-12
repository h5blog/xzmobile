/**
 * 压缩 news-icon1.png … news-icon5.png，并生成 148w / 296w WebP + JPEG（稿 148×135，2x≈296×270）。
 * 运行: node scripts/optimize-news-icons.mjs
 */
import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const imagesDir = join(root, 'src/images')

async function report(label, buf) {
  console.log(`${label}: ${(buf.length / 1024).toFixed(1)} KB`)
}

for (let i = 1; i <= 5; i++) {
  const base = `news-icon${i}`
  const srcPng = join(imagesDir, `${base}.png`)
  const orig = readFileSync(srcPng)
  await report(`${base}.png (源)`, orig)

  const pipeline148 = sharp(srcPng).rotate().resize({ width: 148, withoutEnlargement: true })
  const webp148 = await pipeline148.clone().webp({ quality: 82, effort: 6 }).toBuffer()
  writeFileSync(join(imagesDir, `${base}-148.webp`), webp148)
  await report(`${base}-148.webp`, webp148)

  const pipeline296 = sharp(srcPng).rotate().resize({ width: 296, withoutEnlargement: true })
  const webp296 = await pipeline296.clone().webp({ quality: 82, effort: 6 }).toBuffer()
  writeFileSync(join(imagesDir, `${base}.webp`), webp296)
  await report(`${base}.webp`, webp296)

  const jpg = await pipeline296
    .clone()
    .jpeg({ quality: 82, mozjpeg: true, progressive: true })
    .toBuffer()
  writeFileSync(join(imagesDir, `${base}.jpg`), jpg)
  await report(`${base}.jpg`, jpg)

  const pngOpt = await pipeline296
    .clone()
    .png({ compressionLevel: 9, adaptiveFiltering: true, effort: 10 })
    .toBuffer()
  writeFileSync(srcPng, pngOpt)
  await report(`${base}.png (优化后)`, pngOpt)
  console.log('---')
}

console.log('完成。')
