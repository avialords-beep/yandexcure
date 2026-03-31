import SEO from '../components/SEO'
import CTABanner from '../components/CTABanner'
import ReadAlso from '../components/ReadAlso'
import Breadcrumb from '../components/Breadcrumb'
import { REFERRAL_LINK } from '../constants'

const faqItems = [
  { q: 'Кому реально подходит работа курьером Яндекс Еда?', a: 'Тем, кто хочет гибкий график и не привязан к офису. Популярный выбор среди студентов, тех, кто ищет подработку или временный заработок.' },
  { q: 'Кому эта работа не подойдёт?', a: 'Тем, кто хочет фиксированный оклад и стабильное расписание. Заработок нестабилен и зависит от вашей активности.' },
  { q: 'Трудно ли работать первое время?', a: 'Первые пару дней нужно освоить приложение и понять, как работает система заказов. Большинство курьеров говорят, что разобрались за 2–3 дня.' },
]

const reviews = [
  {
    name: 'Артём, Ново-Савиновский',
    transport: '🚲 Велосипед',
    months: '6 месяцев',
    text: 'Начал работать летом — хотел чем-то занять время и немного заработать. В итоге продолжаю уже полгода. Нравится, что сам решаю, когда выходить. Если нужно — беру слот, если нет — просто не работаю. Никаких объяснений никому не нужно. В Ново-Савиновском заказов хватает, особенно вечером.',
    pros: ['Гибкий график', 'Ежедневные выплаты', 'Много заказов вечером'],
    neutral: 'Зимой переключился на пешие маршруты в центре — на велосипеде в гололёд некомфортно.',
  },
  {
    name: 'Алина, Вахитовский',
    transport: '🚶 Пешком',
    months: '4 месяца',
    text: 'Учусь в КФУ, беру слоты после пар. В центре Казани удобно работать пешком — расстояния небольшие, адреса рядом. За обеденный слот успеваю сделать несколько заказов. Деньги вывожу сразу на карту — это удобно, не надо ждать.',
    pros: ['Удобно совмещать с учёбой', 'В центре близкие маршруты', 'Физическая активность'],
    neutral: 'В дождь работать не очень приятно, но в плохую погоду платят немного больше.',
  },
  {
    name: 'Дмитрий, Советский район',
    transport: '🚗 Автомобиль',
    months: 'год',
    text: 'Работаю на машине — беру заказы в спальные районы, Горки, Азино. Расстояния длиннее, поэтому и оплата выше. Надо считать расходы на бензин, но в целом остаётся нормально. В плохую погоду работать выгоднее — и бонус есть, и конкурентов меньше.',
    pros: ['Длинные маршруты с высокой оплатой', 'Работа по всей Казани', 'Удобно в любую погоду'],
    neutral: 'Пробки в час пик — единственный реальный минус. В центр в будний день вечером езжу редко.',
  },
  {
    name: 'Камиль, Московский район',
    transport: '🚲 Велосипед',
    months: '8 месяцев',
    text: 'Работал до этого в найме — фиксированный график, никакой свободы. Ушёл пробовать курьерство на лето. Понял, что ценю свободу больше стабильного расписания. Теперь летом и осенью работаю на велосипеде, зимой — меньше. Заработок нестабильный, но хватает на то, что нужно.',
    pros: ['Свобода распоряжаться временем', 'Можно сезонно регулировать загрузку'],
    neutral: 'Не для тех, кто хочет предсказуемый доход. Здесь всё зависит от тебя.',
  },
]

export default function ReviewsPage() {
  return (
    <>
      <SEO
        title="Отзывы курьеров Яндекс Еда в Казани — реальный опыт работы"
        description="Реальные истории курьеров Яндекс Еда в Казани: плюсы, минусы, кому подходит. Без приукрашивания — только честный опыт работы."
        faqItems={faqItems}
        breadcrumbs={[{ name: 'Отзывы курьеров', path: '/otzyvy' }]}
      />
      <Breadcrumb items={[{ name: 'Отзывы курьеров', path: '/otzyvy' }]} />

      <section className="bg-gradient-to-br from-yellow-50 to-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Отзывы курьеров Яндекс Еда<br />в Казани
          </h1>
          <p className="text-lg text-gray-600 mb-4 max-w-2xl leading-relaxed">
            Реальные истории людей, которые уже работают в Казани. Разные районы, форматы и ситуации. Говорим и о плюсах, и о минусах.
          </p>
          <p className="text-sm text-gray-400 mb-8 italic">
            Имена изменены. Опыт у каждого свой — ваш может отличаться.
          </p>
          <a href={REFERRAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary-lg">
            Начать работу курьером →
          </a>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="card">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="font-bold text-gray-900">{r.name}</p>
                    <p className="text-sm text-gray-500">{r.transport} · Работает {r.months}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">"{r.text}"</p>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {r.pros.map((p, j) => (
                      <span key={j} className="bg-green-50 text-green-700 text-xs font-medium px-3 py-1 rounded-full">✓ {p}</span>
                    ))}
                  </div>
                  {r.neutral && (
                    <div className="bg-gray-50 rounded-xl px-3 py-2 mt-2">
                      <p className="text-gray-500 text-xs"><span className="font-medium">Нюанс:</span> {r.neutral}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Кому подходит, а кому — нет</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card border-l-4 border-l-green-400">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">✅ Скорее подойдёт</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  'Студентам — удобно совмещать с учёбой',
                  'Тем, кто хочет подработку без жёсткого расписания',
                  'Тем, кто ищет временный заработок',
                  'Людям, которые любят физическую активность и улицу',
                  'Тем, кто хочет сам управлять своим временем',
                ].map((t, i) => (
                  <li key={i} className="flex gap-2"><span className="text-green-500 flex-shrink-0">•</span>{t}</li>
                ))}
              </ul>
            </div>
            <div className="card border-l-4 border-l-red-300">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">❌ Скорее не подойдёт</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  'Тем, кто хочет фиксированный оклад каждый месяц',
                  'Тем, кто не любит физическую нагрузку',
                  'Тем, кто хочет карьерный рост и должности',
                  'Кому сложно работать в любую погоду',
                  'Тем, кто хочет полный соцпакет и больничные',
                ].map((t, i) => (
                  <li key={i} className="flex gap-2"><span className="text-red-400 flex-shrink-0">•</span>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Что курьеры ценят больше всего</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: '⏰', title: 'Свобода в выборе времени', desc: 'Нет начальника, нет обязательного присутствия. Взял слоты — работаешь, не взял — отдыхаешь.' },
              { icon: '💳', title: 'Деньги сразу', desc: 'Одна из главных причин, по которой выбирают эту работу — вывод на карту каждый день, без ожидания.' },
              { icon: '🏃', title: 'Движение на свежем воздухе', desc: 'Для тех, кто устал от офиса или не хочет сидеть на месте — это плюс, а не минус.' },
              { icon: '🏙️', title: 'Знание города', desc: 'Через несколько месяцев начинаешь знать Казань лучше, чем большинство жителей.' },
            ].map((item, i) => (
              <div key={i} className="card flex gap-4">
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Вопросы об опыте работы</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className="card">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Составьте собственное мнение" subtitle="Попробуйте — и увидите, подходит ли вам эта работа. Регистрация за 5 минут." />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <ReadAlso exclude="/otzyvy" />
        </div>
      </section>
    </>
  )
}
