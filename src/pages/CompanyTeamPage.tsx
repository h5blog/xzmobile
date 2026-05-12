import PageWithFooter from '../components/PageWithFooter'
import { rem750 as r } from '../lib/rem750'

import heroBannerPng from '../images/team-banner-bg.png'
import heroBannerWebp from '../images/team-banner-bg.webp'
import leader1Png from '../images/team-page-zhangwei.png'
import leader1Webp from '../images/team-page-zhangwei.webp'
import leader2Png from '../images/team-page-wangyue.png'
import leader2Webp from '../images/team-page-wangyue.webp'
import leader3Png from '../images/team-page-wuguo.png'
import leader3Webp from '../images/team-page-wuguo.webp'
import leader4Png from '../images/team-page-liutieyan.png'
import leader4Webp from '../images/team-page-liutieyan.webp'

const leaders = [
  {
    name: '张 伟',
    role: '首席执行官',
    avatarPng: leader1Png,
    avatarWebp: leader1Webp,
    bullets: ['清华大学工程物理系，拥有十余年跨国企业市场营销管理经验。', '近八年专注于科技成果转化与投融资领域，成功推动多项高新技术项目落地并实现资本对接。'],
  },
  {
    name: '汪 跃',
    role: '首席技术官',
    avatarPng: leader2Png,
    avatarWebp: leader2Webp,
    bullets: [
      '北京交通大学信息与计算科学本科，概率论与数理统计专业博士学位，博士生导师为马志明院士。',
      '主要从事人工智能、强化学习等方面研究工作，研究重点包括强化学习的基础理论，算法创新，以及在大模型和科学智能中的相关应用。',
      '曾任微软亚洲研究院科学智能中心高级研究员，现北京中关村学院研究员。',
    ],
  },
  {
    name: '吴 果',
    role: '首席运营官',
    avatarPng: leader3Png,
    avatarWebp: leader3Webp,
    bullets: ['本科毕业于英属哥伦比亚大学，清华大学硕博士经济学背景。', '在多年的创业实战历程中，充分将学术知识与实践紧密结合。深入参与公司战略规划，制定可落地的具体战略计划，不仅积累了丰富的商业战略，还有着企业管理经验。'],
  },
  {
    name: '刘铁岩',
    role: '首席科学顾问',
    avatarPng: leader4Png,
    avatarWebp: leader4Webp,
    bullets: [
      '刘铁岩，现任北京中关村学院院长，北京中关村学院党委书记，中关村人工智能研究院理事长。',
      '曾任微软亚洲研究院副院长、微软科学智能研究院首席科学家。国际电气与电子工程师学会会士、国际计算机学会会士、亚太人工智能学会会士。',
    ],
  },
] as const

function CompanyTeamPage() {

  return (
    <PageWithFooter>
    <main className="w-full bg-[#fff]">
      <section
        className="relative w-full overflow-hidden"
        style={{ height: r(178), minHeight: r(178) }}
      >
        <picture className="absolute inset-0 z-0 block h-full w-full">
          <source type="image/webp" srcSet={heroBannerWebp} />
          <img
            src={heroBannerPng}
            alt="创始团队横幅"
            className="h-full w-full object-cover"
            width={750}
            height={178}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </picture>
      </section>

      <section style={{ padding: `${r(40)} ${r(40)} ${r(72)}` }}>
        {leaders.map((leader, idx) => (
          <article key={leader.name} style={{ marginBottom: idx === leaders.length - 1 ? 0 : r(44) }}>
            <div className="mx-auto overflow-hidden" style={{ width: r(221), height: r(267) }}>
              <picture className="block h-full w-full">
                <source type="image/webp" srcSet={leader.avatarWebp} />
                <img
                  src={leader.avatarPng}
                  alt={leader.name}
                  className="h-full w-full object-cover"
                  width={221}
                  height={267}
                  loading="eager"
                  decoding="async"
                />
              </picture>
            </div>
            <div className="text-center" style={{ marginTop: r(20) }}>
              <p className="m-0 font-semibold text-[#121212]" style={{ fontSize: r(36), lineHeight: 1.6 }}>
                {leader.name}
              </p>
              <p className="m-0 font-semibold text-[#121212]" style={{ fontSize: r(36), lineHeight: 1.6 }}>
                {leader.role}
              </p>
            </div>
            <div className="mx-auto bg-gradient-to-r from-[#f96d01] to-[#f5f5f5]" style={{ marginTop: r(22), width: r(225), height: r(16) }} />
            <div style={{ marginTop: r(30) }}>
              {leader.bullets.map((line) => (
                <div key={line} className="flex items-start" style={{ gap: r(12), marginBottom: r(20) }}>
                  <span className="mt-[0.1067rem] block shrink-0 rounded-full bg-[#f96d01]" style={{ width: r(12), height: r(12),marginTop:r(13) }} />
                  <p className="m-0 text-black" style={{ fontSize: r(32), lineHeight: 1.6 ,textAlign: 'justify'}}>
                    {line}
                  </p>
                </div>
              ))}
            </div>
            {idx !== leaders.length - 1 && <div style={{ marginTop: r(22), width: r(667), height: r(1), background: '#818181' }} />}
          </article>
        ))}
      </section>
    </main>
    </PageWithFooter>
  )
}

export default CompanyTeamPage
