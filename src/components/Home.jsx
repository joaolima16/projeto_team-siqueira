import Header from '@/components/Header.jsx'
import Hero from '@/components/Hero.jsx'
import Sobre from '@/components/Sobre.jsx'
import ComoFunciona from '@/components/ComoFunciona.jsx'
import Depoimentos from '@/components/Depoimentos.jsx'
import PlanosContato from '@/components/PlanosContato.jsx'
import Footer from '@/components/Footer.jsx'
import WhatsAppButton from '@/components/WhatsAppButton.jsx'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Sobre />
        <ComoFunciona />
        <Depoimentos />
        <PlanosContato />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
