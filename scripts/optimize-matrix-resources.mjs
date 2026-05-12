/**
 * 压缩 6 张 matrix-*-resource*.png，并生成同名 .webp（供 <picture> 使用）。
 * 运行: node scripts/optimize-matrix-resources.mjs
 */
import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const imagesDir = join(root, 'src/images')

const files = [
  'matrix-2-resource1.png',
  'matrix-3-resource2.png',
  'matrix-4-resource3.png',
  'matrix-6-resource4.png',
  'matrix-7-resource5.png',
  'matrix-8-resource6.png',
]

async function report(label, buf) {
  console.log(`${label}: ${(buf.length / 1024).toFixed(1)} KB`)
}

for (const name of files) {
  const srcPath = join(imagesDir, name)
  const base = name.replace(/\.png$/i, '')
  const orig = readFileSync(srcPath)
  await report(`${name} (源)`, orig)

  const pipeline = sharp(srcPath).rotate()

  const webpBuf = await pipeline.clone().webp({ quality: 82, effort: 6 }).toBuffer()
  const webpPath = join(imagesDir, `${base}.webp`)
  writeFileSync(webpPath, webpBuf)
  await report(`${base}.webp`, webpBuf)

  const pngBuf = await pipeline
    .clone()
    .png({ compressionLevel: 9, adaptiveFiltering: true, effort: 10 })
    .toBuffer()
  writeFileSync(srcPath, pngBuf)
  await report(`${name} (优化后)`, pngBuf)
  console.log('---')
}

console.log('完成。')
