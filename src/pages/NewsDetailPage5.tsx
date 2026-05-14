import NewsDetailBannerHero from '../components/NewsDetailBannerHero'
import PageWithFooter from '../components/PageWithFooter'
import { rem750 as r } from '../lib/rem750'

function NewsDetailPage5() {
  const section1 = [
    '当前，核聚变成为全球科技的战略共识方向，正在 AI 的驱动下快速发展，成为全球主要国家争抢布局的核心。然而，传统核聚变研发模式存在预测参数繁多、控制难度极高、研究成本高昂、推进进度缓慢等痛点，而 AI 技术的深度融入，为破解这些痛点提供了破局之道。通过深度赋能诊断、预测、控制及设计等核心环节，AI 正有力推动可控核聚变加速迈向商业化。',
    '具体来看，采用多保真度强化学习技术，实现等离子体微秒级精准控制，可以大幅提升聚变装置运行的稳定性；基于物理-数据混合驱动的 AI 算法，从海量数据中精准预测微秒级等离子体的动态演化和破裂事件，可以有效规避设备损耗与实验风险；通过自主搭建诊断-预测-控制-设计一体化智能体系统，把那些分散的、模糊的、难以言传的判断，变成可复制、可量化、可部署的流程和模型，可以显著提升研发效率、降低试错成本。',
    '在这一背景下，新烛时代于 2025 年 9 月注册成立，核心使命是以人工智能破解核聚变领域的关键难题。公司依托强化学习、生成式模型、自进化智能体及算子学习等前沿技术，构建“物理+数据”双轮驱动的技术底座，推动聚变研发从传统的“经验试错”加速迈向“智能预测与主动控制”的新阶段。新烛时代致力于为聚变反应堆打造专属“智能操作系统”，精准攻克制约可控核聚变商业化进程中最核心的“控制与预测”瓶颈。',
  ]

  const section2 = [
    '新烛时代是由北京中关村学院与中关村人工智能研究院联合孵化的首批企业，团队配置全面、实力雄厚，精准融合 AI4S、核聚变科研与商业运营三大核心能力，形成“技术研发+商业运营”的黄金配置。',
    '创始人张伟毕业于清华大学工程物理系，具有多年市场营销与公司管理经验，全面统筹商业布局与资源整合。联合创始人汪跃担任 CTO，长期聚焦强化学习与 AI4S 方向，具备深厚算法研发与产业实战经验。联合创始人吴果担任 COO，负责公司运营。',
    '研发团队由来自麻省理工、清华大学、中国科学院自动化所等国内外高校与机构的博士组成，专业覆盖 AI4S、AI for Fusion、高能物理与等离子体物理等核心领域，兼具算法研发、聚变科研与工程化落地经验，为核心技术迭代提供人才保障。',
    '公司技术布局具有前瞻性并与国际趋势同频：海外头部机构持续加速 AI for Fusion 路线，我国也将“可控核聚变智能控制”列入“人工智能+核电”典型应用场景，产业窗口期正在快速形成。',
  ]

  const section3 = [
    '随着 ChatGPT 等大模型引爆全球 AI 竞赛，算力需求指数级增长使全球电力消耗急剧攀升，传统能源供给压力持续加大。核聚变作为已知“终极清洁能源”，正成为破解 AI 能源挑战的重要方向，AI for Fusion 也在这一趋势下加速进入产业核心。',
    '当前，全球可控核聚变赛道竞争白热化，欧美设立专项政策推动商业化，头部企业获得持续投入，我国也将其纳入重点工程方向，形成“国家队+民营队”协同推进格局。然而，全球聚变产业仍存在“投产倒挂”：资本与人才高度集中于硬件制造，而决定商业化效率的“智能大脑”层仍是蓝海。',
    '相比传统方案，AI 在聚变控制、预测与设计等核心任务上具备显著加速潜力。新烛时代定位为“万亿赛道加速器”，致力于提供关键 AI 工具与系统能力，填补聚变产业智能化软件空白，抢占 AI for Fusion 战略制高点。',
  ]

  const investors = [
    '中科创星：可控核聚变是解决 AI 时代能源危机的终极方案。我们看好新烛时代将 AI 技术与聚变物理深度结合的创新路径，这不仅大幅缩短了技术迭代周期，更为实现商业化聚变发电提供了可落地的工程方案。新烛团队兼具顶尖学术背景与产业落地能力，是当下国内稀缺的复合型创业团队。',
    '鼎峰科创：AI for Fusion 是推动聚变技术进一步成熟的关键路径之一，新烛时代是中关村学院的第一批产业化项目，其核心团队兼具对聚变和 AI 应用领域的深刻理解。我们看好并期待公司未来能够为解决核聚变的“可控”难题做出贡献。',
    '水木清华校友基金：AI 是可控核聚变商业化的核心加速器，正在从等离子体控制、模拟设计、材料研发、运维四大方向全面突破瓶颈，把“人造太阳”从实验室推向工程化。新烛时代团队既懂 AI、又懂可控核聚变，包含两个领域的核心专家，并通过客户初步验证，是中关村学院重点孵化和支持的技术转化项目，符合长期投资标准。',
  ]

  return (
    <PageWithFooter>
    <main className="w-full bg-white" style={{ paddingBottom: r(48) }}>
      <NewsDetailBannerHero />

      <section style={{ padding: `${r(32)} ${r(40)} 0` }}>
        <h1 className="m-0 font-semibold text-black" style={{ fontSize: r(32), lineHeight: 1.6,paddingLeft: r(15) ,paddingRight: r(15) }}>
          AI加速可控核聚变商业化，新烛时代完成6000万元天使轮融资
        </h1>
        <div className="w-full" style={{ marginTop: r(16), height: r(2), backgroundColor: '#f96d01' }} />

        <p className="m-0 text-justify text-black" style={{ marginTop: r(24), fontSize: r(32), lineHeight: 1.6, textIndent: '2em' }}>
          近日，新烛时代宣布完成6000万元天使轮融资。本轮融资由中科创星、鼎峰科创联合领投，水木清华校友基金跟投，
          资金将主要用于核心技术研发、联合验证、平台建设及关键人才引进等，全力推动可控核聚变向商用化加速迈进。
        </p>

        <section style={{ marginTop: r(30) }}>
          <h2 className="m-0 font-semibold text-[#f96d01]" style={{ fontSize: r(32), lineHeight: 1.6 }}>
            核聚变商业化遭遇多重难关，AI技术成破局关键
          </h2>
          {section1.map((text, idx) => (
            <p key={text} className="m-0 text-justify text-black" style={{ marginTop: idx === 0 ? r(10) : r(8), fontSize: r(32), lineHeight: 1.6, textIndent: '2em' }}>
              {text}
            </p>
          ))}
        </section>

        <section style={{ marginTop: r(26) }}>
          <h2 className="m-0 font-semibold text-[#f96d01]" style={{ fontSize: r(32), lineHeight: 1.6 }}>
            “AI+聚变”跨界团队，推动核心技术落地
          </h2>
          {section2.map((text, idx) => (
            <p key={text} className="m-0 text-justify text-black" style={{ marginTop: idx === 0 ? r(10) : r(8), fontSize: r(32), lineHeight: 1.6, textIndent: '2em' }}>
              {text}
            </p>
          ))}
        </section>

        <section style={{ marginTop: r(26) }}>
          <h2 className="m-0 font-semibold text-[#f96d01]" style={{ fontSize: r(32), lineHeight: 1.6 }}>
            AI for Fusion 赛道加速，产业价值持续凸显
          </h2>
          {section3.map((text, idx) => (
            <p key={text} className="m-0 text-justify text-black" style={{ marginTop: idx === 0 ? r(10) : r(8), fontSize: r(32), lineHeight: 1.6, textIndent: '2em' }}>
              {text}
            </p>
          ))}
        </section>

        <section style={{ marginTop: r(26) }}>
          <h2 className="m-0 font-semibold text-[#f96d01]" style={{ fontSize: r(32), lineHeight: 1.6 }}>
            投资人说
          </h2>
          {investors.map((text, idx) => (
            <p key={text} className="m-0 text-justify text-black" style={{ marginTop: idx === 0 ? r(10) : r(8), fontSize: r(32), lineHeight: 1.6, textIndent: '2em' }}>
              {text}
            </p>
          ))}
        </section>
      </section>
    </main>
    </PageWithFooter>
  )
}

export default NewsDetailPage5
