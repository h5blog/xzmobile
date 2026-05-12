/**
 * 创始团队页横幅：team-banner-bg.png → 按稿 750×178 导出 WebP，供 <picture> 使用。
 * 运行: node scripts/optimize-team-banner-bg.mjs
 */
import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const imagesDir = join(root, 'src/images')

const W = 750
const H = 178

const base = 'team-banner-bg'
const srcPng = join(imagesDir, `${base}.png`)
const outWebp = join(imagesDir, `${base}.webp`)

const orig = readFileSync(srcPng)
console.log(`${base}.png: ${(orig.length / 1024).toFixed(1)} KB`)

const webpBuf = await sharp(srcPng)
  .rotate()
  .resize(W, H, { fit: 'cover', position: 'centre' })
  .webp({ quality: 82, effort: 6 })
  .toBuffer()

writeFileSync(outWebp, webpBuf)
console.log(`${base}.webp: ${(webpBuf.length / 1024).toFixed(1)} KB`)
console.log('完成。')
