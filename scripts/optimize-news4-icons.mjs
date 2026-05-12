/**
 * 新闻详情页 4：news4-icon1.png … news4-icon6.png → 对应 .webp，供 <picture> 使用。
 * 运行: node scripts/optimize-news4-icons.mjs
 */
import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const imagesDir = join(root, 'src/images')

async function report(label, buf) {
  const kb = (buf.length / 1024).toFixed(1)
  console.log(`${label}: ${kb} KB`)
}

for (let i = 1; i <= 6; i++) {
  const base = `news4-icon${i}`
  const srcPng = join(imagesDir, `${base}.png`)
  const outWebp = join(imagesDir, `${base}.webp`)
  const orig = readFileSync(srcPng)
  await report(`${base}.png`, orig)
  const webpBuf = await sharp(srcPng).rotate().webp({ quality: 82, effort: 6 }).toBuffer()
  writeFileSync(outWebp, webpBuf)
  await report(`${base}.webp`, webpBuf)
  console.log('')
}

console.log('完成。')
