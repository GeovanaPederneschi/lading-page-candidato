const eventos = [
  {
    ano: '2006',
    titulo: 'Raízes na comunidade',
    descricao:
      'Fundou a Associação de Moradores do Jardim das Flores, conectando famílias e liderando melhorias no bairro.',
  },
  {
    ano: '2010',
    titulo: 'Escola Aberta',
    descricao:
      'Criou o projeto "Escola Aberta" em parceria com a prefeitura, levando cultura, esporte e reforço escolar a mais de 2.000 jovens em situação de vulnerabilidade.',
  },
  {
    ano: '2014',
    titulo: 'Eleito Vereador',
    descricao:
      'Eleito vereador com 12.543 votos — a maior votação da história do município de São José — representando os bairros populares na Câmara Municipal.',
  },
  {
    ano: '2018',
    titulo: 'Lei do Pequeno Empreendedor',
    descricao:
      'Autor da Lei Municipal 847/2018, que reduziu tributos para micro-empreendedores e gerou mais de 3.000 novos empregos formais em dois anos.',
  },
  {
    ano: '2020',
    titulo: 'Reeleito com recorde histórico',
    descricao:
      'Reeleito com 18.920 votos — o maior número de votos já obtido por um vereador na história do município.',
  },
  {
    ano: '2023',
    titulo: 'Secretário Municipal',
    descricao:
      'Nomeado Secretário de Desenvolvimento Econômico e Social, onde implementou o programa "Trabalho para Todos", beneficiando 8 bairros da cidade.',
  },
]

export default function Timeline() {
  return (
    <section id="conquistas" className="py-20 lg:py-28 bg-[#0F3D22]">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-[#F5C400]" />
            <span className="text-[#F5C400] text-xs font-bold uppercase tracking-widest">
              Trajetória
            </span>
            <span className="w-8 h-0.5 bg-[#F5C400]" />
          </div>
          <h2 className="font-serif font-black text-4xl sm:text-5xl text-white mb-5">
            Linha do Tempo
          </h2>
          <p className="text-white/60 max-w-lg mx-auto leading-relaxed">
            Uma jornada de conquistas reais, construídas junto com o povo — não
            para o currículo, mas para a história da nossa cidade.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-16 sm:left-1/2 top-0 bottom-0 w-0.5 bg-white/15 -translate-x-1/2" />

          <div className="space-y-0">
            {eventos.map((ev, i) => {
              const isEven = i % 2 === 0
              return (
                <div
                  key={ev.ano}
                  className={`relative flex items-start gap-0 sm:gap-8 mb-10 last:mb-0 ${
                    isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  } flex-row pl-10 sm:pl-0`}
                >
                  {/* Content box */}
                  <div
                    className={`flex-1 ${
                      isEven ? 'sm:text-right sm:pr-10' : 'sm:text-left sm:pl-10'
                    } text-left pl-8 sm:pl-0`}
                  >
                    <div
                      className={`inline-block bg-white/8 border border-white/12 rounded-2xl p-6 hover:bg-white/12 transition-colors duration-300 ${
                        isEven ? 'sm:ml-auto' : ''
                      }`}
                    >
                      <span className="text-[#F5C400] text-xs font-bold uppercase tracking-widest block mb-2">
                        {ev.ano}
                      </span>
                      <h3 className="font-serif font-bold text-white text-lg mb-2 text-left">
                        {ev.titulo}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed text-left">
                        {ev.descricao}
                      </p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-16 sm:left-1/2 -translate-x-1/2 top-6 flex flex-col items-center z-10">
                    <div className="w-4 h-4 rounded-full bg-[#F5C400] shadow-[0_0_12px_rgba(245,196,0,0.5)]" />
                  </div>

                  {/* Empty side on desktop */}
                  <div className="hidden sm:block flex-1" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
