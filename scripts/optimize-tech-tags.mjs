/**
 * 核心技术页 tech-tags 合成图：稿面区域固定 587×262（750 稿），2× 1174×524。
 * 任意比例源图 fit contain + 白底，避免只按宽缩放导致与稿面高度不一致。
 * 运行: node scripts/optimize-tech-tags.mjs
 */
import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const srcPng = join(root, 'src/images/tech-tags.png')

const W1 = 587
const H1 = 262
const W2 = W1 * 2
const H2 = H1 * 2
const PAD = '#ffffff'
const padBg = { r: 255, g: 255, b: 255, alpha: 1 }

async function report(label, buf) {
  console.log(`${label}: ${(buf.length / 1024).toFixed(1)} KB`)
}

const orig = readFileSync(srcPng)
await report('tech-tags.png (源文件)', orig)

const normalized = await sharp(srcPng).rotate().ensureAlpha().toBuffer()

const webp587 = await sharp(normalized)
  .resize(W1, H1, { fit: 'contain', position: 'centre', background: padBg })
  .webp({ quality: 82, effort: 6, alphaQuality: 90 })
  .toBuffer()
writeFileSync(join(root, `src/images/tech-tags-${W1}.webp`), webp587)
await report(`tech-tags-${W1}.webp (${W1}×${H1})`, webp587)

const webp1174 = await sharp(normalized)
  .resize(W2, H2, { fit: 'contain', position: 'centre', background: padBg })
  .webp({ quality: 82, effort: 6, alphaQuality: 90 })
  .toBuffer()
writeFileSync(join(root, 'src/images/tech-tags.webp'), webp1174)
await report(`tech-tags.webp (2× ${W2}×${H2})`, webp1174)

const jpg = await sharp(normalized)
  .resize(W2, H2, { fit: 'contain', position: 'centre', background: padBg })
  .flatten({ background: PAD })
  .jpeg({ quality: 82, mozjpeg: true, progressive: true })
  .toBuffer()
writeFileSync(join(root, 'src/images/tech-tags.jpg'), jpg)
await report('tech-tags.jpg (回退 2×)', jpg)

const pngOpt = await sharp(normalized)
  .resize(W2, H2, { fit: 'contain', position: 'centre', background: padBg })
  .png({ compressionLevel: 9, adaptiveFiltering: true, effort: 10 })
  .toBuffer()
writeFileSync(srcPng, pngOpt)
await report(`tech-tags.png (回退 2× ${W2}×${H2})`, pngOpt)

console.log('完成。')
