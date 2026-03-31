import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl mb-4">🚴</div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">Страница не найдена</h1>
        <p className="text-gray-600 mb-8">Курьер здесь не проезжал. Возможно, страница переехала.</p>
        <Link to="/" className="btn-primary-lg">
          На главную →
        </Link>
      </div>
    </div>
  )
}
