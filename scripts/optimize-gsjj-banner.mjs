/**
 * 公司简介横幅：稿 750×201，从 src/images/gsjj-banner.png 生成 WebP（1x/2x），减轻体积。
 * 运行: node scripts/optimize-gsjj-banner.mjs
 */
import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const srcPng = join(root, 'src/images/gsjj-banner.png')

async function report(label, buf) {
  const kb = (buf.length / 1024).toFixed(1)
  console.log(`${label}: ${kb} KB`)
}

const orig = readFileSync(srcPng)
await report('gsjj-banner.png (源文件)', orig)

// 1x 稿 750×201
const webp750 = await sharp(srcPng)
  .rotate()
  .resize(750, 201, { fit: 'fill', withoutEnlargement: true })
  .webp({ quality: 82, effort: 6 })
  .toBuffer()
const out750 = join(root, 'src/images/gsjj-banner-750.webp')
writeFileSync(out750, webp750)
await report('gsjj-banner-750.webp (750×201)', webp750)

// 2x 1500×402（与常见 2x 屏一致）
const webp1500 = await sharp(srcPng)
  .rotate()
  .resize(1500, 402, { fit: 'fill', withoutEnlargement: true })
  .webp({ quality: 82, effort: 6 })
  .toBuffer()
const out1500 = join(root, 'src/images/gsjj-banner.webp')
writeFileSync(out1500, webp1500)
await report('gsjj-banner.webp (1500×402)', webp1500)

// 就地压缩 PNG（若仍作回退）
const pngOpt = await sharp(srcPng)
  .rotate()
  .resize(1500, 402, { fit: 'fill', withoutEnlargement: true })
  .png({ compressionLevel: 9, adaptiveFiltering: true, effort: 10 })
  .toBuffer()
writeFileSync(srcPng, pngOpt)
await report('gsjj-banner.png (已优化)', pngOpt)

console.log('完成。')
