import NewsDetailBannerHero from '../components/NewsDetailBannerHero'
import PageWithFooter from '../components/PageWithFooter'
import { rem750 as r } from '../lib/rem750'
const items: [string, string, string][] = [
  ['01', '国家战略', '国家发展改革委、国家能源局《关于推进“人工智能 +”能源高质量发展的实施意见》。'],
  ['02', '目标导向明确', '《实施意见》指出，要加快“人工智能 + 核电”应用场景赋能。'],
  ['03', '典型应用', '明确提到，可控核聚变智能控制成为“人工智能 + 核电”典型应用场景之一。'],
  ['04', '明确场景 1', '开展核工业特种运维机器人技术攻关，持续推动核电系统自动启停等技术升级演进。'],
  ['05', '明确场景 2', '探索人工智能技术助力离子体预测控制、可控核聚变等技术路径，推动核电行业向智能管控新模式转型。'],
]

function NewsDetailPage3() {
  return (
    <PageWithFooter>
    <main className="w-full bg-white" style={{ paddingBottom: r(48) }}>
      <NewsDetailBannerHero />

      <section style={{ padding: `${r(32)} ${r(44)} 0` }}>
        <h1 className="m-0 font-semibold text-black" style={{ fontSize: r(32), lineHeight: 1.6,paddingLeft: r(15) ,paddingRight: r(15)  }}>
          8月27日：《关于推进“人工智能 +”能源高质量发展的实施意见》
        </h1>
        <div className="w-full" style={{ marginTop: r(16), height: r(2), backgroundColor: '#f96d01' }} />


        <section style={{ marginTop: r(30), display: 'grid', rowGap: r(16) }}>
          {items.map((item) => (
            <div key={item[0]} className="grid items-start" style={{ gridTemplateColumns: `${r(57)} 1fr`, columnGap: r(12) }}>
              <div
                className="grid place-items-center bg-[#f96d01] text-white"
                style={{ width: r(57), height: r(57), fontSize: r(32), fontWeight: 600, lineHeight: 1.6 }}
              >
                {item[0]}
              </div>
              <div style={{ paddingTop: r(4) }}>
                <p className="m-0 font-semibold text-black" style={{ fontSize: r(32), lineHeight: 1,marginBottom: r(10) }}>
                  {item[1]}
                </p>
                <p className="m-0 text-black" style={{ fontSize: r(32), lineHeight: 1.6,textAlign: 'justify' }}>
                  {item[2]}
                </p>
              </div>
            </div>
          ))}
        </section>
      </section>
    </main>
    </PageWithFooter>
  )
}

export default NewsDetailPage3
