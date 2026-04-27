import { rem750 as r } from '../lib/rem750'

const jobs = [
  {
    id: 1,
    title: 'AI for 可控核聚变算法研究员/工程师/实习生',
    duty: '多模态时空建模；物理先验融合；探索 PINN/FNO/DeepONet 等算子学习方法并推动落地。',
    req: '计算机、自动化、数学、物理等相关专业背景，硕士及以上优先。机器学习基础扎实，熟悉 Python + PyTorch/Jax，具备独立实验与跨团队协作能力。',
    loc: '北京',
  },
  {
    id: 2,
    title: '强化学习算法研究员/工程师/实习生（决策与控制方向）',
    duty: '搭建 RL 训练框架；优化稳定性与泛化；打通仿真到系统评估闭环。',
    req: '计算机、自动化、数学、电子工程等相关专业背景，硕士及以上优先。熟悉 DQN/DDPG/PPO/SAC/MBPO 中至少一种，具备 RL 工程实现与调试能力。',
    loc: '北京',
  },
  {
    id: 3,
    title: '智能体算法研究员/工程师/实习生',
    duty: '多 Agent 架构；RAG+工具调用+记忆系统；评测监控与工程化部署。',
    req: '计算机、软件工程、自动化、数学等相关专业背景，硕士及以上优先。熟悉 LangChain/OpenClaw 等框架，具备从原型到生产的工程落地能力。',
    loc: '北京',
  },
  {
    id: 4,
    title: '聚变等离子体物理研究员/工程师/实习生',
    duty: '输运/稳定性等物理研究；对接真实装置窗口与放电计划；协同聚变公司推进联调复盘。',
    req: '等离子体物理、核科学与技术、理论物理、工程物理等相关专业背景，硕士及以上优先。等离子体物理基础扎实，具备实验协同与技术沟通能力，愿意跨学科合作。',
    loc: '北京 / 上海 / 西安',
  },
  {
    id: 5,
    title: '模拟仿真软件开发研究员/工程师/实习生',
    duty: '模拟器开发与集成；超算/集群部署与容器化调度；性能 Profiling 与并行加速。',
    req: '计算机、电子工程、物理、数学等相关专业背景，硕士及以上优先。熟悉 C/C++/Fortran/Python 之一，了解 Linux/HPC 与 CUDA/OpenMP/MPI。',
    loc: '北京',
  },
  {
    id: 6,
    title: 'AI 算法研究员/工程师/实习生',
    duty: '预训练与后训练；强化微调（RLHF/RLAIF）；扩散/流匹配/自回归生成；网络架构创新（长上下文、稀疏化、MoE 等）。',
    req: '计算机、数学、统计、自动化等相关专业背景，硕士及以上优先。具备基础模型训练经验，理解生成模型与评测方法，具备架构迭代与工程落地能力。',
    loc: '北京',
  },
] as const

const resumeLink = 'https://ecn5wfrohzj8.feishu.cn/share/base/form/shrcnBNsL5EtkP8DOQBKp6T3qac'
const resumeQr = 'http://localhost:3845/assets/dc63d745efb03890ab3a6b58aa036bc98d03fc94.png'
const scene1 = 'http://localhost:3845/assets/2fd38d99d554f73bab7fbc5387e5c43087f19710.png'
const scene2 = 'http://localhost:3845/assets/1126aeffab9f865f64bc612a1a5ed863bb4e7d56.png'

const perks = [
  { title: '竞争力薪酬', lines: ['提供富有竞争力的薪酬，', '包含基础工资、年终奖；'] },
  { title: '全面保障', lines: ['六险一金、年度体检、', '带薪年假、北京户口；'] },
  { title: '福利体系', lines: ['包含餐费补贴、交通补贴、', '节日福利、探亲补贴；'] },
  { title: '成长支持', lines: ['顶级导师指导、参与前沿项目、', '鼓励发表论文与专利申请；'] },
  { title: '文化氛围', lines: ['扁平管理、丰富的团建活动', '与节日福利；'] },
  { title: '实习待遇', lines: ['提供有竞争力的实习津贴', '及转正优先权；'] },
] as const

function JoinUsPage() {
  const goToDetail = (id: number) => {
    const path = `/join-us/${id}`
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path)
      window.dispatchEvent(new PopStateEvent('popstate'))
    }
  }

  return (
    <main className="w-full bg-[#f1f1f1]">
      <section className="relative w-full" style={{ height: r(177) }}>
        <img src="http://localhost:3845/assets/11cbfa778a98e713209708aaca51fe8be979a957.png" alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(249,109,1,0.9)] via-[rgba(249,109,1,0.53)] to-transparent" />
        <div className="absolute left-[1.3467rem] top-[0.6267rem] text-white">
          <p className="m-0 font-semibold" style={{ fontSize: r(40), lineHeight: 'normal' }}>
            JOIN US
          </p>
          <div className="mt-[0.0267rem] h-[0.0533rem] w-[3.8133rem] bg-white/90" />
          <p className="m-0 mt-[0.0267rem] font-semibold" style={{ fontSize: r(32), lineHeight: 'normal' }}>
            岗位需求
          </p>
        </div>
        <div className="absolute bg-white/70" style={{ right: 0, top: 0, width: r(156), height: r(132) }}>
          <button
            type="button"
            className="absolute bg-transparent p-0 text-left text-[#363636]"
            style={{ left: r(30), top: r(11), fontSize: r(24), lineHeight: 'normal' }}
            onClick={() => {
              if (window.location.pathname !== '/team') {
                window.history.pushState(null, '', '/team')
                window.dispatchEvent(new PopStateEvent('popstate'))
              }
            }}
          >
            公司团队
          </button>
          <div className="absolute bg-white" style={{ left: 0, top: r(64), width: r(153), height: r(1) }} />
          <p className="absolute m-0 text-[#f96d01]" style={{ left: r(30), top: r(80), fontSize: r(24), lineHeight: 'normal' }}>
            加入我们
          </p>
          <div className="absolute bg-[#f96d01]" style={{ left: 0, top: r(124), width: r(153), height: r(8) }} />
        </div>
      </section>

      <section className="px-[0.2133rem] pb-[0.4rem] pt-[0.2rem]">
        {jobs.map((job) => (
          <article
            key={job.id}
            className="mb-[0.2rem] cursor-pointer bg-white"
            style={{ padding: `${r(23)} ${r(31)} ${r(18)}` }}
            onClick={() => goToDetail(job.id)}
          >
            <h3 className="m-0 font-semibold text-[#f96d01]" style={{ fontSize: r(32), lineHeight: r(50) }}>
              {job.title}
            </h3>
            <div className="h-px" style={{ marginTop: r(8), backgroundColor: '#f96d01' }} />
            <p className="m-0 text-[#363636]" style={{ marginTop: r(20), fontSize: r(24), lineHeight: r(30) }}>
              <span className="font-semibold">岗位职责：</span>
              {job.duty}
            </p>
            <p className="m-0 text-[#363636]" style={{ marginTop: r(20), fontSize: r(24), lineHeight: r(30) }}>
              <span className="font-semibold">岗位要求：</span>
              {job.req}
            </p>
            <p className="m-0 text-[#363636]" style={{ marginTop: r(20), fontSize: r(24), lineHeight: r(30) }}>
              <span className="font-semibold">岗位地点：</span>
              {job.loc}
            </p>
          </article>
        ))}
      </section>

      <section className="px-[0.2133rem]">
        <div className="relative overflow-hidden rounded-[0.32rem] bg-[#f96d01] text-white" style={{ height: r(286) }}>
          <a href={resumeLink} target="_blank" rel="noreferrer" className="absolute font-semibold text-white underline" style={{ left: r(141), top: r(63), fontSize: r(40), lineHeight: r(30) }}>
            网申链接
          </a>
          <p className="absolute m-0 whitespace-nowrap font-semibold text-white" style={{ left: r(201), top: r(128), fontSize: r(40), lineHeight: r(30) }}>
            或
          </p>
          <p className="absolute m-0 whitespace-nowrap font-semibold text-white" style={{ left: r(97), top: r(193), fontSize: r(40), lineHeight: r(30) }}>
            简历投递二维码
          </p>
          <div className="absolute grid place-items-center rounded-[0.2267rem] bg-white" style={{ left: r(465), top: r(51), width: r(178), height: r(178) }}>
            <img src={resumeQr} alt="简历投递二维码" className="object-cover" style={{ width: r(152), height: r(156), borderRadius: r(14) }} />
          </div>
        </div>
      </section>

      <section className="px-[0.2133rem] pb-[0.3733rem] pt-[0.24rem]">
        <div className="rounded-[0.32rem] bg-white px-[0.32rem] pb-[0.3467rem] shadow-[0_0_0.24rem_rgba(0,0,0,0.05)]" style={{ paddingTop: r(69) }}>
          <h2 className="m-0 text-center font-semibold text-[#f96d01]" style={{ fontSize: r(40), lineHeight: r(30), whiteSpace: 'nowrap' }}>
            薪酬福利
          </h2>
          <div className="text-center" style={{ marginTop: r(58) }}>
            {perks.map((perk, idx) => (
              <div key={perk.title} style={{ marginTop: idx === 0 ? 0 : r(42) }}>
                <p className="m-0 inline-flex items-center justify-center font-semibold text-[#f96d01]" style={{ height: r(52), minWidth: r(153), border: `${r(1)} solid #f96d01`, borderRadius: r(9), padding: `0 ${r(16)}`, fontSize: r(32), lineHeight: r(46) }}>
                  {perk.title}
                </p>
                {perk.lines.map((line) => (
                  <p key={line} className="m-0 text-black" style={{ fontSize: r(32), lineHeight: r(46) }}>
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <h2 className="m-0 text-center font-semibold text-[#f96d01]" style={{ marginTop: r(78), fontSize: r(40), lineHeight: r(30), whiteSpace: 'nowrap' }}>
            招聘流程
          </h2>
          <div className="mx-auto" style={{ marginTop: r(76), width: r(486), maxWidth: '100%' }}>
            <div className="flex items-center" style={{ gap: r(10) }}>
              <div className="relative shrink-0" style={{ width: r(142), height: r(56) }}>
                <img src="http://localhost:3845/assets/c27959716df0d523795023242665f45a53f23475.svg" alt="" className="h-full w-full object-contain" />
                <span className="absolute inset-0 grid place-items-center font-semibold text-white" style={{ fontSize: r(20), lineHeight: r(30) }}>简历投递</span>
              </div>
              <div className="relative shrink-0" style={{ width: r(101), height: r(56) }}>
                <img src="http://localhost:3845/assets/6862f27759121b18239d0b161b9be69ac71e4c9a.svg" alt="" className="h-full w-full object-contain" />
                <span className="absolute inset-0 grid place-items-center font-semibold text-white" style={{ fontSize: r(20), lineHeight: r(30) }}>初筛</span>
              </div>
              <div className="relative shrink-0" style={{ width: r(240), height: r(56) }}>
                <img src="http://localhost:3845/assets/00d6c3462177c5e468f6b4beefbc75d200e48d82.svg" alt="" className="h-full w-full object-contain" />
                <span className="absolute inset-0 grid place-items-center font-semibold text-white" style={{ fontSize: r(20), lineHeight: r(30) }}>技术面试（1-2 轮）</span>
              </div>
            </div>
            <div className="flex items-center" style={{ marginTop: r(29), gap: r(8) }}>
              <div className="relative shrink-0" style={{ width: r(161), height: r(56) }}>
                <img src="http://localhost:3845/assets/c75e581d8c7ff718bd844a025eb1bf0ec83b9313.svg" alt="" className="h-full w-full object-contain" />
                <span className="absolute inset-0 grid place-items-center font-semibold text-white" style={{ fontSize: r(20), lineHeight: r(30) }}>终面/交流</span>
              </div>
              <div className="relative shrink-0" style={{ width: r(150), height: r(56) }}>
                <div className="h-full w-full rounded-[1.8667rem] bg-[#209538]" />
                <span className="absolute inset-0 grid place-items-center font-semibold text-white" style={{ fontSize: r(20), lineHeight: r(30) }}>发放offer</span>
              </div>
            </div>
          </div>

          <div className="mx-auto" style={{ width: r(486), maxWidth: '100%', marginTop: r(49) }}>
            <img src={scene1} alt="" className="block w-full object-cover" style={{ height: r(364) }} />
            <img src={scene2} alt="" className="block w-full object-cover" style={{ height: r(364), marginTop: r(7) }} />
          </div>
        </div>
      </section>
    </main>
  )
}

export default JoinUsPage
