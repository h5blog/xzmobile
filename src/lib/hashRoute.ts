/**
 * Hash 路由：`#/about`、`#/news/1` 等，与 pathFromPage 使用的路径字符串一致（以 / 开头）。
 */
export function routePathFromHash(): string {
  const raw = window.location.hash.replace(/^#/, '').trim()
  if (raw === '' || raw === '/') return '/'
  return raw.startsWith('/') ? raw : `/${raw}`
}

export function setHashFromRoutePath(path: string): void {
  const p = path === '/' || path === '' ? '/' : path.startsWith('/') ? path : `/${path}`
  const next = `#${p}`
  if (window.location.hash !== next) {
    window.location.hash = next
  }
}
