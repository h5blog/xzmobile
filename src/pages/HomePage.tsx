import { type CSSProperties } from 'react'
import teamWuguoPng from '../images/team-wuguo.png'
import teamWuguoWebp from '../images/team-wuguo.webp'
import teamWangyuePng from '../images/team-wangyue.png'
import teamWangyueWebp from '../images/team-wangyue.webp'
import teamZhangweiPng from '../images/team-zhangwei.png'
import teamZhangweiWebp from '../images/team-zhangwei.webp'
import teamLiutieyanPng from '../images/team-liutieyan.png'
import teamLiutieyanWebp from '../images/team-liutieyan.webp'
import homeTechBgJpg from '../images/home-tech-bg.jpg'
import homeTechBg750Webp from '../images/home-tech-bg-750.webp'
import homeTechBgWebp from '../images/home-tech-bg.webp'
import homeTeamBgJpg from '../images/home-team-bg.jpg'
import homeTeamBg750Webp from '../images/home-team-bg-750.webp'
import homeTeamBgWebp from '../images/home-team-bg.webp'
import homeBanner750Webp from '../images/home-banner-750.webp'
import homeBannerWebp from '../images/home-banner.webp'
import homeBannerJpg from '../images/home-banner.jpg'
import matrix2Png from '../images/matrix-2-resource1.png'
import matrix2Webp from '../images/matrix-2-resource1.webp'
import matrix3Png from '../images/matrix-3-resource2.png'
import matrix3Webp from '../images/matrix-3-resource2.webp'
import matrix4Png from '../images/matrix-4-resource3.png'
import matrix4Webp from '../images/matrix-4-resource3.webp'
import matrix6Png from '../images/matrix-6-resource4.png'
import matrix6Webp from '../images/matrix-6-resource4.webp'
import matrix7Png from '../images/matrix-7-resource5.png'
import matrix7Webp from '../images/matrix-7-resource5.webp'
import matrix8Png from '../images/matrix-8-resource6.png'
import matrix8Webp from '../images/matrix-8-resource6.webp'

import PageWithFooter from '../components/PageWithFooter'
import { setHashFromRoutePath } from '../lib/hashRoute'
import { rem750 as r } from '../lib/rem750'

/** 首屏 banner + 核心技术区背景：尽早 preload WebP（先于首帧 paint 排队） */
function preloadHomeHeroWebp() {
  if (typeof document === 'undefined') return
  for (const href of [homeBanner750Webp, homeTechBg750Webp]) {
    if (
      Array.from(document.querySelectorAll<HTMLLinkElement>('link[rel="preload"][as="image"]')).some(
        (l) => l.href === href,
      )
    )
      continue
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = href
    document.head.appendChild(link)
  }
}
preloadHomeHeroWebp()

function MatrixPicture({ webp, png, imgStyle }: { webp: string; png: string; imgStyle: CSSProperties }) {
  return (
    <picture>
      <source type="image/webp" srcSet={webp} />
      <img src={png} alt="" style={imgStyle} />
    </picture>
  )
}

/** 数字化矩阵卡片右侧插图：稿宽 216px，高度随比例 */
function MatrixCardFigure({ webp, png }: { webp: string; png: string }) {
  return (
    <div
      style={{
        position: 'absolute',
        width: r(210),
        right: r(30),
        top: '50%',
        transform: 'translateY(-50%)',
      }}
    >
      <MatrixPicture
        webp={webp}
        png={png}
        imgStyle={{
          display: 'block',
          width: '100%',
          height: 'auto',
        }}
      />
    </div>
  )
}

/** 稿 750：创始团队头像 255×255 */
const FOUNDER_AVATAR_PX = 255

const founders: { name: string; role: string; png: string; webp: string }[] = [
  { name: '张  伟', role: '首席执行官', png: teamZhangweiPng, webp:  teamZhangweiWebp},
  { name: '汪  跃', role: '首席技术官', png: teamWangyuePng, webp: teamWangyueWebp },
  { name: '吴  果', role: '首席运营官', png: teamWuguoPng, webp: teamWuguoWebp },
  { name: '刘铁岩', role: '首席科学顾问', png: teamLiutieyanPng, webp: teamLiutieyanWebp },
]

const resourceA = [
  { title: '技术创新与研发能力', desc: '获取顶尖的基础科学能力的加持，解决底层硬核问题。' },
  { title: '共享科研设施', desc: '使用中关村学院的实验室、专用设备和软件。' },
  { title: '校友网络', desc: '接入庞大的中关村学院校友网络，校友遍布各行各业，提供难以估量的帮助。' },
]

const resourceB = [
  {
    title: '链接顶尖人才库',
    desc: '可以接触到更侧重于应用和实践技能的人才，例如高级技工、职业工程师、一线产业专家等，满足产品开发、落地实施环节的需求。',
  },
  {
    title: '前沿技术触角',
    desc: '中关村学院作为许多 AI 前沿技术的发源地，团队能更早、更深入地了解这些技术和产业化机会。',
  },
  { title: '中和创业风险', desc: '共享高性能计算资源、实验室及联合研究中心等设施。' },
]

function HomePage() {
  const resourceGradientByIndex = [
    'linear-gradient(118.332deg, rgb(255, 151, 71) 0.83427%, rgb(255, 187, 50) 99.166%)',
    'linear-gradient(118.210deg, rgb(255, 151, 71) 0.83427%, rgb(255, 187, 50) 99.166%)',
    'linear-gradient(118.271deg, rgb(255, 151, 71) 0.83427%, rgb(255, 187, 50) 99.166%)',
  ]
  return (
    <PageWithFooter>
    <main>
      <style>{`
        .home-team-bg-section {
          background-image: url(${JSON.stringify(homeTeamBgJpg)});
          background-image: image-set(
            url(${JSON.stringify(homeTeamBg750Webp)}) 1x,
            url(${JSON.stringify(homeTeamBgWebp)}) 2x
          );
        }
      `}</style>
      <div
        className="w-full"
        style={{
          minHeight: r(310),
          aspectRatio: '1500 / 620',
        }}
      >
        <picture>
          <source
            type="image/webp"
            srcSet={`${homeBanner750Webp} 750w, ${homeBannerWebp} 1500w`}
            sizes="100vw"
          />
          <img
            alt="Banner"
            className="block h-auto w-full object-contain"
            src={homeBannerJpg}
            width={1500}
            height={620}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      </div>

      {/* 稿 750×824：AI 核心技术区（背景用 <picture> 优先于 CSS background，便于预加载与解码） */}
      <section
        className="relative w-full overflow-hidden text-center"
        style={{
          boxSizing: 'border-box',
          width: '100%',
          padding: `${r(50)} ${r(63)} ${r(40)}`,
          minHeight: r(824),
        }}
        data-node-id="292:72"
      >
        <picture className="pointer-events-none absolute inset-0 z-0 block min-h-full w-full">
          <source
            type="image/webp"
            srcSet={`${homeTechBg750Webp} 750w, ${homeTechBgWebp} 1500w`}
            sizes="100vw"
          />
          <img
            src={homeTechBgJpg}
            alt=""
            className="h-full min-h-full w-full object-cover object-center"
            sizes="100vw"
            width={750}
            height={824}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            aria-hidden
          />
        </picture>
        <div className="relative z-[1]">
          <h1 className="text-center" style={{ fontSize: r(36), fontWeight: 'bold', color: '#f96d01' }}>
            AI解决方案核心技术驱动力
          </h1>
          <p
            style={
              {
                marginTop: r(300),
                fontFamily: '"PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: r(32),
                lineHeight: 1.6,
                textIndent: '2em',
                color: '#000',
                textAlign: 'justify',
                textJustify: 'inter-ideograph',
              } as unknown as CSSProperties
            }
            data-node-id="226:46"
          >
            强化学习、生成式模型、自进化智能体、算子学习等前沿技术为核心，构建&ldquo;物理 + 数据&rdquo;双轮驱动的技术体系，打造面向聚变装置的智能诊断、动态预测、实时控制与辅助设计能力，最终形成聚变电站的智能操作系统&mdash;&mdash;终极能源的智慧大脑。
          </p>
          <div className="flex justify-center" style={{ marginTop: r(30) }}>
            <button
              type="button"
              className="inline-flex items-center justify-center font-normal text-white"
              style={{
                width: r(173),
                height: r(56),
                borderRadius: r(19.5),
                backgroundColor: '#f96d01',
                fontSize: r(24),
                letterSpacing: r(5.52),
              }}
              onClick={() => setHashFromRoutePath('/tech')}
            >
              查看详情
            </button>
          </div>
        </div>
      </section>

      {/* 稿 750×957：创始团队背景 home-team-bg */}
      <div
        id="company-team-section"
        className="home-team-bg-section w-full bg-cover bg-center bg-no-repeat"
        style={{
          boxSizing: 'border-box',
          backgroundColor: '#252525',
          minHeight: r(957),
          padding: `${r(40)} ${r(16)} ${r(24)}`,
        }}
      >
        <h1 className="text-center" style={{ marginBottom:r(20),fontSize: r(36), fontWeight: 'bold', color: '#f96d01' }}>
        创始团队
        </h1>
        <div
          className="grid w-full max-w-full"
          style={{
            gridTemplateColumns: `${r(FOUNDER_AVATAR_PX)} ${r(FOUNDER_AVATAR_PX)}`,
            columnGap: r(38),
            rowGap: r(20),
            justifyContent: 'center',
          }}
        >
          {founders.map((f) => (
            <div key={f.name} className="flex min-w-0 flex-col items-center" style={{ gap: r(8) }}>
              <div
                className="mx-auto w-full max-w-full shrink-0 overflow-hidden rounded-full"
                style={{ width: r(FOUNDER_AVATAR_PX), height: r(FOUNDER_AVATAR_PX) }}
              >
                <picture className="block h-full w-full">
                  <source type="image/webp" srcSet={f.webp} />
                  <img
                    src={f.png}
                    alt={f.name}
                    className="h-full w-full object-cover"
                    width={FOUNDER_AVATAR_PX}
                    height={FOUNDER_AVATAR_PX}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
              <div
                className="w-full min-w-0 text-center whitespace-pre-wrap"
                style={{
                  fontFamily: '"PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif',
                  fontWeight: 500,
                  fontStyle: 'normal',
                  fontSize: r(30),
                  lineHeight: 1.6,
                  color: '#fff',
                }}
              >
                <p className="m-0 font-medium">{f.name}</p>
                <p className="m-0" style={{ color: '#d8d8d8' }}>
                  {f.role}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center" style={{ marginTop: r(24) }}>
        <button
          type="button"
          className="inline-flex items-center justify-center font-normal text-white"
          style={{
            width: r(173),
            height: r(56),
            borderRadius: r(19.5),
            backgroundColor: '#f96d01',
            fontSize: r(24),
            letterSpacing: r(5.52),
          }}
          onClick={() => setHashFromRoutePath('/team')}
        >
          查看详情
        </button>
        </div>
      </div>

      {/* <section
        className="w-full"
        style={{
          paddingTop: r(25),
          paddingLeft: r(43),
          paddingRight: r(43),
          paddingBottom: r(74),
          background: 'linear-gradient(254deg, #f96d01 34.5%, #ffb941 98.3%)',
        }}
      >
        <h1 className="text-center" style={{ fontSize: r(36), fontWeight: 'bold', color: '#fff' }}>
        核心战略协作方
        </h1>
        <div className="grid w-full grid-cols-2" style={{ gap: r(16) }}>
          <div
            className="grid place-items-center"
            style={{
              borderRadius: r(23),
              backgroundColor: '#fff',
              minHeight: r(96),
              padding: r(8),
            }}
          >
            <div style={{ width: r(216), height: r(70), overflow: 'hidden' }}>
              <img
                src="/partner-tsinghua.png"
                alt="清华大学"
                className="h-full w-full object-contain"
                style={{ display: 'block' }}
              />
            </div>
          </div>
          <div
            className="grid place-items-center"
            style={{
              borderRadius: r(23),
              backgroundColor: '#fff',
              minHeight: r(96),
              padding: r(8),
            }}
          >
            <div style={{ width: r(267), height: r(78), overflow: 'hidden' }}>
              <img src="/partner-zgc-academy.png" alt="北京中关村学院" className="h-full w-full object-contain" style={{ display: 'block' }} />
            </div>
          </div>
        </div>
      </section> */}

      <div className="w-full" style={{ backgroundColor: '#252525', paddingBottom: r(40) }}>
        <h1 className="text-center" style={{ fontSize: r(36), fontWeight: 'bold', color: '#f96d01', paddingTop: r(40), paddingBottom: r(40) }}>
        数字化资源支撑矩阵
        </h1>
        <div className="mx-auto w-full" style={{ maxWidth: r(614) }}>
          <div className="w-full" style={{ paddingBottom: r(4) }}>
            
            {resourceA.map((it, idx) => (
              <div
                key={it.title}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: r(4),
                  width: '100%',
                  minHeight: [r(391), r(393), r(392)][idx] ?? r(391),
                  paddingTop: [r(33), r(38), r(28)][idx] ?? r(16),
                  paddingLeft: [r(45), r(45), r(45)][idx] ?? r(16),
                  paddingRight: r(16),
                  paddingBottom: r(16),
                  background: resourceGradientByIndex[idx] ?? resourceGradientByIndex[0],
                  color: '#8d3e00',
                  marginTop: r(20),
                }}
              >
                <h3
                  className="m-0"
                  style={{
                    fontFamily: '"PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    fontSize: r(36),
                    lineHeight: 1.6,
                    color: '#8d3e00',
                    maxWidth: r(400),
                  }}
                >
                  {it.title}
                </h3>
                <p
                  className="m-0"
                  style={{
                    fontFamily: '"PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif',
                    fontWeight: 400,
                    textAlign: 'justify',
                    fontSize: r(32),
                    marginTop: [r(12), r(24), r(18)][idx] ?? r(4),
                    lineHeight: 1.6,
                    color: '#8d3e00',
                    maxWidth: r(320),
                  }}
                >
                  {it.desc}
                </p>
                {idx === 0 && <MatrixCardFigure webp={matrix2Webp} png={matrix2Png} />}
                {idx === 1 && <MatrixCardFigure webp={matrix3Webp} png={matrix3Png} />}
                {idx === 2 && <MatrixCardFigure webp={matrix4Webp} png={matrix4Png} />}
              </div>
            ))}

            
            {resourceB.map((it, idx) => (
              <div
                key={it.title}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: r(4),
                  minHeight: [r(391), r(393), r(392)][idx] ?? r(391),
                  paddingTop: [r(33), r(28), r(34)][idx] ?? r(16),
                  paddingLeft: [r(45), r(45), r(45)][idx] ?? r(16),
                  paddingRight: r(16),
                  paddingBottom: r(16),
                  background: 'linear-gradient(118.3deg, rgb(255, 151, 71) 0.8%, rgb(255, 187, 50) 99.2%)',
                  color: '#8d3e00',
                  marginTop: r(20),
                }}
              >
                <h3
                  className="m-0"
                  style={{
                    fontFamily: '"PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    fontSize: r(34),
                    lineHeight: 1.6,
                    color: '#8d3e00',
                    maxWidth: r(320),
                  }}
                >
                  {it.title}
                </h3>
                <p
                  className="m-0"
                  style={{
                    fontFamily: '"PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif',
                    fontWeight: 400,
                    textAlign: 'justify',
                    fontSize: r(30),
                    marginTop: [r(12), r(18), r(18)][idx] ?? r(4),
                    lineHeight: 1.6,
                    color: '#8d3e00',
                    maxWidth: r(320),
                  }}
                >
                  {it.desc}
                </p>
                {idx === 0 && <MatrixCardFigure webp={matrix6Webp} png={matrix6Png} />}
                {idx === 1 && <MatrixCardFigure webp={matrix7Webp} png={matrix7Png} />}
                {idx === 2 && <MatrixCardFigure webp={matrix8Webp} png={matrix8Png} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
    </PageWithFooter>
  )
}

export default HomePage
