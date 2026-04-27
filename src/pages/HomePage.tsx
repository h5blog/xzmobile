import { figmaHome } from '../images/figmaHome'
import { rem750 as r } from '../lib/rem750'

const founders: { name: string; role: string; src: string; avatarW: number; avatarH: number }[] = [
  { name: '张  伟', role: '首席执行官', src: figmaHome.avatar1, avatarW: 250, avatarH: 250 },
  { name: '汪  跃', role: '首席技术官', src: figmaHome.avatar2, avatarW: 252, avatarH: 250 },
  { name: '吴  果', role: '首席运营官', src: figmaHome.avatar3, avatarW: 250, avatarH: 250 },
  { name: '刘铁岩', role: '首席科学顾问', src: figmaHome.avatar4, avatarW: 250, avatarH: 250 },
]

const resourceA = [
  { title: '技术创新与研发能力', desc: '获取顶尖的基础科学能力的加持，解决底层硬核问题。' },
  { title: '共享科研设施', desc: '使用清华大学的实验室、专用设备和软件。' },
  { title: '校友网络', desc: '接入庞大的清华校友网络，校友遍布各行各业，提供难以估量的帮助。' },
]

const resourceB = [
  {
    title: '链接顶尖人才库',
    desc: '可以接触到更侧重于应用和实践技能的人才，例如高级技工、职业工程师、一线产业专家等，满足产品开发、落地实施环节的需求。',
  },
  {
    title: '前沿技术触角',
    desc: '中关村学院作为许多 AI 前沿技术的发源地，团队能更早、更深入地了解这些技术和产业化机会。',
  },
  { title: '中和创业风险', desc: '共享高性能计算资源、实验室及联合研究中心等设施。' },
]

function Cta() {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center font-normal text-white"
      style={{
        width: r(173),
        height: r(56),
        borderRadius: r(19.5),
        backgroundColor: '#f96d01',
        fontSize: r(24),
        letterSpacing: r(5.52),
      }}
    >
      查看详情
    </button>
  )
}

function HomePage() {
  const resourceGradientByIndex = [
    'linear-gradient(118.332deg, rgb(255, 151, 71) 0.83427%, rgb(255, 187, 50) 99.166%)',
    'linear-gradient(118.210deg, rgb(255, 151, 71) 0.83427%, rgb(255, 187, 50) 99.166%)',
    'linear-gradient(118.271deg, rgb(255, 151, 71) 0.83427%, rgb(255, 187, 50) 99.166%)',
  ]

  return (
    <main>
      <div className="w-full">
        <img alt="Banner" className="block h-auto w-full object-contain" src={figmaHome.banner} />
      </div>

      <section
        className="w-full bg-cover bg-center bg-no-repeat text-center"
        style={{
          padding: `${r(54)} ${r(68)} ${r(40)}`,
          minHeight: r(550),
          backgroundImage: `url(${figmaHome.techBg})`,
        }}
      >
        <h1 className="font-medium" style={{ fontSize: r(32), lineHeight: 'normal', color: '#f96d01' }}>
          AI解决方案核心技术驱动力
        </h1>
        <p
          className="text-left"
          style={{
            marginTop: r(30),
            fontFamily: '"PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: r(32),
            lineHeight: 1.39,
            color: '#000',
          }}
        >
          强化学习、生成式模型、自进化智能体、算子学习等前沿技术为核心，构建&ldquo;物理 + 数据&rdquo;双轮驱动的技术体系，打造面向聚变装置的智能诊断、动态预测、实时控制与辅助设计能力，最终形成聚变电站的智能操作系统&mdash;&mdash;终极能源的智慧大脑。
        </p>
        <div className="flex justify-center" style={{ marginTop: r(30) }}>
          <Cta />
        </div>
      </section>

      <div
        id="company-team-section"
        className="w-full"
        style={{
          backgroundColor: '#252525',
          backgroundImage: 'url(/founder-team-bg.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: `${r(8)} ${r(16)} ${r(24)}`,
        }}
      >
        <h2 className="text-center font-medium" style={{ marginBottom: r(8), fontSize: r(32), color: '#f96d01' }}>
          创始团队
        </h2>
        <div
          className="grid w-full max-w-full"
          style={{
            gridTemplateColumns: `${r(250)} ${r(252)}`,
            columnGap: r(38),
            rowGap: r(20),
            justifyContent: 'center',
          }}
        >
          {founders.map((f) => (
            <div key={f.name} className="flex min-w-0 flex-col items-center" style={{ gap: r(8) }}>
              <div
                className="mx-auto w-full max-w-full shrink-0 overflow-hidden rounded-full"
                style={{ width: r(f.avatarW), height: r(f.avatarH) }}
              >
                <img className="h-full w-full object-cover" src={f.src} alt={f.name} />
              </div>
              <div
                className="w-full min-w-0 text-center whitespace-pre-wrap"
                style={{
                  fontFamily: '"PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif',
                  fontWeight: 500,
                  fontStyle: 'normal',
                  fontSize: r(30),
                  lineHeight: 'normal',
                  color: '#fff',
                }}
              >
                <p className="m-0 font-medium">{f.name}</p>
                <p className="m-0" style={{ color: '#d8d8d8' }}>
                  {f.role}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center" style={{ marginTop: r(24) }}>
          <Cta />
        </div>
      </div>

      <section
        className="w-full"
        style={{
          paddingTop: r(25),
          paddingLeft: r(43),
          paddingRight: r(43),
          paddingBottom: r(74),
          background: 'linear-gradient(254deg, #f96d01 34.5%, #ffb941 98.3%)',
        }}
      >
        <h2 className="text-center font-medium" style={{ fontSize: r(32), color: '#fff', marginBottom: r(16) }}>
          核心战略协作方
        </h2>
        <div className="grid w-full grid-cols-2" style={{ gap: r(16) }}>
          <div
            className="grid place-items-center"
            style={{
              borderRadius: r(23),
              backgroundColor: '#fff',
              boxShadow: '0 0.15rem 0.45rem rgba(255, 132, 0, 0.25)',
              minHeight: r(96),
              padding: r(8),
            }}
          >
            <div style={{ width: r(216), height: r(70), overflow: 'hidden' }}>
              <img
                src="/partner-tsinghua.png"
                alt="清华大学"
                className="h-full w-full object-contain"
                style={{ display: 'block' }}
              />
            </div>
          </div>
          <div
            className="grid place-items-center"
            style={{
              borderRadius: r(23),
              backgroundColor: '#fff',
              boxShadow: '0 0.15rem 0.45rem rgba(255, 132, 0, 0.25)',
              minHeight: r(96),
              padding: r(8),
            }}
          >
            <div style={{ width: r(267), height: r(78), overflow: 'hidden' }}>
              <img src="/partner-zgc-academy.png" alt="北京中关村学院" className="h-full w-full object-contain" style={{ display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      <div className="w-full" style={{ backgroundColor: '#252525', paddingBottom: r(40) }}>
        <h2 className="text-center font-medium" style={{ padding: `${r(40)} 0 0 0`, fontSize: r(32), color: '#f96d01' }}>
          数字化资源支撑矩阵
        </h2>
        <div className="mx-auto w-full" style={{ maxWidth: r(614) }}>
          <div className="w-full" style={{ paddingBottom: r(4) }}>
            
            {resourceA.map((it, idx) => (
              <div
                key={it.title}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: r(4),
                  width: '100%',
                  minHeight: [r(391), r(393), r(392)][idx] ?? r(391),
                  paddingTop: [r(33), r(38), r(28)][idx] ?? r(16),
                  paddingLeft: [r(45), r(45), r(45)][idx] ?? r(16),
                  paddingRight: r(16),
                  paddingBottom: r(16),
                  background: resourceGradientByIndex[idx] ?? resourceGradientByIndex[0],
                  color: '#8d3e00',
                  marginTop: r(20),
                }}
              >
                <h3
                  className="m-0"
                  style={{
                    fontFamily: '"PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    fontSize: r(36),
                    lineHeight: 'normal',
                    color: '#8d3e00',
                    maxWidth: idx === 0 ? r(340) : idx === 1 ? r(275) : idx === 2 ? r(216) : '100%',
                  }}
                >
                  {it.title}
                </h3>
                <p
                  className="m-0"
                  style={{
                    fontFamily: '"PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: r(32),
                    marginTop: [r(12), r(24), r(18)][idx] ?? r(4),
                    lineHeight: [1.3, 'normal', 1.3][idx] ?? 1.3,
                    color: '#8d3e00',
                    maxWidth: idx === 0 ? r(300) : idx === 1 ? r(305) : idx === 2 ? r(280) : '100%',
                  }}
                >
                  {it.desc}
                </p>
                {idx === 0 && (
                  <div
                    style={{
                      position: 'absolute',
                      width: r(210),
                      height: r(219),
                      right: r(8),
                      top: r(108),
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={figmaHome.resourceIcon1}
                      alt=""
                      style={{
                        position: 'absolute',
                        width: '120.34%',
                        height: '117.03%',
                        left: '-10.17%',
                        top: '-9.89%',
                        maxWidth: 'none',
                      }}
                    />
                  </div>
                )}
                {idx === 1 && (
                  <div
                    style={{
                      position: 'absolute',
                      width: r(221),
                      height: r(232),
                      right: r(18),
                      top: r(78),
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={figmaHome.resourceIcon2}
                      alt=""
                      style={{
                        position: 'absolute',
                        width: '117.32%',
                        height: '111.7%',
                        left: '-7.82%',
                        top: '-4.79%',
                        maxWidth: 'none',
                      }}
                    />
                  </div>
                )}
                {idx === 2 && (
                  <div
                    style={{
                      position: 'absolute',
                      width: r(218),
                      height: r(213),
                      right: r(18),
                      top: r(88),
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={figmaHome.resourceIcon3}
                      alt=""
                      style={{
                        position: 'absolute',
                        width: '119.89%',
                        height: '122.6%',
                        left: '-8.84%',
                        top: '-14.69%',
                        maxWidth: 'none',
                      }}
                    />
                  </div>
                )}
              </div>
            ))}

            
            {resourceB.map((it, idx) => (
              <div
                key={it.title}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: r(4),
                  minHeight: [r(391), r(393), r(392)][idx] ?? r(391),
                  paddingTop: [r(33), r(28), r(34)][idx] ?? r(16),
                  paddingLeft: [r(45), r(45), r(45)][idx] ?? r(16),
                  paddingRight: r(16),
                  paddingBottom: r(16),
                  background: 'linear-gradient(118.3deg, rgb(255, 151, 71) 0.8%, rgb(255, 187, 50) 99.2%)',
                  color: '#8d3e00',
                  marginTop: r(20),
                }}
              >
                <h3
                  className="m-0"
                  style={{
                    fontFamily: '"PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    fontSize: r(36),
                    lineHeight: 'normal',
                    color: '#8d3e00',
                    maxWidth: idx === 0 ? r(387) : idx === 1 ? r(388) : idx === 2 ? r(292) : '100%',
                  }}
                >
                  {it.title}
                </h3>
                <p
                  className="m-0"
                  style={{
                    fontFamily: '"PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: r(32),
                    marginTop: [r(12), r(18), r(18)][idx] ?? r(4),
                    lineHeight: 'normal',
                    color: '#8d3e00',
                    maxWidth: idx === 0 ? r(327) : idx === 1 ? r(292) : idx === 2 ? r(263) : '100%',
                  }}
                >
                  {it.desc}
                </p>
                {idx === 0 && (
                  <div
                    style={{
                      position: 'absolute',
                      width: r(212),
                      height: r(196),
                      right: r(16),
                      top: r(110),
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={figmaHome.resourceIcon4}
                      alt=""
                      style={{
                        position: 'absolute',
                        width: '118.66%',
                        height: '128.5%',
                        left: '-9.57%',
                        top: '-20.21%',
                        maxWidth: 'none',
                      }}
                    />
                  </div>
                )}
                {idx === 1 && (
                  <div
                    style={{
                      position: 'absolute',
                      width: r(256),
                      height: r(256),
                      right: r(18),
                      top: r(60),
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={figmaHome.resourceIcon5}
                      alt=""
                      style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        left: 0,
                        top: 0,
                        maxWidth: 'none',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                )}
                {idx === 2 && (
                  <div
                    style={{
                      position: 'absolute',
                      width: r(214),
                      height: r(217),
                      right: r(16),
                      top: r(84),
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={figmaHome.resourceIcon6}
                      alt=""
                      style={{
                        position: 'absolute',
                        width: '118.09%',
                        height: '116.23%',
                        left: '-8.51%',
                        top: '-7.85%',
                        maxWidth: 'none',
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section>
        <img className="block w-full" style={{ minHeight: r(120) }} src={figmaHome.map} alt="地图" />
      </section>
    </main>
  )
}

export default HomePage
