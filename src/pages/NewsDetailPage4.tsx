import NewsDetailBannerHero from '../components/NewsDetailBannerHero'
import PageWithFooter from '../components/PageWithFooter'
import news4Icon1Png from '../images/news4-icon1.png'
import news4Icon1Webp from '../images/news4-icon1.webp'
import news4Icon2Png from '../images/news4-icon2.png'
import news4Icon2Webp from '../images/news4-icon2.webp'
import news4Icon3Png from '../images/news4-icon3.png'
import news4Icon3Webp from '../images/news4-icon3.webp'
import news4Icon4Png from '../images/news4-icon4.png'
import news4Icon4Webp from '../images/news4-icon4.webp'
import news4Icon5Png from '../images/news4-icon5.png'
import news4Icon5Webp from '../images/news4-icon5.webp'
import news4Icon6Png from '../images/news4-icon6.png'
import news4Icon6Webp from '../images/news4-icon6.webp'
import TimelineNodeFigma from '../components/TimelineNodeFigma'
import { rem750 as r } from '../lib/rem750'

const companyBlocks = [
  {
    name: 'Microsoft',
    png: news4Icon1Png,
    webp: news4Icon1Webp,
    desc: '与 Helion 达成全球首个聚变电力采购协议（2028 年起购买 50 MW 电力），并利用 Azure 平台加速 AI 在聚变领域的应用。',
    fit: 'contain' as const,
  },
  {
    name: 'Google DeepMind',
    png: news4Icon2Png,
    webp: news4Icon2Webp,
    desc: '旗下 DeepMind 在聚变控制领域取得多项突破，并与 TAE Technologies 深度合作，其“Optometrist AI”算法帮助 TAE 提升等离子体寿命 30%+。',
    fit: 'contain' as const,
  },
  {
    name: 'NVIDIA',
    png: news4Icon3Png,
    webp: news4Icon3Webp,
    desc: '与英国 UKAEA 合作，使用 Omniverse 平台为 ITER 和 STEP 装置构建数字孪生，用于协同设计和 AI 仿真。',
    fit: 'contain' as const,
  },
  {
    name: 'General Atomics',
    png: news4Icon4Png,
    webp: news4Icon4Webp,
    desc: '通用原子公司运营的 DIII-D 持续推动聚变研究前沿。2024 年 4 月，其团队成功在平均密度超出格林沃尔德极限 20% 的情况下，实现了 2.2 秒高约束运行。',
    fit: 'contain' as const,
  },
  {
    name: 'Tokamak Energy',
    png: news4Icon5Png,
    webp: news4Icon5Webp,
    desc: '专注于托卡马克开发者软件支持，其产品套件通过集成建模、数字孪生和 AI/ML 控制工具，加速聚变堆设计与运行。',
    fit: 'contain' as const,
  },
  {
    name: 'Fusion AI Labs',
    png: news4Icon6Png,
    webp: news4Icon6Webp,
    desc: '作为一家聚变 AI 咨询公司，为行业客户提供定制化的 AI/ML 算法和机器学习运维（MLOps）服务，帮助解决特定的物理预测和工程挑战。',
    fit: 'contain' as const,
  },
] as const

const references = [
  ['《Science》', '2025', '美国劳伦斯利弗莫尔国家实验室利用物理信息 + AI 训练生成模型，成功预测国家点火装置实验。'],
  ['《Nature》', '2023', '通过深度强化学习主动抑制等离子体撕裂模不稳定性，防止潜在灾难性破裂。'],
  ['《Nature Communica-tions》', '2023', '实现了无边缘局域模（ELMs）的高能运行，解决了聚变堆材料面临的一大挑战。'],
  ['《Nature Physics》', '2022', '普林斯顿大学利用 AI 技术，提前 300 毫秒预测破裂，为规避系统提供宝贵反应时间。'],
  ['《Nature》', '2022', 'DeepMind 首次使用深度强化学习，在瑞士托卡马克装置上成功实现多种等离子体形状的准确控制。'],
  ['《Nature》', '2019', 'DeepMind 与谷歌合作，在 AI 驱动的聚变等离子体控制方面实现关键突破。'],
] as const

/** 稿 750：期刊栏 227px；时间轴圆点列 40px；列间距 12px → 虚线过圆点列中心 */
const COL_JOURNAL = 227
const COL_TIMELINE = 40
const GAP_TIMELINE = 12
const timelineLineLeftPx = COL_JOURNAL + GAP_TIMELINE + COL_TIMELINE / 2

function NewsDetailPage4() {
  return (
    <PageWithFooter>
    <main className="w-full bg-white" style={{ paddingBottom: r(48) }}>
      <NewsDetailBannerHero />

      <section style={{ padding: `${r(24)} ${r(40)} 0` }}>
        <h1 className="m-0 font-semibold text-black" style={{ fontSize: r(32), lineHeight: 1.6,paddingLeft: r(15) ,paddingRight: r(15)  }}>
          AI 赋能聚变已成全球共识
        </h1>
        <div className="w-full" style={{ marginTop: r(14), height: r(2), backgroundColor: '#f96d01' }} />

        <section style={{ marginTop: r(22), paddingInline: r(12) }}>
          {companyBlocks.map((item, idx) => (
            <div key={item.name} style={{ marginBottom: idx === companyBlocks.length - 1 ? 0 : r(34) }}>
              <div
                className="mx-auto grid place-items-center"
                style={{
                  width: r(204),
                  height: r(66),
                }}
              >
                <picture className="block h-full w-full">
                  <source type="image/webp" srcSet={item.webp} />
                  <img
                    src={item.png}
                    alt={item.name}
                    className="block h-full w-full"
                    style={{
                      objectFit: item.fit,
                      padding: r(3),
                    }}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
              <p className="m-0 text-black" style={{ marginTop: r(14), fontSize: r(32), lineHeight: 1.6,textAlign: 'justify', textIndent: '2em' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </section>

        <div style={{ marginTop: r(22), height: r(1), backgroundColor: '#f96d01' }} />

        <section
          style={{
            marginTop: r(34),
            position: 'relative',
            paddingBottom: r(6),
          }}
        >
          {/* 竖向虚线：border-left 在移动端更稳定可见（outline 过细易糊） */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: r(timelineLineLeftPx),
              top: r(18),
              bottom: r(16),
              width: 0,
              transform: 'translateX(-50%)',
              borderLeft: `${r(2)} dashed rgba(249, 109, 1, 0.72)`,
              pointerEvents: 'none',
            }}
          />
          {references.map(([journal, year, body], idx) => (
            <div
              key={`${journal}-${year}-${idx}`}
              className="grid items-start"
              style={{
                gridTemplateColumns: `${r(COL_JOURNAL)} ${r(COL_TIMELINE)} 1fr`,
                columnGap: r(GAP_TIMELINE),
                marginBottom: idx === references.length - 1 ? 0 : r(22),
              }}
            >
              <div
                className="m-0 flex min-w-0 flex-col font-semibold text-[#f96d01]"
                style={{ width: r(COL_JOURNAL), fontSize: r(36), lineHeight: 1.6 }}
              >
                <span className="m-0 w-full text-center">{journal}</span>
                <span className="m-0 w-full text-right font-normal" style={{ paddingRight: r(65) }}>
                  {year}
                </span>
              </div>
              <div className="relative flex shrink-0 justify-center" style={{ width: r(COL_TIMELINE), paddingTop: r(2) }}>
                <div style={{ width: r(34.95), height: r(34.95) }}>
                  <TimelineNodeFigma />
                </div>
              </div>
              <p className="m-0 min-w-0 text-black" style={{ fontSize: r(32),width: r(378), lineHeight: 1.6,textAlign: 'justify' }}>
                {body}
              </p>
            </div>
          ))}
        </section>
      </section>
    </main>
    </PageWithFooter>
  )
}

export default NewsDetailPage4
