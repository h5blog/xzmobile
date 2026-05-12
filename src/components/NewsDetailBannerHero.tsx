import newsDetailPng from '../images/news-detail.png'
import newsDetailWebp from '../images/news-detail.webp'
import { rem750 as r } from '../lib/rem750'

/** 新闻详情页顶栏：专属图 news-detail + 与列表一致的渐变遮罩 */
export default function NewsDetailBannerHero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: r(178), minHeight: r(178) }}
    >
      <picture className="absolute inset-0 block h-full w-full min-w-0">
        <source type="image/webp" srcSet={newsDetailWebp} />
        <img
          src={newsDetailPng}
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
