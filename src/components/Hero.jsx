function CandidatoAvatar() {
  return (
    <svg
      viewBox="0 0 300 420"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      style={{ filter: 'grayscale(1) contrast(1.05)' }}
      aria-hidden="true"
    >
      {/* Ground shadow */}
      <ellipse cx="150" cy="414" rx="88" ry="10" fill="rgba(0,0,0,0.3)" />

      {/* Suit body */}
      <path d="M 0 420 L 50 258 Q 150 295 250 258 L 300 420 Z" fill="#1a1a1a" />

      {/* Shirt front */}
      <polygon points="136,261 150,322 164,261" fill="#f5f5f5" />

      {/* Tie */}
      <polygon points="145,261 150,320 155,261 152,249 148,249" fill="#1a237e" />
      <polygon points="148,249 152,249 153,258 147,258" fill="#14196e" />

      {/* Left jacket panel */}
      <path d="M 50,258 L 0,420 L 112,420 L 138,264 Z" fill="#2d2d2d" />
      {/* Right jacket panel */}
      <path d="M 250,258 L 300,420 L 188,420 L 162,264 Z" fill="#2d2d2d" />

      {/* Collar left */}
      <path d="M 122,252 Q 136,242 140,262 L 128,264 Q 116,256 122,252 Z" fill="#f0f0f0" />
      {/* Collar right */}
      <path d="M 178,252 Q 164,242 160,262 L 172,264 Q 184,256 178,252 Z" fill="#f0f0f0" />

      {/* Pocket square */}
      <path d="M 68 292 L 94 287 L 97 310 L 71 314 Z" fill="#ebebeb" opacity="0.92" />

      {/* Shoulders curve */}
      <path
        d="M 50 258 Q 150 282 250 258 L 248 248 Q 150 272 52 248 Z"
        fill="#2d2d2d"
      />

      {/* Neck */}
      <rect x="134" y="224" width="32" height="40" rx="8" fill="#C4956A" />

      {/* Head base */}
      <ellipse cx="150" cy="148" rx="78" ry="82" fill="#C4956A" />

      {/* Hair top */}
      <path
        d="M 72 144 Q 72 57 150 54 Q 228 57 228 144 Q 224 80 150 76 Q 76 80 72 144 Z"
        fill="#1e140e"
      />
      {/* Hair sides */}
      <path
        d="M 72 144 L 74 98 Q 80 70 96 63 L 97 148 Z"
        fill="#1e140e"
      />
      <path
        d="M 228 144 L 226 98 Q 220 70 204 63 L 203 148 Z"
        fill="#1e140e"
      />

      {/* Face */}
      <ellipse cx="150" cy="155" rx="66" ry="70" fill="#D4A574" />

      {/* Ears */}
      <ellipse cx="84" cy="152" rx="10" ry="16" fill="#C4956A" />
      <ellipse cx="216" cy="152" rx="10" ry="16" fill="#C4956A" />
      <ellipse cx="84" cy="152" rx="6" ry="10" fill="#B08050" opacity="0.45" />
      <ellipse cx="216" cy="152" rx="6" ry="10" fill="#B08050" opacity="0.45" />

      {/* Forehead shadow */}
      <ellipse cx="150" cy="104" rx="52" ry="18" fill="rgba(0,0,0,0.05)" />

      {/* Eyebrows */}
      <path
        d="M 106 131 Q 120 124 136 129"
        stroke="#2d1810"
        strokeWidth="4.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 164 129 Q 180 124 194 131"
        stroke="#2d1810"
        strokeWidth="4.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Eye socket shadows */}
      <ellipse cx="120" cy="143" rx="20" ry="13" fill="rgba(80,40,10,0.1)" />
      <ellipse cx="180" cy="143" rx="20" ry="13" fill="rgba(80,40,10,0.1)" />

      {/* Sclera */}
      <ellipse cx="120" cy="144" rx="14" ry="9.5" fill="white" />
      <ellipse cx="180" cy="144" rx="14" ry="9.5" fill="white" />

      {/* Iris */}
      <circle cx="120" cy="145" r="7" fill="#3d2510" />
      <circle cx="180" cy="145" r="7" fill="#3d2510" />

      {/* Pupil */}
      <circle cx="120" cy="145" r="3.5" fill="#050200" />
      <circle cx="180" cy="145" r="3.5" fill="#050200" />

      {/* Eye catch light */}
      <circle cx="122.5" cy="142.5" r="2.2" fill="white" />
      <circle cx="182.5" cy="142.5" r="2.2" fill="white" />

      {/* Upper eyelids */}
      <path
        d="M 106 144 Q 120 135 134 144"
        stroke="#8B5030"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M 166 144 Q 180 135 194 144"
        stroke="#8B5030"
        strokeWidth="2"
        fill="none"
      />

      {/* Nose */}
      <path
        d="M 148 132 L 145 170 Q 145 178 150 179 Q 155 178 155 170 L 152 132"
        stroke="#b08050"
        strokeWidth="1.5"
        fill="rgba(160,100,60,0.1)"
        strokeLinejoin="round"
      />
      <ellipse cx="144" cy="175" rx="7" ry="5" fill="rgba(140,90,50,0.22)" />
      <ellipse cx="156" cy="175" rx="7" ry="5" fill="rgba(140,90,50,0.22)" />

      {/* Upper lip */}
      <path
        d="M 128 191 Q 138 187 150 190 Q 162 187 172 191"
        stroke="#9a4830"
        strokeWidth="1.8"
        fill="none"
      />

      {/* Mouth smile */}
      <path
        d="M 128 191 Q 150 205 172 191"
        stroke="#8a3820"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Cheek highlights */}
      <ellipse cx="100" cy="168" rx="18" ry="12" fill="rgba(210,130,90,0.13)" />
      <ellipse cx="200" cy="168" rx="18" ry="12" fill="rgba(210,130,90,0.13)" />

      {/* Smile dimples */}
      <circle cx="126" cy="192" r="2.2" fill="rgba(0,0,0,0.1)" />
      <circle cx="174" cy="192" r="2.2" fill="rgba(0,0,0,0.1)" />

      {/* Chin */}
      <ellipse cx="150" cy="213" rx="38" ry="16" fill="#C8905E" />

      {/* Jaw shadows */}
      <path
        d="M 84 138 Q 84 185 102 218 Q 88 195 84 165 Z"
        fill="rgba(0,0,0,0.07)"
      />
      <path
        d="M 216 138 Q 216 185 198 218 Q 212 195 216 165 Z"
        fill="rgba(0,0,0,0.07)"
      />
    </svg>
  )
}

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
