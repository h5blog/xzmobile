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
]

function NewsDetailPage1() {
  return (
    <main className="w-full bg-white" style={{ paddingBottom: r(48) }}>
      <section className="relative w-full" style={{ height: r(178) }}>
        <img src="/news-detail-hero.png" alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f96d01] via-[rgba(249,109,1,0.53)] to-transparent" />
        
      </section>

      <section style={{ padding: `${r(32)} ${r(44)} 0` }}>
        <h1 className="m-0 font-semibold text-black" style={{ fontSize: r(40), lineHeight: r(48) }}>
          全球各国核聚变战略部署
        </h1>
        <div className="w-full" style={{ marginTop: r(18), height: r(2), backgroundColor: '#f96d01' }} />
        <div style={{ marginTop: r(42), position: 'relative' }}>
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: r(152),
              top: r(20),
              bottom: r(20),
              width: r(1),
              borderLeft: `${r(1)} dashed #f09652`,
            }}
          />
          {rows.map((row) => (
            <div
              key={row.year}
              className="grid"
              style={{ gridTemplateColumns: `${r(120)} ${r(32)} 1fr`, columnGap: r(16), marginBottom: r(26) }}
            >
              <p className="m-0 whitespace-nowrap font-semibold text-[#f96d01]" style={{ fontSize: r(24), lineHeight: r(30) }}>
                {row.year}
              </p>
              <span className="relative block" style={{ width: r(32), height: r(32), marginTop: r(2) }}>
                <span
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    width: r(20),
                    height: r(20),
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(249,109,1,0.25)',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    width: r(12),
                    height: r(12),
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '50%',
                    backgroundColor: '#f96d01',
                  }}
                />
              </span>
              <p className="m-0 text-black" style={{ fontSize: r(26), lineHeight: r(36) }}>
                {row.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default NewsDetailPage1
