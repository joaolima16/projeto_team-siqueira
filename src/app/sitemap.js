const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.teamsiqueira.com').replace(/\/$/, '')

const routes = [
  {
    path: '/',
    changeFrequency: 'weekly',
    priority: 1,
  },
  {
    path: '/depoimentos',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
]

export default function sitemap() {
  const lastModified = new Date()

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path === '/' ? '' : path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
