import SEO from '../components/SEO'
import CTABanner from '../components/CTABanner'
import ReadAlso from '../components/ReadAlso'
import Breadcrumb from '../components/Breadcrumb'
import { REFERRAL_LINK } from '../constants'

const faqItems = [
  { q: 'Можно ли менять тип транспорта после регистрации?', a: 'Да. Тип транспорта меняется в настройках профиля. При добавлении автомобиля нужно загрузить водительские документы.' },
  { q: 'Что лучше выбрать для работы в центре Казани?', a: 'В центре (Вахитовский район) хорошо работают пешие и велосипедные курьеры — плотная застройка, близкие адреса. Для авто центр менее удобен из-за парковки.' },
  { q: 'Нужна ли термосумка при любом типе транспорта?', a: 'Да, термосумка обязательна для всех курьеров. Она сохраняет температуру еды при доставке.' },
  { q: 'Какой формат самый выгодный?', a: 'Зависит от ситуации. Автомобиль даёт доступ к длинным маршрутам с высоким тарифом, но есть расходы на топливо. Велосипед летом — хороший баланс скорости и затрат.' },
]

const formats = [
  {
    icon: '🚶', title: 'Пешком', tag: 'Без вложений', tagColor: 'bg-green-100 text-green-700',
    pros: ['Не нужен транспорт', 'Старт сразу', 'Удобен в центре Казани'],
    cons: ['Только ближние маршруты', 'Меньше заказов в час'],
    desc: 'Оптимальный вариант для старта без затрат. Работает в плотных районах Казани: Вахитовский, центр, часть Ново-Савиновского. Заказы — ближние, пешеходные маршруты.',
    best: 'Начинающим, студентам, центр Казани',
  },
  {
    icon: '🚲', title: 'Велосипед', tag: 'Популярный', tagColor: 'bg-blue-100 text-blue-700',
    pros: ['Быстрее пешего', 'Большая зона охвата', 'Весна-осень отлично'],
    cons: ['Нужен велосипед', 'Сложно зимой'],
    desc: 'На велосипеде можно охватывать большие зоны и брать заказы с более высоким тарифом. Хорошо работает в Казани с апреля по октябрь. Зимой часть курьеров переходит на пешие маршруты или авто.',
    best: 'Активным, в тёплый сезон',
  },
  {
    icon: '🛴', title: 'Самокат', tag: 'Для города', tagColor: 'bg-purple-100 text-purple-700',
    pros: ['Манёвренность', 'Нет проблем с парковкой', 'Быстро в плотном трафике'],
    cons: ['Только тёплый сезон', 'Ограничения по грузу'],
    desc: 'Электросамокат — удобный городской формат в тёплое время года. Хорошо работает в центре Казани: можно объезжать пробки и быстро переключаться между адресами.',
    best: 'В тёплый сезон, центр и плотные кварталы',
  },
  {
    icon: '🚗', title: 'Автомобиль', tag: 'Дальние маршруты', tagColor: 'bg-yellow-100 text-yellow-700',
    pros: ['Круглый год', 'Длинные маршруты = высокая оплата', 'Доставка по всей Казани'],
    cons: ['Расходы на бензин', 'Парковка в центре', 'Нужны документы'],
    desc: 'На автомобиле вы можете брать заказы по всей Казани — в Горки, Азино, Дербышки, Старое Аракчино. Длинные маршруты оплачиваются значительно выше. Работа в любую погоду.',
    best: 'У кого есть авто, отдалённые районы',
  },
  {
    icon: '🏍️', title: 'Мотоцикл', tag: 'Быстрый', tagColor: 'bg-orange-100 text-orange-700',
    pros: ['Высокая скорость', 'Объезд пробок', 'Работа в дождь'],
    cons: ['Сложно зимой', 'Нужны права и документы'],
    desc: 'Мотоцикл или мопед — один из наиболее эффективных форматов по скорости. Позволяет брать больше заказов за слот, особенно в загруженные часы.',
    best: 'Опытным, кто хочет работать быстро',
  },
]

export default function FormatsPage() {
  return (
    <>
      <SEO
        title="Форматы работы курьером Яндекс Еда в Казани — пешком, велосипед, авто"
        description="Сравните форматы работы курьером в Казани: пешком, велосипед, самокат, мотоцикл, автомобиль. Плюсы, минусы, для кого подходит каждый."
        faqItems={faqItems}
        breadcrumbs={[{ name: 'Форматы работы', path: '/formaty' }]}
      />
      <Breadcrumb items={[{ name: 'Форматы работы', path: '/formaty' }]} />

      <section className="bg-gradient-to-br from-yellow-50 to-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Форматы работы курьером<br />Яндекс Еда в Казани
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
            Пешком, на велосипеде, самокате, мотоцикле или автомобиле — каждый формат имеет свои особенности. Разберёмся, что подходит именно вам.
          </p>
          <a href={REFERRAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary-lg">
            Начать работу курьером →
          </a>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Сравнение форматов</h2>
          <div className="space-y-5">
            {formats.map((f, i) => (
              <div key={i} className="card border border-gray-100">
                <div className="flex flex-col md:flex-row md:items-start gap-5">
                  <div className="text-5xl flex-shrink-0">{f.icon}</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{f.title}</h3>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${f.tagColor}`}>{f.tag}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{f.desc}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
                      <div>
                        <p className="text-xs font-semibold text-green-600 uppercase mb-2">Плюсы</p>
                        <ul className="space-y-1">
                          {f.pros.map((p, j) => <li key={j} className="text-sm text-gray-700 flex gap-2"><span className="text-green-500">✓</span>{p}</li>)}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-red-500 uppercase mb-2">Минусы</p>
                        <ul className="space-y-1">
                          {f.cons.map((c, j) => <li key={j} className="text-sm text-gray-700 flex gap-2"><span className="text-red-400">−</span>{c}</li>)}
                        </ul>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 bg-gray-50 rounded-lg px-3 py-2">
                      <span className="font-semibold">Подходит:</span> {f.best}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-yellow-400">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl font-bold text-black mb-2">Выбрали формат? Регистрируйтесь</p>
          <p className="text-black/70 mb-5">Тип транспорта всегда можно изменить позже в настройках.</p>
          <a href={REFERRAL_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-yellow-400 font-bold py-4 px-8 rounded-xl text-lg">
            Начать работу курьером →
          </a>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Вопросы о форматах работы</h2>
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

      <CTABanner title="Выберите свой формат и начните работать" subtitle="Зарегистрируйтесь — и уже завтра принимайте первые заказы в Казани." />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <ReadAlso exclude="/formaty" />
        </div>
      </section>
    </>
  )
}
