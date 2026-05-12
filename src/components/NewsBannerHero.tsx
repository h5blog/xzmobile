import newsBgPng from '../images/news-bg.png'
import newsBgWebp from '../images/news-bg.webp'
import { rem750 as r } from '../lib/rem750'

/** 新闻中心列表页顶栏（news-bg） */
export default function NewsBannerHero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: r(178), minHeight: r(178) }}
    >
      <picture className="absolute inset-0 block h-full w-full min-w-0">
        <source type="image/webp" srcSet={newsBgWebp} />
        <img
          src={newsBgPng}
          alt=""
          className="h-full w-full object-cover"
          width={750}
          height={178}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </picture>
    </section>
  )
}
