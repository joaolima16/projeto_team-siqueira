const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.teamsiqueira.com').replace(/\/$/, '')

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
        ],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
