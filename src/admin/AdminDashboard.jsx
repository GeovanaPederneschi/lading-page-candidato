import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

function exportSupportersCsv(supporters) {
  const header = ['nome', 'email', 'whatsapp', 'bairro', 'cadastrado_em']
  const rows = supporters.map((s) => [
    s.nome,
    s.email,
    s.whatsapp,
    s.bairro ?? '',
    new Date(s.created_at).toLocaleString('pt-BR'),
  ])
  const csv = [header, ...rows]
    .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(','))
    .join('\n')

  const blob = new Blob([`﻿${csv}`], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'apoiadores.csv'
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}

export default function AdminDashboard() {
  const [supporters, setSupporters] = useState([])
  const [broadcasts, setBroadcasts] = useState([])
  const [loadingData, setLoadingData] = useState(true)

  const [assunto, setAssunto] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [enviando, setEnviando] = useState(false)
  const [feedback, setFeedback] = useState(null) // { type: 'success' | 'error', text }

  const loadData = async () => {
    setLoadingData(true)
    const [{ data: supportersData }, { data: broadcastsData }] = await Promise.all([
      supabase.from('supporters').select('*').order('created_at', { ascending: false }),
      supabase.from('broadcasts').select('*').order('created_at', { ascending: false }),
    ])
    setSupporters(supportersData ?? [])
    setBroadcasts(broadcastsData ?? [])
    setLoadingData(false)
  }

  useEffect(() => {
    loadData()
  }, [])

  const handleSendBroadcast = async (e) => {
    e.preventDefault()
    setFeedback(null)
    setEnviando(true)

    const { data, error } = await supabase.functions.invoke('send-broadcast', {
      body: { subject: assunto, body: mensagem },
    })

    setEnviando(false)

    if (error || data?.error) {
      setFeedback({ type: 'error', text: data?.error || error.message || 'Falha ao enviar.' })
      return
    }

    setFeedback({
      type: 'success',
      text: `Novidade enviada para ${data.recipientCount} apoiador(es)!`,
    })
    setAssunto('')
    setMensagem('')
    loadData()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#0F3D22] px-6 sm:px-10 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#F5C400] flex items-center justify-center">
            <span className="text-[#0F3D22] font-bold text-sm font-serif">CM</span>
          </div>
          <span className="text-white font-serif font-bold">Painel da campanha</span>
        </div>
        <button
          onClick={() => supabase.auth.signOut()}
          className="text-white/70 hover:text-white text-sm font-medium"
        >
          Sair
        </button>
      </header>

      <main className="max-w-5xl mx-auto px-6 sm:px-10 py-10 flex flex-col gap-10">
        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <p className="text-3xl font-serif font-black text-[#1A6B3C]">{supporters.length}</p>
            <p className="text-gray-500 text-sm mt-1">Apoiadores cadastrados</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <p className="text-3xl font-serif font-black text-[#1A6B3C]">{broadcasts.length}</p>
            <p className="text-gray-500 text-sm mt-1">Novidades enviadas</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col justify-between">
            <p className="text-gray-500 text-sm">Exportar lista para envio manual de WhatsApp</p>
            <button
              onClick={() => exportSupportersCsv(supporters)}
              disabled={supporters.length === 0}
              className="mt-3 text-[#1A6B3C] text-sm font-semibold underline underline-offset-4 disabled:opacity-40 disabled:no-underline text-left"
            >
              Baixar CSV
            </button>
          </div>
        </div>

        {/* Broadcast form */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
          <h2 className="font-serif font-bold text-xl text-gray-900 mb-1">Enviar novidade</h2>
          <p className="text-gray-500 text-sm mb-6">
            O e-mail vai para todos os apoiadores cadastrados, sem depender de algoritmo.
          </p>

          <form onSubmit={handleSendBroadcast} className="flex flex-col gap-4">
            <div>
              <label htmlFor="assunto" className="block text-sm font-semibold text-gray-700 mb-2">
                Assunto
              </label>
              <input
                id="assunto"
                type="text"
                required
                value={assunto}
                onChange={(e) => setAssunto(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A6B3C]/30 focus:border-[#1A6B3C]"
              />
            </div>
            <div>
              <label htmlFor="mensagem" className="block text-sm font-semibold text-gray-700 mb-2">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                required
                rows={6}
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A6B3C]/30 focus:border-[#1A6B3C]"
              />
            </div>

            {feedback && (
              <p
                className={`text-sm font-medium ${feedback.type === 'success' ? 'text-[#1A6B3C]' : 'text-red-600'}`}
                role="alert"
              >
                {feedback.text}
              </p>
            )}

            <button
              type="submit"
              disabled={enviando || supporters.length === 0}
              className="self-start bg-[#F5C400] text-[#0F3D22] font-bold px-8 py-3.5 rounded-xl hover:bg-[#C9A100] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {enviando ? 'Enviando...' : `Enviar para ${supporters.length} apoiador(es)`}
            </button>
          </form>
        </section>

        {/* Supporters table */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 sm:p-8 pb-0">
            <h2 className="font-serif font-bold text-xl text-gray-900">Apoiadores</h2>
          </div>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b border-gray-100">
                  <th className="px-6 sm:px-8 py-3 font-medium">Nome</th>
                  <th className="px-4 py-3 font-medium">E-mail</th>
                  <th className="px-4 py-3 font-medium">WhatsApp</th>
                  <th className="px-4 py-3 font-medium">Bairro</th>
                  <th className="px-4 sm:pr-8 py-3 font-medium">Cadastro</th>
                </tr>
              </thead>
              <tbody>
                {loadingData ? (
                  <tr>
                    <td className="px-8 py-6 text-gray-400" colSpan={5}>
                      Carregando...
                    </td>
                  </tr>
                ) : supporters.length === 0 ? (
                  <tr>
                    <td className="px-8 py-6 text-gray-400" colSpan={5}>
                      Nenhum apoiador cadastrado ainda.
                    </td>
                  </tr>
                ) : (
                  supporters.map((s) => (
                    <tr key={s.id} className="border-b border-gray-50 last:border-0">
                      <td className="px-6 sm:px-8 py-3 text-gray-800 font-medium">{s.nome}</td>
                      <td className="px-4 py-3 text-gray-600">{s.email}</td>
                      <td className="px-4 py-3 text-gray-600">{s.whatsapp}</td>
                      <td className="px-4 py-3 text-gray-600">{s.bairro || '—'}</td>
                      <td className="px-4 sm:pr-8 py-3 text-gray-400">
                        {new Date(s.created_at).toLocaleDateString('pt-BR')}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Broadcast history */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
          <h2 className="font-serif font-bold text-xl text-gray-900 mb-4">
            Histórico de novidades
          </h2>
          {broadcasts.length === 0 ? (
            <p className="text-gray-400 text-sm">Nenhuma novidade enviada ainda.</p>
          ) : (
            <ul className="flex flex-col gap-4">
              {broadcasts.map((b) => (
                <li key={b.id} className="border border-gray-100 rounded-xl p-4">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-semibold text-gray-800">{b.subject}</p>
                    <span className="text-xs text-gray-400 whitespace-nowrap">
                      {new Date(b.created_at).toLocaleString('pt-BR')}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1 line-clamp-2">{b.body}</p>
                  <p className="text-[#1A6B3C] text-xs font-medium mt-2">
                    Enviado para {b.recipient_count} apoiador(es)
                  </p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  )
}
