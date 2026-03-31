import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const BASE_URL = 'https://kurer-kazan.ru'

function setMeta(selector, content, attr = 'name') {
  let el = document.querySelector(`meta[${attr}="${selector}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, selector)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    document.head.appendChild(el)
  }
  el.href = href
}

function setJsonLd(id, data) {
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Курьер Казань — работа в Яндекс Еда',
  url: BASE_URL,
  description: 'Информационный сайт о работе курьером Яндекс Еда в Казани',
  inLanguage: 'ru',
}

export default function SEO({ title, description, faqItems, breadcrumbs }) {
  const { pathname } = useLocation()
  const canonical = `${BASE_URL}${pathname === '/' ? '' : pathname}`

  useEffect(() => {
    document.title = title

    setMeta('description', description)
    setMeta('robots', 'index, follow')

    // Open Graph
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:type', 'website', 'property')
    setMeta('og:url', canonical, 'property')
    setMeta('og:locale', 'ru_RU', 'property')
    setMeta('og:site_name', 'Курьер Казань', 'property')

    setLink('canonical', canonical)

    // WebSite schema
    setJsonLd('schema-website', websiteSchema)

    // Breadcrumbs schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      setJsonLd('schema-breadcrumb', {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: BASE_URL },
          ...breadcrumbs.map((b, i) => ({
            '@type': 'ListItem',
            position: i + 2,
            name: b.name,
            item: `${BASE_URL}${b.path}`,
          })),
        ],
      })
    } else {
      document.getElementById('schema-breadcrumb')?.remove()
    }

    // FAQ schema (FAQPage)
    if (faqItems && faqItems.length > 0) {
      setJsonLd('schema-faq', {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map(item => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      })
    } else {
      document.getElementById('schema-faq')?.remove()
    }
  }, [title, description, canonical])

  return null
}
