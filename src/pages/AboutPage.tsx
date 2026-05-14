import PageWithFooter from '../components/PageWithFooter'
import { rem750 as r } from '../lib/rem750'
import gsjjBannerPng from '../images/gsjj-banner.png'
import gsjjBanner750 from '../images/gsjj-banner-750.webp'
import gsjjBanner2x from '../images/gsjj-banner.webp'
import aboutImage1 from '../images/bangong1.png'
import aboutImage1Webp1x from '../images/bangong1-644.webp'
import aboutImage1Webp2x from '../images/bangong1-2x.webp'
import aboutImage2 from '../images/bangong2.png'
import aboutImage2Webp1x from '../images/bangong2-644.webp'
import aboutImage2Webp2x from '../images/bangong2-2x.webp'
import gsjjIconPng from '../images/gsjj-icon.png'
import gsjjIconWebp1x from '../images/gsjj-icon-689.webp'
import gsjjIconWebp2x from '../images/gsjj-icon-2x.webp'
import ourTag1Png from '../images/our-tag1.png'
import ourTag1Webp1x from '../images/our-tag1-586.webp'
import ourTag1Webp2x from '../images/our-tag1-2x.webp'
import ourTag2Png from '../images/our-tag2.png'
import ourTag2Webp1x from '../images/our-tag2-596.webp'
import ourTag2Webp2x from '../images/our-tag2-2x.webp'
import ourTag3Png from '../images/our-tag3.png'
import ourTag3Webp1x from '../images/our-tag3-595.webp'
import ourTag3Webp2x from '../images/our-tag3-2x.webp'

/** 首屏三张 our-tag WebP（1x）尽早 preload，与下方 <picture> 去重 */
function preloadOurTagWebps() {
  if (typeof document === 'undefined') return
  for (const href of [ourTag1Webp1x, ourTag2Webp1x, ourTag3Webp1x]) {
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
    link.setAttribute('fetchpriority', 'high')
    document.head.appendChild(link)
  }
}
preloadOurTagWebps()

/** gsjj 横幅稿 750×201 */
const ABOUT_HERO_H = 201

/** 正文段落首行缩进 2 字（相对当前字号） */
const pIndent2 = { textIndent: '2em' } as const

export default function AboutPage() {
  return (
    <PageWithFooter>
    <main className="w-full bg-[#fff]">
      <section
        className="relative w-full overflow-hidden"
        style={{ height: r(ABOUT_HERO_H), minHeight: r(ABOUT_HERO_H) }}
      >
        <picture>
          <source
            type="image/webp"
            srcSet={`${gsjjBanner750} 750w, ${gsjjBanner2x} 1500w`}
            sizes="100vw"
          />
          <img
            src={gsjjBannerPng}
            alt="关于我们"
            width={750}
            height={201}
            className="h-full w-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </picture>
      </section>

      <section className="relative" style={{ padding: `${r(40)}  ${r(40)} ${r(0)}` }}>
        <p className="m-0 text-black" style={{ ...pIndent2, fontSize: r(32), lineHeight: 1.6,textAlign: 'justify', marginTop: r(8), letterSpacing: r(2.56) }}>
        <span className="font-semibold text-[#f96d01]">新烛时代 (XinZhuAI)</span>作为国内AI赋能可控核聚变的引领者，通过深度融合物理机理与人工智能技术，致力于打造服务全球聚变能源产业的通用“聚变智能体”。我们为全球聚变研究机构及商业公司提供涵盖设计、模拟到运维控制的全栈式AI解决方案，推动聚变研发从传统的“经验试错”向“智能预测与主动控制”变革，加速全人类迈向聚变能源新时代。
        </p>
        <div>
          <picture className="block max-w-full" style={{ width: r(586),margin: `${r(40)} auto` }}>
            <source
              type="image/webp"
              srcSet={`${ourTag1Webp1x} 586w, ${ourTag1Webp2x} 1172w`}
              sizes="586px"
            />
            <img
              src={ourTag1Png}
              alt=""
              width={586}
              height={330}
              className="box-border block h-auto w-full bg-white"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </picture>
          <picture className="block max-w-full" style={{ width: r(596),margin: `${r(20)} auto` }}>
            <source
              type="image/webp"
              srcSet={`${ourTag2Webp1x} 596w, ${ourTag2Webp2x} 1192w`}
              sizes="596px"
            />
            <img
              src={ourTag2Png}
              alt=""
              width={596}
              height={336}
              className="box-border block h-auto w-full bg-white"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </picture>
          <picture className="block max-w-full" style={{ width: r(595),margin: `${r(20)} auto`  }}>
            <source
              type="image/webp"
              srcSet={`${ourTag3Webp1x} 595w, ${ourTag3Webp2x} 1190w`}
              sizes="595px"
            />
            <img
              src={ourTag3Png}
              alt=""
              width={595}
              height={363}
              className="box-border block h-auto w-full bg-white"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </picture>
        </div>

        <div style={{ marginTop: r(40) }}>
          <p className="m-0 text-black" style={{ ...pIndent2, fontSize: r(32), lineHeight: 1.6,textAlign: 'justify',  letterSpacing: r(2.56) }}>
            如果说全球聚变公司正在建造性能强大的“CPU”裸机，新烛时代要做的，就是为所有聚变装置打造一个可移植、可扩展、可进化的“智能操作系统”。
          </p>
          <p className="m-0 text-black" style={{ ...pIndent2, marginTop: r(26), fontSize: r(32), lineHeight: 1.6,textAlign: 'justify',  letterSpacing: r(2.56) }}>
            但这不仅仅是算法的堆砌，而是对物理世界的深度重构。
          </p>
          <p className="m-0 text-black" style={{ ...pIndent2, marginTop: r(26), fontSize: r(32), lineHeight: 1.6,textAlign: 'justify',  letterSpacing: r(2.56) }}>
            在底层架构上，我们集结了强化学习、生成式模型、智能体技术与算子学习等前沿AI战力，并引入不确定性估计来构筑安全边界。
          </p>
          <p className="m-0 text-black" style={{ ...pIndent2, marginTop: r(26), fontSize: r(32), lineHeight: 1.6,textAlign: 'justify',  letterSpacing: r(2.56) }}>
            我们以<span className="font-semibold text-[#f96d01]">“工程痛点”为导向</span>，以
            <span className="font-semibold text-[#f96d01]">“物理先验”为基石</span>，构建起一个
            <span className="font-semibold text-[#f96d01]">“物理+数据”双轮驱动的强大内核</span>。
          </p>
          <p className="m-0 text-black" style={{ ...pIndent2, marginTop: r(26), fontSize: r(32), lineHeight: 1.6,textAlign: 'justify',  letterSpacing: r(2.56) }}>
            我们不造硬件，我们打造驱动硬件的“智慧大脑”。
            我们将以标准化的智能服务赋能全行业，让每一台昂贵的聚变装置都能在我们的系统支持下高效运转。而放眼终局，这套系统将成为未来聚变电厂真正的“灵魂”。
          </p>
          <p className="m-0 text-black" style={{ ...pIndent2, marginTop: r(26), fontSize: r(32), lineHeight: 1.6,textAlign: 'justify', letterSpacing: r(2.56) }}>
            当万亿级的聚变能源市场开启，那些由钢筋混凝土与超导磁体构成的庞大躯壳，都需要一颗智慧的心脏来驾驭。
          </p>
        </div>

        
      </section>
      
      <div className="flex w-full justify-center" style={{ marginBlock: r(30) }}>
        <picture>
          <source
            type="image/webp"
            srcSet={`${gsjjIconWebp1x} 689w, ${gsjjIconWebp2x} 1378w`}
            sizes="689px"
          />
          <img
            src={gsjjIconPng}
            alt=""
            width={689}
            height={348}
            className="mx-auto block max-w-full bg-white object-contain"
            style={{ width: r(689), height: r(348) }}
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>
      <div style={{paddingTop: r(8),margin: `0 auto`,  width: r(644), height: r(483) }}>
        <picture className="block h-full w-full">
          <source
            type="image/webp"
            srcSet={`${aboutImage1Webp1x} 644w, ${aboutImage1Webp2x} 1288w`}
            sizes="644px"
          />
          <img
            src={aboutImage1}
            alt="办公环境"
            width={644}
            height={483}
            className="block h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>
      <div style={{ paddingTop: r(20),paddingBottom: r(40),margin: `0 auto`, width: r(644), height: r(483) }}>
        <picture className="block h-full w-full">
          <source
            type="image/webp"
            srcSet={`${aboutImage2Webp1x} 644w, ${aboutImage2Webp2x} 1288w`}
            sizes="644px"
          />
          <img
            src={aboutImage2}
            alt="办公环境"
            width={644}
            height={483}
            className="block h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>
    </main>
    </PageWithFooter>
  )
}
