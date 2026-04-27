/**
 * 设计稿 750 宽。配合 index.html flexible：根字号 = 视口宽/10
 * 稿上 px 转 rem：px / 75（即 1rem ≈ 稿 75px）
 */
export function rem750(px: number): string {
  return `${px / 75}rem`
}
