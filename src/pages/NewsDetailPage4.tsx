import { rem750 as r } from '../lib/rem750'

const companies: { name: string; logoSrc: string; desc: string; dark?: boolean; fit?: 'contain' | 'cover' }[] = [
  {
    name: 'Microsoft',
    logoSrc: '/news-logos/logo-1-microsoft.png',
    desc: '与 Helion 达成全球首个聚变电力采购协议（2028 年起购买 50 MW 电力），并利用 Azure 平台加速 AI 在聚变领域的应用。',
    fit: 'contain',
  },
  {
    name: 'Google DeepMind',
    logoSrc: '/news-logos/logo-2-google.png',
    desc: '在聚变控制领域取得突破，并与 TAE 深度合作，帮助提升等离子体寿命。',
    fit: 'contain',
  },
  {
    name: 'NVIDIA',
    logoSrc: '/news-logos/logo-3.png',
    desc: '与 UKAEA 合作，使用 Omniverse 平台为 ITER 和 STEP 构建数字孪生，用于协同设计和 AI 仿真。',
    fit: 'contain',
    dark: true,
  },
  {
    name: 'General Atomics',
    logoSrc: '/news-logos/logo-4.png',
    desc: 'DIII-D 团队实现高约束运行，持续推动聚变研究前沿。',
    fit: 'contain',
    dark: true,
  },
  {
    name: 'Tokamak Energy',
    logoSrc: '/news-logos/logo-5-next-step-fusion.png',
    desc: '通过建模、数字孪生与 AI/ML 控制，加速聚变堆设计与运行。',
    fit: 'contain',
  },
  {
    name: 'Fusion AI Labs',
    logoSrc: '/news-logos/logo-6-sophelio.png',
    desc: '为聚变行业提供定制化 AI/ML 与 MLOps 服务，解决物理预测和工程挑战。',
    dark: true,
    fit: 'contain',
  },
]

const references: [string, string, string][] = [
  ['《Science》', '2025', '利用物理信息 + AI 训练生成模型，成功预测国家点火装置实验。'],
  ['《Nature》', '2023', '通过深度强化学习主动抑制等离子体撕裂模不稳定性。'],
  ['《Nature Communications》', '2023', '实现无边缘局域模（ELMs）的高能运行。'],
  ['《Nature Physics》', '2022', 'AI 可提前预测破裂，为规避系统提供反应时间。'],
  ['《Nature》', '2022', 'DeepMind 实现多种等离子体形状的准确控制。'],
  ['《Nature》', '2019', '在 AI 驱动的聚变等离子体控制方面实现关键突破。'],
]

function NewsDetailPage4() {
  return (
    <main className="w-full bg-white" style={{ paddingBottom: r(48) }}>
      <section className="relative w-full" style={{ height: r(178) }}>
        <img src="/news-detail-hero.png" alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f96d01] via-[rgba(249,109,1,0.53)] to-transparent" />
      </section>

      <section style={{ padding: `${r(24)} ${r(24)} 0` }}>
        <h1 className="m-0 font-semibold text-black" style={{ fontSize: r(36), lineHeight: r(48) }}>
          AI 赋能聚变已成全球共识
        </h1>
        <div className="w-full" style={{ marginTop: r(14), height: r(2), backgroundColor: '#f96d01' }} />

        <section style={{ marginTop: r(22), paddingInline: r(12) }}>
          {companies.map((item, idx) => (
            <div key={item.name} style={{ marginBottom: idx === companies.length - 1 ? 0 : r(34) }}>
              <div
                className="mx-auto grid place-items-center"
                style={{
                  width: r(204),
                  height: r(66),
                }}
              >
                <img
                  src={item.logoSrc}
                  alt={item.name}
                  className="block h-full w-full"
                  style={{
                    objectFit: item.fit ?? 'contain',
                    padding: r(3),
                  }}
                />
              </div>
              <p className="m-0 text-black" style={{ marginTop: r(14), fontSize: r(22), lineHeight: r(30) }}>
                {item.desc}
              </p>
            </div>
          ))}
        </section>

        <div style={{ marginTop: r(22), height: r(1), backgroundColor: '#dfdfdf' }} />
        

        <section style={{ marginTop: r(34), position: 'relative', paddingBottom: r(6) }}>
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: r(248),
              top: r(18),
              bottom: r(16),
              width: r(1),
              borderLeft: `${r(1)} dashed rgba(249,109,1,0.55)`,
            }}
          />
          {references.map(([journal, year, body]) => (
            <div
              key={`${journal}-${year}`}
              className="grid"
              style={{ gridTemplateColumns: `${r(220)} ${r(32)} 1fr`, columnGap: r(12), marginBottom: r(18) }}
            >
              <p
                className="m-0 text-right font-semibold text-[#f96d01]"
                style={{ fontSize: r(24), lineHeight: r(30), whiteSpace: 'pre-line' }}
              >
                {`${journal}\n${year}`}
              </p>
              <span className="relative block" style={{ width: r(32), height: r(32), marginTop: r(2) }}>
                <span style={{ position: 'absolute', left: '50%', top: '50%', width: r(20), height: r(20), transform: 'translate(-50%, -50%)', borderRadius: '50%', backgroundColor: 'rgba(249,109,1,0.2)' }} />
                <span style={{ position: 'absolute', left: '50%', top: '50%', width: r(12), height: r(12), transform: 'translate(-50%, -50%)', borderRadius: '50%', backgroundColor: '#f96d01' }} />
              </span>
              <p className="m-0 text-black" style={{ fontSize: r(22), lineHeight: r(34) }}>
                {body}
              </p>
            </div>
          ))}
        </section>
      </section>
    </main>
  )
}

export default NewsDetailPage4
