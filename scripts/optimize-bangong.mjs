/**
 * 办公环境 bangong1/2：稿 644×483，1×/2× WebP + PNG（2×）回退。
 * 与页面 object-cover 一致，缩放使用 cover 铺满画板。
 * 运行: node scripts/optimize-bangong.mjs
 */
import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const imagesDir = join(root, 'src/images')

const W1 = 644
const H1 = 483

const SPECS = [
  { name: 'bangong1' },
  { name: 'bangong2' },
]

async function report(label, buf) {
  const kb = (buf.length / 1024).toFixed(1)
  console.log(`${label}: ${kb} KB`)
}

for (const spec of SPECS) {
  const { name } = spec
  const w1 = W1
  const h1 = H1
  const w2 = w1 * 2
  const h2 = h1 * 2
  const srcPng = join(imagesDir, `${name}.png`)
  console.log(`\n--- ${name}.png (1× ${w1}×${h1} → 2× ${w2}×${h2}) ---`)
  const orig = readFileSync(srcPng)
  await report('源文件', orig)

  const base = sharp(srcPng).rotate()

  const webp1x = await base
    .clone()
    .resize(w1, h1, { fit: 'cover', position: 'centre' })
    .webp({ quality: 82, effort: 6 })
    .toBuffer()
  const out1x = join(imagesDir, `${name}-${w1}.webp`)
  writeFileSync(out1x, webp1x)
  await report(`${name}-${w1}.webp (1×)`, webp1x)

  const webp2x = await base
    .clone()
    .resize(w2, h2, { fit: 'cover', position: 'centre' })
    .webp({ quality: 82, effort: 6 })
    .toBuffer()
  const out2x = join(imagesDir, `${name}-2x.webp`)
  writeFileSync(out2x, webp2x)
  await report(`${name}-2x.webp (2×)`, webp2x)

  const pngOpt = await base
    .clone()
    .resize(w2, h2, { fit: 'cover', position: 'centre' })
    .png({ compressionLevel: 9, adaptiveFiltering: true, effort: 10 })
    .toBuffer()
  writeFileSync(srcPng, pngOpt)
  await report(`${name}.png (回退 2×)`, pngOpt)
}

console.log('\n完成。')
