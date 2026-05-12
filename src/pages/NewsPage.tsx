import { useState } from 'react'
import NewsBannerHero from '../components/NewsBannerHero'
import PageWithFooter from '../components/PageWithFooter'
import newsIcon1Jpg from '../images/news-icon1.jpg'
import newsIcon1148 from '../images/news-icon1-148.webp'
import newsIcon1Webp from '../images/news-icon1.webp'
import newsIcon2Jpg from '../images/news-icon2.jpg'
import newsIcon2148 from '../images/news-icon2-148.webp'
import newsIcon2Webp from '../images/news-icon2.webp'
import newsIcon3Jpg from '../images/news-icon3.jpg'
import newsIcon3148 from '../images/news-icon3-148.webp'
import newsIcon3Webp from '../images/news-icon3.webp'
import newsIcon4Jpg from '../images/news-icon4.jpg'
import newsIcon4148 from '../images/news-icon4-148.webp'
import newsIcon4Webp from '../images/news-icon4.webp'
import newsIcon5Jpg from '../images/news-icon5.jpg'
import newsIcon5148 from '../images/news-icon5-148.webp'
import newsIcon5Webp from '../images/news-icon5.webp'
import { setHashFromRoutePath } from '../lib/hashRoute'
import { rem750 as r } from '../lib/rem750'

const NEWS_ICON_ASSETS = [
  { jpg: newsIcon1Jpg, webp148: newsIcon1148, webp296: newsIcon1Webp },
  { jpg: newsIcon2Jpg, webp148: newsIcon2148, webp296: newsIcon2Webp },
  { jpg: newsIcon3Jpg, webp148: newsIcon3148, webp296: newsIcon3Webp },
  { jpg: newsIcon4Jpg, webp148: newsIcon4148, webp296: newsIcon4Webp },
  { jpg: newsIcon5Jpg, webp148: newsIcon5148, webp296: newsIcon5Webp },
] as const

function NewsListIcon({ iconIndex }: { iconIndex: number }) {
  const a = NEWS_ICON_ASSETS[iconIndex]
  if (!a) return null
  return (
    <picture>
      <source type="image/webp" srcSet={`${a.webp148} 148w, ${a.webp296} 296w`} sizes="148px" />
      <img
        src={a.jpg}
        alt=""
        width={296}
        height={269}
        className="block"
        style={{ width: r(148), height: r(135), objectFit: 'contain' }}
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
    </picture>
  )
}

const newsItems = [
  {
    title: '全球各国核聚变战略部署',
    date: '2026-01-01',
    desc: '2025・美国  美国能源部（DOE）为核聚变创新研究引擎（FIRE）合作组织提供 1.07 亿美元，用于支持聚变能源科学、技术、工程与商业化协同创新。',
  },
  {
    title: '中国核聚变相关政策时间线表格年份',
    date: '2026-01-01',
    desc: '2022《加快电力装备绿色低碳创新发展行动计划的通知》加快三代核电标准化、谱系化发展，持续推进钠冷快堆、高温气冷堆、铅铋快堆等四代核电堆型的研发和应用。加快可控核聚变等前沿颠覆性技术研究。',
  },
  {
    title: '8月27日：《关于推进 “人工智能 +” 能源高质量发展的实施意见》',
    date: '2026-01-01',
    desc: '01 国家战略 国家发展改革委、国家能源局《关于推进“人工智能 +”能源高质量发展的实施意见》',
  },
  {
    title: 'AI 赋能聚变已成全球共识',
    date: '2026-01-01',
    desc: 'Microsoft与 Helion 达成全球首个聚变电力采购协议（2028 年起购买 50 MW 电力），并利用 Azure 平台加速 AI 在聚变领域的应用。',
  },
]

function NewsPage() {
  const navigate = (path: string) => {
    setHashFromRoutePath(path)
  }
  const [activeTab, setActiveTab] = useState<'industry' | 'company'>('industry')
  const companyNews = {
    title: 'AI加速可控核聚变商业化，新烛时代完成6000万元天使轮融资',
    date: '2026-03-21',
    desc: '本轮融资由中科创星、鼎峰科创联合领投，水木清华校友基金跟投，资金将主要用于核心技术研发、联合验证、平台建设及关键人才引进等，全力推动可控核聚变向商业化加速迈进。',
  }

  return (
    <PageWithFooter>
    <main className="w-full bg-[#fff]">
      <NewsBannerHero />

      <section style={{ paddingTop: r(35) }}>
        <div>
          <div className="grid grid-cols-2 text-center">
            <button type="button" className="bg-transparent" onClick={() => setActiveTab('industry')}>
              <p
                className={`m-0 transition-[color,font-weight] duration-300 ease-out motion-reduce:transition-none ${
                  activeTab === 'industry' ? 'font-semibold text-[#f96d01]' : 'font-normal text-black'
                }`}
                style={{ fontSize: r(36) }}
              >
                行业资讯
              </p>
            </button>
            <button type="button" className="bg-transparent" onClick={() => setActiveTab('company')}>
              <p
                className={`m-0 transition-[color,font-weight] duration-300 ease-out motion-reduce:transition-none ${
                  activeTab === 'company' ? 'font-semibold text-[#f96d01]' : 'font-normal text-black'
                }`}
                style={{ fontSize: r(36) }}
              >
                公司新闻
              </p>
            </button>
          </div>
          <div className="relative mt-[0.1867rem]" style={{ height: '0.0533rem' }}>
            <div
              className="pointer-events-none absolute bottom-0 left-0 right-0 bg-[#d9d9d9]"
              style={{ height: '0.0267rem' }}
            />
            <div
              className="pointer-events-none absolute bottom-0 left-0 w-1/2 bg-[#f96d01] transition-transform duration-300 ease-out motion-reduce:transition-none"
              style={{
                height: '0.0533rem',
                transform: activeTab === 'industry' ? 'translateX(0)' : 'translateX(100%)',
              }}
            />
          </div>
        </div>

        <div style={{ padding: `${r(25)} ${r(44)} ${r(56)}` }}>
          {activeTab === 'industry' ? (
            <>
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
                  {/* 稿：上标题，下为左图 + 右（日期 + 摘要） */}
                  <h3 className="m-0 max-w-full font-semibold text-[#f96d01]" style={{ fontSize: r(32), lineHeight: 1.6 }}>
                    {item.title}
                  </h3>
                  <div className="flex" style={{ marginTop: r(18), gap: r(22), alignItems: 'flex-start' }}>
                    <div className="shrink-0" style={{ width: r(148), height: r(135) }}>
                      <NewsListIcon iconIndex={idx} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="m-0 text-black" style={{ fontSize: r(30), lineHeight: 1 }}>
                        {item.date}
                      </p>
                      <p
                        className="m-0 whitespace-pre-line text-black"
                        style={{
                          marginTop: r(12),
                          fontSize: r(30),
                          lineHeight: 1.6,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
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
            </>
          ) : (
            <article style={{ cursor: 'pointer' }} onClick={() => navigate('/news/5')}>
              <h3 className="m-0 max-w-full font-semibold text-[#f96d01]" style={{ fontSize: r(32), lineHeight: 1.6 }}>
                {companyNews.title}
              </h3>
              <div className="flex" style={{ marginTop: r(18), gap: r(22), alignItems: 'flex-start' }}>
                <div className="shrink-0" style={{ width: r(148), height: r(135) }}>
                  <NewsListIcon iconIndex={4} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="m-0 text-black" style={{ fontSize: r(30), lineHeight: 1.6 }}>
                    {companyNews.date}
                  </p>
                  <p
                    className="m-0 whitespace-pre-line text-black"
                    style={{
                      marginTop: r(12),
                      fontSize: r(30),
                      lineHeight: 1.6,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {companyNews.desc}
                  </p>
                </div>
              </div>
            </article>
          )}
        </div>
      </section>
    </main>
    </PageWithFooter>
  )
}

export default NewsPage
