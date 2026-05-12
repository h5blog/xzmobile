/**
 * 公司简介 gsjj-icon：稿 689×348，1×/2× WebP + PNG（2×）回退。
 * 运行: node scripts/optimize-gsjj-icon.mjs
 */
import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const srcPng = join(root, 'src/images/gsjj-icon.png')

const w1 = 689
const h1 = 348
const w2 = w1 * 2
const h2 = h1 * 2

const padBg = { r: 255, g: 255, b: 255, alpha: 1 }

async function report(label, buf) {
  const kb = (buf.length / 1024).toFixed(1)
  console.log(`${label}: ${kb} KB`)
}

const orig = readFileSync(srcPng)
await report('gsjj-icon.png (源文件)', orig)

const normalized = await sharp(srcPng)
  .rotate()
  .ensureAlpha()
  .flatten({ background: '#ffffff' })
  .toBuffer()

const webp1x = await sharp(normalized)
  .resize(w1, h1, { fit: 'contain', position: 'centre', background: padBg })
  .webp({ quality: 82, effort: 6 })
  .toBuffer()
const out1x = join(root, 'src/images/gsjj-icon-689.webp')
writeFileSync(out1x, webp1x)
await report(`gsjj-icon-689.webp (1× ${w1}×${h1})`, webp1x)

const webp2x = await sharp(normalized)
  .resize(w2, h2, { fit: 'contain', position: 'centre', background: padBg })
  .webp({ quality: 82, effort: 6 })
  .toBuffer()
const out2x = join(root, 'src/images/gsjj-icon-2x.webp')
writeFileSync(out2x, webp2x)
await report(`gsjj-icon-2x.webp (2× ${w2}×${h2})`, webp2x)

const pngOpt = await sharp(normalized)
  .resize(w2, h2, { fit: 'contain', position: 'centre', background: padBg })
  .png({ compressionLevel: 9, adaptiveFiltering: true, effort: 10 })
  .toBuffer()
writeFileSync(srcPng, pngOpt)
await report('gsjj-icon.png (回退 2×)', pngOpt)

console.log('\n完成。')
