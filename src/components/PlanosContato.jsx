"use client"

import { useState } from 'react'
import Planos from '@/components/Planos.jsx'
import Contato from '@/components/Contato.jsx'

export default function PlanosContato() {
  const [planoSelecionado, setPlanoSelecionado] = useState(null)

  return (
    <>
      <Planos onEscolherPlano={setPlanoSelecionado} />
      <Contato planoSelecionado={planoSelecionado} />
    </>
  )
}
