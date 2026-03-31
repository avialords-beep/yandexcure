import { REFERRAL_LINK } from '../constants'

export default function CTABanner({ title = 'Готовы начать?', subtitle = 'Зарегистрируйтесь прямо сейчас и начните получать заказы уже сегодня.' }) {
  return (
    <section className="bg-yellow-400 py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-3">{title}</h2>
        <p className="text-black/70 text-lg mb-6">{subtitle}</p>
        <a
          href={REFERRAL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-yellow-400 font-bold py-4 px-10 rounded-xl text-lg shadow-lg hover:bg-gray-900 transition-colors"
        >
          Начать работу курьером →
        </a>
      </div>
    </section>
  )
}
