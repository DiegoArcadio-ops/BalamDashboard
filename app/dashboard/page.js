export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex">

      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col p-6 gap-6">
        <div>
          <h1 className="text-lg font-bold text-white">Balam Agentic</h1>
          <p className="text-xs text-gray-500 mt-1">Panel de cliente</p>
        </div>

        <nav className="flex flex-col gap-2">
          <a href="/dashboard" className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium">
            Inicio
          </a>
          <a href="/dashboard/proyectos" className="text-gray-400 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-lg text-sm transition-colors">
            Proyectos
          </a>
          <a href="/dashboard/chat" className="text-gray-400 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-lg text-sm transition-colors">
            Chat con agentes
          </a>
        </nav>

        <div className="mt-auto">
          <div className="bg-gray-800 rounded-lg p-3">
            <p className="text-xs text-gray-400">Conectado como</p>
            <p className="text-sm text-white font-medium mt-1">cliente@empresa.com</p>
          </div>
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-2">Bienvenido</h2>
        <p className="text-gray-400 mb-8">Aquí puedes ver el estado de tus proyectos y hablar con los agentes.</p>

        {/* Tarjetas de resumen */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <p className="text-gray-400 text-sm">Proyectos activos</p>
            <p className="text-3xl font-bold text-white mt-2">3</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <p className="text-gray-400 text-sm">Tareas en progreso</p>
            <p className="text-3xl font-bold text-blue-400 mt-2">7</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <p className="text-gray-400 text-sm">Tareas completadas</p>
            <p className="text-3xl font-bold text-green-400 mt-2">24</p>
          </div>
        </div>

        {/* Actividad reciente */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Actividad reciente</h3>
          <div className="flex flex-col gap-3">
            {[
              { agente: "Desarrollador de Software", tarea: "API REST completada", tiempo: "Hace 2h", color: "bg-blue-500" },
              { agente: "Documentador técnico", tarea: "Documentación actualizada", tiempo: "Hace 5h", color: "bg-purple-500" },
              { agente: "Desarrollador de Software", tarea: "Fix en módulo de auth", tiempo: "Hace 6h", color: "bg-blue-500" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 py-3 border-b border-gray-800 last:border-0">
                <div className={`w-2 h-2 rounded-full ${item.color}`} />
                <div className="flex-1">
                  <p className="text-sm text-white">{item.tarea}</p>
                  <p className="text-xs text-gray-500">{item.agente}</p>
                </div>
                <p className="text-xs text-gray-500">{item.tiempo}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

    </div>
  );
}