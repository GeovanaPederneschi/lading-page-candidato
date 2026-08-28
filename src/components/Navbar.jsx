import { useState, useEffect } from 'react'

const links = [
  { href: '#quem-e', label: 'Quem é Carlos' },
  { href: '#propostas', label: 'Propostas' },
  { href: '#conquistas', label: 'Conquistas' },
  { href: '#foto-com-candidato', label: 'Sua foto com Carlos' },
  { href: '#cadastro', label: 'Apoiar' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0F3D22] shadow-xl' : 'bg-[#0F3D22]/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-[#F5C400] flex items-center justify-center shadow-md">
            <span className="text-[#0F3D22] font-bold text-sm font-serif">CM</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-serif font-bold text-sm">Carlos Mendes</span>
            <span className="text-[#F5C400] text-[10px] uppercase tracking-widest font-medium">
              Deputado Estadual
            </span>
          </div>
          <span className="hidden sm:flex items-center justify-center ml-2 w-8 h-8 rounded-full border-2 border-[#F5C400]/60 text-[#F5C400] font-black text-sm">
            15
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/75 hover:text-[#F5C400] text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cadastro"
            className="bg-[#F5C400] text-[#0F3D22] text-sm font-bold px-6 py-2.5 rounded-full hover:bg-[#C9A100] transition-colors duration-200 shadow-sm"
          >
            Quero apoiar
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          className="md:hidden flex flex-col justify-center gap-1.5 p-2 text-white"
        >
          <span
            className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden border-t border-white/10 overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#0F3D22] py-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-8 py-3.5 text-white/80 hover:text-[#F5C400] hover:bg-white/5 text-sm font-medium border-b border-white/5 last:border-0 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="px-8 py-4">
            <a
              href="#cadastro"
              onClick={() => setMenuOpen(false)}
              className="block bg-[#F5C400] text-[#0F3D22] font-bold text-sm px-6 py-3 rounded-full text-center hover:bg-[#C9A100] transition-colors"
            >
              Quero apoiar
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
