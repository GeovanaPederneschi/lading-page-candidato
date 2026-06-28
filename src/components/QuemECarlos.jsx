const stats = [
  { value: '20', label: 'anos de serviço comunitário' },
  { value: '3×', label: 'eleito com maioria absoluta' },
  { value: '150+', label: 'projetos de lei aprovados' },
  { value: '40mil', label: 'famílias beneficiadas' },
]

export default function QuemECarlos() {
  return (
    <section id="quem-e" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-0.5 bg-[#F5C400]" />
          <span className="text-[#1A6B3C] text-xs font-bold uppercase tracking-widest">
            Conheça o candidato
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Text */}
          <div>
            <h2 className="font-serif font-black text-4xl sm:text-5xl text-gray-900 leading-tight mb-8">
              Quem é<br />
              <span className="text-[#1A6B3C]">Carlos Mendes</span>
            </h2>

            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                Carlos nasceu na periferia de São José, filho de um operário da
                construção civil e de uma professora pública. Criado com poucos
                recursos mas muito amor e valores, aprendeu desde cedo que a
                política é uma ferramenta de transformação social — não um
                privilégio de poucos.
              </p>
              <p>
                Formado em Direito pela Universidade Estadual, atuou por 15 anos
                como advogado trabalhista, defendendo gratuitamente operários
                demitidos injustamente. Em 2014, respondendo ao chamado da
                comunidade, candidatou-se a vereador e foi eleito com a maior
                votação da história do município.
              </p>
              <p>
                Três mandatos depois, com mais de 150 projetos aprovados — de
                creches a postos de saúde —, Carlos chega à disputa estadual
                com uma missão clara: <strong className="text-gray-800">levar para a Assembleia Legislativa
                a voz de quem mais precisa ser ouvido</strong>.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="mt-10 border-l-4 border-[#F5C400] pl-6 py-1">
              <p className="font-serif italic text-gray-700 text-lg leading-relaxed">
                "Nasci nessa terra. Minha família vive aqui. Eu conheço a dor
                do povo porque é a minha dor também."
              </p>
              <cite className="block mt-3 text-sm text-gray-500 font-medium not-italic">
                — Carlos Mendes
              </cite>
            </blockquote>
          </div>

          {/* Stats + visual */}
          <div className="flex flex-col gap-6">
            {/* Photo-like card */}
            <div className="relative rounded-2xl overflow-hidden bg-[#E8F5EE] p-8 border border-[#1A6B3C]/10">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-[#1A6B3C]/8" />
              <div className="absolute bottom-0 left-0 w-24 h-24 rounded-tr-full bg-[#F5C400]/20" />
              <div className="relative z-10 flex flex-col items-center text-center py-4">
                {/* Initials avatar */}
                <div className="w-24 h-24 rounded-full bg-[#1A6B3C] flex items-center justify-center mb-5 shadow-lg">
                  <span className="font-serif font-black text-white text-3xl">CM</span>
                </div>
                <h3 className="font-serif font-bold text-xl text-gray-900">Carlos Mendes</h3>
                <p className="text-[#1A6B3C] text-sm font-medium mt-1">Advogado · Vereador · Pai de família</p>
                <div className="mt-4 flex gap-2 flex-wrap justify-center">
                  {['Saúde', 'Educação', 'Emprego', 'Segurança'].map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#1A6B3C] text-white text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="font-serif font-black text-3xl text-[#1A6B3C] leading-none">
                    {s.value}
                  </p>
                  <p className="text-gray-500 text-xs mt-2 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
