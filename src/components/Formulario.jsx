import { useState } from 'react'
import { supabase, supabaseConfigured } from '../lib/supabaseClient'

const camposIniciais = { nome: '', email: '', bairro: '', whatsapp: '' }

function formatWhatsApp(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return digits
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

export default function Formulario() {
  const [form, setForm] = useState(camposIniciais)
  const [enviado, setEnviado] = useState(false)
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: name === 'whatsapp' ? formatWhatsApp(value) : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErro('')

    if (!supabaseConfigured) {
      setErro('Cadastro indisponível no momento. Tente novamente mais tarde.')
      return
    }

    setCarregando(true)
    const { error } = await supabase.from('supporters').insert({
      nome: form.nome,
      email: form.email,
      whatsapp: form.whatsapp,
      bairro: form.bairro,
    })
    setCarregando(false)

    if (error) {
      setErro('Não foi possível enviar seu cadastro. Tente novamente em instantes.')
      return
    }

    setEnviado(true)
  }

  return (
    <section id="cadastro" className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-6 sm:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-[#F5C400]" />
            <span className="text-[#1A6B3C] text-xs font-bold uppercase tracking-widest">
              Faça parte da mudança
            </span>
            <span className="w-8 h-0.5 bg-[#F5C400]" />
          </div>
          <h2 className="font-serif font-black text-4xl sm:text-5xl text-gray-900 mb-5">
            Quero apoiar Carlos
          </h2>
          <p className="text-gray-500 leading-relaxed max-w-lg mx-auto">
            Cadastre-se e faça parte do movimento. Você receberá novidades,
            eventos e formas de ajudar a campanha no seu bairro.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-xl p-8 sm:p-12">
          {enviado ? (
            <div className="text-center py-8">
              {/* Success icon */}
              <div className="w-20 h-20 rounded-full bg-[#E8F5EE] flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-[#1A6B3C]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-2xl text-gray-900 mb-3">
                Cadastro realizado!
              </h3>
              <p className="text-gray-500 leading-relaxed mb-8">
                Obrigado, <strong className="text-gray-700">{form.nome.split(' ')[0]}</strong>! Você agora faz parte do
                movimento. Em breve entraremos em contato pelo WhatsApp.
              </p>
              <button
                onClick={() => { setEnviado(false); setForm(camposIniciais) }}
                className="text-[#1A6B3C] text-sm font-medium underline underline-offset-4 hover:text-[#0F3D22]"
              >
                Cadastrar outro apoiador
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                {/* Nome */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="nome"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Nome completo <span className="text-[#1A6B3C]">*</span>
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    value={form.nome}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A6B3C]/30 focus:border-[#1A6B3C] transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    E-mail <span className="text-[#1A6B3C]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A6B3C]/30 focus:border-[#1A6B3C] transition-colors"
                  />
                </div>

                {/* Bairro */}
                <div>
                  <label
                    htmlFor="bairro"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Bairro <span className="text-[#1A6B3C]">*</span>
                  </label>
                  <input
                    id="bairro"
                    name="bairro"
                    type="text"
                    required
                    value={form.bairro}
                    onChange={handleChange}
                    placeholder="Seu bairro"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A6B3C]/30 focus:border-[#1A6B3C] transition-colors"
                  />
                </div>

                {/* WhatsApp */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="whatsapp"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    WhatsApp <span className="text-[#1A6B3C]">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2">
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </span>
                    <input
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      required
                      value={form.whatsapp}
                      onChange={handleChange}
                      placeholder="(00) 00000-0000"
                      className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3.5 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A6B3C]/30 focus:border-[#1A6B3C] transition-colors"
                    />
                  </div>
                </div>
              </div>

              {erro && (
                <p className="text-red-600 text-sm font-medium mb-4 text-center" role="alert">
                  {erro}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={carregando}
                className="w-full bg-[#F5C400] text-[#0F3D22] font-bold py-4 rounded-xl hover:bg-[#C9A100] transition-colors duration-200 shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
              >
                {carregando ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  'Quero fazer parte do movimento'
                )}
              </button>

              {/* Legal */}
              <p className="text-center text-xs text-gray-400 mt-4 leading-relaxed">
                Ao se cadastrar, você concorda em receber comunicações da campanha
                por WhatsApp e e-mail. Seus dados são protegidos conforme a LGPD.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
