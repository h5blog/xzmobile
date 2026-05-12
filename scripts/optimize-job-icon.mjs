/**
 * 加入我们「薪酬福利」顶部品牌图 job-icon.png：稿 235×235，1×/2× WebP + PNG（2×）回退。
 * 运行: node scripts/optimize-job-icon.mjs
 */
import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const imagesDir = join(__dirname, '..', 'src/images')
const NAME = 'job-icon'
const W1 = 235
const H1 = 235

async function report(label, buf) {
  console.log(`${label}: ${(buf.length / 1024).toFixed(1)} KB`)
}

const w2 = W1 * 2
const h2 = H1 * 2
const srcPng = join(imagesDir, `${NAME}.png`)
console.log(`\n--- ${NAME}.png (1× ${W1}×${H1} → 2× ${w2}×${h2}) ---`)
const orig = readFileSync(srcPng)
await report('源文件', orig)

const base = sharp(srcPng).rotate()

const webp1x = await base.clone().resize(W1, H1, { fit: 'cover', position: 'centre' }).webp({ quality: 82, effort: 6 }).toBuffer()
writeFileSync(join(imagesDir, `${NAME}-${W1}.webp`), webp1x)
await report(`${NAME}-${W1}.webp (1×)`, webp1x)

const webp2x = await base.clone().resize(w2, h2, { fit: 'cover', position: 'centre' }).webp({ quality: 82, effort: 6 }).toBuffer()
writeFileSync(join(imagesDir, `${NAME}-2x.webp`), webp2x)
await report(`${NAME}-2x.webp (2×)`, webp2x)

const pngOpt = await base.clone().resize(w2, h2, { fit: 'cover', position: 'centre' }).png({ compressionLevel: 9, effort: 10 }).toBuffer()
writeFileSync(srcPng, pngOpt)
await report(`${NAME}.png (回退 2×)`, pngOpt)

console.log('\n完成。')
