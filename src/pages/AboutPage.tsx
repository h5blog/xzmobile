import { rem750 as r } from '../lib/rem750'

const heroBg = '/about-hero.png'
const heroDot = 'http://localhost:3845/assets/868fc0bbed07ed994ba7aac7f8403a5dcf0b03ae.svg'
const aboutImage1 = '/bangong1.png'
const aboutImage2 = '/bangong2.png'
const xinzhu = '/about-banner-logo.png'
const routeIcon = '/rute.png'
const positionIcon = '/position.png'

export default function AboutPage() {
  return (
    <main className="w-full bg-[#fff]">
      <section className="relative w-full" style={{ height: r(432) }}>
        <img src={heroBg} alt="关于我们横幅" className="h-full w-full object-cover" />
        <p className="absolute m-0 text-white" style={{ left: r(143), top: r(286), fontSize: r(36), fontWeight: 600, letterSpacing: r(2.88) }}>
          关 于 我 们....
        </p>
        <div className="absolute bg-[#f96d01]" style={{ left: r(116), top: r(356), width: r(313), height: r(49) }} />
        <div className="absolute flex items-center text-white" style={{ left: r(142), top: r(331), gap: r(11), height: r(97) }}>
          <span style={{ fontSize: r(20), letterSpacing: r(1.6) }}>AI赋能聚变</span>
          <img src={heroDot} alt="" className="block" style={{ width: r(5), height: r(5) }} />
          <span style={{ fontSize: r(20), letterSpacing: r(1.6) }}>聚变驱动AI</span>
        </div>
      </section>

      <section className="relative" style={{ padding: `0 ${r(38)} ${r(72)}` }}>
        <p
          className="pointer-events-none absolute m-0 text-[#f96d01]"
          style={{ left: r(48), top: r(-56), fontSize: r(132), fontWeight: 700, lineHeight: 1, letterSpacing: r(-10), zIndex: 2 }}
        >
          ““
        </p>

        <div
          className="mx-auto bg-[#f96d01]"
          style={{ marginTop: r(-32), width: r(612), borderRadius: r(27), padding: `${r(30)} ${r(26)} ${r(34)}` }}
        >
          <div className="rounded-[0.4667rem] bg-white" style={{ padding: `${r(63)} ${r(38)} ${r(42)}` }}>
            <p className="m-0 text-[#f96d01]" style={{ fontSize: r(32), fontWeight: 600, lineHeight: r(40) }}>
              新烛时代 (XinZhuAI)
            </p>
            <p className="m-0 text-black" style={{ fontSize: r(32), lineHeight: r(40), marginTop: r(8), letterSpacing: r(2.56) }}>
              作为国内AI赋能可控核聚变的引领者，通过深度融合物理机理与人工智能技术，致力于打造服务全球聚变能源产业的通用“聚变智能体”。我们为全球聚变研究机构及商业公司提供涵盖设计、模拟到运维控制的全栈式AI解决方案，推动聚变研发从传统的“经验试错”向“智能预测与主动控制”变革，加速全人类迈向聚变能源新时代。
            </p>
          </div>
          <img src={xinzhu} alt="" className="mx-auto block object-contain" style={{ marginTop: r(28), width: r(167), height: r(176) }} />
        </div>
        <div className="mx-auto rounded-[0.36rem] text-[#f96d01] text-center" style={{ width: r(612), marginTop: r(30), padding: `${r(76)} ${r(42)} ${r(36)}` }}>
          <img src={routeIcon} alt="" className="mx-auto block" style={{ width: r(128), height: r(118) }} />
          <p className="m-0 font-semibold" style={{ marginTop: r(18), fontSize: r(32), lineHeight: 'normal', letterSpacing: r(2.56) }}>
            我们的路线
          </p>
          <p className="m-0" style={{ marginTop: r(10), fontSize: r(32), lineHeight: 'normal', letterSpacing: r(2.56) }}>
            打造聚变的“智能操作系统”
          </p>
          <img src={positionIcon} alt="" className="mx-auto block" style={{ marginTop: r(68), width: r(114), height: r(110) }} />
          <p className="m-0 font-semibold" style={{ marginTop: r(28), fontSize: r(32), lineHeight: 'normal', letterSpacing: r(2.56) }}>
            新烛时代的定位
          </p>
          <p className="m-0" style={{ marginTop: r(10), fontSize: r(32), lineHeight: 'normal', letterSpacing: r(2.56) }}>
            我们不造硬件，我们打造驱动硬件的“智慧大脑”。
          </p>
        </div>

        <div style={{ marginTop: r(64), paddingInline: r(39) }}>
          <p className="m-0 text-black" style={{ fontSize: r(32), lineHeight: r(40), letterSpacing: r(2.56) }}>
            如果说全球聚变公司正在建造性能强大的“CPU”裸机，新烛时代要做的，就是为所有聚变装置打造一个可移植、可扩展、可进化的“智能操作系统”。
          </p>
          <p className="m-0 text-black" style={{ marginTop: r(26), fontSize: r(32), lineHeight: r(40), letterSpacing: r(2.56) }}>
            但这不仅仅是算法的堆砌，而是对物理世界的深度重构。
          </p>
          <p className="m-0 text-black" style={{ marginTop: r(26), fontSize: r(32), lineHeight: r(40), letterSpacing: r(2.56) }}>
            在底层架构上，我们集结了强化学习、生成式模型、智能体技术与算子学习等前沿AI战力，并引入不确定性估计来构筑安全边界。我们以
            <span className="font-semibold text-[#f96d01]">“工程痛点”为导向</span>，以
            <span className="font-semibold text-[#f96d01]">“物理先验”为基石</span>，构建起一个
            <span className="font-semibold text-[#f96d01]">“物理+数据”双轮驱动的强大内核</span>。
          </p>
          <p className="m-0 text-black" style={{ marginTop: r(26), fontSize: r(32), lineHeight: r(40), letterSpacing: r(2.56) }}>
            我们将以标准化的智能服务赋能全行业，让每一台昂贵的聚变装置都能在我们的系统支持下高效运转。
          </p>
          <p className="m-0 text-black" style={{ marginTop: r(26), fontSize: r(32), lineHeight: r(40), letterSpacing: r(2.56) }}>
            而放眼终局，这套系统将成为未来聚变电厂真正的“灵魂”。
          </p>
          <p className="m-0 text-black" style={{ marginTop: r(26), fontSize: r(32), lineHeight: r(40), letterSpacing: r(2.56) }}>
            当万亿级的聚变能源市场开启，那些由钢筋混凝土与超导磁体构成的庞大躯壳，都需要一颗智慧的心脏来驾驭。
          </p>
        </div>

        <div style={{ marginTop: r(50), paddingInline: r(39) }}>
          <p className="m-0 font-semibold text-[#f96d01]" style={{ fontSize: r(40), letterSpacing: r(3.2) }}>
            我们的目标
          </p>
          <div style={{ marginTop: r(10), width: r(231), height: r(2), background: '#f96d01' }} />
          <p className="m-0 text-black" style={{ marginTop: r(24), fontSize: r(32), lineHeight: r(40), letterSpacing: r(2.56) }}>
            是让这套智能系统从实验室的辅助工具，进化为驱动聚变电厂硬件运行的神经中枢，在每一次能量的脉动中，贡献源自“新烛”的驱动力！
          </p>
        </div>

        <div style={{ marginTop: r(64), paddingInline: 0 }}>
          <div style={{ width: r(671), height: r(503) }}>
            <img src={aboutImage1} alt="办公环境" className="h-full w-full object-cover" />
          </div>
          <div style={{ marginTop: r(60), width: r(671), height: r(504), marginLeft: r(-6) }}>
            <img src={aboutImage2} alt="办公环境" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>
    </main>
  )
}
