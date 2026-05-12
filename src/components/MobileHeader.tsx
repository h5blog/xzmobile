import { useEffect, useRef, useState } from 'react'
import { rem750 as r } from '../lib/rem750'
import headerLogo from '../images/header-logo.png'

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

  const inProductGroup = active === '核心技术'
  const inAboutGroup = active === '公司简介' || active === '创始团队' || active === '加入我们'

  const aboutSubItems = [
    { label: '公司简介', value: '公司简介' },
    { label: '创始团队', value: '创始团队' },
    { label: '加入我们', value: '加入我们' },
  ] as const

  const orange = '#f96d01'
  const menuBorder = {
    borderStyle: 'solid' as const,
    borderColor: orange,
  }

  return (
    <header
      className="fixed left-1/2 top-0 z-40 w-full min-w-0 -translate-x-1/2 bg-[#fffefe] shadow-[0_0.0533rem_0.0533rem_0_rgba(181,60,23,0.25)]"
      style={{ height: r(96), maxWidth: r(750) }}
    >
      <div
        className="flex h-full w-full min-w-0 items-center"
        style={{
          paddingLeft: r(64),
          paddingRight: r(64),
        }}
      >
        <div className="min-w-0 shrink-0" style={{width: r(209), height: 'auto' }}>
          <img
            src={headerLogo}
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
              style={{ width: r(79), height: r(49) }}
              onClick={() => setMenuOpen(true)}
              aria-label="打开菜单"
            >
              <span className="absolute bg-[#f96d01]" style={{ width: r(36), height: r(4), top: r(13) }} />
              <span className="absolute bg-[#f96d01]" style={{ width: r(36), height: r(4), top: r(23) }} />
              <span className="absolute bg-[#f96d01]" style={{ width: r(36), height: r(4), top: r(33) }} />
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
        className="absolute bottom-0 left-0 right-0 bg-[#d9d9d9]"
        style={{ height: r(1) }}
      />

      <>
        <button
          type="button"
          aria-label="关闭菜单浮层"
          aria-hidden={!menuOpen}
          tabIndex={-1}
          className={`fixed left-1/2 z-20 -translate-x-1/2 border-0 p-0 ${
            menuOpen
              ? 'pointer-events-auto opacity-100 transition-opacity duration-300 ease-out motion-reduce:transition-none'
              : 'pointer-events-none opacity-0 transition-none'
          }`}
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
          aria-hidden={!menuOpen}
          className={`absolute left-0 z-30 bg-[#fff] shadow-[0_0.0533rem_0.0533rem_0_rgba(181,60,23,0.25)] ${
            menuOpen
              ? 'pointer-events-auto translate-y-0 opacity-100 transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none'
              : 'pointer-events-none -translate-y-2 opacity-0 transition-none'
          }`}
          style={{
            top: r(96),
            left: 0,
            right: 0,
            width: '100%',
            maxHeight: `calc(100dvh - ${r(96)})`,
            overflowY: 'auto',
          }}
        >
          <div style={{ paddingInline: r(42), paddingBottom: r(24) }}>
            {[
              { label: '首页', value: '首页', hasArrow: false },
              { label: '产品中心', value: '产品中心', hasArrow: true },
              { label: '新闻中心', value: '新闻中心', hasArrow: false },
              { label: '关于我们', value: '关于我们', hasArrow: true },
            ].map((item) => {
              const isExpanded = item.label === '产品中心' ? productOpen : item.label === '关于我们' ? aboutOpen : false
              /** 子级收起时高亮父级；子级展开时由子按钮承担高亮 */
              const isParentRowActive =
                (item.label === '首页' && active === '首页') ||
                (item.label === '新闻中心' && active === '新闻中心') ||
                (item.label === '产品中心' && inProductGroup && !productOpen) ||
                (item.label === '关于我们' && inAboutGroup && !aboutOpen)

              /** 水平分割线只画在上层或下层一侧，宽度统一 r(1)，避免双线/粗细不一 */
              /** 产品子菜单展开时「核心技术」仅 458 宽，底边无法铺满 642；改由「新闻中心」画上边框 */
              const mainTop =
                item.label === '首页' || item.label === '关于我们'
                  ? r(2)
                  : item.label === '新闻中心' && productOpen
                    ? r(2)
                    : 0
              const mainBottom = item.label === '新闻中心' ? 0 : r(2)

              return (
                <div key={item.label}>
                  <button
                    type="button"
                    className="relative box-border block w-full border-0 bg-[#fffefe] text-center"
                    style={{
                      ...menuBorder,
                      width: r(642),
                      height: r(102),
                      fontSize: r(36),
                      fontWeight: 500,
                      color: isParentRowActive ? '#ffffff' : '#363636',
                      backgroundColor: isParentRowActive ? '#f2702b' : '#fffefe',
                      borderTopWidth: mainTop,
                      borderLeftWidth: r(2),
                      borderRightWidth: r(2),
                      borderBottomWidth: mainBottom,
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
                        className="absolute"
                        style={{
                          right: r(52),
                          top: '50%',
                          transform: 'translateY(-50%)',
                          fontSize: r(62),
                          lineHeight: 2,
                          color: isParentRowActive ? '#ffffff' : '#f2702b',
                        }}
                      >
                        {isExpanded ? '∨' : '>'}
                      </span>
                    )}
                  </button>

                  {item.label === '产品中心' && (
                    <div
                      aria-hidden={!productOpen}
                      className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                        productOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div
                        className={`min-h-0 overflow-hidden transition-opacity duration-300 ease-out motion-reduce:transition-none ${
                          productOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
                        }`}
                      >
                        <button
                          type="button"
                          className="box-border block border-0 text-center"
                          style={{
                            ...menuBorder,
                            width: r(458),
                            marginInline: 'auto',
                            height: r(102),
                            fontSize: r(32),
                            fontWeight: active === '核心技术' ? 600 : 500,
                            color: active === '核心技术' ? '#ffffff' : '#7a7a7a',
                            backgroundColor: active === '核心技术' ? '#f2702b' : '#fffefe',
                            borderTopWidth: 0,
                            borderLeftWidth: r(2),
                            borderRightWidth: r(2),
                            /** 底边由「新闻中心」全宽顶边承接，避免 458 宽底边盖不住 642 */
                            borderBottomWidth: 0,
                          }}
                          onClick={() => {
                            setMenuOpen(false)
                            onNavigate?.('核心技术')
                          }}
                        >
                          核心技术
                        </button>
                      </div>
                    </div>
                  )}

                  {item.label === '关于我们' && (
                    <div
                      aria-hidden={!aboutOpen}
                      className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                        aboutOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div
                        className={`min-h-0 overflow-hidden transition-opacity duration-300 ease-out motion-reduce:transition-none ${
                          aboutOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
                        }`}
                      >
                        {aboutSubItems.map((sub) => {
                          const isSubActive = active === sub.value
                          return (
                            <button
                              key={sub.value}
                              type="button"
                              className="box-border block border-0 text-center"
                              style={{
                                ...menuBorder,
                                width: r(458),
                                marginInline: 'auto',
                                height: r(102),
                                fontSize: r(32),
                                fontWeight: isSubActive ? 600 : 500,
                                color: isSubActive ? '#ffffff' : '#7a7a7a',
                                backgroundColor: isSubActive ? '#f2702b' : '#fffefe',
                                borderTopWidth: 0,
                                borderLeftWidth: r(2),
                                borderRightWidth: r(2),
                                borderBottomWidth: r(2),
                              }}
                              onClick={() => {
                                setMenuOpen(false)
                                onNavigate?.(sub.value)
                              }}
                            >
                              {sub.label}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </>
    </header>
  )
}

export default MobileHeader
