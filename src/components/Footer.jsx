import { Link } from 'react-router-dom'
import { REFERRAL_LINK } from '../constants'

const links = [
  { to: '/', label: 'Главная' },
  { to: '/vacansii', label: 'Вакансии' },
  { to: '/zarplata', label: 'Зарплата и выплаты' },
  { to: '/skolko-zarabatyvaet', label: 'Сколько зарабатывают' },
  { to: '/usloviya', label: 'Условия работы' },
  { to: '/formaty', label: 'Форматы работы' },
  { to: '/podrabotka', label: 'Подработка' },
  { to: '/kak-nachat', label: 'Как начать' },
  { to: '/otzyvy', label: 'Отзывы' },
  { to: '/faq', label: 'Вопросы и ответы' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 font-bold text-white text-lg mb-3">
              <span className="bg-yellow-400 text-black rounded-lg px-2 py-0.5 text-sm font-extrabold">ЯЕ</span>
              Курьер Казань
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Информационный ресурс о работе курьером Яндекс Еда в Казани. Узнайте всё об условиях, доходе и форматах доставки.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Разделы сайта</h3>
            <ul className="space-y-2">
              {links.slice(0, 5).map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Ещё страницы</h3>
            <ul className="space-y-2">
              {links.slice(5).map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © 2025 Курьер Казань — информационный сайт. Не является официальным сайтом Яндекс Еда.
          </p>
          <a
            href={REFERRAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            Начать работу курьером
          </a>
        </div>
      </div>
    </footer>
  )
}
