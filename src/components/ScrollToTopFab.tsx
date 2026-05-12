import { useCallback, useEffect, useState } from 'react'
import { rem750 as r } from '../lib/rem750'

/** 向下滚动超过约一屏的该比例后显示按钮 */
const SHOW_AFTER_VIEWPORT_RATIO = 0.4

function ScrollToTopFab() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop
      const threshold = window.innerHeight * SHOW_AFTER_VIEWPORT_RATIO
      setVisible(y > threshold)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = useCallback(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }, [])

  if (!visible) return null

  const orange = '#f96d01'

  return (
    <button
      type="button"
      aria-label="回到顶部"
      className="fixed flex cursor-pointer items-center justify-center rounded-full border-0 shadow-[0_0.08rem_0.24rem_rgba(0,0,0,0.18)] transition-transform active:scale-95 motion-reduce:transition-none motion-reduce:active:scale-100"
      style={{
        zIndex: 38,
        right: `max(${r(24)}, env(safe-area-inset-right, 0px))`,
        bottom: `max(${r(28)}, env(safe-area-inset-bottom, 0px))`,
        width: r(80),
        height: r(80),
        backgroundColor: '#fffefe',
        color: orange,
      }}
      onClick={scrollTop}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        style={{ width: r(40), height: r(40) }}
      >
        <path
          d="M6 14 12 8l6 6"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}

export default ScrollToTopFab
