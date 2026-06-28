const navLinks = [
  { href: '#quem-e', label: 'Quem é Carlos' },
  { href: '#propostas', label: 'Propostas' },
  { href: '#conquistas', label: 'Conquistas' },
  { href: '#cadastro', label: 'Cadastro de apoiador' },
  { href: '#redes', label: 'Redes sociais' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0F3D22] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-full bg-[#F5C400] flex items-center justify-center shadow-md">
              <span className="font-serif font-black text-[#0F3D22] text-sm">CM</span>
            </div>
            <div>
              <p className="font-serif font-bold text-white text-base leading-tight">
                Carlos Mendes
              </p>
              <p className="text-[#F5C400] text-[10px] uppercase tracking-widest">
                Deputado Estadual · 15
              </p>
            </div>
          </div>
          <p className="text-white/55 text-sm leading-relaxed max-w-xs">
            Uma voz pelo povo de verdade. Comprometido com saúde, educação,
            segurança e emprego para todos os cidadãos de São José.
          </p>

          {/* Social mini icons */}
          <div className="flex gap-3 mt-6">
            {['Instagram', 'Facebook', 'X', 'YouTube'].map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#F5C400]/20 flex items-center justify-center transition-colors text-white/60 hover:text-[#F5C400] text-xs font-bold"
              >
                {s[0]}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-[#F5C400] text-xs font-bold uppercase tracking-widest mb-5">
            Navegação
          </h4>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-white/60 hover:text-[#F5C400] text-sm transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal / TSE */}
        <div>
          <h4 className="text-[#F5C400] text-xs font-bold uppercase tracking-widest mb-5">
            Informações legais
          </h4>
          <ul className="space-y-3 text-white/55 text-sm leading-relaxed">
            <li>
              <span className="text-white/35 text-xs block uppercase tracking-wide mb-0.5">Número TSE</span>
              15.000 / 2026
            </li>
            <li>
              <span className="text-white/35 text-xs block uppercase tracking-wide mb-0.5">Partido</span>
              PDP — Partido da Democracia Popular
            </li>
            <li>
              <span className="text-white/35 text-xs block uppercase tracking-wide mb-0.5">CNPJ do Comitê</span>
              00.000.000/0001-00
            </li>
            <li>
              <span className="text-white/35 text-xs block uppercase tracking-wide mb-0.5">Circunscrição</span>
              Estado de São José · Eleições 2026
            </li>
          </ul>
          <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
            <p className="text-white/40 text-xs leading-relaxed">
              Propaganda eleitoral autorizada nos termos da Lei nº 9.504/1997
              e Res. TSE nº 23.610/2019.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© 2026 Carlos Mendes. Todos os direitos reservados.</p>
          <p className="text-center">
            Material eleitoral gratuito. Proibida a venda.
          </p>
        </div>
      </div>
    </footer>
  )
}
