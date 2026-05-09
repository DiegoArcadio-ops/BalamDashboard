'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [cargando, setCargando] = useState(false)
  const router = useRouter()

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Por favor completa todos los campos')
      return
    }

    setCargando(true)
    setError('')

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (data.ok) {
        router.push('/dashboard')
      } else {
        setError(data.error || 'Credenciales incorrectas')
      }
    } catch (error) {
      setError('Error de conexión. Intenta de nuevo.')
    } finally {
      setCargando(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{background: 'linear-gradient(135deg, #0a0a0f 0%, #0d1117 50%, #0a0f1a 100%)'}}>
      <div className="w-full max-w-md px-8">

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-bold mx-auto mb-4" style={{background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)'}}>B</div>
          <h1 className="text-2xl font-bold text-white">Balam Agentic Systems</h1>
          <p className="text-sm mt-2" style={{color: 'rgba(255,255,255,0.35)'}}>Accede a tu panel de agentes</p>
        </div>

        {/* Card */}
        <div className="rounded-2xl p-8" style={{background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)'}}>

          {error && (
            <div className="mb-4 px-4 py-3 rounded-xl text-sm text-red-400" style={{background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)'}}>
              {error}
            </div>
          )}

          <div className="flex flex-col gap-4">
            <div>
              <label className="text-xs font-medium mb-2 block" style={{color: 'rgba(255,255,255,0.5)'}}>
                Correo electrónico
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleLogin()}
                placeholder="tu@empresa.com"
                className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none transition-all"
                style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)'}}
              />
            </div>

            <div>
              <label className="text-xs font-medium mb-2 block" style={{color: 'rgba(255,255,255,0.5)'}}>
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleLogin()}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none transition-all"
                style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)'}}
              />
            </div>

            <button
              onClick={handleLogin}
              disabled={cargando}
              className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-all mt-2 disabled:opacity-50"
              style={{background: 'linear-gradient(135deg, #3b82f6, #6366f1)', boxShadow: '0 0 20px rgba(99,102,241,0.3)'}}>
              {cargando ? 'Entrando...' : 'Entrar'}
            </button>
          </div>

        </div>

        <p className="text-center text-xs mt-6" style={{color: 'rgba(255,255,255,0.2)'}}>
          Balam Agentic Systems · Powered by AI
        </p>

      </div>
    </div>
  )
}