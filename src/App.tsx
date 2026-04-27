import { useEffect, useState } from 'react'
import MobileFooter from './components/MobileFooter'
import MobileHeader from './components/MobileHeader'
import { AboutPage, CompanyTeamPage, CoreTechPage, HomePage, JoinUsPage, NewsPage } from './pages'
import NewsDetailPage1 from './pages/NewsDetailPage1'
import NewsDetailPage2 from './pages/NewsDetailPage2'
import NewsDetailPage3 from './pages/NewsDetailPage3'
import NewsDetailPage4 from './pages/NewsDetailPage4'
import NewsDetailPage5 from './pages/NewsDetailPage5'
import JobDetailPage1 from './pages/JobDetailPage1'
import JobDetailPage2 from './pages/JobDetailPage2'
import JobDetailPage3 from './pages/JobDetailPage3'
import JobDetailPage4 from './pages/JobDetailPage4'
import JobDetailPage5 from './pages/JobDetailPage5'
import JobDetailPage6 from './pages/JobDetailPage6'
import { rem750 as r } from './lib/rem750'

type PageKey =
  | 'home'
  | 'tech'
  | 'news'
  | 'about'
  | 'company-team'
  | 'join-us'
  | 'join-1'
  | 'join-2'
  | 'join-3'
  | 'join-4'
  | 'join-5'
  | 'join-6'
  | 'news-1'
  | 'news-2'
  | 'news-3'
  | 'news-4'
  | 'news-5'

function pageFromPath(pathname: string): PageKey {
  if (pathname === '/tech') return 'tech'
  if (pathname === '/news/1') return 'news-1'
  if (pathname === '/news/2') return 'news-2'
  if (pathname === '/news/3') return 'news-3'
  if (pathname === '/news/4') return 'news-4'
  if (pathname === '/news/5') return 'news-5'
  if (pathname === '/join-us/1') return 'join-1'
  if (pathname === '/join-us/2') return 'join-2'
  if (pathname === '/join-us/3') return 'join-3'
  if (pathname === '/join-us/4') return 'join-4'
  if (pathname === '/join-us/5') return 'join-5'
  if (pathname === '/join-us/6') return 'join-6'
  if (pathname === '/news') return 'news'
  if (pathname === '/about' || pathname === '/about-us') return 'about'
  if (pathname === '/join-us' || pathname === '/join') return 'join-us'
  if (pathname === '/team') return 'company-team'
  return 'home'
}

function navFromPage(page: PageKey): string {
  if (page === 'tech') return '核心技术'
  if (page === 'news' || page.startsWith('news-')) return '新闻中心'
  if (page === 'about') return '关于我们'
  if (page === 'join-us' || page.startsWith('join-')) return '加入我们'
  if (page === 'company-team') return '创始团队'
  return '首页'
}

function pathFromPage(page: PageKey): string {
  if (page === 'tech') return '/tech'
  if (page === 'news') return '/news'
  if (page === 'news-1') return '/news/1'
  if (page === 'news-2') return '/news/2'
  if (page === 'news-3') return '/news/3'
  if (page === 'news-4') return '/news/4'
  if (page === 'news-5') return '/news/5'
  if (page === 'about') return '/about'
  if (page === 'join-us') return '/join-us'
  if (page === 'join-1') return '/join-us/1'
  if (page === 'join-2') return '/join-us/2'
  if (page === 'join-3') return '/join-us/3'
  if (page === 'join-4') return '/join-us/4'
  if (page === 'join-5') return '/join-us/5'
  if (page === 'join-6') return '/join-us/6'
  if (page === 'company-team') return '/team'
  return '/'
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageKey>(() => pageFromPath(window.location.pathname))
  const [activeNav, setActiveNav] = useState('首页')

  useEffect(() => {
    setActiveNav(navFromPage(currentPage))
    window.scrollTo(0, 0)
  }, [currentPage])

  useEffect(() => {
    const onPopState = () => {
      setCurrentPage(pageFromPath(window.location.pathname))
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  return (
    <div className="mx-auto w-full min-w-0" style={{ maxWidth: r(750) }}>
      <MobileHeader
        active={activeNav}
        onNavigate={(item) => {
          if (item === '首页') {
            const target: PageKey = 'home'
            setCurrentPage(target)
            const path = pathFromPage(target)
            if (window.location.pathname !== path) {
              window.history.pushState(null, '', path)
            }
            return
          }
          if (item === '核心技术') {
            const target: PageKey = 'tech'
            setCurrentPage(target)
            const path = pathFromPage(target)
            if (window.location.pathname !== path) {
              window.history.pushState(null, '', path)
            }
            return
          }
          if (item === '新闻中心') {
            const target: PageKey = 'news'
            setCurrentPage(target)
            const path = pathFromPage(target)
            if (window.location.pathname !== path) {
              window.history.pushState(null, '', path)
            }
            return
          }
          if (item === '关于我们' || item === '公司简介') {
            const target: PageKey = 'about'
            setCurrentPage(target)
            const path = pathFromPage(target)
            if (window.location.pathname !== path) {
              window.history.pushState(null, '', path)
            }
            return
          }
          if (item === '公司团队' || item === '创始团队') {
            const target: PageKey = 'company-team'
            setCurrentPage(target)
            const path = pathFromPage(target)
            if (window.location.pathname !== path) {
              window.history.pushState(null, '', path)
            }
            return
          }
          if (item === '加入我们') {
            const target: PageKey = 'join-us'
            setCurrentPage(target)
            const path = pathFromPage(target)
            if (window.location.pathname !== path) {
              window.history.pushState(null, '', path)
            }
            return
          }
        }}
      />

      {currentPage === 'join-us' ? (
        <JoinUsPage />
      ) : currentPage === 'about' ? (
        <AboutPage />
      ) : currentPage === 'join-1' ? (
        <JobDetailPage1 />
      ) : currentPage === 'join-2' ? (
        <JobDetailPage2 />
      ) : currentPage === 'join-3' ? (
        <JobDetailPage3 />
      ) : currentPage === 'join-4' ? (
        <JobDetailPage4 />
      ) : currentPage === 'join-5' ? (
        <JobDetailPage5 />
      ) : currentPage === 'join-6' ? (
        <JobDetailPage6 />
      ) : currentPage === 'tech' ? (
        <CoreTechPage />
      ) : currentPage === 'news' ? (
        <NewsPage />
      ) : currentPage === 'news-1' ? (
        <NewsDetailPage1 />
      ) : currentPage === 'news-2' ? (
        <NewsDetailPage2 />
      ) : currentPage === 'news-3' ? (
        <NewsDetailPage3 />
      ) : currentPage === 'news-4' ? (
        <NewsDetailPage4 />
      ) : currentPage === 'news-5' ? (
        <NewsDetailPage5 />
      ) : currentPage === 'company-team' ? (
        <CompanyTeamPage />
      ) : (
        <HomePage />
      )}

      <MobileFooter />
    </div>
  )
}
