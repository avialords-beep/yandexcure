import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import CTABanner from '../components/CTABanner'
import ReadAlso from '../components/ReadAlso'
import { REFERRAL_LINK } from '../constants'

const faqItems = [
  { q: 'Как устроиться курьером Яндекс Еда в Казани?', a: 'Нужно заполнить анкету онлайн, загрузить документы (паспорт, ИНН) и дождаться проверки — обычно 1–2 рабочих дня. Очного собеседования нет.' },
  { q: 'Сколько можно зарабатывать курьером в Казани?', a: 'Доход зависит от количества выбранных слотов и активности. Чем больше заказов — тем выше заработок. Конкретные цифры зависят от вас.' },
  { q: 'Нужно ли иметь свой транспорт?', a: 'Можно работать пешком — транспорт не обязателен. Также принимаются велосипеды, самокаты, мотоциклы и автомобили.' },
  { q: 'Когда выплачивают деньги?', a: 'Деньги доступны для вывода ежедневно через приложение. Зачисление на карту — как правило, в течение нескольких часов.' },
]

export default function HomePage() {
  return (
    <>
      <SEO
        title="Работа курьером Яндекс Еда в Казани — вакансии 2025"
        description="Работа курьером Яндекс Еда в Казани: гибкий график, ежедневные выплаты, любой транспорт. Узнайте условия и как начать. Вакансия открыта."
        faqItems={faqItems}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-yellow-50 to-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl">
            <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
              ✅ Вакансия открыта · Казань
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
              Работа курьером<br />
              <span className="text-yellow-500">Яндекс Еда</span><br />
              в Казани
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Гибкий график без фиксированного расписания, ежедневные выплаты на карту и возможность работать в удобном для вас районе Казани. Пешком, на велосипеде или на авто — сами выбираете формат.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={REFERRAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary-lg">
                Начать работу курьером →
              </a>
              <Link to="/kak-nachat" className="inline-block border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-4 px-8 rounded-xl transition-colors text-center text-lg">
                Как это работает
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key facts */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Что важно знать о работе</h2>
          <p className="section-subtitle">Основные условия — без лишних обещаний.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '⏰', title: 'Слоты вместо расписания', desc: 'Вы сами выбираете временные слоты — работаете когда удобно. Утром, днём, вечером. Можно взять один слот или несколько подряд.' },
              { icon: '💳', title: 'Ежедневные выплаты', desc: 'Заработок можно выводить каждый день через приложение на банковскую карту. Не нужно ждать конца недели или месяца.' },
              { icon: '🚶', title: 'Любой транспорт', desc: 'Пешком, на велосипеде, самокате, мотоцикле или автомобиле. У каждого формата — свои маршруты и тарифы.' },
              { icon: '📱', title: 'Всё через приложение', desc: 'Принятие заказов, навигация, выплаты — в приложении «Яндекс Про». Обучение тоже внутри.' },
              { icon: '🏙️', title: 'Работа по всей Казани', desc: 'Вахитовский, Советский, Ново-Савиновский, Приволжский — выбирайте зону, которая вам ближе.' },
              { icon: '🚀', title: 'Старт за 1–2 дня', desc: 'Регистрация онлайн. Проверка документов — обычно 1–2 рабочих дня. После одобрения сразу можно работать.' },
            ].map((b, i) => (
              <div key={i} className="card">
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA mid */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl font-semibold text-gray-900 mb-2">Регистрация занимает 5–10 минут</p>
          <p className="text-gray-500 mb-5">Анкета заполняется онлайн, очный визит не нужен</p>
          <a href={REFERRAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary-lg">
            Начать работу курьером →
          </a>
        </div>
      </section>

      {/* How to start */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Как начать работать: 4 шага</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            {[
              { n: '1', title: 'Заполните анкету', desc: 'Переходите по ссылке и регистрируйтесь: имя, телефон, тип транспорта, район Казани.' },
              { n: '2', title: 'Загрузите документы', desc: 'Паспорт и ИНН. При работе на авто — водительское удостоверение и ОСАГО.' },
              { n: '3', title: 'Дождитесь проверки', desc: 'Обычно 1–2 рабочих дня. После одобрения — уведомление на телефон.' },
              { n: '4', title: 'Выбирайте слоты', desc: 'Установите Яндекс Про, выберите первые слоты и принимайте заказы.' },
            ].map((s) => (
              <div key={s.n}>
                <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center text-black font-extrabold text-xl mb-4">{s.n}</div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <Link to="/kak-nachat" className="text-yellow-600 font-semibold hover:underline text-sm">
            Подробная пошаговая инструкция →
          </Link>
        </div>
      </section>

      {/* Districts */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Районы работы в Казани</h2>
          <p className="section-subtitle">Заказы есть по всему городу — от центра до спальных кварталов.</p>
          <div className="flex flex-wrap gap-3">
            {['Вахитовский', 'Советский', 'Приволжский', 'Авиастроительный', 'Московский', 'Кировский', 'Ново-Савиновский', 'Дербышки', 'Азино', 'Горки', 'Солнечный город', 'Старое Аракчино'].map(d => (
              <span key={d} className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-xl text-sm font-medium shadow-sm">📍 {d}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Page grid */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Узнайте подробнее</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { to: '/skolko-zarabatyvaet', label: 'Сколько зарабатывают курьеры в Казани', icon: '💵', desc: 'Из чего складывается заработок' },
              { to: '/zarplata', label: 'Как устроены выплаты', icon: '💳', desc: 'Ежедневно, на карту' },
              { to: '/formaty', label: 'Пешком, велосипед или авто', icon: '🚗', desc: 'Плюсы и минусы каждого формата' },
              { to: '/podrabotka', label: 'Подработка с гибким графиком', icon: '🕐', desc: 'Несколько часов в день' },
              { to: '/usloviya', label: 'Условия и требования', icon: '📋', desc: 'Документы, самозанятость' },
              { to: '/kak-nachat', label: 'Как начать: пошагово', icon: '📍', desc: 'От регистрации до первого заказа' },
            ].map(l => (
              <Link key={l.to} to={l.to} className="card flex gap-4 items-start hover:border-yellow-300 border border-transparent transition-colors">
                <span className="text-2xl flex-shrink-0">{l.icon}</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{l.label}</p>
                  <p className="text-gray-500 text-xs">{l.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Частые вопросы</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className="card">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm">
            <Link to="/faq" className="text-yellow-600 font-semibold hover:underline">Все вопросы и ответы →</Link>
          </p>
        </div>
      </section>

      <CTABanner title="Начните работать в Казани" subtitle="Регистрация онлайн — без офиса и очереди. Заполните анкету за 5 минут." />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <ReadAlso exclude="/" />
        </div>
      </section>
    </>
  )
}
