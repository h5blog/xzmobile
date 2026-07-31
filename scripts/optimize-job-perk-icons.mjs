/**
 * 加入我们「薪酬福利」6 张卡片图标：稿面 58px，导出 2× WebP + PNG 回退。
 * 运行: node scripts/optimize-job-perk-icons.mjs
 */
import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const imagesDir = join(__dirname, '..', 'src/images')

const DISPLAY_W = 58
const TARGET_W = DISPLAY_W * 2

async function report(label, buf) {
  console.log(`${label}: ${(buf.length / 1024).toFixed(1)} KB`)
}

for (let i = 1; i <= 6; i++) {
  const base = `job-perk-icon-${i}`
  const srcPng = join(imagesDir, `${base}.png`)
  const outWebp = join(imagesDir, `${base}.webp`)
  const outPng = join(imagesDir, `${base}.png`)

  console.log(`\n--- ${base} (2× ${TARGET_W}px) ---`)
  const orig = readFileSync(srcPng)
  await report('源文件', orig)

  const pipeline = sharp(srcPng).rotate().resize(TARGET_W, null, {
    fit: 'inside',
    withoutEnlargement: true,
  })

  const webpBuf = await pipeline.clone().webp({ quality: 82, effort: 6 }).toBuffer()
  writeFileSync(outWebp, webpBuf)
  await report(`${base}.webp`, webpBuf)

  const pngBuf = await pipeline.clone().png({ compressionLevel: 9, effort: 10 }).toBuffer()
  writeFileSync(outPng, pngBuf)
  await report(`${base}.png (回退)`, pngBuf)
}

console.log('\n完成。')
