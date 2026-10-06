import { montarLinkWhatsapp } from '@/lib/whatsapp.js'

const planos = [
  {
    id: 'padrao',
    nome: 'Plano Bronze 🥉',
    tipo: 'Consultoria',
    preco: 149,
    desc: 'Foco total em treino individualizado.',
    periodo: '6 semanas',
    itens: [
      'Avaliação inicial',
      'Treino individualizado',
      'Suporte direto via WhatsApp',
      '1 Montagem de treino',
    ],
  },
  {
    id: 'premium',
    nome: 'Plano Silver 🥈',
    tipo: 'Consultoria VIP',
    destaque: true,

    preco: 249,
    desc: 'Acompanhamento próximo e correção de execução.',
    periodo: '6 semanas',
    itens: [
      'Tudo do Plano Bronze',
      'Suporte via WhatsApp',
      '2 Montagens de treino',
    ],
  },
  {
    id: 'Vip Premium',
    nome: 'Plano Gold 🥇',
    tipo: 'Consultoria VIP Dedicada ',
    preco: 379,
    desc: 'Acompanhamento próximo e correção de execução.',
    periodo: '18 semanas',
    itens: [
      'Tudo do Plano Silver',
      'Suporte via WhatsApp',
      '3 Montagens de treino',
      'Periodo de acompanhamento estendido',
    ],
  },
]

export default function Planos({ onEscolherPlano }) {
  return (
    <section id="planos">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-label">Planos</div>
          <h2>Escolha o acompanhamento ideal para o seu objetivo </h2>
          <p>Um objetivo: resultado real e sustentável.</p>
        </div>
        <div className="planos-grid">
          {planos.map((p) => (
            <div className={`plano${p.destaque ? ' destaque' : ''}`} key={p.id}>
              {p.destaque && <div className="plano-tag">Mais recomendado</div>}
              <div className="plano-nome">{p.tipo}</div>
              <div className="plano-tipo">{p.nome}</div>
              <div className="plano-periodo">{p.periodo}</div>
              <div className="plano-preco">R$ {p.preco}<span> a {p.periodo}</span></div>
              <ul className="plano-lista">
                {p.itens.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <a
                href={montarLinkWhatsapp(`Olá! Quero começar meu acompanhamento pelo Plano ${p.nome} (R$ ${p.preco} a cada 6 semanas) do Team Siqueira.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="plano-btn"
                onClick={() => onEscolherPlano?.(p.nome)}
              >
                Assinar {p.nome}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
