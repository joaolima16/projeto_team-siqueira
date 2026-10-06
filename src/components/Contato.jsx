"use client"

import { useState } from 'react'
import { montarLinkWhatsapp } from '@/lib/whatsapp.js'

export default function Contato({ planoSelecionado }) {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })
  const [plano, setPlano] = useState(planoSelecionado || 'Plano Bronze 🥉' || 'Plano Silver🥈' || 'Plano Gold🥇')
  const [enviado, setEnviado] = useState(false)

  function handleChange(e) {
    const { id, value } = e.target
    if (id === 'plano') {
      setPlano(value)
      return
    }
    setForm((f) => ({ ...f, [id]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const mensagem = [
      'Olá! Gostaria de iniciar minha transformação com o Team Siqueira.',
      '',
      `Nome: ${form.nome}`,
      `E-mail: ${form.email}`,
      `Plano de interesse: ${plano}`,
      form.mensagem ? `Objetivo: ${form.mensagem}` : '',
    ].filter(Boolean).join('\n')
    window.open(montarLinkWhatsapp(mensagem), '_blank', 'noopener,noreferrer')
    setEnviado(true)
  }

  return (
    <section id="contato" className="contato">
      <div className="wrap contato-grid">
        <div className="contato-info">
          <div className="sec-label">Contato</div>
          <h2>Comece sua transformação</h2>
          <p>Preencha o formulário ou chame direto pelos canais abaixo. A avaliação inicial é sem compromisso.</p>
          <div className="contato-canais">
            <div className="canal"><span className="canal-label">WhatsApp</span><a className="canal-valor" href={montarLinkWhatsapp('Olá! Gostaria de saber mais sobre a consultoria do Team Siqueira.')}>(11) 91090-1120</a></div>
            <div className="canal"><span className="canal-label">E-mail</span><a className="canal-valor" href="#">Danielsiqueira9911@gmail.com</a></div>
            <div className="canal"><span className="canal-label">Instagram</span><a className="canal-valor" href="https://www.instagram.com/siqueirafisic/" target="_blank" rel="noopener noreferrer">@siqueirafisic</a></div>
          </div>
        </div>

        {enviado ? (
          <div>
            <p className="depo-quote">Recebido! Abrindo o WhatsApp para finalizarmos os detalhes. Se não abriu, clique no número acima.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="campo">
              <label htmlFor="nome">Nome</label>
              <input id="nome" type="text" placeholder="Seu nome completo" value={form.nome} onChange={handleChange} required />
            </div>
            <div className="campo">
              <label htmlFor="email">E-mail</label>
              <input id="email" type="email" placeholder="seuemail@exemplo.com" value={form.email} onChange={handleChange} required />
            </div>
            <div className="campo">
              <label htmlFor="plano">Plano de interesse</label>
              <select id="plano" value={plano} onChange={handleChange}>
                <option>Plano Bronze 🥉</option>
                <option>Plano Prata 🥈</option>
                <option>Plano Ouro 🥇</option>
              </select>
            </div>
            <div className="campo">
              <label htmlFor="mensagem">Conte seu objetivo</label>
              <textarea id="mensagem" placeholder="Ex: emagrecimento, hipertrofia, prep de palco..." value={form.mensagem} onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="btn-primary">Enviar solicitação</button>
          </form>
        )}
      </div>
    </section>
  )
}
