import CandidatoAvatar from './CandidatoAvatar'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col lg:grid"
      style={{ gridTemplateColumns: '58% 1fr' }}
    >
      {/* LEFT — text content */}
      <div className="order-2 lg:order-1 bg-white flex flex-col justify-center px-6 sm:px-12 lg:px-20 xl:px-28 py-20 pt-28 lg:pt-20 relative">
        {/* Yellow top accent */}
        <div className="absolute top-16 left-0 w-24 h-1 bg-[#F5C400]" />

        {/* Badge */}
        <span className="inline-flex items-center gap-2 text-[#1A6B3C] font-semibold text-xs uppercase tracking-widest mb-5">
          <span className="w-1 h-5 bg-[#F5C400] rounded-full inline-block" />
          Candidato a Deputado Estadual
        </span>

        {/* Name */}
        <h1 className="font-serif font-black text-5xl sm:text-6xl lg:text-7xl text-gray-900 leading-[1.05] mb-5">
          Carlos<br />
          <span className="text-[#1A6B3C]">Mendes</span>
        </h1>

        {/* Slogan */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-0.5 bg-[#F5C400] flex-shrink-0" />
          <p className="font-serif italic text-gray-500 text-lg">
            "Uma voz pelo povo de verdade"
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-500 leading-relaxed mb-10 max-w-md text-base">
          20 anos servindo a comunidade. Agora levo essa experiência para a
          Assembleia Legislativa — para que cada família tenha quem as
          represente de verdade.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="#cadastro"
            className="bg-[#1A6B3C] text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-[#0F3D22] transition-colors duration-200 shadow-md"
          >
            Quero apoiar
          </a>
          <a
            href="#propostas"
            className="border-2 border-[#1A6B3C] text-[#1A6B3C] px-8 py-4 rounded-full font-semibold text-sm hover:bg-[#E8F5EE] transition-colors duration-200"
          >
            Conheça as propostas
          </a>
        </div>

        {/* Party badge */}
        <div className="flex items-center gap-3 border-t border-gray-100 pt-8">
          <div className="w-11 h-11 rounded-full bg-[#F5C400] flex items-center justify-center font-black text-[#0F3D22] text-base shadow-sm">
            15
          </div>
          <div>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">
              Número do candidato
            </p>
            <p className="text-sm font-semibold text-gray-700">
              PDP — Partido da Democracia Popular
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT — green with candidate photo */}
      <div className="order-1 lg:order-2 bg-[#1A6B3C] flex items-end justify-center relative overflow-hidden min-h-72 lg:min-h-0">
        {/* Decorative circles */}
        <div className="absolute -left-16 top-16 w-48 h-48 rounded-full border border-white/10" />
        <div className="absolute right-4 bottom-24 w-32 h-32 rounded-full border-2 border-[#F5C400]/20" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full border border-white/5" />

        {/* Big number watermark */}
        <span className="absolute top-8 right-6 text-white/8 font-serif font-black text-[10rem] leading-none select-none pointer-events-none">
          15
        </span>

        {/* Yellow stripe top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#F5C400]" />

        {/* Candidate photo */}
        <div className="relative z-10 w-64 sm:w-72 lg:w-80 xl:w-96 px-4 lg:px-0">
          <CandidatoAvatar />
        </div>
      </div>
    </section>
  )
}
