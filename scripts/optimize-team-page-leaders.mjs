/**
 * 创始团队页 4 张头像：按稿 221×267 导出 WebP，供 <picture> 优先加载。
 * 运行: node scripts/optimize-team-page-leaders.mjs
 */
import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const imagesDir = join(root, 'src/images')

const W = 221
const H = 267

const files = ['team-page-zhangwei', 'team-page-wangyue', 'team-page-wuguo', 'team-page-liutieyan']

async function report(label, buf) {
  const kb = (buf.length / 1024).toFixed(1)
  console.log(`${label}: ${kb} KB`)
}

for (const base of files) {
  const srcPng = join(imagesDir, `${base}.png`)
  const outWebp = join(imagesDir, `${base}.webp`)
  const orig = readFileSync(srcPng)
  await report(`${base}.png`, orig)
  const webpBuf = await sharp(srcPng)
    .rotate()
    .resize(W, H, { fit: 'cover', position: 'centre' })
    .webp({ quality: 82, effort: 6 })
    .toBuffer()
  writeFileSync(outWebp, webpBuf)
  await report(`${base}.webp`, webpBuf)
  console.log('')
}

console.log('完成。')
