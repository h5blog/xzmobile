import { lazy, Suspense, useEffect, useState } from 'react'
import MobileHeader from './components/MobileHeader'
import ScrollToTopFab from './components/ScrollToTopFab'
import { routePathFromHash, setHashFromRoutePath } from './lib/hashRoute'
import HomePage from './pages/HomePage'
import { rem750 as r } from './lib/rem750'
const AboutPage = lazy(() => import('./pages/AboutPage'))
const CompanyTeamPage = lazy(() => import('./pages/CompanyTeamPage'))
const CoreTechPage = lazy(() => import('./pages/CoreTechPage'))
const JoinUsPage = lazy(() => import('./pages/JoinUsPage'))
const NewsPage = lazy(() => import('./pages/NewsPage'))
const NewsDetailPage1 = lazy(() => import('./pages/NewsDetailPage1'))
const NewsDetailPage2 = lazy(() => import('./pages/NewsDetailPage2'))
const NewsDetailPage3 = lazy(() => import('./pages/NewsDetailPage3'))
const NewsDetailPage4 = lazy(() => import('./pages/NewsDetailPage4'))
const NewsDetailPage5 = lazy(() => import('./pages/NewsDetailPage5'))
const JobDetailPage1 = lazy(() => import('./pages/JobDetailPage1'))
const JobDetailPage2 = lazy(() => import('./pages/JobDetailPage2'))
const JobDetailPage3 = lazy(() => import('./pages/JobDetailPage3'))
const JobDetailPage4 = lazy(() => import('./pages/JobDetailPage4'))
const JobDetailPage5 = lazy(() => import('./pages/JobDetailPage5'))
const JobDetailPage6 = lazy(() => import('./pages/JobDetailPage6'))

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
  if (pathname === '/join/1' || pathname === '/join-us/1') return 'join-1'
  if (pathname === '/join/2' || pathname === '/join-us/2') return 'join-2'
  if (pathname === '/join/3' || pathname === '/join-us/3') return 'join-3'
  if (pathname === '/join/4' || pathname === '/join-us/4') return 'join-4'
  if (pathname === '/join/5' || pathname === '/join-us/5') return 'join-5'
  if (pathname === '/join/6' || pathname === '/join-us/6') return 'join-6'
  if (pathname === '/news') return 'news'
  if (pathname === '/about' || pathname === '/about-us') return 'about'
  if (pathname === '/join' || pathname === '/join-us') return 'join-us'
  if (pathname === '/team') return 'company-team'
  return 'home'
}

function navFromPage(page: PageKey): string {
  if (page === 'tech') return '核心技术'
  if (page === 'news' || page.startsWith('news-')) return '新闻中心'
  if (page === 'about') return '公司简介'
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
  if (page === 'join-us') return '/join'
  if (page === 'join-1') return '/join/1'
  if (page === 'join-2') return '/join/2'
  if (page === 'join-3') return '/join/3'
  if (page === 'join-4') return '/join/4'
  if (page === 'join-5') return '/join/5'
  if (page === 'join-6') return '/join/6'
  if (page === 'company-team') return '/team'
  return '/'
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageKey>(() => pageFromPath(routePathFromHash()))
  const [activeNav, setActiveNav] = useState('首页')

  useEffect(() => {
    setActiveNav(navFromPage(currentPage))
    window.scrollTo(0, 0)
  }, [currentPage])

  useEffect(() => {
    const onHashChange = () => {
      setCurrentPage(pageFromPath(routePathFromHash()))
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <div
      className="mx-auto w-full min-w-0"
      style={{ maxWidth: r(750), paddingTop: r(96) }}
    >
      <MobileHeader
        active={activeNav}
        onNavigate={(item) => {
          let target: PageKey = 'home'
          if (item === '首页') target = 'home'
          else if (item === '核心技术') target = 'tech'
          else if (item === '新闻中心') target = 'news'
          else if (item === '关于我们' || item === '公司简介') target = 'about'
          else if (item === '公司团队' || item === '创始团队') target = 'company-team'
          else if (item === '加入我们') target = 'join-us'
          else return
          setHashFromRoutePath(pathFromPage(target))
        }}
      />

      <Suspense fallback={null}>
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
      </Suspense>

      <ScrollToTopFab />
    </div>
  )
}
