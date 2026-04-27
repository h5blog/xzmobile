import { figmaHome } from '../images/figmaHome'
import { rem750 as r } from '../lib/rem750'

const techPills: { label: string; width: number }[] = [
  { label: '强化学习', width: 176 },
  { label: '生成式模型', width: 217 },
  { label: '自进化智能体', width: 256 },
  { label: '算子学习', width: 176 },
]

function CoreTechPage() {
  const paragraphTop =
    '当前，核聚变正成为全球科技竞争与能源变革的关键战略方向，而人工智能的快速发展，正在显著改写其研发范式。长期以来，聚变研发面临参数空间庞大、等离子体行为高度复杂、控制精度要求极高、实验与试错成本高昂等核心挑战，导致整体推进周期长、研发效率低。我们判断，AI 不只是聚变研究的辅助工具，而将成为重塑诊断、预测、控制与设计全流程的关键基础设施，推动可控核聚变从依赖经验的探索式研发，加速迈向以智能预测与主动控制为核心的新阶段。'
  const paragraphBottom =
    '基于这一判断，新烛时代于 2025 年 9 月成立，致力于以人工智能破解核聚变领域最关键的控制与预测难题。公司以强化学习、生成式模型、自进化智能体、算子学习等前沿技术为核心，构建“物理 + 数据”双轮驱动的技术体系，打造面向聚变装置的智能诊断、动态预测、实时控制与辅助设计能力。我们的目标，是为未来聚变反应堆打造专属的“智能操作系统”，将分散、模糊、依赖专家经验的知识与流程，沉淀为可复制、可量化、可部署的智能能力，持续提升聚变研发效率，降低研发成本，加速聚变能源走向工程化与商业化。'

  return (
    <main className="w-full">
      <section className="w-full" style={{ height: r(257) }}>
        <img src={figmaHome.coreTechBanner} alt="核心技术横幅" className="h-full w-full object-cover" />
      </section>

      <section
        className="relative w-full overflow-hidden"
        style={{
          minHeight: r(2190),
          paddingTop: r(62),
          paddingLeft: r(91),
          paddingRight: r(57),
          paddingBottom: r(116),
        }}
      >
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src={figmaHome.coreTechBg}
            alt=""
            className="h-full w-full object-cover"
            style={{ opacity: 0.57 }}
          />
        </div>

        <p className="relative z-[1] m-0 text-black" style={{ width: r(602), maxWidth: '100%', fontSize: r(32), lineHeight: 'normal' }}>
          {paragraphTop}
        </p>

        <div className="relative z-[1]" style={{ marginTop: r(95), width: r(530), maxWidth: '100%' }}>
          <div className="flex items-center" style={{ gap: r(99) }}>
            {techPills.slice(0, 2).map((item) => (
              <div
                key={item.label}
                className="grid place-items-center rounded-[200px] bg-gradient-to-b from-[#ffb85c] to-[#f96d01] text-white"
                style={{
                  width: r(item.width),
                  height: r(86),
                  fontSize: r(32),
                  fontWeight: 600,
                  boxShadow: '0 0.2133rem 0.2267rem rgba(251,85,14,0.25)',
                }}
              >
                {item.label}
              </div>
            ))}
          </div>
          <div className="flex items-center" style={{ marginTop: r(63), gap: r(60) }}>
            {techPills.slice(2).map((item) => (
              <div
                key={item.label}
                className="grid place-items-center rounded-[200px] bg-gradient-to-b from-[#ffb85c] to-[#f96d01] text-white"
                style={{
                  width: r(item.width),
                  height: r(86),
                  fontSize: r(32),
                  fontWeight: 600,
                  boxShadow: '0 0.2133rem 0.2267rem rgba(251,85,14,0.25)',
                }}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>

        <p className="relative z-[1] m-0 text-black" style={{ marginTop: r(66), width: r(602), maxWidth: '100%', fontSize: r(32), lineHeight: 'normal' }}>
          {paragraphBottom}
        </p>

        <div
          className="relative z-[1] grid place-items-center rounded-[200px] text-white"
          style={{
            marginTop: r(43),
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

        <div className="relative z-[1]" style={{ marginTop: r(96), marginLeft: r(-57), width: r(682), maxWidth: 'calc(100% + 3.04rem)', height: r(291) }}>
          <img src={figmaHome.coreTechIllustration} alt="" className="h-full w-full object-contain" />
        </div>
      </section>
    </main>
  )
}

export default CoreTechPage
