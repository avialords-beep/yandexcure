import { Link } from 'react-router-dom'

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto">
        <ol className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
          <li>
            <Link to="/" className="hover:text-gray-800 transition-colors">Главная</Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-gray-300">/</span>
              {i === items.length - 1 ? (
                <span className="text-gray-700 font-medium">{item.name}</span>
              ) : (
                <Link to={item.path} className="hover:text-gray-800 transition-colors">{item.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
