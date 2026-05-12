/**
 * 首页创始团队四张头像：按稿 255×255 导出 WebP，供 <picture> 使用。
 * 运行: node scripts/optimize-home-founders-avatars.mjs
 */
import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const imagesDir = join(root, 'src/images')

const SIZE = 255

const bases = ['team-wuguo', 'team-wangyue', 'team-zhangwei', 'team-liutieyan']

for (const base of bases) {
  const srcPng = join(imagesDir, `${base}.png`)
  const outWebp = join(imagesDir, `${base}.webp`)
  const orig = readFileSync(srcPng)
  console.log(`${base}.png: ${(orig.length / 1024).toFixed(1)} KB`)
  const webpBuf = await sharp(srcPng)
    .rotate()
    .resize(SIZE, SIZE, { fit: 'cover', position: 'centre' })
    .webp({ quality: 82, effort: 6 })
    .toBuffer()
  writeFileSync(outWebp, webpBuf)
  console.log(`${base}.webp: ${(webpBuf.length / 1024).toFixed(1)} KB\n`)
}

console.log('完成。')
