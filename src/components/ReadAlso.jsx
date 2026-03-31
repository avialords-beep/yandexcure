import { Link } from 'react-router-dom'

const allLinks = [
  { to: '/', label: 'Работа курьером Яндекс Еда в Казани', desc: 'Всё о старте и условиях работы' },
  { to: '/vacansii', label: 'Вакансии и устройство на работу', desc: 'Как оформиться курьером' },
  { to: '/zarplata', label: 'Зарплата и выплаты', desc: 'Как и когда выплачивают деньги' },
  { to: '/skolko-zarabatyvaet', label: 'Сколько зарабатывает курьер', desc: 'Реальные цифры по Казани' },
  { to: '/usloviya', label: 'Условия работы и требования', desc: 'Что нужно для старта' },
  { to: '/formaty', label: 'Форматы работы', desc: 'Пешком, велосипед, авто' },
  { to: '/podrabotka', label: 'Подработка и гибкий график', desc: 'Работа на несколько часов' },
  { to: '/kak-nachat', label: 'Как начать работу курьером', desc: 'Пошаговая инструкция' },
  { to: '/otzyvy', label: 'Отзывы курьеров', desc: 'Реальный опыт работников' },
  { to: '/faq', label: 'Частые вопросы', desc: 'Ответы на популярные вопросы' },
]

export default function ReadAlso({ exclude = '', count = 3 }) {
  const filtered = allLinks.filter(l => l.to !== exclude).slice(0, count)

  return (
    <div className="bg-gray-50 rounded-2xl p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Читайте также</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {filtered.map(l => (
          <Link
            key={l.to}
            to={l.to}
            className="bg-white rounded-xl p-4 border border-gray-100 hover:border-yellow-400 hover:shadow-md transition-all"
          >
            <p className="font-semibold text-gray-900 text-sm mb-1">{l.label}</p>
            <p className="text-gray-500 text-xs">{l.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
