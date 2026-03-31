import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import VacanciesPage from './pages/VacanciesPage'
import SalaryPage from './pages/SalaryPage'
import EarningsPage from './pages/EarningsPage'
import ReviewsPage from './pages/ReviewsPage'
import FormatsPage from './pages/FormatsPage'
import PartTimePage from './pages/PartTimePage'
import ConditionsPage from './pages/ConditionsPage'
import HowToStartPage from './pages/HowToStartPage'
import FAQPage from './pages/FAQPage'
import NotFoundPage from './pages/NotFoundPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    if (typeof window.ym === 'function') {
      window.ym(108321942, 'hit', window.location.href)
    }
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vacansii" element={<VacanciesPage />} />
          <Route path="/zarplata" element={<SalaryPage />} />
          <Route path="/skolko-zarabatyvaet" element={<EarningsPage />} />
          <Route path="/otzyvy" element={<ReviewsPage />} />
          <Route path="/formaty" element={<FormatsPage />} />
          <Route path="/podrabotka" element={<PartTimePage />} />
          <Route path="/usloviya" element={<ConditionsPage />} />
          <Route path="/kak-nachat" element={<HowToStartPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
