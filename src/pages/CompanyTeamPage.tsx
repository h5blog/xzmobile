import { rem750 as r } from '../lib/rem750'

const heroBg = 'http://localhost:3845/assets/b710a75069f212d1b9e7b2bc0a9b30f38815bf23.png'
const heroLine = 'http://localhost:3845/assets/af3fccf064f7c915866cc787dd80c95a7a10c3ff.svg'
const leader1 = 'http://localhost:3845/assets/227f73a3cc1a4c2318cffbed75eb840bfb4fbbbf.png'
const leader2 = 'http://localhost:3845/assets/22964a7bd1eb8db87d8cc16204d9cc83b669ca0e.png'
const leader3 = 'http://localhost:3845/assets/2e568d72ddd96cf2e8334ac584bcc4cdae167f76.png'
const leader4 = 'http://localhost:3845/assets/88bf0dafa2b1202e96fdfbeb58bb428c90ce1219.png'

const leaders = [
  {
    name: '张 伟',
    role: '首席执行官',
    avatar: leader1,
    bullets: ['清华大学工程物理系，拥有十余年跨国企业市场营销管理经验。', '近八年专注于科技成果转化与投融资领域，成功推动多项高新技术项目落地并实现资本对接。'],
  },
  {
    name: '汪 跃',
    role: '首席技术官',
    avatar: leader2,
    bullets: [
      '北京交通大学信息与计算科学本科，概率论与数理统计专业博士学位，博士生导师为马志明院士。',
      '主要从事人工智能、强化学习等方面研究工作，研究重点包括强化学习的基础理论，算法创新，以及在大模型和科学智能中的相关应用。',
      '曾任微软亚洲研究院科学智能中心高级研究员，现北京中关村学院研究员。',
    ],
  },
  {
    name: '吴 果',
    role: '首席运营官',
    avatar: leader3,
    bullets: ['本科毕业于英属哥伦比亚大学，清华大学硕博士经济学背景。', '在多年的创业实战历程中，充分将学术知识与实践紧密结合。深入参与公司战略规划，制定可落地的具体战略计划，不仅积累了丰富的商业战略，还有着企业管理经验。'],
  },
  {
    name: '刘铁岩',
    role: '首席科学顾问',
    avatar: leader4,
    bullets: [
      '刘铁岩，现任北京中关村学院院长，北京中关村学院党委书记，中关村人工智能研究院理事长。',
      '曾任微软亚洲研究院副院长、微软科学智能研究院首席科学家。国际电气与电子工程师学会会士、国际计算机学会会士、亚太人工智能学会会士。',
    ],
  },
] as const

function CompanyTeamPage() {
  const navigateTo = (path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path)
      window.dispatchEvent(new PopStateEvent('popstate'))
    }
  }

  return (
    <main className="w-full bg-[#f1f1f1]">
      <section className="relative w-full" style={{ height: r(178) }}>
        <img src={heroBg} alt="创始团队横幅" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(249,109,1,0.9)] via-[rgba(249,109,1,0.53)] to-transparent" />
        <p className="absolute m-0 text-white font-semibold" style={{ left: r(120), top: r(46), fontSize: r(40), lineHeight: 'normal' }}>
          FOUNDING TEAM
        </p>
        <div className="absolute" style={{ left: r(117), top: r(102), width: r(280), height: r(1) }}>
          <img src={heroLine} alt="" className="h-full w-full object-fill" />
        </div>
        <p className="absolute m-0 text-white font-semibold" style={{ left: r(117), top: r(102), fontSize: r(32), lineHeight: 'normal' }}>
          创始团队
        </p>
        <div className="absolute bg-white/70" style={{ right: 0, top: 0, width: r(156), height: r(132) }}>
          <button
            type="button"
            className="absolute m-0 bg-transparent p-0 text-left text-[#f96d01]"
            style={{ left: r(30), top: r(11), fontSize: r(24), lineHeight: 'normal' }}
            onClick={() => navigateTo('/team')}
          >
            公司团队
          </button>
          <div className="absolute bg-[#f96d01]" style={{ left: 0, top: r(62), width: r(156), height: r(8) }} />
          <button
            type="button"
            className="absolute m-0 bg-transparent p-0 text-left text-black"
            style={{ left: r(30), top: r(80), fontSize: r(24), lineHeight: 'normal' }}
            onClick={() => navigateTo('/join-us')}
          >
            加入我们
          </button>
        </div>
      </section>

      <section style={{ padding: `${r(40)} ${r(38)} ${r(72)}` }}>
        {leaders.map((leader, idx) => (
          <article key={leader.name} style={{ marginBottom: idx === leaders.length - 1 ? 0 : r(44) }}>
            <div className="mx-auto" style={{ width: r(221), height: r(268) }}>
              <img src={leader.avatar} alt={leader.name} className="h-full w-full object-cover" />
            </div>
            <div className="text-center" style={{ marginTop: r(20) }}>
              <p className="m-0 font-semibold text-[#121212]" style={{ fontSize: r(36), lineHeight: 1.416 }}>
                {leader.name}
              </p>
              <p className="m-0 font-semibold text-[#121212]" style={{ fontSize: r(36), lineHeight: 1.416 }}>
                {leader.role}
              </p>
            </div>
            <div className="mx-auto bg-gradient-to-r from-[#f96d01] to-[#f5f5f5]" style={{ marginTop: r(22), width: r(225), height: r(16) }} />
            <div style={{ marginTop: r(30) }}>
              {leader.bullets.map((line) => (
                <div key={line} className="flex items-start" style={{ gap: r(12), marginBottom: r(20) }}>
                  <span className="mt-[0.1067rem] block shrink-0 rounded-full bg-[#f96d01]" style={{ width: r(12), height: r(12) }} />
                  <p className="m-0 text-black" style={{ fontSize: r(32), lineHeight: 'normal' }}>
                    {line}
                  </p>
                </div>
              ))}
            </div>
            {idx !== leaders.length - 1 && <div style={{ marginTop: r(22), width: r(667), height: r(1), background: '#000000' }} />}
          </article>
        ))}
      </section>
    </main>
  )
}

export default CompanyTeamPage
