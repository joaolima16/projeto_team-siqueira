import './globals.css'
import './main.css'

export const metadata = {
  metadataBase: new URL('https://www.teamsiqueira.com'),
  title: {
    default: 'Team Siqueira | Consultoria Fitness Online de Alta Performance',
    template: '%s | Team Siqueira',
  },
  description:
    'Consultoria fitness online e presencial do fisiculturista Daniel Siqueira. Treinos 100% individualizados, acompanhamento real e resultados que aparecem.',
  keywords: [
    'consultoria fitness',
    'personal trainer',
    'Daniel Siqueira',
    'treino online',
    'hipertrofia',
    'emagrecimento',
    'preparação física',
    'fisiculturismo',
  ],
  authors: [{ name: 'Team Siqueira' }],
  creator: 'Daniel Siqueira',
  publisher: 'Team Siqueira',
  alternates: {
    canonical: '/',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Team Siqueira | Consultoria Fitness Online de Alta Performance',
    description:
      'Treinos 100% individualizados, acompanhamento real e resultados que aparecem. Consultoria fitness online e presencial.',
    url: 'https://www.teamsiqueira.com',
    siteName: 'Team Siqueira',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/file.png',
        width: 1200,
        height: 630,
        alt: 'Team Siqueira - Consultoria Fitness',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Team Siqueira | Consultoria Fitness Online',
    description:
      'Treinos 100% individualizados, acompanhamento real e resultados que aparecem.',
    images: ['/file.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#1e3a8a" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Team Siqueira" />
        <meta name="application-name" content="Team Siqueira" />
        <meta name="msapplication-TileColor" content="#1e3a8a" />
        <meta name="msapplication-TileImage" content="/mstile-150x150.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Pular para o conteúdo principal</a>
        {children}
      </body>
    </html>
  )
}
