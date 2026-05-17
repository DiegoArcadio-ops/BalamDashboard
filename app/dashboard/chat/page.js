'use client'

import { useState, useRef, useEffect } from 'react'

const mensajesIniciales = [
  {
    rol: 'agente',
    texto: '¡Hola! Soy el agente entrevistador de Balam Agentic Systems. Estoy aquí para entender qué necesitas desarrollar. ¿Puedes contarme en qué consiste tu proyecto?',
  }
]

export default function ChatPage() {
  const [mensajes, setMensajes] = useState(mensajesIniciales)
  const [input, setInput] = useState('')
  const [cargando, setCargando] = useState(false)
  const [resumen, setResumen] = useState(null)
  const [confirmado, setConfirmado] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [mensajes, cargando])

 const enviarMensaje = async () => {
    if (!input.trim()) return
    const nuevosMensajes = [...mensajes, { rol: 'cliente', texto: input }]
    setMensajes(nuevosMensajes)
    setInput('')
    setCargando(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mensaje: input,
          historial: nuevosMensajes
        }),
      })

      const data = await response.json()

      if (data.ok) {
        setMensajes(prev => [...prev, {
          rol: 'agente',
          texto: data.respuesta
        }])
      } else {
        setMensajes(prev => [...prev, {
          rol: 'agente',
          texto: '❌ Hubo un problema al contactar al agente. Intenta de nuevo.'
        }])
      }
    } catch (error) {
      setMensajes(prev => [...prev, {
        rol: 'agente',
        texto: '❌ Error de conexión. Por favor intenta de nuevo.'
      }])
    } finally {
      setCargando(false)
    }
  }

const generarResumen = () => {
    const ultimoMensajeCliente = mensajes
      .filter(m => m.rol === 'cliente')
      .pop()

    setResumen({
      proyecto: ultimoMensajeCliente ? ultimoMensajeCliente.texto.slice(0, 60) : 'Proyecto del cliente',
      tecnologias: 'HTML + CSS + JavaScript',
      plazo: '1-2 días',
    })
  }

  const confirmarProyecto = async () => {
    setCargando(true)
    try {
      const response = await fetch('/api/crear-proyecto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resumen }),
      })

      const data = await response.json()

      if (data.ok) {
        setConfirmado(true)
        setResumen(null)
        setMensajes(prev => [...prev, {
          rol: 'agente',
          texto: `✅ ¡Perfecto! Tu proyecto fue enviado al CEO (${data.issueId}). El equipo comenzará a trabajar en breve.`
        }])
      } else {
        setMensajes(prev => [...prev, {
          rol: 'agente',
          texto: '❌ Hubo un problema al enviar el proyecto. Por favor intenta de nuevo.'
        }])
      }
    } catch (error) {
      setMensajes(prev => [...prev, {
        rol: 'agente',
        texto: '❌ Error de conexión. Por favor intenta de nuevo.'
      }])
    } finally {
      setCargando(false)
    }
  }

  return (
    <div className="min-h-screen text-white flex" style={{background: 'linear-gradient(135deg, #0a0a0f 0%, #0d1117 50%, #0a0f1a 100%)'}}>

      {/* Sidebar */}
      <aside className="w-64 flex flex-col p-6 gap-6 border-r" style={{background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.06)'}}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold" style={{background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)'}}>B</div>
          <div>
            <h1 className="text-sm font-semibold text-white">Balam Agentic</h1>
            <p className="text-xs" style={{color: 'rgba(255,255,255,0.35)'}}>Panel de cliente</p>
          </div>
        </div>

        <nav className="flex flex-col gap-1">
          {[
            { label: 'Inicio', href: '/dashboard', active: false },
            { label: 'Proyectos', href: '/dashboard/proyectos', active: false },
            { label: 'Chat con agentes', href: '/dashboard/chat', active: true },
          ].map((item) => (
            <a key={item.href} href={item.href}
              className="px-3 py-2 rounded-lg text-sm transition-all"
              style={{
                background: item.active ? 'rgba(59,130,246,0.15)' : 'transparent',
                color: item.active ? '#60a5fa' : 'rgba(255,255,255,0.45)',
                borderLeft: item.active ? '2px solid #3b82f6' : '2px solid transparent',
              }}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto rounded-xl p-3" style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)'}}>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold" style={{background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)'}}>C</div>
            <div>
              <p className="text-xs" style={{color: 'rgba(255,255,255,0.35)'}}>Conectado como</p>
              <p className="text-xs text-white font-medium">cliente@empresa.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Chat area */}
      <main className="flex-1 flex flex-col">

        {/* Header */}
        <div className="px-8 py-4 flex items-center gap-4" style={{borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)'}}>
          <div className="relative">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm" style={{background: 'linear-gradient(135deg, #6366f1, #8b5cf6)'}}>AI</div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 bg-green-400" style={{borderColor: '#0d1117'}} />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Agente Entrevistador</p>
            <p className="text-xs" style={{color: 'rgba(255,255,255,0.35)'}}>En línea · Balam Agentic Systems</p>
          </div>
          {!resumen && !confirmado && (
            <button onClick={generarResumen}
              className="ml-auto text-xs font-medium px-4 py-2 rounded-lg transition-all"
              style={{background: 'linear-gradient(135deg, #3b82f6, #6366f1)', boxShadow: '0 0 20px rgba(99,102,241,0.3)'}}>
              Ver resumen del proyecto
            </button>
          )}
        </div>

        {/* Resumen */}
        {resumen && (
          <div className="mx-8 mt-6 rounded-2xl p-6" style={{background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.25)'}}>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1.5 h-5 rounded-full" style={{background: 'linear-gradient(to bottom, #3b82f6, #8b5cf6)'}} />
              <h3 className="text-base font-semibold text-white">Resumen del proyecto</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { label: 'Proyecto', valor: resumen.proyecto },
                { label: 'Tecnologías', valor: resumen.tecnologias },
                { label: 'Plazo estimado', valor: resumen.plazo },
                { label: 'Agentes asignados', valor: resumen.agentes.join(', ') },
              ].map((item) => (
                <div key={item.label} className="rounded-xl p-4" style={{background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)'}}>
                  <p className="text-xs mb-1" style={{color: 'rgba(255,255,255,0.35)'}}>{item.label}</p>
                  <p className="text-sm text-white font-medium">{item.valor}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <button onClick={confirmarProyecto}
                className="text-sm font-semibold px-6 py-2.5 rounded-xl transition-all"
                style={{background: 'linear-gradient(135deg, #10b981, #059669)', boxShadow: '0 0 20px rgba(16,185,129,0.25)'}}>
                Confirmar y arrancar
              </button>
              <button onClick={() => setResumen(null)}
                className="text-sm px-6 py-2.5 rounded-xl transition-all"
                style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}>
                Seguir conversando
              </button>
            </div>
          </div>
        )}

        {/* Mensajes */}
        <div className="flex-1 overflow-y-auto px-8 py-6 flex flex-col gap-5">
          {mensajes.map((msg, i) => (
            <div key={i} className={`flex gap-3 ${msg.rol === 'cliente' ? 'justify-end' : 'justify-start'}`}>
              {msg.rol === 'agente' && (
                <div className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center text-xs font-bold mt-1" style={{background: 'linear-gradient(135deg, #6366f1, #8b5cf6)'}}>AI</div>
              )}
              <div className="max-w-lg">
                <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.rol === 'cliente' ? 'rounded-tr-sm' : 'rounded-tl-sm'
                }`} style={{
                  background: msg.rol === 'cliente'
                    ? 'linear-gradient(135deg, #3b82f6, #6366f1)'
                    : 'rgba(255,255,255,0.06)',
                  border: msg.rol === 'agente' ? '1px solid rgba(255,255,255,0.08)' : 'none',
                  boxShadow: msg.rol === 'cliente' ? '0 4px 20px rgba(99,102,241,0.25)' : 'none',
                }}>
                  {msg.texto}
                </div>
              </div>
              {msg.rol === 'cliente' && (
                <div className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center text-xs font-bold mt-1" style={{background: 'linear-gradient(135deg, #3b82f6, #06b6d4)'}}>C</div>
              )}
            </div>
          ))}

          {cargando && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center text-xs font-bold" style={{background: 'linear-gradient(135deg, #6366f1, #8b5cf6)'}}>AI</div>
              <div className="px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1.5" style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)'}}>
                {[0, 150, 300].map((delay) => (
                  <span key={delay} className="w-1.5 h-1.5 rounded-full animate-bounce" style={{background: 'rgba(255,255,255,0.4)', animationDelay: `${delay}ms`}} />
                ))}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="px-8 py-5" style={{borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)'}}>
          <div className="flex gap-3 items-center rounded-2xl px-4 py-3" style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)'}}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && enviarMensaje()}
              placeholder="Escribe tu mensaje..."
              disabled={confirmado}
              className="flex-1 bg-transparent text-white placeholder-gray-600 text-sm focus:outline-none disabled:opacity-40"
            />
            <button
              onClick={enviarMensaje}
              disabled={cargando || confirmado || !input.trim()}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all disabled:opacity-30"
              style={{background: 'linear-gradient(135deg, #3b82f6, #6366f1)', boxShadow: '0 0 15px rgba(99,102,241,0.4)'}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </div>
          <p className="text-center text-xs mt-3" style={{color: 'rgba(255,255,255,0.2)'}}>Balam Agentic Systems · Powered by AI</p>
        </div>

      </main>
    </div>
  )
}