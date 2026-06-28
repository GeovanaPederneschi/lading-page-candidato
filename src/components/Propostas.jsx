const propostas = [
  {
    id: 'saude',
    titulo: 'Saúde de qualidade',
    descricao:
      'UPAs abertas 24 horas, mais médicos de família nos bairros e programa de saúde mental nas escolas públicas.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    id: 'educacao',
    titulo: 'Educação que transforma',
    descricao:
      'Ampliação de creches, escola de tempo integral nos bairros periféricos e bolsas de estudo para filhos de trabalhadores.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <line x1="12" y1="6" x2="12" y2="12" />
        <line x1="9" y1="9" x2="15" y2="9" />
      </svg>
    ),
  },
  {
    id: 'seguranca',
    titulo: 'Comunidade mais segura',
    descricao:
      'Câmeras de monitoramento nos bairros, policiamento comunitário e programa de iluminação nas vias públicas.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    id: 'emprego',
    titulo: 'Trabalho digno para todos',
    descricao:
      'Incentivos fiscais para micro-empresas, cursos de qualificação profissional gratuitos e central de empregos municipal.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
]

export default function Propostas() {
  return (
    <section id="propostas" className="py-20 lg:py-28 bg-[#E8F5EE]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-[#F5C400]" />
            <span className="text-[#1A6B3C] text-xs font-bold uppercase tracking-widest">
              Bandeiras de Carlos
            </span>
            <span className="w-8 h-0.5 bg-[#F5C400]" />
          </div>
          <h2 className="font-serif font-black text-4xl sm:text-5xl text-gray-900 mb-5">
            Minhas Propostas
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Cada bandeira foi construída ouvindo moradores, trabalhadores e
            lideranças da nossa comunidade. São compromissos reais, não
            promessas de palanque.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {propostas.map((p, i) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-[#1A6B3C]/15 flex flex-col gap-5"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[#E8F5EE] flex items-center justify-center text-[#1A6B3C] group-hover:bg-[#1A6B3C] group-hover:text-white transition-colors duration-300">
                {p.icon}
              </div>

              {/* Number */}
              <span className="text-[#1A6B3C]/20 font-serif font-black text-5xl leading-none -mb-2 select-none">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Text */}
              <div>
                <h3 className="font-serif font-bold text-xl text-gray-900 mb-3">
                  {p.titulo}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">{p.descricao}</p>
              </div>

              {/* Accent bar */}
              <div className="w-10 h-1 bg-[#F5C400] rounded-full mt-auto" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <a
            href="#cadastro"
            className="inline-flex items-center gap-2 bg-[#1A6B3C] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#0F3D22] transition-colors duration-200 shadow-md"
          >
            Apoie essas propostas
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
