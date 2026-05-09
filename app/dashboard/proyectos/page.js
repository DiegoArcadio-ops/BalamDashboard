export default function ProyectosPage() {
  const proyectos = [
    {
      id: 1,
      nombre: 'Sistema de gestión de clientes',
      estado: 'En progreso',
      agentes: ['Desarrollador de Software', 'Documentador técnico'],
      fecha: '05 May 2026',
      progreso: 65,
    },
    {
      id: 2,
      nombre: 'API REST de pagos',
      estado: 'Completado',
      agentes: ['Desarrollador de Software', 'QA'],
      fecha: '01 May 2026',
      progreso: 100,
    },
    {
      id: 3,
      nombre: 'Dashboard administrativo',
      estado: 'Pendiente',
      agentes: ['Desarrollador de Software'],
      fecha: '08 May 2026',
      progreso: 0,
    },
  ]

  const colorEstado = {
    'En progreso': { bg: 'rgba(59,130,246,0.15)', color: '#60a5fa', dot: '#3b82f6' },
    'Completado': { bg: 'rgba(16,185,129,0.15)', color: '#34d399', dot: '#10b981' },
    'Pendiente': { bg: 'rgba(245,158,11,0.15)', color: '#fbbf24', dot: '#f59e0b' },
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
            <p className="text-sm mt-1" style={{color: 'rgba(255,255,255,0.35)'}}>Historial y estado de tus proyectos</p>
          </div>
          <a href="/dashboard/chat"
            className="text-sm font-medium px-5 py-2.5 rounded-xl transition-all"
            style={{background: 'linear-gradient(135deg, #3b82f6, #6366f1)', boxShadow: '0 0 20px rgba(99,102,241,0.3)'}}>
            + Nuevo proyecto
          </a>
        </div>

        <div className="flex flex-col gap-4">
          {proyectos.map((p) => {
            const est = colorEstado[p.estado]
            return (
              <div key={p.id} className="rounded-2xl p-6 transition-all hover:scale-[1.01]"
                style={{background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)'}}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-base font-semibold text-white">{p.nombre}</h3>
                    <p className="text-xs mt-1" style={{color: 'rgba(255,255,255,0.35)'}}>Iniciado el {p.fecha}</p>
                  </div>
                  <span className="text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1.5"
                    style={{background: est.bg, color: est.color}}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{background: est.dot}} />
                    {p.estado}
                  </span>
                </div>

                {/* Barra de progreso */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-1.5" style={{color: 'rgba(255,255,255,0.35)'}}>
                    <span>Progreso</span>
                    <span>{p.progreso}%</span>
                  </div>
                  <div className="h-1.5 rounded-full w-full" style={{background: 'rgba(255,255,255,0.08)'}}>
                    <div className="h-1.5 rounded-full transition-all"
                      style={{
                        width: `${p.progreso}%`,
                        background: p.progreso === 100
                          ? 'linear-gradient(90deg, #10b981, #34d399)'
                          : 'linear-gradient(90deg, #3b82f6, #6366f1)'
                      }} />
                  </div>
                </div>

                {/* Agentes */}
                <div className="flex items-center gap-2">
                  <p className="text-xs" style={{color: 'rgba(255,255,255,0.35)'}}>Agentes:</p>
                  {p.agentes.map((a) => (
                    <span key={a} className="text-xs px-2.5 py-1 rounded-lg"
                      style={{background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.6)'}}>
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}