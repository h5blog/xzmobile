import type { CSSProperties, ReactNode } from 'react'
import PageWithFooter from '../components/PageWithFooter'
import { setHashFromRoutePath } from '../lib/hashRoute'
import jobBanner750Webp from '../images/job-banner-750.webp'
import jobBannerWebp from '../images/job-banner.webp'
import jobBannerPng from '../images/job-banner.png'
import { rem750 as r } from '../lib/rem750'
import jobQr from '../images/job-qr.png'
import jobCompany1 from '../images/job-company1.png'
import jobCompany1Webp1x from '../images/job-company1-660.webp'
import jobCompany1Webp2x from '../images/job-company1-2x.webp'
import jobCompany2 from '../images/job-company2.png'
import jobCompany2Webp1x from '../images/job-company2-660.webp'
import jobCompany2Webp2x from '../images/job-company2-2x.webp'
import jobPerk1Png from '../images/job-perk-icon-1.png'
import jobPerk1Webp from '../images/job-perk-icon-1.webp'
import jobPerk2Png from '../images/job-perk-icon-2.png'
import jobPerk2Webp from '../images/job-perk-icon-2.webp'
import jobPerk3Png from '../images/job-perk-icon-3.png'
import jobPerk3Webp from '../images/job-perk-icon-3.webp'
import jobPerk4Png from '../images/job-perk-icon-4.png'
import jobPerk4Webp from '../images/job-perk-icon-4.webp'
import jobPerk5Png from '../images/job-perk-icon-5.png'
import jobPerk5Webp from '../images/job-perk-icon-5.webp'
import jobPerk6Png from '../images/job-perk-icon-6.png'
import jobPerk6Webp from '../images/job-perk-icon-6.webp'
import jobIconPng from '../images/job-icon.png'
import jobIconWebp1x from '../images/job-icon-235.webp'
import jobIconWebp2x from '../images/job-icon-2x.webp'
import jobSteps619Webp from '../images/job-steps-619.webp'
import jobSteps2xWebp from '../images/job-steps-2x.webp'
import jobStepsPng from '../images/job-steps.png'

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

const perks = [
  { title: '竞争力薪酬', lines: ['提供富有竞争力的薪酬，', '包含基础工资、年终奖；'] },
  { title: '全面保障', lines: ['六险一金、年度体检、', '带薪年假、北京户口；'] },
  { title: '福利体系', lines: ['包含餐费补贴、交通补贴、', '节日福利、探亲补贴；'] },
  { title: '成长支持', lines: ['顶级导师指导、参与前沿项目、', '鼓励发表论文与专利申请；'] },
  { title: '文化氛围', lines: ['扁平管理、丰富的团建活动', '与节日福利；'] },
  { title: '实习待遇', lines: ['提供有竞争力的实习津贴', '及转正优先权；'] },
] as const

/** 薪酬福利卡片：三圆角 50px（稿），渐变底（对齐 Figma） */
const perkCardRadius: CSSProperties[] = [
  { borderTopLeftRadius: r(50), borderTopRightRadius: r(50), borderBottomLeftRadius: r(50) },
  { borderTopLeftRadius: r(50), borderTopRightRadius: r(50), borderBottomRightRadius: r(50) },
  { borderTopLeftRadius: r(50), borderTopRightRadius: r(50), borderBottomRightRadius: r(50) },
  { borderTopLeftRadius: r(50), borderTopRightRadius: r(50), borderBottomRightRadius: r(50) },
  { borderTopLeftRadius: r(50), borderTopRightRadius: r(50), borderBottomRightRadius: r(50) },
  { borderTopLeftRadius: r(50), borderTopRightRadius: r(50), borderBottomLeftRadius: r(50) },
]

const perkGradients = [
  'linear-gradient(237deg, rgb(255,255,255) 17%, rgb(213,213,213) 102%)',
  'linear-gradient(241deg, rgb(255,255,255) 4%, rgb(213,213,213) 116%)',
  'linear-gradient(240deg, rgb(255,255,255) 3%, rgb(213,213,213) 104%)',
  'linear-gradient(238deg, rgb(255,255,255) 7%, rgb(213,213,213) 102%)',
  'linear-gradient(63deg, rgb(255,255,255) 0%, rgb(213,213,213) 100%)',
  'linear-gradient(59deg, rgb(255,255,255) 0%, rgb(213,213,213) 90%)',
] as const

/** 薪酬福利装饰图：Figma 750 稿坐标换算为内容区（减 38 边距）；1096:1757 起与各节点裁剪一致 */
const perkDecorAssets = [
  { png: jobPerk1Png, webp: jobPerk1Webp },
  { png: jobPerk2Png, webp: jobPerk2Webp },
  { png: jobPerk3Png, webp: jobPerk3Webp },
  { png: jobPerk4Png, webp: jobPerk4Webp },
  { png: jobPerk5Png, webp: jobPerk5Webp },
  { png: jobPerk6Png, webp: jobPerk6Webp },
] as const

const perkDecorLayout = [
  { left: 289, top: -31, w: 129, h: 125, img: { w: '180.89%', h: '136.93%', l: '-27.11%', t: '-21.28%' } },
  { left: 559, top: -16, w: 108, h: 112, img: { w: '200.59%', h: '142.5%', l: '-31.62%', t: '-26.6%' } },
  { left: 282, top: -27, w: 110, h: 119, img: { w: '179.23%', h: '120.75%', l: '-27.69%', t: '-8.6%' } },
  { left: 557, top: -29, w: 93, h: 101, img: { w: '211.2%', h: '143.09%', l: '-36.86%', t: '-27.88%' } },
  { left: 310, top: -30, w: 107, h: 118, img: { w: '199.53%', h: '132.2%', l: '-32.01%', t: '-20.34%' } },
  { left: 554, top: -30, w: 121, h: 118, img: { w: '184.36%', h: '138.14%', l: '-27.3%', t: '-25.42%' } },
] as const

function PerkDecorIcon({
  png,
  webp,
  left,
  top,
  w,
  h,
  imgPct,
}: {
  png: string
  webp: string
  left: number
  top: number
  w: number
  h: number
  imgPct: { w: string; h: string; l: string; t: string }
}) {
  const imgStyle: CSSProperties = {
    width: imgPct.w,
    height: imgPct.h,
    left: imgPct.l,
    top: imgPct.t,
    maxWidth: 'none',
    maxHeight: 'none',
  }
  return (
    <div
      className="pointer-events-none absolute z-[2] overflow-hidden"
      style={{ left: r(left), top: r(top), width: r(w), height: r(h) }}
    >
      <picture className="relative block size-full">
        <source type="image/webp" srcSet={webp} />
        <img
          src={png}
          alt=""
          className="absolute max-w-none"
          style={imgStyle}
          loading="lazy"
          decoding="async"
        />
      </picture>
    </div>
  )
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="w-full">
      <h2 className="m-0 text-center font-semibold text-[#f96d01]" style={{ fontSize: r(36), lineHeight: 1.6 }}>
        {children}
      </h2>
      <div
        className="mx-auto"
        style={{
          marginTop: r(17),
          width: r(596),
          maxWidth: '100%',
          height: r(3),
          background: 'linear-gradient(90deg, #f1f1f1 0%, #f96d01 49.5%, #f1f1f1 100%)',
        }}
      />
    </div>
  )
}

function JoinUsPage() {
  const goToDetail = (id: number) => {
    setHashFromRoutePath(`/join/${id}`)
  }

  const bodyLh: CSSProperties = { fontSize: r(28), lineHeight: 1.6, color: '#363636',textAlign: 'justify' }
  const labelCls = "font-semibold text-[#363636]"

  return (
    <PageWithFooter>
    <main className="w-full bg-[#f1f1f1]">
      {/* 顶栏横幅：稿 750×177，job-banner + WebP，叠渐变 + 文案 */}
      <section className="relative w-full overflow-hidden" style={{ height: r(177), minHeight: r(177) }}>
        <picture className="absolute inset-0 block h-full w-full min-w-0">
          <source
            type="image/webp"
            srcSet={`${jobBanner750Webp} 750w, ${jobBannerWebp} 1500w`}
            sizes="100vw"
          />
          <img
            src={jobBannerPng}
            alt=""
            className="h-full w-full object-cover"
            width={1500}
            height={354}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </picture>
      </section>

      {/* 薪酬福利（含 Figma 1096:1687 顶部品牌装饰） */}
      <section className="w-full min-w-0" style={{ padding: `${r(66)} ${r(38)} ${r(48)}` }}>
        <div className="relative w-full min-w-0">
          <SectionTitle>薪酬福利</SectionTitle>
          <div
            className="pointer-events-none absolute z-0"
            style={{ right: r(32), top: r(88), width: r(235), height: r(235) }}
            aria-hidden
          >
            <picture className="block h-full w-full overflow-hidden">
              <source
                type="image/webp"
                srcSet={`${jobIconWebp1x} 235w, ${jobIconWebp2x} 470w`}
                sizes="235px"
              />
              <img
                src={jobIconPng}
                alt=""
                width={235}
                height={235}
                className="h-full w-full object-cover"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </picture>
          </div>
          <div className="relative z-[2] w-full min-w-0" style={{ marginTop: r(40) }}>
          {perks.map((perk, i) => {
            const decor = perkDecorLayout[i]
            const assets = perkDecorAssets[i]
            return (
              <div
                key={perk.title}
                className="relative w-full min-w-0"
                style={{ marginTop: i === 0 ? 0 : r(28), minHeight: r(191) }}
              >
                <PerkDecorIcon
                  png={assets.png}
                  webp={assets.webp}
                  left={decor.left}
                  top={decor.top}
                  w={decor.w}
                  h={decor.h}
                  imgPct={decor.img}
                />
                <div
                  className={`relative z-[1] flex w-full min-w-0 ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  style={{
                    paddingLeft: i % 2 === 0 ? r(24) : 0,
                    paddingRight: i % 2 === 1 ? r(24) : 0,
                  }}
                >
                  <div
                    className="box-border border border-solid border-white shadow-[0_0_13px_0_#e8e8e8]"
                    style={{
                      width: r(369),
                      maxWidth: '100%',
                      minHeight: r(191),
                      padding: `${r(34)} ${r(36)} ${r(28)}`,
                      backgroundImage: perkGradients[i],
                      ...perkCardRadius[i],
                    }}
                  >
                    <p className="m-0 font-semibold text-[#f96d01]" style={{ fontSize: r(32), lineHeight: 1.6 }}>
                      {perk.title}
                    </p>
                    <p className="m-0 text-[#373737]" style={{ marginTop: r(22), fontSize: r(30), lineHeight: 1.5,textAlign: 'justify' }}>
                      {perk.lines.join('')}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
          </div>
        </div>
      </section>

      {/* 招聘流程：稿 619×471 居中，job-steps + WebP */}
      <section className="w-full min-w-0" style={{ padding: `${r(8)} ${r(38)} ${r(40)}` }} aria-label="招聘流程">
        <SectionTitle>招聘流程</SectionTitle>
        <div className="flex w-full justify-center" style={{ marginTop: r(44) }}>
          <picture className="block shrink-0" style={{ width: r(619), maxWidth: '100%' }}>
            <source
              type="image/webp"
              srcSet={`${jobSteps619Webp} 619w, ${jobSteps2xWebp} 1238w`}
              sizes="619px"
            />
            <img
              src={jobStepsPng}
              alt="招聘流程"
              width={1238}
              height={942}
              className="block h-auto w-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>
      </section>

      {/* 网申 + 二维码 */}
      <section className="w-full min-w-0" style={{ padding: `0 ${r(16)} ${r(48)}` }}>
        <div
          className="mx-auto flex items-center justify-between bg-[#f96d01] shadow-[0_4px_11px_0_rgba(249,109,1,0.55)]"
          style={{
            width: r(623),
            maxWidth: '100%',
            minHeight: r(171),
            borderRadius: r(24),
            padding: `${r(24)} ${r(40)} ${r(24)} ${r(48)}`,
          }}
        >
          <div className="min-w-0 text-white">
            <a
              href={resumeLink}
              target="_blank"
              rel="noreferrer"
              className="block font-semibold text-white underline"
              style={{ fontSize: r(32), lineHeight: 1.6 }}
            >
              网申链接
            </a>
            <p className="m-0 font-semibold" style={{ marginTop: r(6), fontSize: r(32), lineHeight: 1.6 }}>
              或
            </p>
            <p className="m-0 font-semibold" style={{ marginTop: r(6), fontSize: r(32), lineHeight: 1.6 }}>
              简历投递二维码
            </p>
          </div>
          <div
            className="grid shrink-0 place-items-center rounded-[0.2267rem] bg-white"
            style={{ width: r(127), height: r(127), borderRadius: r(17) }}
          >
            <img
              src={jobQr}
              alt="简历投递二维码"
              className="object-cover"
              style={{ width: r(109), height: r(111), borderRadius: r(14) }}
            />
          </div>
        </div>
      </section>

      {/* 办公环境 */}
      <section className="w-full min-w-0" style={{ padding: `0 ${r(45)} ${r(56)}` }}>
        <div className="mx-auto w-full min-w-0" style={{ width: r(660), maxWidth: '100%' }}>
          <picture className="block w-full overflow-hidden" style={{ borderRadius: r(8) }}>
            <source
              type="image/webp"
              srcSet={`${jobCompany1Webp1x} 660w, ${jobCompany1Webp2x} 1320w`}
              sizes="660px"
            />
            <img
              src={jobCompany1}
              alt="办公环境"
              width={660}
              height={495}
              className="block h-full w-full object-cover"
              style={{ height: r(495) }}
              loading="lazy"
              decoding="async"
            />
          </picture>
          <picture
            className="block w-full overflow-hidden"
            style={{ marginTop: r(24), borderRadius: r(8) }}
          >
            <source
              type="image/webp"
              srcSet={`${jobCompany2Webp1x} 660w, ${jobCompany2Webp2x} 1320w`}
              sizes="660px"
            />
            <img
              src={jobCompany2}
              alt="办公环境"
              width={660}
              height={495}
              className="block h-full w-full object-cover"
              style={{ height: r(495) }}
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>
      </section>

      {/* 岗位列表（数据与跳转逻辑不变） */}
      <section className="w-full min-w-0" style={{ padding: `0 ${r(14)} ${r(72)}` }}>
        <SectionTitle>岗位需求</SectionTitle>
        <div className="w-full min-w-0" style={{ marginTop: r(40) }}>
          {jobs.map((job) => (
            <article
              key={job.id}
              className="mx-auto w-full cursor-pointer bg-white"
              style={{
                maxWidth: r(719),
                marginBottom: r(24),
                padding: `${r(28)} ${r(31)} ${r(32)}`,
              }}
              onClick={() => goToDetail(job.id)}
            >
              <h3 className="m-0 font-semibold text-[#f96d01]" style={{ fontSize: r(32), lineHeight: 1.6 }}>
                {job.title}
              </h3>
              <div className="w-full" style={{ marginTop: r(12), height: r(1), backgroundColor: '#f96d01' }} />
              <p className="m-0" style={{ ...bodyLh, marginTop: r(20) }}>
                <span className={labelCls}>岗位职责：</span>
                {job.duty}
              </p>
              <p className="m-0" style={{ ...bodyLh, marginTop: r(16) }}>
                <span className={labelCls}>岗位要求：</span>
                {job.req}
              </p>
              <p className="m-0" style={{ ...bodyLh, marginTop: r(16) }}>
                <span className={labelCls}>岗位地点：</span>
                {job.loc}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
    </PageWithFooter>
  )
}

export default JoinUsPage
