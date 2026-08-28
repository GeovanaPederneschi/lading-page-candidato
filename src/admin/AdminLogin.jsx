import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { supabase, supabaseConfigured } from '../lib/supabaseClient'
import { useAdminSession } from './useAdminSession'

export default function AdminLogin() {
  const { session, isAdmin, loading } = useAdminSession()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const [enviando, setEnviando] = useState(false)

  if (!loading && session && isAdmin) {
    return <Navigate to="/admin" replace />
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErro('')

    if (!supabaseConfigured) {
      setErro('Painel indisponível: Supabase não configurado.')
      return
    }

    setEnviando(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password: senha })
    setEnviando(false)

    if (error) {
      setErro('E-mail ou senha inválidos.')
      return
    }
  }

  return (
    <div className="min-h-screen bg-[#0F3D22] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-full bg-[#F5C400] flex items-center justify-center mx-auto mb-4">
            <span className="text-[#0F3D22] font-bold text-base font-serif">CM</span>
          </div>
          <h1 className="font-serif font-black text-2xl text-white mb-1">Painel da campanha</h1>
          <p className="text-white/60 text-sm">Acesso restrito à equipe autorizada</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8" noValidate>
          <div className="mb-5">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              required
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A6B3C]/30 focus:border-[#1A6B3C]"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="senha" className="block text-sm font-semibold text-gray-700 mb-2">
              Senha
            </label>
            <input
              id="senha"
              type="password"
              required
              autoComplete="current-password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A6B3C]/30 focus:border-[#1A6B3C]"
            />
          </div>

          {erro && (
            <p className="text-red-600 text-sm font-medium mb-4" role="alert">
              {erro}
            </p>
          )}

          <button
            type="submit"
            disabled={enviando}
            className="w-full bg-[#1A6B3C] text-white font-bold py-3.5 rounded-xl hover:bg-[#0F3D22] transition-colors disabled:opacity-60"
          >
            {enviando ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <a href="/" className="block text-center text-white/50 text-xs mt-6 hover:text-white/80">
          ← Voltar para o site
        </a>
      </div>
    </div>
  )
}
