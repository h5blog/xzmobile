import type { CSSProperties } from 'react'
import PageWithFooter from '../components/PageWithFooter'
import { rem750 as r } from '../lib/rem750'
import techBanner750Webp from '../images/tech-banner-750.webp'
import techBannerWebp from '../images/tech-banner.webp'
import techBannerPng from '../images/tech-banner.png'
import techTags587Webp from '../images/tech-tags-587.webp'
import techTagsWebp from '../images/tech-tags.webp'
import techTagsJpg from '../images/tech-tags.jpg'
import coreTechIllustration682Webp from '../images/core-tech-illustration-682.webp'
import coreTechIllustrationWebp from '../images/core-tech-illustration.webp'
import coreTechIllustrationPng from '../images/core-tech-illustration.png'

function CoreTechPage() {
  
  const paragraphTop =
    '当前，核聚变正成为全球科技竞争与能源变革的关键战略方向，而人工智能的快速发展，正在显著改写其研发范式。长期以来，聚变研发面临参数空间庞大、等离子体行为高度复杂、控制精度要求极高、实验与试错成本高昂等核心挑战，导致整体推进周期长、研发效率低。我们判断，AI 不只是聚变研究的辅助工具，而将成为重塑诊断、预测、控制与设计全流程的关键基础设施，推动可控核聚变从依赖经验的探索式研发，加速迈向以智能预测与主动控制为核心的新阶段。'
  const paragraphBottom =
    '基于这一判断，新烛时代于 2025 年 9 月成立，致力于以人工智能破解核聚变领域最关键的控制与预测难题。公司以强化学习、生成式模型、自进化智能体、算子学习等前沿技术为核心，构建“物理 + 数据”双轮驱动的技术体系，打造面向聚变装置的智能诊断、动态预测、实时控制与辅助设计能力。我们的目标，是为未来聚变反应堆打造专属的“智能操作系统”，将分散、模糊、依赖专家经验的知识与流程，沉淀为可复制、可量化、可部署的智能能力，持续提升聚变研发效率，降低研发成本，加速聚变能源走向工程化与商业化。'

  return (
    <PageWithFooter>
    <main className="w-full">
      {/* 稿 750×257 */}
      <section className="w-full overflow-hidden" style={{ height: r(257), minHeight: r(257) }}>
        <picture className="block h-full w-full">
          <source type="image/webp" srcSet={`${techBanner750Webp} 750w, ${techBannerWebp} 1500w`} sizes="100vw" />
          <img
            src={techBannerPng}
            alt="核心技术横幅"
            className="h-full w-full object-cover"
            width={1500}
            height={514}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </picture>
      </section>

      <section
        className="relative w-full overflow-hidden"
        style={{
          minHeight: r(2190),
          paddingTop: r(40),
          paddingLeft: r(40),
          paddingRight: r(40),
          paddingBottom: r(116),
        }}
      >

        <p
          className="relative z-[1] m-0 text-black"
          style={
            {
              fontSize: r(32),
              lineHeight: 1.6,
              textIndent: '2em',
              textAlign: 'justify',
            } as unknown as CSSProperties
          }
        >
          {paragraphTop}
        </p>

        {/* 稿面区域固定 587×262；资源经脚本导出为同尺寸 contain + 白底 */}
        <div className="relative z-[1] flex w-full justify-center" style={{ marginTop: r(50) }}>
          <picture
            className="block max-w-full shrink-0 overflow-hidden bg-white"
            style={{ width: r(587), height: r(262), boxSizing: 'border-box' }}
          >
            <source
              type="image/webp"
              srcSet={`${techTags587Webp} 587w, ${techTagsWebp} 1174w`}
              sizes="587px"
            />
            <img
              src={techTagsJpg}
              alt="强化学习、生成式模型、自进化智能体、算子学习"
              className="block h-full w-full object-contain object-center"
              width={1174}
              height={524}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </div>

        <p className="relative z-[1] m-0 text-black" style={{ marginTop: r(40), marginBottom: r(43),fontSize: r(32), lineHeight: 1.6,textIndent: '2em',textAlign: 'justify', }}>
          {paragraphBottom}
        </p>

        <div
          className="relative z-[1] grid place-items-center rounded-[200px] text-white"
          style={{
            margin:"0 auto",
            width: r(572),
            maxWidth: '100%',
            height: r(86),
            fontSize: r(32),
            fontWeight: 600,
            background: 'linear-gradient(180deg, #fd7e94 0%, #1e4ca9 87.5%, #1e4ca9 99.519%)',
            boxShadow: '0 0.2133rem 0.2267rem rgba(251,85,14,0.25)',
          }}
        >
          “物理 + 数据”双轮驱动的技术体系
        </div>

        <div className="flex w-full justify-center" style={{ paddingTop: r(96) }}>
          <picture>
            <source
              type="image/webp"
              srcSet={`${coreTechIllustration682Webp} 682w, ${coreTechIllustrationWebp} 1364w`}
              sizes="682px"
            />
            <img
              src={coreTechIllustrationPng}
              alt=""
              className="mx-auto block h-auto max-w-full object-contain"
              style={{ width: r(682), height: r(291) }}
              width={1364}
              height={582}
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>
      </section>
    </main>
    </PageWithFooter>
  )
}

export default CoreTechPage
