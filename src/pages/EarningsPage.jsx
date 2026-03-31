import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import CTABanner from '../components/CTABanner'
import ReadAlso from '../components/ReadAlso'
import Breadcrumb from '../components/Breadcrumb'
import { REFERRAL_LINK } from '../constants'

const faqItems = [
  { q: 'От чего зависит заработок курьера в Казани?', a: 'Главное — количество выполненных заказов. На это влияет выбор рабочих слотов, район работы, тип транспорта и время суток. В пиковые часы заказов больше.' },
  { q: 'Правда ли, что в пиковые часы платят больше?', a: 'Да. В период высокой нагрузки — обед и вечер — стоимость заказов автоматически растёт. Это стандартная практика сервисов доставки.' },
  { q: 'Можно ли зарабатывать на доставке как на основной работе?', a: 'Да, многие курьеры в Казани работают полный день. Доход при полной занятости значительно выше, чем при подработке. Конкретные суммы зависят от вашей активности.' },
  { q: 'Влияет ли тип транспорта на заработок?', a: 'Да. На автомобиле доступны более длинные маршруты с более высокой оплатой. Пешие и велосипедные курьеры работают в ближних зонах и берут больше коротких заказов.' },
]

const factors = [
  { icon: '🕐', title: 'Количество слотов', desc: 'Больше активных слотов в неделю — больше заказов и выше общий заработок. Это основной рычаг.' },
  { icon: '📍', title: 'Район работы в Казани', desc: 'В плотных жилых и офисных районах — Советском, Ново-Савиновском, центре — заказы поступают чаще.' },
  { icon: '🌆', title: 'Время суток', desc: 'Пиковая нагрузка — обеденное время и вечер. В это время заказов больше, и стоимость доставки выше.' },
  { icon: '🚗', title: 'Тип транспорта', desc: 'Автомобиль позволяет брать дальние маршруты с более высоким тарифом. Пешком и на велосипеде — короткие, но частые заказы.' },
  { icon: '⭐', title: 'Рейтинг', desc: 'Высокий рейтинг даёт приоритет при распределении заказов — особенно в загруженные часы.' },
  { icon: '🎯', title: 'Акции', desc: 'Яндекс Еда периодически запускает бонусные акции в Казани — за выполнение определённого числа заказов за период.' },
]

export default function EarningsPage() {
  return (
    <>
      <SEO
        title="Сколько зарабатывает курьер Яндекс Еда в Казани — из чего складывается доход"
        description="Как формируется заработок курьера Яндекс Еда в Казани: что влияет на доход, пиковые часы, районы, тип транспорта. Честно и без лишних обещаний."
        faqItems={faqItems}
        breadcrumbs={[{ name: 'Сколько зарабатывают', path: '/skolko-zarabatyvaet' }]}
      />
      <Breadcrumb items={[{ name: 'Сколько зарабатывают', path: '/skolko-zarabatyvaet' }]} />

      <section className="bg-gradient-to-br from-yellow-50 to-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Сколько зарабатывает курьер<br />Яндекс Еда в Казани
          </h1>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl leading-relaxed">
            Фиксированной ставки нет — доход зависит от вашей активности. Расскажем, из чего складывается заработок и что на него влияет.
          </p>
          <a href={REFERRAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary-lg">
            Начать работу курьером →
          </a>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Из чего складывается оплата</h2>
          <p className="section-subtitle">Каждый выполненный заказ — это несколько составляющих.</p>
          <div className="space-y-4">
            {[
              { tag: '1', title: 'Базовая ставка за заказ', color: 'border-l-blue-400', desc: 'За каждый выполненный заказ начисляется фиксированная сумма. Размер зависит от типа доставки и конфигурации зоны.' },
              { tag: '2', title: 'Надбавка за расстояние', color: 'border-l-green-400', desc: 'Чем длиннее маршрут — тем выше надбавка. Дальние адреса оплачиваются больше, чем ближние.' },
              { tag: '3', title: 'Повышенный тариф в пиковые часы', color: 'border-l-yellow-400', desc: 'В обед (12–14 ч) и вечером (18–22 ч) стоимость заказов автоматически растёт из-за высокой нагрузки на сервис.' },
              { tag: '4', title: 'Надбавка за сложные условия', color: 'border-l-orange-400', desc: 'В дождь, снег или сильный ветер начисляется дополнительная компенсация за работу в неблагоприятную погоду.' },
              { tag: '5', title: 'Бонусы по акциям', color: 'border-l-purple-400', desc: 'Яндекс Еда периодически запускает акции в Казани: дополнительное вознаграждение за выполнение определённого числа заказов за день или неделю.' },
            ].map((item, i) => (
              <div key={i} className={`bg-white border border-gray-100 border-l-4 ${item.color} rounded-xl p-5`}>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Сценарии работы в Казани</h2>
          <p className="section-subtitle">Сколько примерно можно заработать при разных режимах занятости.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '☕', title: 'Подработка', sub: 'Несколько часов в день', desc: 'Берёте 1–2 слота в день или только по выходным. Удобно совмещать с учёбой или основной работой. Заработок — дополнительный, не основной.', note: 'Подходит: студентам, совместителям' },
              { icon: '🌤️', title: 'Частичная занятость', sub: '4–5 часов в день', desc: 'Работаете половину дня — например, утром или вечером. Относительно стабильный доход без полной нагрузки.', note: 'Подходит: тем, кто ищет баланс' },
              { icon: '🔥', title: 'Полная занятость', sub: '8+ часов в день', desc: 'Максимально загружаетесь слотами, выбираете пиковые часы и активные зоны. Это уже основная работа, а не подработка.', note: 'Подходит: тем, кто хочет максимум' },
            ].map((s, i) => (
              <div key={i} className="card border border-gray-100">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">{s.title}</h3>
                <p className="text-xs text-yellow-700 font-semibold bg-yellow-50 px-2 py-1 rounded-lg inline-block mb-3">{s.sub}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{s.desc}</p>
                <p className="text-gray-400 text-xs italic">{s.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs text-gray-400 bg-gray-100 rounded-xl px-4 py-3">
            Конкретные суммы заработка зависят от активности, района и текущих условий. Мы намеренно не указываем точные цифры, чтобы не вводить вас в заблуждение.
          </p>
        </div>
      </section>

      <section className="py-10 px-4 bg-yellow-400">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl font-bold text-black mb-2">Хотите начать зарабатывать в Казани?</p>
          <p className="text-black/70 mb-5">Реальный доход можно оценить только на практике. Начните — и разберётесь.</p>
          <a href={REFERRAL_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-yellow-400 font-bold py-4 px-8 rounded-xl text-lg">
            Начать работу курьером →
          </a>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Что влияет на заработок</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {factors.map((f, i) => (
              <div key={i} className="card">
                <span className="text-2xl mb-2 block">{f.icon}</span>
                <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Вопросы о заработке</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className="card">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm">
            <Link to="/zarplata" className="text-yellow-600 font-semibold hover:underline">Подробнее о выплатах →</Link>
          </p>
        </div>
      </section>

      <CTABanner title="Начните зарабатывать в Казани" subtitle="Первые заказы покажут реальные цифры лучше любой статьи." />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <ReadAlso exclude="/skolko-zarabatyvaet" />
        </div>
      </section>
    </>
  )
}
