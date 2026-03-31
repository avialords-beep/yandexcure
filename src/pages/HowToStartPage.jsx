import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import CTABanner from '../components/CTABanner'
import ReadAlso from '../components/ReadAlso'
import Breadcrumb from '../components/Breadcrumb'
import { REFERRAL_LINK } from '../constants'

const faqItems = [
  { q: 'Сколько времени занимает регистрация?', a: 'Заполнить анкету и загрузить документы — 15–20 минут. Проверка документов — 1–2 рабочих дня. Итого от регистрации до первого заказа — 2–3 дня.' },
  { q: 'Нужно ли проходить обучение перед первым заказом?', a: 'Очного обучения нет. В приложении есть вводные материалы — как принимать заказы, как работать с навигацией, что делать в нестандартных ситуациях.' },
  { q: 'Что такое самозанятость и обязательна ли она?', a: 'Самозанятость — налоговый режим для фрилансеров. Обязательна для получения выплат. Налог 4–6% от дохода, регистрация бесплатна в приложении «Мой налог».' },
  { q: 'Можно ли зарегистрироваться, если я уже работаю официально?', a: 'Да. Самозанятость совместима с официальным трудоустройством. Уточните у своего работодателя, нет ли ограничений в трудовом договоре.' },
]

const steps = [
  { n: 1, time: '5 мин', title: 'Заполните анкету', desc: 'Перейдите по ссылке и введите имя, телефон, выберите тип транспорта и район работы в Казани.', tip: 'Используйте актуальный номер — на него придёт код подтверждения.' },
  { n: 2, time: '2 мин', title: 'Подтвердите телефон', desc: 'Получите СМС с кодом — введите его для создания аккаунта.', tip: 'Запомните данные для входа в приложение.' },
  { n: 3, time: '5 мин', title: 'Загрузите документы', desc: 'Паспорт и ИНН — фото в приложении. Для авто — водительское удостоверение и ОСАГО.', tip: 'Документы должны быть чёткими — это ускорит проверку.' },
  { n: 4, time: '10 мин', title: 'Оформите самозанятость', desc: 'Если ещё нет — скачайте «Мой налог» и зарегистрируйтесь. Бесплатно. Яндекс Еда помогает с процессом.', tip: 'Налог 4–6% начисляется только с фактического заработка.' },
  { n: 5, time: '1–2 дня', title: 'Дождитесь проверки', desc: 'Служба безопасности проверит данные. После одобрения — уведомление на телефон.', tip: 'В большинстве случаев проверка занимает 1 рабочий день.' },
  { n: 6, time: '5 мин', title: 'Установите приложение', desc: 'Скачайте «Яндекс Про» из App Store или Google Play. Войдите с теми же данными.', tip: 'Здесь вы будете принимать заказы, следить за маршрутом и выводить деньги.' },
  { n: 7, time: '2 мин', title: 'Выберите первые слоты', desc: 'Выберите удобное время в Казани. Начните с одного-двух слотов, чтобы освоиться.', tip: 'Вечерние слоты 18–22 ч — самые загруженные. Хорошо для первого опыта.' },
  { n: 8, time: 'Когда готовы', title: 'Выйдите на первый заказ', desc: 'В активном слоте приложение начнёт предлагать заказы. Примите первый — и следуйте инструкциям.', tip: 'Не переживайте: приложение подскажет каждый шаг.' },
]

export default function HowToStartPage() {
  return (
    <>
      <SEO
        title="Как начать работать курьером Яндекс Еда в Казани — пошаговая инструкция"
        description="Пошаговая инструкция: как стать курьером Яндекс Еда в Казани. Регистрация, документы, самозанятость, первый заказ. Весь процесс за 2–3 дня."
        faqItems={faqItems}
        breadcrumbs={[{ name: 'Как начать', path: '/kak-nachat' }]}
      />
      <Breadcrumb items={[{ name: 'Как начать', path: '/kak-nachat' }]} />

      <section className="bg-gradient-to-br from-yellow-50 to-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Как начать работать<br />курьером Яндекс Еда в Казани
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
            8 шагов от регистрации до первого заказа. Весь процесс — 2–3 дня. Никакого опыта не нужно.
          </p>
          <a href={REFERRAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary-lg">
            Начать работу курьером →
          </a>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">8 шагов до первого заказа</h2>
          <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.n} className="bg-white border border-gray-100 rounded-2xl p-5 flex gap-5 items-start shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center font-extrabold text-black text-xl">{s.n}</div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="font-bold text-gray-900 text-lg">{s.title}</h3>
                    <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">⏱ {s.time}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{s.desc}</p>
                  <div className="bg-yellow-50 border border-yellow-100 rounded-xl px-4 py-2">
                    <p className="text-yellow-800 text-xs"><span className="font-bold">💡</span> {s.tip}</p>
                  </div>
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

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Что понадобится</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { icon: '📱', title: 'Смартфон', desc: 'Android или iOS с интернетом. Для приложения Яндекс Про.' },
              { icon: '🪪', title: 'Паспорт', desc: 'Основной документ. Загружается фото в приложении.' },
              { icon: '🔢', title: 'ИНН', desc: 'Нужен для оформления самозанятости.' },
              { icon: '🎒', title: 'Термосумка', desc: 'Обязательна для сохранения температуры еды.' },
              { icon: '📲', title: 'Мой налог', desc: 'Приложение для регистрации самозанятости.' },
              { icon: '💪', title: 'Готовность начать', desc: 'Всё остальное — в процессе. Первый заказ объяснит лучше любой инструкции.' },
            ].map((item, i) => (
              <div key={i} className="card text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Вопросы о начале работы</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className="card">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm">
            <Link to="/faq" className="text-yellow-600 font-semibold hover:underline">Больше вопросов и ответов →</Link>
          </p>
        </div>
      </section>

      <CTABanner title="Готовы? Регистрация займёт 5 минут" subtitle="Заполните анкету — и уже через 2 дня вы будете получать первые заказы в Казани." />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <ReadAlso exclude="/kak-nachat" />
        </div>
      </section>
    </>
  )
}
