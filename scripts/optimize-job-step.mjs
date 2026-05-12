/**
 * 加入我们页招聘流程图 job-step.png：稿 619×471，1×/2× WebP + PNG（2×）回退。
 * contain + 稿灰底 #f1f1f1（与加入页背景一致），保证流程图文字不被裁切。
 * 运行: node scripts/optimize-job-step.mjs
 */
import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const imagesDir = join(root, 'src/images')

const W1 = 619
const H1 = 471
const NAME = 'job-step'
const PAD = '#f1f1f1'
const padBg = { r: 241, g: 241, b: 241, alpha: 1 }

async function report(label, buf) {
  const kb = (buf.length / 1024).toFixed(1)
  console.log(`${label}: ${kb} KB`)
}

const w1 = W1
const h1 = H1
const w2 = w1 * 2
const h2 = h1 * 2
const srcPng = join(imagesDir, `${NAME}.png`)
console.log(`\n--- ${NAME}.png (1× ${w1}×${h1} → 2× ${w2}×${h2}) ---`)
const orig = readFileSync(srcPng)
await report('源文件', orig)

const normalized = await sharp(srcPng).rotate().ensureAlpha().flatten({ background: PAD }).toBuffer()

const webp1x = await sharp(normalized)
  .resize(w1, h1, { fit: 'contain', position: 'centre', background: padBg })
  .webp({ quality: 80, effort: 6 })
  .toBuffer()
writeFileSync(join(imagesDir, `${NAME}-${w1}.webp`), webp1x)
await report(`${NAME}-${w1}.webp (1×)`, webp1x)

const webp2x = await sharp(normalized)
  .resize(w2, h2, { fit: 'contain', position: 'centre', background: padBg })
  .webp({ quality: 80, effort: 6 })
  .toBuffer()
writeFileSync(join(imagesDir, `${NAME}-2x.webp`), webp2x)
await report(`${NAME}-2x.webp (2×)`, webp2x)

const pngOpt = await sharp(normalized)
  .resize(w2, h2, { fit: 'contain', position: 'centre', background: padBg })
  .png({ compressionLevel: 9, adaptiveFiltering: true, effort: 10 })
  .toBuffer()
writeFileSync(srcPng, pngOpt)
await report(`${NAME}.png (回退 2×)`, pngOpt)

console.log('\n完成。')
