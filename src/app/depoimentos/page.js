import Link from 'next/link'
import Header from '@/components/Header.jsx'
import Footer from '@/components/Footer.jsx'
import BeforeAfter from '@/components/BeforeAfter.jsx'
import WhatsAppButton from '@/components/WhatsAppButton.jsx'
import JsonLd from '@/components/JsonLd.jsx'
import { depoimentos } from '@/data/depoimentos.js'

export const metadata = {
  title: 'Depoimentos',
  description:
    'Veja todas as evoluções reais de alunos do Team Siqueira: resultados de emagrecimento, hipertrofia e preparação para competição.',
  alternates: {
    canonical: '/depoimentos',
  },
  openGraph: {
    title: 'Depoimentos | Team Siqueira',
    description:
      'Veja todas as evoluções reais de alunos do Team Siqueira.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.teamsiqueira.com/depoimentos',
    images: [
      {
        url: '/file.png',
        width: 1200,
        height: 630,
        alt: 'Depoimentos - Team Siqueira',
      },
    ],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://www.teamsiqueira.com/depoimentos/#collection',
  name: 'Depoimentos - Team Siqueira',
  description: 'Evoluções reais de alunos do Team Siqueira',
  url: 'https://www.teamsiqueira.com/depoimentos',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Team Siqueira',
    url: 'https://www.teamsiqueira.com',
  },
}

export default function DepoimentosPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Header />
      <main>
        <section className="depo-page">
          <div className="wrap">
            <Link href="/#depoimentos" className="depo-voltar">← Voltar para a página inicial</Link>
            <div className="sec-head">
              <div className="sec-label">Prova social</div>
              <h2>Todas as evoluções do Team Siqueira</h2>
              <p>{depoimentos.length} histórias reais de alunos que transformaram o corpo e a rotina com acompanhamento personalizado.</p>
            </div>
            <div className="depo-grid">
              {depoimentos.map((d) => (
                <div className="depo" key={d.nome}>
                  <BeforeAfter antes={d.fotoAntes} depois={d.fotoDepois} nome={d.nome} />
                  <div className="depo-result">{d.resultado}</div>
                  <p className="depo-quote">&ldquo;{d.quote}&rdquo;</p>
                  <div className="depo-meta">
                    <div className="depo-avatar">{d.iniciais}</div>
                    <div className="depo-name">{d.nome}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="depo-cta">
              <Link href="/#planos" className="btn-primary">Quero começar minha transformação</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
