import { useEffect, useRef, useState } from 'react'
import { rem750 as r } from '../lib/rem750'

const logoImage = '/header-logo.png'

type MobileHeaderProps = {
  active?: string
  onNavigate?: (item: string) => void
}

/**
 * 754:30991 等：白色顶栏 750×96，与 750 稿对齐（尺寸用 rem750）
 */
function MobileHeader({ active = '首页', onNavigate }: MobileHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [productOpen, setProductOpen] = useState(true)
  const [aboutOpen, setAboutOpen] = useState(true)
  const menuButtonRef = useRef<HTMLDivElement | null>(null)
  const menuPanelRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as Node
      const clickOnButton = menuButtonRef.current?.contains(target) ?? false
      const clickOnPanel = menuPanelRef.current?.contains(target) ?? false
      if (!clickOnButton && !clickOnPanel) setMenuOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const originalOverflow = document.body.style.overflow
    const originalTouchAction = document.body.style.touchAction

    document.body.style.overflow = 'hidden'
    document.body.style.touchAction = 'none'

    return () => {
      document.body.style.overflow = originalOverflow
      document.body.style.touchAction = originalTouchAction
    }
  }, [menuOpen])

  const activeMenuLabel = active === '核心技术' ? '产品中心' : active === '创始团队' || active === '加入我们' ? '关于我们' : active
  const aboutSubItems = [
    { label: '公司简介', value: '公司简介' },
    { label: '创始团队', value: '创始团队' },
    { label: '加入我们', value: '加入我们' },
  ] as const

  return (
    <header
      className="relative w-full bg-[#fffefe] shadow-[0_0.0533rem_0.0533rem_0_rgba(181,60,23,0.25)]"
      style={{ height: r(96) }}
    >
      <div
        className="flex h-full w-full min-w-0 items-center"
        style={{
          paddingLeft: r(26),
          paddingRight: r(34),
        }}
      >
        <div className="min-w-0 shrink-0" style={{ width: r(242), height: r(57) }}>
          <img
            src={logoImage}
            alt="新烛时代"
            className="h-full w-full object-contain object-left"
            draggable={false}
          />
        </div>
        <div className="ml-auto" ref={menuButtonRef}>
          {!menuOpen ? (
            <button
              type="button"
              className="relative grid place-items-center rounded-[0.1333rem] border border-[#f96d01] bg-[#fffefe]"
              style={{ width: r(80), height: r(56) }}
              onClick={() => setMenuOpen(true)}
              aria-label="打开菜单"
            >
              <span className="absolute bg-[#f96d01]" style={{ width: r(36), height: r(4), top: r(14) }} />
              <span className="absolute bg-[#f96d01]" style={{ width: r(36), height: r(4), top: r(26) }} />
              <span className="absolute bg-[#f96d01]" style={{ width: r(36), height: r(4), top: r(38) }} />
            </button>
          ) : (
            <button
              type="button"
              className="relative grid place-items-center border-0 bg-transparent text-[#f96d01]"
              style={{ width: r(80), height: r(56), fontSize: r(66), lineHeight: 1 }}
              onClick={() => setMenuOpen(false)}
              aria-label="关闭菜单"
            >
              ×
            </button>
          )}
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute left-0 bg-[#d9d9d9]"
        style={{ bottom: 0, width: r(750), height: r(1) }}
      />

      {menuOpen && (
        <>
          <button
            type="button"
            aria-label="关闭菜单浮层"
            className="fixed left-1/2 z-20 -translate-x-1/2 border-0 p-0"
            style={{
              top: r(96),
              width: r(750),
              height: `calc(100dvh - ${r(96)})`,
              background: 'rgba(13,5,5,0.63)',
            }}
            onClick={() => setMenuOpen(false)}
          />
        <div
          ref={menuPanelRef}
          className="absolute left-0 z-30 bg-[#fff] shadow-[0_0.0533rem_0.0533rem_0_rgba(181,60,23,0.25)]"
          style={{
            top: r(96),
            width: r(750),
            minHeight: r(549),
            maxHeight: `calc(100dvh - ${r(96)})`,
            overflowY: 'auto',
          }}
        >
          <div style={{ paddingTop: r(31), paddingInline: r(42), paddingBottom: r(24) }}>
            {[
              { label: '首页', value: '首页', hasArrow: false },
              { label: '产品中心', value: '产品中心', hasArrow: true },
              { label: '新闻中心', value: '新闻中心', hasArrow: false },
              { label: '关于我们', value: '关于我们', hasArrow: true },
            ].map((item) => {
              const isActive = activeMenuLabel === item.label
              const isExpanded = item.label === '产品中心' ? productOpen : item.label === '关于我们' ? aboutOpen : false
              return (
                <div key={item.label}>
                  <button
                    type="button"
                    className="relative block w-full border border-[#f96d01] bg-[#fffefe] text-center"
                    style={{
                      width: r(642),
                      height: r(102),
                      fontSize: r(36),
                      fontWeight: 500,
                      color: isActive ? '#ffffff' : '#363636',
                      backgroundColor: isActive ? '#f2702b' : '#fffefe',
                      borderBottomWidth: item.label === '新闻中心' ? 0 : r(1),
                    }}
                    onClick={() => {
                      if (item.label === '产品中心') {
                        setProductOpen((prev) => !prev)
                        return
                      }
                      if (item.label === '关于我们') {
                        setAboutOpen((prev) => !prev)
                        return
                      }
                      setMenuOpen(false)
                      onNavigate?.(item.value)
                    }}
                  >
                    {item.label}
                    {item.hasArrow && (
                      <span
                        className="absolute text-[#f2702b]"
                        style={{ right: r(52), top: '50%', transform: 'translateY(-50%)', fontSize: r(62), lineHeight: 1 }}
                      >
                        {isExpanded ? '∨' : '>'}
                      </span>
                    )}
                  </button>

                  {item.label === '产品中心' && productOpen && (
                    <button
                      type="button"
                      className="block border border-t-0 border-b-0 border-[#f96d01] bg-[#fffefe] text-center"
                      style={{
                        width: r(458),
                        marginInline: 'auto',
                        height: r(79),
                        fontSize: r(32),
                        fontWeight: 500,
                        color: '#7a7a7a',
                      }}
                      onClick={() => {
                        setMenuOpen(false)
                        onNavigate?.('核心技术')
                      }}
                    >
                      核心技术
                    </button>
                  )}

                  {item.label === '关于我们' &&
                    aboutOpen &&
                    aboutSubItems.map((sub, subIdx) => (
                      <button
                        key={sub.value}
                        type="button"
                        className="block border border-[#f96d01] bg-[#fffefe] text-center"
                        style={{
                          width: r(458),
                          marginInline: 'auto',
                          height: r(79),
                          fontSize: r(32),
                          fontWeight: 500,
                          color: '#7a7a7a',
                          borderTopWidth: subIdx === 0 ? r(1) : 0,
                        }}
                        onClick={() => {
                          setMenuOpen(false)
                          onNavigate?.(sub.value)
                        }}
                      >
                        {sub.label}
                      </button>
                    ))}
                </div>
              )
            })}
          </div>
        </div>
        </>
      )}
    </header>
  )
}

export default MobileHeader
