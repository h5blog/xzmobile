import { rem750 as r } from '../lib/rem750'

const rows: [string, string, string, string][] = [
  [
    '2022',
    '《加快电力装备绿色低碳创新发展行动计划的通知》',
    '加快三代核电标准化、谱系化发展，持续推进钠冷快堆、高温气冷堆、铅铋快堆等四代核电堆型的研发和应用。加快可控核聚变等前沿颠覆性技术研究。',
    '工信部等五部门',
  ],
  ['2022', '《“十四五”现代能源体系规划》', '支持受控核聚变的前期研发，积极开展国际合作。', '国家发改委、国家能源局'],
  ['2023', '国资委实施未来产业启航行动', '明确可控核聚变领域为未来能源的唯一方向。', '国资委'],
  ['2024', '《关于推动未来产业创新发展的实施意见》', '聚焦核能、核聚变等重点领域，打造未来能源装备体系。', '工信部等七部门'],
  ['2025', '《中华人民共和国原子能法》', '原子能领域的综合性、基础性法律。', '全国人大常委会'],
]

function NewsDetailPage2() {
  return (
    <main className="w-full bg-white" style={{ paddingBottom: r(48) }}>
      <section className="relative w-full" style={{ height: r(178) }}>
        <img src="/news-detail-hero.png" alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f96d01] via-[rgba(249,109,1,0.53)] to-transparent" />
        
      </section>

      <section style={{ padding: `${r(28)} ${r(24)} 0` }}>
        <h1 className="m-0 text-black" style={{ fontSize: r(52), lineHeight: 'normal', fontWeight: 600 }}>
          中国核聚变相关政策时间线表格
        </h1>
        <div className="w-full" style={{ marginTop: r(26), height: r(2), backgroundColor: '#d59652' }} />

        <section
          className="overflow-hidden"
          style={{ marginTop: r(14), border: `${r(1)} solid #d1d1d1`, backgroundColor: '#ffffff' }}
        >
          <div className="grid bg-[#e9762c] text-white" style={{ gridTemplateColumns: `${r(80)} ${r(195)} ${r(230)} ${r(173)}` }}>
            {['年份', '政策名字', '相关内容', '发布部门'].map((head) => (
              <p
                key={head}
                className="m-0 text-center font-semibold whitespace-pre-line"
                style={{ fontSize: r(24), lineHeight: r(30), padding: `${r(30)} ${r(8)} ${r(26)}` }}
              >
                {head}
              </p>
            ))}
          </div>
          {rows.map((row, idx) => (
            <div key={`${row[0]}-${idx}`}>
              {idx > 0 && <div style={{ marginInline: r(10), height: r(1), backgroundColor: '#d1d1d1' }} />}
              <div className="grid" style={{ gridTemplateColumns: `${r(80)} ${r(195)} ${r(230)} ${r(173)}` }}>
                <p
                  className="m-0 grid place-items-center font-semibold text-[#e2843c]"
                  style={{
                    fontSize: r(24),
                    lineHeight: r(30),
                    padding: `${r(20)} ${r(8)}`,
                    writingMode: 'vertical-rl',
                    textOrientation: 'upright',
                    letterSpacing: r(6),
                  }}
                >
                  {row[0]}
                </p>
                <p
                  className="m-0 text-black"
                  style={{ fontSize: r(22), lineHeight: r(34), padding: `${r(20)} ${r(12)} ${r(18)}`, borderLeft: `${r(1)} solid #d1d1d1` }}
                >
                  {row[1]}
                </p>
                <p
                  className="m-0 text-black"
                  style={{ fontSize: r(22), lineHeight: r(34), padding: `${r(20)} ${r(12)} ${r(18)}`, borderLeft: `${r(1)} solid #d1d1d1` }}
                >
                  {row[2]}
                </p>
                <p
                  className="m-0 text-black"
                  style={{ fontSize: r(22), lineHeight: r(34), padding: `${r(20)} ${r(12)} ${r(18)}`, borderLeft: `${r(1)} solid #d1d1d1` }}
                >
                  {row[3]}
                </p>
              </div>
            </div>
          ))}
        </section>
      </section>
    </main>
  )
}

export default NewsDetailPage2
