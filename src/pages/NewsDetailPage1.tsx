import NewsDetailBannerHero from '../components/NewsDetailBannerHero'
import PageWithFooter from '../components/PageWithFooter'
import TimelineNodeFigma from '../components/TimelineNodeFigma'
import { rem750 as r } from '../lib/rem750'

const rows = [
  {
    year: '2025・美国',
    text: '美国能源部（DOE）为核聚变创新研究引擎（FIRE）合作组织提供 1.07 亿美元，并与“里程碑计划”8 家企业达成协议撬动了超过 3.5 亿美元的私营投资，支持进一步创建聚变创新生态系统。',
  },
  {
    year: '2025・英国',
    text: '英国政府宣布为 2025—2026 年“聚变未来计划”投资 4.1 亿英镑，计划 2027 年前向聚变能源领域投资总额达 6.5 亿英镑。',
  },
  {
    year: '2025・欧盟',
    text: '欧盟宣布启动两项新的欧洲原子能共同体（Euratom）项目，旨在加速聚变能源商业化进程并解决技术领域的人才短缺问题，两项计划为期三年。',
  },
  { year: '2025・日本', text: '日本政府启动了聚变能源创新战略。' },
  { year: '2024・韩国', text: '韩国成立了核聚变创新联盟，旨在加速聚变产业的发展。' },
] as const

/** 稿 750：年份/国家列；时间轴列；列间距 — 竖线过圆点列中心（与网格一致） */
const COL_YEAR = 218
const COL_TIMELINE = 40
const GAP_TIMELINE = 12
const timelineLineLeftPx = COL_YEAR + GAP_TIMELINE + COL_TIMELINE / 2

/** 正文首行行高与 Figma 外圈直径，使圆点垂直中心与右侧首行中线对齐 */
const BODY_FONT_PX = 32
const BODY_LINE_HEIGHT = 1.6
const DOT_OUTER_PX = 34.95
const timelinePadTopPx = Math.max(0, (BODY_FONT_PX * BODY_LINE_HEIGHT - DOT_OUTER_PX) / 2)

function NewsDetailPage1() {
  return (
    <PageWithFooter>
    <main className="w-full bg-white" style={{ paddingBottom: r(48) }}>
      <NewsDetailBannerHero />

      <section style={{ padding: `${r(32)} ${r(24)} 0` }}>
        <h1 className="m-0 font-semibold text-black" style={{ fontSize: r(32), lineHeight: 1.6 }}>
          全球各国核聚变战略部署
        </h1>
        <div className="w-full" style={{ marginTop: r(18), height: r(2), backgroundColor: '#f96d01' }} />

        <div style={{ marginTop: r(42), position: 'relative', paddingBottom: r(8) }}>
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: r(timelineLineLeftPx),
              top: r(22),
              bottom: r(18),
              width: 0,
              transform: 'translateX(-50%)',
              borderLeft: `${r(2)} dashed rgba(249, 109, 1, 0.72)`,
              pointerEvents: 'none',
            }}
          />
          {rows.map((row, idx) => (
            <div
              key={row.year}
              className="grid items-start"
              style={{
                gridTemplateColumns: `${r(COL_YEAR)} ${r(COL_TIMELINE)} minmax(0, 1fr)`,
                columnGap: r(GAP_TIMELINE),
                marginBottom: idx === rows.length - 1 ? 0 : r(28),
              }}
            >
              <p
                className="m-0 min-w-0 shrink-0 font-semibold whitespace-nowrap text-right text-[#f96d01]"
                style={{ paddingRight: r(8), fontSize: r(BODY_FONT_PX), lineHeight: BODY_LINE_HEIGHT }}
              >
                {row.year}
              </p>
              <div
                className="relative flex shrink-0 justify-center"
                style={{ width: r(COL_TIMELINE), paddingTop: r(timelinePadTopPx) }}
              >
                <div style={{ width: r(DOT_OUTER_PX), height: r(DOT_OUTER_PX) }}>
                  <TimelineNodeFigma />
                </div>
              </div>
              <p
                className="m-0 min-w-0 text-black"
                style={{
                  paddingLeft: r(20),
                  fontSize: r(BODY_FONT_PX),
                  lineHeight: BODY_LINE_HEIGHT,
                  textAlign: 'justify',
                  width: r(400),
                }}
              >
                {row.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
    </PageWithFooter>
  )
}

export default NewsDetailPage1
