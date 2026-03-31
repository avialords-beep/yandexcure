import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { REFERRAL_LINK } from '../constants'

const navLinks = [
  { to: '/', label: 'Главная' },
  { to: '/vacansii', label: 'Вакансии' },
  { to: '/zarplata', label: 'Зарплата' },
  { to: '/usloviya', label: 'Условия' },
  { to: '/otzyvy', label: 'Отзывы' },
  { to: '/formaty', label: 'Форматы работы' },
  { to: '/podrabotka', label: 'Подработка' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg text-gray-900">
          <span className="bg-yellow-400 text-black rounded-lg px-2 py-0.5 text-sm font-extrabold">ЯЕ</span>
          Курьер Казань
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {navLinks.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                isActive ? 'text-yellow-600 font-semibold' : 'text-gray-600 hover:text-gray-900'
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <a
          href={REFERRAL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-block btn-primary text-sm"
        >
          Начать работу
        </a>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-lg text-gray-600"
          aria-label="Меню"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3">
          {navLinks.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `py-2 text-base font-medium ${isActive ? 'text-yellow-600 font-semibold' : 'text-gray-700'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href={REFERRAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-center mt-2"
          >
            Начать работу курьером
          </a>
        </div>
      )}
    </header>
  )
}
