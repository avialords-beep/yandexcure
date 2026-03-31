import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import CTABanner from '../components/CTABanner'
import ReadAlso from '../components/ReadAlso'
import Breadcrumb from '../components/Breadcrumb'
import { REFERRAL_LINK } from '../constants'

const faqItems = [
  { q: 'Нужен ли опыт работы курьером?', a: 'Нет. Яндекс Еда принимает новичков без опыта. Всё необходимое объясняется в приложении «Яндекс Про» перед началом работы.' },
  { q: 'Можно ли работать без ИП?', a: 'Да. Достаточно зарегистрироваться как самозанятый — это бесплатно и занимает несколько минут в приложении «Мой налог».' },
  { q: 'Какой транспорт можно использовать?', a: 'Пешком, велосипед, самокат, мотоцикл или автомобиль. Тип транспорта влияет на доступные маршруты и зону работы.' },
  { q: 'Как быстро начать принимать заказы?', a: 'После регистрации и проверки документов — обычно через 1–2 рабочих дня. В некоторых случаях быстрее.' },
]

export default function VacanciesPage() {
  return (
    <>
      <SEO
        title="Вакансия курьера Яндекс Еда в Казани — как устроиться на работу"
        description="Открытая вакансия курьера Яндекс Еда в Казани. Требования, документы, процесс оформления. Без опыта, быстрый старт, регистрация онлайн."
        faqItems={faqItems}
        breadcrumbs={[{ name: 'Вакансии', path: '/vacansii' }]}
      />
      <Breadcrumb items={[{ name: 'Вакансии', path: '/vacansii' }]} />

      <section className="bg-gradient-to-br from-yellow-50 to-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
            ✅ Вакансия открыта в Казани
          </span>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Вакансия курьера Яндекс Еда в Казани
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
            Яндекс Еда принимает новых курьеров в Казани. Опыт не нужен. Регистрация онлайн, проверка документов — 1–2 дня.
          </p>
          <a href={REFERRAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary-lg">
            Откликнуться на вакансию →
          </a>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Требования</h2>
          <p className="section-subtitle">Минимум условий — максимум доступности.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: '🎂', title: 'Возраст от 18 лет', desc: 'Без верхнего возрастного ограничения.' },
              { icon: '📱', title: 'Смартфон', desc: 'Android или iOS с доступом в интернет для работы в приложении.' },
              { icon: '🇷🇺', title: 'Право на работу', desc: 'Гражданство РФ или действующее разрешение на работу.' },
              { icon: '📋', title: 'Самозанятость', desc: 'Регистрация как самозанятый — обязательна для получения выплат.' },
              { icon: '🎒', title: 'Термосумка', desc: 'Обязательна. Можно купить самостоятельно.' },
            ].map((r, i) => (
              <div key={i} className="card flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">{r.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{r.title}</h3>
                  <p className="text-gray-500 text-sm">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Как устроиться: шаг за шагом</h2>
          <div className="space-y-4">
            {[
              { n: 1, title: 'Заполните анкету', desc: 'Перейдите по ссылке, укажите имя, телефон, тип транспорта и район работы в Казани. Занимает около 5 минут.' },
              { n: 2, title: 'Подтвердите номер телефона', desc: 'Получите СМС с кодом и подтвердите — аккаунт создаётся автоматически.' },
              { n: 3, title: 'Загрузите документы', desc: 'Паспорт и ИНН — фото прямо в приложении. Для авто — водительское удостоверение и ОСАГО.' },
              { n: 4, title: 'Зарегистрируйтесь как самозанятый', desc: 'Если ещё не зарегистрированы — через приложение «Мой налог». Бесплатно, занимает несколько минут.' },
              { n: 5, title: 'Дождитесь проверки', desc: 'Обычно 1–2 рабочих дня. После одобрения — уведомление на телефон.' },
              { n: 6, title: 'Установите приложение и выберите первые слоты', desc: 'Скачайте «Яндекс Про», войдите в аккаунт, выберите удобное время и район Казани.' },
            ].map(s => (
              <div key={s.n} className="bg-white border border-gray-100 rounded-2xl p-5 flex gap-5 items-start shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center font-extrabold text-black text-lg">{s.n}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href={REFERRAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary-lg">
              Начать работу курьером →
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Что важно понимать до начала</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: '📦 Что вы будете делать', content: 'Забирать готовый заказ из ресторана или магазина и доставлять его по адресу. Приложение показывает маршрут и детали каждого заказа.' },
              { title: '💼 Формат занятости', content: 'Работа через самозанятость. Вы не штатный сотрудник — нет трудовой книжки, нет КЗоТ-обязательств. Но и жёсткого расписания тоже нет.' },
              { title: '⏱ Слоты', content: 'Работаете по выбранным слотам. Доступны утренние, дневные и вечерние слоты по всей Казани. Минимальный слот — 2 часа.' },
              { title: '🏙️ Зоны Казани', content: 'Город разбит на зоны. Вы работаете в выбранной зоне: Вахитовский, Советский, Ново-Савиновский, Приволжский и других районах.' },
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
          <h2 className="section-title">Вопросы о вакансии</h2>
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

      <CTABanner title="Подайте заявку прямо сейчас" subtitle="Регистрация 5 минут. Проверка — 1–2 дня. Первые заказы — послезавтра." />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <ReadAlso exclude="/vacansii" />
        </div>
      </section>
    </>
  )
}
