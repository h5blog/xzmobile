import { useState } from 'react'
import { figmaHome } from '../images/figmaHome'
import { rem750 as r } from '../lib/rem750'

const newsItems = [
  {
    title: '全球各国核聚变战略部署',
    date: '2026-01-01',
    desc: '2025・美国  美国能源部（DOE）为核聚变创新研究引擎（FIRE）合作组织提供 1.07 亿美元...',
  },
  {
    title: '中国核聚变相关政策时间线表格年份',
    date: '2026-01-01',
    desc: '2022《加快电力装备绿色低碳创新发展行动计划的通知》加快三代核电标准化、谱系化发展，持续推进钠冷快堆、高温气冷堆...',
  },
  {
    title: '8月27日：《关于推进 “人工智能 +” 能源高质量发展的实施意见》',
    date: '2026-01-01',
    desc: '01 国家战略\n国家发展改革委、国家能源局《关于推进 “人工智能 +” 能源高质展 ...',
  },
  {
    title: 'AI 赋能聚变已成全球共识',
    date: '2026-01-01',
    desc: 'Microsoft与 Helion 达成全球首个聚变电力采购协议（2028 年起购买 50 MW 电力），并利用 Azure 平台加速 AI 在聚变领域的应用...',
  },
]

function NewsPage() {
  const navigate = (path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path)
      window.dispatchEvent(new PopStateEvent('popstate'))
    }
  }
  const [activeTab, setActiveTab] = useState<'industry' | 'company'>('industry')
  const companyNews = {
    title: 'AI加速可控核聚变商业化，新烛时代完成6000万元天使轮融资',
    date: '2026-03-21',
    desc: '本轮融资由中科创星、鼎峰科创联合领投，水木清华校友基金跟投，资金将主要用于核心技术研发、联合验证、平台建设及关键人才引进等，全力推动可控核聚变向商业化加速迈进。',
  }

  return (
    <main className="w-full bg-[#fff]">
      <section className="relative w-full" style={{ height: r(178) }}>
        <img src={figmaHome.newsHeroBg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f96d01] via-[rgba(249,109,1,0.53)] to-transparent" />
        <div className="absolute text-white" style={{ left: r(119), top: r(44) }}>
          <p className="m-0 font-semibold" style={{ fontSize: r(40), lineHeight: 'normal' }}>
            NEWS
          </p>
          <div style={{ marginTop: r(10), width: r(280), height: r(1), backgroundColor: '#ffffff' }} />
          <p className="m-0 font-semibold" style={{ marginTop: r(8), fontSize: r(32), lineHeight: 'normal' }}>
            新闻中心
          </p>
        </div>
      </section>

      <section style={{ paddingTop: r(35) }}>
        <div className="grid grid-cols-2 text-center">
          <button type="button" className="bg-transparent" onClick={() => setActiveTab('industry')}>
            <p className="m-0 text-black" style={{ fontSize: r(36) }}>行业资讯</p>
            <div className={`mt-[0.1867rem] ${activeTab === 'industry' ? 'h-[0.1067rem] bg-[#f96d01]' : 'h-[0.0267rem] bg-[#d9d9d9]'}`} />
          </button>
          <button type="button" className="bg-transparent" onClick={() => setActiveTab('company')}>
            <p className="m-0 text-black" style={{ fontSize: r(36) }}>公司新闻</p>
            <div className={`mt-[0.1867rem] ${activeTab === 'company' ? 'h-[0.1067rem] bg-[#f96d01]' : 'h-[0.0267rem] bg-[#d9d9d9]'}`} />
          </button>
        </div>

        {activeTab === 'industry' ? (
          <div style={{ padding: `${r(25)} ${r(44)} ${r(56)}` }}>
            {newsItems.map((item, idx) => (
              <article
                key={item.title}
                style={{ marginBottom: idx === newsItems.length - 1 ? 0 : r(35), cursor: idx <= 3 ? 'pointer' : 'default' }}
                onClick={() => {
                  if (idx === 0) navigate('/news/1')
                  if (idx === 1) navigate('/news/2')
                  if (idx === 2) navigate('/news/3')
                  if (idx === 3) navigate('/news/4')
                }}
              >
                <h3 className="m-0 font-semibold text-[#f96d01]" style={{ fontSize: r(32), lineHeight: 'normal' }}>
                  {item.title}
                </h3>
                <p className="m-0 text-black" style={{ marginTop: r(18), fontSize: r(30), lineHeight: 'normal' }}>
                  {item.date}
                </p>
                <p
                  className="m-0 whitespace-pre-line text-black"
                  style={{
                    marginTop: r(12),
                    fontSize: r(30),
                    lineHeight: 'normal',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {item.desc}
                </p>
                {idx !== newsItems.length - 1 && (
                  <div
                    style={{
                      marginTop: r(18),
                      width: r(664),
                      maxWidth: '100%',
                      height: r(1),
                      backgroundColor: '#cfcfcf',
                    }}
                  />
                )}
              </article>
            ))}
          </div>
        ) : (
          <div style={{ padding: `${r(25)} ${r(44)} ${r(56)}` }}>
            <article style={{ cursor: 'pointer' }} onClick={() => navigate('/news/5')}>
              <h3 className="m-0 font-semibold text-[#f96d01]" style={{ fontSize: r(32), lineHeight: 'normal' }}>
                {companyNews.title}
              </h3>
              <p className="m-0 text-black" style={{ marginTop: r(18), fontSize: r(30), lineHeight: 'normal' }}>
                {companyNews.date}
              </p>
              <p
                className="m-0 whitespace-pre-line text-black"
                style={{
                  marginTop: r(12),
                  fontSize: r(30),
                  lineHeight: 'normal',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {companyNews.desc}
              </p>
            </article>
          </div>
        )}
      </section>
    </main>
  )
}

export default NewsPage
