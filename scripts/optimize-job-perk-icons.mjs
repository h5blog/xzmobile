/**
 * 加入我们「薪酬福利」6 张装饰图：自 job-perk-icon-1..6.png 生成压缩 WebP（长边约 520，便于裁剪展示）。
 * 运行: node scripts/optimize-job-perk-icons.mjs
 */
import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const imagesDir = join(__dirname, '..', 'src/images')

async function report(label, buf) {
  console.log(`${label}: ${(buf.length / 1024).toFixed(1)} KB`)
}

for (let i = 1; i <= 6; i++) {
  const base = `job-perk-icon-${i}`
  const srcPng = join(imagesDir, `${base}.png`)
  const outWebp = join(imagesDir, `${base}.webp`)
  console.log(`\n--- ${base}.png ---`)
  const orig = readFileSync(srcPng)
  await report('源文件', orig)

  const webpBuf = await sharp(srcPng)
    .rotate()
    .resize(520, 520, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 80, effort: 6 })
    .toBuffer()
  writeFileSync(outWebp, webpBuf)
  await report(`${base}.webp`, webpBuf)
}

console.log('\n完成。')
