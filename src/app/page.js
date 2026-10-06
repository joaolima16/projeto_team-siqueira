import Home from '@/components/Home.jsx'
import JsonLd from '@/components/JsonLd.jsx'

export const metadata = {
  title: 'Team Siqueira | Consultoria Fitness Online de Alta Performance',
  description:
    'Consultoria fitness online do fisiculturista Daniel Siqueira. Treinos 100% individualizados, acompanhamento real e resultados que aparecem.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Team Siqueira | Consultoria Fitness Online de Alta Performance',
    description:
      'Treinos 100% individualizados, acompanhamento real e resultados que aparecem.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.teamsiqueira.com',
    siteName: 'Team Siqueira',
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
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.teamsiqueira.com/#business',
  name: 'Team Siqueira',
  description: 'Consultoria fitness online e presencial do fisiculturista Daniel Siqueira',
  url: 'https://www.teamsiqueira.com',
  logo: 'https://www.teamsiqueira.com/file.png',
  image: 'https://www.teamsiqueira.com/file.png',
  priceRange: '$$',
  telephone: '+55-11-91090-1120',
  email: 'danielsiqueira9911@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    addressCountry: 'BR',
  },
  areaServed: [
    {
      '@type': 'Country',
      name: 'Brasil',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'São Paulo',
    },
  ],
  sameAs: ['https://www.instagram.com/siqueirafisic/'],
  founder: {
    '@type': 'Person',
    name: 'Daniel Siqueira',
    jobTitle: 'Personal Trainer & Fisiculturista',
    sameAs: 'https://www.instagram.com/siqueirafisic/',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Planos de Consultoria',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Plano Bronze',
        price: '149',
        priceCurrency: 'BRL',
        availability: 'https://schema.org/InStock',
        itemOffered: {
          '@type': 'Service',
          name: 'Consultoria Online',
          description: 'Treino 100% individualizado com acompanhamento semanal',
        },
      },
      {
        '@type': 'Offer',
        name: 'Plano Silver',
        price: '249',
        priceCurrency: 'BRL',
        availability: 'https://schema.org/InStock',
        itemOffered: {
          '@type': 'Service',
          name: 'Consultoria Presencial',
          description: 'Acompanhamento presencial em São Paulo',
        },
      },
      {
        '@type': 'Offer',
        name: 'Plano Gold',
        price: '379',
        priceCurrency: 'BRL',
        availability: 'https://schema.org/InStock',
        itemOffered: {
          '@type': 'Service',
          name: 'Consultoria VIP Dedicada',
          description: 'Acompanhamento estendido com suporte via WhatsApp e montagens de treino',
        },
      },
    ],
  },
}

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Home />
    </>
  )
}
