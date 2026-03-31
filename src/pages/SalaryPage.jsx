import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import CTABanner from '../components/CTABanner'
import ReadAlso from '../components/ReadAlso'
import Breadcrumb from '../components/Breadcrumb'
import { REFERRAL_LINK } from '../constants'

const faqItems = [
  { q: 'Как часто можно выводить деньги?', a: 'Каждый день. Никаких задержек до конца недели или месяца — заработали, запросили вывод, деньги на карте.' },
  { q: 'Нужно ли самостоятельно платить налоги?', a: 'Да, если работаете как самозанятый: ставка 4% при расчётах с физлицами и 6% с юрлицами. Формируется автоматически в приложении «Мой налог».' },
  { q: 'Как формируется сумма за конкретный заказ?', a: 'Базовая ставка + надбавка за расстояние + надбавки за условия (пиковые часы, погода). Итоговая сумма видна в приложении до принятия заказа.' },
  { q: 'Есть ли бонусы за выполнение плана?', a: 'Да, Яндекс Еда периодически запускает акции в Казани — за выполнение определённого числа заказов за период начисляются дополнительные бонусы.' },
]

export default function SalaryPage() {
  return (
    <>
      <SEO
        title="Зарплата и выплаты курьера Яндекс Еда в Казани — как устроена оплата"
        description="Как устроена зарплата курьеров Яндекс Еда в Казани: ежедневные выплаты, из чего складывается оплата, бонусы, самозанятость и налоги."
        faqItems={faqItems}
        breadcrumbs={[{ name: 'Зарплата и выплаты', path: '/zarplata' }]}
      />
      <Breadcrumb items={[{ name: 'Зарплата и выплаты', path: '/zarplata' }]} />

      <section className="bg-gradient-to-br from-yellow-50 to-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Зарплата и выплаты курьера<br />Яндекс Еда в Казани
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
            Здесь нет оклада — есть оплата за каждый выполненный заказ. Деньги можно выводить каждый день. Разберёмся, как именно это работает.
          </p>
          <a href={REFERRAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary-lg">
            Начать работу курьером →
          </a>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Как устроены выплаты</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: '📅', title: 'Ежедневно', desc: 'Можно выводить деньги каждый день — не нужно ждать конца недели или аванса.' },
              { icon: '💳', title: 'На карту или счёт', desc: 'На банковскую карту любого российского банка. Реквизиты указываются в приложении.' },
              { icon: '📱', title: 'Через приложение', desc: 'Запрос на вывод — пара нажатий в «Яндекс Про». Никаких заявлений и бухгалтеров.' },
              { icon: '⚡', title: 'Быстрое зачисление', desc: 'Обычно деньги поступают в течение нескольких часов после запроса.' },
            ].map((p, i) => (
              <div key={i} className="card text-center">
                <div className="text-4xl mb-3">{p.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Из чего складывается оплата за заказ</h2>
          <div className="space-y-4">
            {[
              { title: 'Базовая ставка', desc: 'Фиксированная сумма за факт выполненной доставки. Зависит от типа транспорта и зоны в Казани.', color: 'bg-blue-50 border-blue-200' },
              { title: 'Надбавка за расстояние', desc: 'Чем дальше адрес доставки — тем выше надбавка. Дальние маршруты в Азино, Горки, Дербышки оплачиваются больше, чем соседние дома.', color: 'bg-green-50 border-green-200' },
              { title: 'Повышение в пиковые часы', desc: 'Обед (12–14 ч) и вечер (18–22 ч) — время максимальной нагрузки. В эти часы тариф автоматически растёт.', color: 'bg-yellow-50 border-yellow-200' },
              { title: 'Погодная надбавка', desc: 'Дождь, снег, сильный ветер — в сложные погодные условия начисляется дополнительная компенсация.', color: 'bg-orange-50 border-orange-200' },
              { title: 'Акционные бонусы', desc: 'Периодически в Казани действуют акции: за выполнение определённого числа заказов за день или неделю — дополнительная выплата.', color: 'bg-purple-50 border-purple-200' },
            ].map((item, i) => (
              <div key={i} className={`rounded-2xl border p-5 ${item.color}`}>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-yellow-400">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl font-extrabold text-black mb-2">Деньги — каждый день</p>
          <p className="text-black/70 mb-5">Выводите заработок когда удобно. Начните работать в Казани прямо сейчас.</p>
          <a href={REFERRAL_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-yellow-400 font-bold py-4 px-8 rounded-xl text-lg">
            Начать работу курьером →
          </a>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Самозанятость и налоги</h2>
          <div className="card max-w-2xl">
            <p className="text-gray-700 leading-relaxed mb-3">
              Все курьеры Яндекс Еда работают как <strong>самозанятые</strong>. Это специальный налоговый режим для фрилансеров — без ИП и сложной отчётности.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2"><span className="text-yellow-500 font-bold flex-shrink-0">•</span>Регистрация бесплатна — через приложение «Мой налог»</li>
              <li className="flex gap-2"><span className="text-yellow-500 font-bold flex-shrink-0">•</span>Налог 4% при расчётах с физлицами, 6% с юрлицами</li>
              <li className="flex gap-2"><span className="text-yellow-500 font-bold flex-shrink-0">•</span>Налог начисляется автоматически и виден в приложении</li>
              <li className="flex gap-2"><span className="text-yellow-500 font-bold flex-shrink-0">•</span>Можно совмещать с официальным трудоустройством</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Вопросы о выплатах</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className="card">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link to="/skolko-zarabatyvaet" className="text-yellow-600 font-semibold hover:underline">
              Из чего складывается заработок курьера в Казани →
            </Link>
          </div>
        </div>
      </section>

      <CTABanner title="Начните зарабатывать без задержек" subtitle="Выводите деньги каждый день. Регистрация за 5 минут." />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <ReadAlso exclude="/zarplata" />
        </div>
      </section>
    </>
  )
}
