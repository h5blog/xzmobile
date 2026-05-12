/**
 * 新闻详情顶图：从 src/images/news-detail.png 生成 WebP，供 <picture> 优先加载。
 * 运行: node scripts/optimize-news-detail.mjs
 */
import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const srcPng = join(root, 'src/images/news-detail.png')
const outWebp = join(root, 'src/images/news-detail.webp')

async function report(label, buf) {
  const kb = (buf.length / 1024).toFixed(1)
  console.log(`${label}: ${kb} KB`)
}

const orig = readFileSync(srcPng)
await report('news-detail.png (源文件)', orig)

const meta = await sharp(srcPng).metadata()
console.log(`尺寸: ${meta.width}×${meta.height}`)

const webpBuf = await sharp(srcPng).rotate().webp({ quality: 82, effort: 6 }).toBuffer()
writeFileSync(outWebp, webpBuf)
await report('news-detail.webp', webpBuf)

console.log('完成。')
