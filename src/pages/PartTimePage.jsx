import SEO from '../components/SEO'
import CTABanner from '../components/CTABanner'
import ReadAlso from '../components/ReadAlso'
import Breadcrumb from '../components/Breadcrumb'
import { REFERRAL_LINK } from '../constants'

const faqItems = [
  { q: 'Есть ли минимальное количество часов в неделю?', a: 'Жёстких требований нет. Можно брать 1–2 слота в неделю. Чем больше активных слотов — тем выше приоритет при их распределении.' },
  { q: 'Можно ли работать только по выходным?', a: 'Да. По выходным в Казани традиционно больше заказов — это один из наиболее востребованных форматов подработки.' },
  { q: 'Что будет, если не выйти в назначенный слот?', a: 'Нужно заранее отменить слот в приложении. Своевременная отмена — без последствий. Частые отмены в последний момент могут повлиять на рейтинг.' },
  { q: 'Можно совмещать с официальным трудоустройством?', a: 'Да. Самозанятость не конфликтует с трудовым договором. Рекомендуем уточнить у своего работодателя, нет ли ограничений в вашем конкретном договоре.' },
]

export default function PartTimePage() {
  return (
    <>
      <SEO
        title="Подработка курьером Яндекс Еда в Казани — гибкий график"
        description="Ищете подработку в Казани? Курьер Яндекс Еда — работайте когда удобно: 2–4 часа в день или по выходным. Для студентов, совместителей и всех, кто хочет допдоход."
        faqItems={faqItems}
        breadcrumbs={[{ name: 'Подработка', path: '/podrabotka' }]}
      />
      <Breadcrumb items={[{ name: 'Подработка', path: '/podrabotka' }]} />

      <section className="bg-gradient-to-br from-yellow-50 to-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
            Гибкий график · Казань
          </span>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Подработка курьером в Казани<br />— без привязки к расписанию
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
            Работайте 2–4 часа в день или только по выходным. Вы сами решаете, сколько слотов брать — никаких обязательных смен и звонков от менеджера.
          </p>
          <a href={REFERRAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary-lg">
            Начать подработку →
          </a>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Кому подходит подработка курьером</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { icon: '📚', title: 'Студент', desc: 'Берёте слоты между парами или вечером. В Казани это популярный вариант — КФУ, КНИТУ, КАИ и другие вузы рядом с жилыми и торговыми районами.' },
              { icon: '🏠', title: 'Есть основная работа', desc: 'Несколько вечерних слотов в будни или пара часов в выходные — без жёсткого расписания и обязательного присутствия.' },
              { icon: '👨‍👩‍👧', title: 'Есть семья', desc: 'Гибкий график позволяет строить работу вокруг домашних дел. Беrete слоты когда дети в садике или школе — утром или в дневное время.' },
              { icon: '🔄', title: 'В поиске постоянной работы', desc: 'Курьерство обеспечивает доход пока вы ищете постоянное место. Можно работать столько, сколько нужно, и прекратить в любой момент.' },
            ].map((s, i) => (
              <div key={i} className="card flex gap-4">
                <span className="text-3xl flex-shrink-0">{s.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Как работает гибкий график</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '📅', title: 'Выбираете слоты заранее', desc: 'В приложении доступны слоты на несколько дней вперёд. Выбираете удобное время и район Казани — и работаете по плану.' },
              { icon: '🔄', title: 'Меняете расписание', desc: 'Слоты можно заблаговременно отменить без последствий. На следующей неделе берёте другое время — никаких объяснений.' },
              { icon: '💸', title: 'Выводите деньги когда хотите', desc: 'Заработали — вывели на карту. Доступно ежедневно. Не нужно ждать конца недели или месяца.' },
            ].map((item, i) => (
              <div key={i} className="card">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-yellow-400">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl font-bold text-black mb-2">Работаете когда удобно</p>
          <p className="text-black/70 mb-5">Дополнительный заработок в Казани без фиксированного расписания</p>
          <a href={REFERRAL_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-yellow-400 font-bold py-4 px-8 rounded-xl text-lg">
            Начать подработку →
          </a>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Популярные слоты для подработки в Казани</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { time: 'Утро 8:00–12:00', emoji: '🌅', tip: 'Завтраки и деловые обеды. Хорошо работает в центре и офисных районах — Вахитовский, часть Советского.' },
              { time: 'Обед 12:00–15:00', emoji: '☀️', tip: 'Самое загруженное время. Много коротких заказов подряд. Удобно пешим и велосипедным курьерам.' },
              { time: 'Вечер 18:00–22:00', emoji: '🌆', tip: 'Пиковая нагрузка — самые высокие тарифы. Идеально как подработка после основной работы.' },
            ].map((slot, i) => (
              <div key={i} className="card border-2 border-yellow-100">
                <div className="text-3xl mb-2">{slot.emoji}</div>
                <h3 className="font-bold text-gray-900 mb-2">{slot.time}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{slot.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Вопросы о подработке</h2>
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

      <CTABanner title="Начните подрабатывать прямо сейчас" subtitle="Первые заказы — уже завтра. Регистрация за 5 минут." />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <ReadAlso exclude="/podrabotka" />
        </div>
      </section>
    </>
  )
}
