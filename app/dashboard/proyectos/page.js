async function getProyectos() {
  try {
    const response = await fetch(
      `${process.env.PAPERCLIP_URL}/api/companies/${process.env.PAPERCLIP_COMPANY_ID}/issues`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Cookie': `better-auth.session_token=${process.env.PAPERCLIP_SESSION_TOKEN}`,
          'Origin': 'http://177.7.54.213:40976',
          'Referer': 'http://177.7.54.213:40976/BAL/dashboard',
        },
        cache: 'no-store'
      }
    )
    const data = await response.json()
    return Array.isArray(data) ? data : []
  } catch (error) {
    console.error('Error obteniendo proyectos:', error)
    return []
  }
}

export default async function ProyectosPage() {
  const issues = await getProyectos()

  const colorEstado = {
    'done': { bg: 'rgba(16,185,129,0.15)', color: '#34d399', dot: '#10b981', label: 'Completado' },
    'in_progress': { bg: 'rgba(59,130,246,0.15)', color: '#60a5fa', dot: '#3b82f6', label: 'En progreso' },
    'backlog': { bg: 'rgba(245,158,11,0.15)', color: '#fbbf24', dot: '#f59e0b', label: 'Pendiente' },
    'blocked': { bg: 'rgba(239,68,68,0.15)', color: '#f87171', dot: '#ef4444', label: 'Bloqueado' },
    'cancelled': { bg: 'rgba(107,114,128,0.15)', color: '#9ca3af', dot: '#6b7280', label: 'Cancelado' },
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
            { label: 'Proyectos', href: '/dashboard/proyectos', active: true },
            { label: 'Chat con agentes', href: '/dashboard/chat', active: false },
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

      {/* Contenido */}
      <main className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white">Proyectos</h2>
            <p className="text-sm mt-1" style={{color: 'rgba(255,255,255,0.35)'}}>
              {issues.length} issues activos en Paperclip
            </p>
          </div>
          <a href="/dashboard/chat"
            className="text-sm font-medium px-5 py-2.5 rounded-xl transition-all"
            style={{background: 'linear-gradient(135deg, #3b82f6, #6366f1)', boxShadow: '0 0 20px rgba(99,102,241,0.3)'}}>
            + Nuevo proyecto
          </a>
        </div>

        <div className="flex flex-col gap-4">
          {issues.length === 0 ? (
            <div className="rounded-2xl p-12 text-center" style={{background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)'}}>
              <p className="text-gray-400">No hay proyectos aún.</p>
              <a href="/dashboard/chat" className="text-blue-400 text-sm mt-2 block">Inicia uno desde el chat →</a>
            </div>
          ) : (
            issues.map((issue) => {
              const est = colorEstado[issue.status] || colorEstado['backlog']
              const fecha = new Date(issue.createdAt).toLocaleDateString('es-MX', { day: '2-digit', month: 'short', year: 'numeric' })
              return (
                <div key={issue.id} className="rounded-2xl p-6 transition-all hover:scale-[1.01]"
                  style={{background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)'}}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono" style={{color: 'rgba(255,255,255,0.35)'}}>{issue.identifier}</span>
                      </div>
                      <h3 className="text-base font-semibold text-white">{issue.title}</h3>
                      <p className="text-xs mt-1" style={{color: 'rgba(255,255,255,0.35)'}}>Creado el {fecha}</p>
                    </div>
                    <span className="text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1.5 whitespace-nowrap"
                      style={{background: est.bg, color: est.color}}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{background: est.dot}} />
                      {est.label}
                    </span>
                  </div>
                  {issue.description && (
                    <p className="text-xs leading-relaxed line-clamp-2" style={{color: 'rgba(255,255,255,0.45)'}}>
                      {issue.description.slice(0, 150)}...
                    </p>
                  )}
                </div>
              )
            })
          )}
        </div>
      </main>
    </div>
  )
}