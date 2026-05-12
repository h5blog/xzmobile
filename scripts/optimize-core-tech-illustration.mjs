/**
 * 从 src/images/core-tech-illustration.png 生成 WebP（1x 682w / 2x 1364w），并压缩源 PNG。
 * 稿面展示约 682×291。运行: node scripts/optimize-core-tech-illustration.mjs
 */
import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const srcPng = join(root, 'src/images/core-tech-illustration.png')

async function report(label, buf) {
  console.log(`${label}: ${(buf.length / 1024).toFixed(1)} KB`)
}

const orig = readFileSync(srcPng)
await report('core-tech-illustration.png (源文件)', orig)

const pipeline682 = sharp(srcPng).rotate().resize({ width: 682, withoutEnlargement: true })
const webp682 = await pipeline682.clone().webp({ quality: 82, effort: 6, alphaQuality: 90 }).toBuffer()
writeFileSync(join(root, 'src/images/core-tech-illustration-682.webp'), webp682)
await report('core-tech-illustration-682.webp', webp682)

const pipeline1364 = sharp(srcPng).rotate().resize({ width: 1364, withoutEnlargement: true })
const webp1364 = await pipeline1364.clone().webp({ quality: 82, effort: 6, alphaQuality: 90 }).toBuffer()
writeFileSync(join(root, 'src/images/core-tech-illustration.webp'), webp1364)
await report('core-tech-illustration.webp (2x)', webp1364)

const pngOpt = await pipeline1364
  .clone()
  .png({ compressionLevel: 9, adaptiveFiltering: true, effort: 10 })
  .toBuffer()
writeFileSync(srcPng, pngOpt)
await report('core-tech-illustration.png (已就地优化)', pngOpt)

console.log('完成。')
