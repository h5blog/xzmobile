/**
 * 公司简介 our-tag：按 1×稿尺寸生成 1x WebP、2x WebP（严格 2 倍像素）、PNG 回退（2×）。
 * 运行: node scripts/optimize-our-tags.mjs
 */
import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const imagesDir = join(root, 'src/images')

/** 设计稿 1× px；2× 由脚本计算为 2*w1 × 2*h1；contain + 白底，不裁切 */
const TAG_SPECS = [
  { name: 'our-tag1', w1: 586, h1: 330 },
  { name: 'our-tag2', w1: 596, h1: 336 },
  { name: 'our-tag3', w1: 595, h1: 363 },
]

const padBg = { r: 255, g: 255, b: 255, alpha: 1 }

async function normalizeSourceBuffer(srcPath) {
  return sharp(srcPath)
    .rotate()
    .ensureAlpha()
    .flatten({ background: '#ffffff' })
    .toBuffer()
}

async function report(label, buf) {
  const kb = (buf.length / 1024).toFixed(1)
  console.log(`${label}: ${kb} KB`)
}

for (const spec of TAG_SPECS) {
  const { name, w1, h1 } = spec
  const w2 = w1 * 2
  const h2 = h1 * 2
  const srcPng = join(imagesDir, `${name}.png`)
  console.log(`\n--- ${name}.png (1× ${w1}×${h1} → 2× ${w2}×${h2}) ---`)
  const orig = readFileSync(srcPng)
  await report('源文件', orig)

  const normalized = await normalizeSourceBuffer(srcPng)

  const webp1x = await sharp(normalized)
    .resize(w1, h1, { fit: 'contain', position: 'centre', background: padBg })
    .webp({ quality: 82, effort: 6 })
    .toBuffer()
  const out1x = join(imagesDir, `${name}-${w1}.webp`)
  writeFileSync(out1x, webp1x)
  await report(`${name}-${w1}.webp (1×)`, webp1x)

  const webp2x = await sharp(normalized)
    .resize(w2, h2, { fit: 'contain', position: 'centre', background: padBg })
    .webp({ quality: 82, effort: 6 })
    .toBuffer()
  const out2x = join(imagesDir, `${name}-2x.webp`)
  writeFileSync(out2x, webp2x)
  await report(`${name}-2x.webp (2× ${w2}×${h2})`, webp2x)

  const pngOpt = await sharp(normalized)
    .resize(w2, h2, { fit: 'contain', position: 'centre', background: padBg })
    .png({ compressionLevel: 9, adaptiveFiltering: true, effort: 10 })
    .toBuffer()
  writeFileSync(srcPng, pngOpt)
  await report(`${name}.png (回退 2×)`, pngOpt)
}

console.log('\n完成。')
