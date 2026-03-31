import SEO from '../components/SEO'
import CTABanner from '../components/CTABanner'
import ReadAlso from '../components/ReadAlso'
import Breadcrumb from '../components/Breadcrumb'
import { REFERRAL_LINK } from '../constants'

const faqItems = [
  { q: 'Нужно ли медицинское заключение?', a: 'Для большинства форматов работы — нет. При работе на автомобиле достаточно стандартного водительского удостоверения.' },
  { q: 'Обязательна ли самозанятость?', a: 'Да, для получения выплат нужна регистрация как самозанятый. Это бесплатно, занимает несколько минут в приложении «Мой налог».' },
  { q: 'Что нужно для работы на автомобиле?', a: 'Водительское удостоверение, полис ОСАГО и регистрация транспортного средства — всё загружается через приложение при регистрации.' },
  { q: 'Есть ли возрастные ограничения?', a: 'Минимальный возраст — 18 лет. Верхнего ограничения нет.' },
]

export default function ConditionsPage() {
  return (
    <>
      <SEO
        title="Условия работы курьером Яндекс Еда в Казани — требования и документы"
        description="Условия работы курьером Яндекс Еда в Казани: возраст, документы, самозанятость, слоты, зоны доставки. Всё что нужно для старта."
        faqItems={faqItems}
        breadcrumbs={[{ name: 'Условия работы', path: '/usloviya' }]}
      />
      <Breadcrumb items={[{ name: 'Условия работы', path: '/usloviya' }]} />

      <section className="bg-gradient-to-br from-yellow-50 to-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Условия работы курьером<br />Яндекс Еда в Казани
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
            Минимум требований, понятные правила. Узнайте, что нужно для старта в Казани.
          </p>
          <a href={REFERRAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary-lg">
            Начать работу курьером →
          </a>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Основные требования</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { icon: '🎂', title: 'Возраст от 18 лет', desc: 'Без верхнего ограничения по возрасту.' },
              { icon: '📱', title: 'Смартфон с интернетом', desc: 'Нужен для работы в приложении «Яндекс Про». Android или iOS.' },
              { icon: '🇷🇺', title: 'Право на работу', desc: 'Гражданство РФ или действующее разрешение на работу.' },
              { icon: '📋', title: 'Самозанятость', desc: 'Регистрация обязательна — это условие для получения выплат.' },
            ].map((r, i) => (
              <div key={i} className="card flex gap-4 items-start">
                <span className="text-3xl flex-shrink-0">{r.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{r.title}</h3>
                  <p className="text-gray-600 text-sm">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Документы для регистрации</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100">
            <table className="w-full text-sm bg-white">
              <thead>
                <tr className="bg-yellow-50 border-b border-gray-100">
                  <th className="text-left px-5 py-3 font-bold text-gray-900">Транспорт</th>
                  <th className="text-left px-5 py-3 font-bold text-gray-900">Документы</th>
                  <th className="text-left px-5 py-3 font-bold text-gray-900">Примечание</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  { type: '🚶 Пешком', docs: 'Паспорт, ИНН', note: 'Самый быстрый старт' },
                  { type: '🚲 Велосипед / Самокат', docs: 'Паспорт, ИНН', note: 'Нужна термосумка' },
                  { type: '🏍️ Мотоцикл', docs: 'Паспорт, ИНН, ВУ, ОСАГО', note: 'Документы на ТС' },
                  { type: '🚗 Автомобиль', docs: 'Паспорт, ИНН, ВУ, ОСАГО, СТС', note: 'Возможна проверка авто' },
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="px-5 py-3 font-medium text-gray-900">{row.type}</td>
                    <td className="px-5 py-3 text-gray-600">{row.docs}</td>
                    <td className="px-5 py-3 text-gray-400 text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Как устроена работа</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: '🕐 Слоты', content: 'Вы работаете в заранее выбранных слотах — временных промежутках от 2 часов. Слоты выбираются в приложении на несколько дней вперёд. Никаких фиксированных дней недели.' },
              { title: '🏙️ Зоны в Казани', content: 'Казань разделена на рабочие зоны: Вахитовский, Советский, Ново-Савиновский, Приволжский, Авиастроительный и другие. Вы выбираете удобную зону.' },
              { title: '📦 Что нужно делать', content: 'Принять заказ → приехать в заведение → забрать готовую еду → доставить по адресу. Весь процесс сопровождается навигацией и подсказками в приложении.' },
              { title: '⭐ Рейтинг', content: 'После доставки клиент может поставить оценку. Высокий рейтинг даёт приоритет при получении слотов и заказов.' },
              { title: '🆘 Поддержка', content: 'Круглосуточная поддержка в чате приложения. Помогут при проблеме с заказом, маршрутом или документами.' },
              { title: '🎒 Термосумка', content: 'Обязательный атрибут — сохраняет температуру еды при доставке. Приобретается самостоятельно.' },
            ].map((item, i) => (
              <div key={i} className="card">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Вопросы об условиях</h2>
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

      <CTABanner title="Всё прозрачно — начните работать сегодня" subtitle="Минимум требований, быстрая проверка, первые заказы уже завтра." />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <ReadAlso exclude="/usloviya" />
        </div>
      </section>
    </>
  )
}
