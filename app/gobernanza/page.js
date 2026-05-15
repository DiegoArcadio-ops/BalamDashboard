export default function GobernanzaPage() {
  return (
    <div className="min-h-screen text-white" style={{background: 'linear-gradient(135deg, #0a0a0f 0%, #0d1117 50%, #0a0f1a 100%)'}}>

      {/* Header */}
      <div className="border-b px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between" style={{borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)'}}>
       <div className="flex items-center gap-3">
          <img src="/LogoBalamSoftware.png" alt="Balam Agentic Systems" className="h-12 w-auto" />
        </div>
        <span className="text-xs px-3 py-1 rounded-full" style={{background: 'rgba(16,185,129,0.15)', color: '#34d399', border: '1px solid rgba(16,185,129,0.3)'}}>
          Documento Oficial
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12">

        {/* Hero */}
        <div className="text-center mb-16">
         <div className="flex justify-center mb-6">
            <img src="/LogoBalamSoftware.png" alt="Balam Agentic Systems" className="h-48 w-auto" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">"Balam: Software a la velocidad del instinto"</h2>
          <p className="text-lg" style={{color: 'rgba(255,255,255,0.5)'}}>
            Conoce nuestra empresa, nuestra misión y el marco que garantiza la seguridad y confianza en cada proyecto.
          </p>
        </div>

        {/* ¿Qué es? */}
        <div className="mb-10 rounded-2xl p-8" style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)'}}>
          <h3 className="text-xl font-bold text-white mb-6">🤖 ¿Qué es Balam Agentic Systems?</h3>
          <p className="text-sm leading-relaxed mb-8" style={{color: 'rgba(255,255,255,0.5)'}}>
            Balam Agentic Systems opera a través de dos productos principales que trabajan en conjunto para entregar software de alta calidad de forma autónoma y transparente.
          </p>

          <div className="grid grid-cols-1 gap-6 w-full">
            {/* Producto 1 */}
            <div className="rounded-xl p-6" style={{background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)'}}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold" style={{background: 'linear-gradient(135deg, #3b82f6, #6366f1)'}}>AI</div>
                <div>
                  <p className="text-sm font-bold text-white">Balam Agentic Systems</p>
                  <p className="text-xs" style={{color: 'rgba(255,255,255,0.35)'}}>Fábrica de Software Autónoma</p>
                </div>
              </div>
              <p className="text-base leading-relaxed" style={{color: 'rgba(255,255,255,0.6)'}}>
                Es una Fábrica de Software Autónoma. Operamos a través de un ecosistema de inteligencia artificial donde un "Director de Proyecto Digital" (el orquestador) recibe la idea del cliente, la divide en tareas precisas y coordina a un equipo de especialistas virtuales (agentes programadores, analistas y testers) para construir software funcional, seguro y a una fracción del tiempo y costo tradicional.
              </p>
            </div>

            {/* Producto 2 */}
            <div className="rounded-xl p-6" style={{background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.2)'}}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold" style={{background: 'linear-gradient(135deg, #8b5cf6, #6366f1)'}}>DG</div>
                <div>
                  <p className="text-sm font-bold text-white">Dashboard Gerencial Estratégico</p>
                  <p className="text-xs" style={{color: 'rgba(255,255,255,0.35)'}}>Interfaz de Gestión Empresarial</p>
                </div>
              </div>
              <p className="text-base leading-relaxed" style={{color: 'rgba(255,255,255,0.6)'}}>
                Una interfaz de usuario diseñada para la gestión empresarial. Este producto permite a los supervisores o clientes monitorear en tiempo real los costos de API, los tiempos de ejecución y el nivel de cumplimiento de los hitos del proyecto.
              </p>
            </div>
          </div>
        </div>

        {/* Misión */}
        <div className="mb-10 rounded-2xl p-8" style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)'}}>
          <h3 className="text-xl font-bold text-white mb-4">🎯 Misión</h3>
          <p className="text-sm leading-relaxed mb-6" style={{color: 'rgba(255,255,255,0.5)'}}>
            Empoderar a las organizaciones mediante la orquestación de ecosistemas de inteligencia artificial autónoma, transformando ideas complejas en soluciones de software de alta calidad de forma instantánea, eficiente y accesible.
          </p>
          <div className="flex flex-col gap-4">
            {[
              { titulo: 'Empoderar', texto: 'No reemplazamos al humano, le damos una "fábrica digital" para que pueda crear más.' },
              { titulo: 'Orquestación', texto: 'Es nuestra competencia core (AI Orchestrators). No solo usamos IA, la dirigimos.' },
              { titulo: 'Instante y Eficiente', texto: 'Atacamos el problema del tiempo y el costo del desarrollo tradicional.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-1 rounded-full flex-shrink-0" style={{background: 'linear-gradient(to bottom, #3b82f6, #8b5cf6)', minHeight: '40px'}} />
                <div>
                  <p className="text-base font-semibold text-white mb-1">{item.titulo}</p>
                  <p className="text-base leading-relaxed" style={{color: 'rgba(255,255,255,0.5)'}}>{item.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visión */}
        <div className="mb-10 rounded-2xl p-8" style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)'}}>
          <h3 className="text-xl font-bold text-white mb-4">🔭 Visión</h3>
          <p className="text-base leading-relaxed" style={{color: 'rgba(255,255,255,0.5)'}}>
            Ser la plataforma líder en gobernanza y orquestación agéntica en México, redefiniendo el estándar de la ingeniería de software hacia un modelo de autonomía total y crecimiento exponencial.
          </p>
        </div>

        {/* Valores */}
        <div className="mb-10 rounded-2xl p-8" style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)'}}>
          <h3 className="text-xl font-bold text-white mb-2">🐆 Valores</h3>
          <p className="text-sm mb-6" style={{color: 'rgba(255,255,255,0.35)'}}>Los pilares del Jaguar</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { numero: '01', titulo: 'Agilidad (Balam)', texto: 'Capacidad de respuesta y ejecución inmediata ante cualquier desafío técnico.', color: '#3b82f6' },
              { numero: '02', titulo: 'Autonomía', texto: 'Confianza en la capacidad de nuestros agentes para resolver problemas con mínima supervisión.', color: '#8b5cf6' },
              { numero: '03', titulo: 'Transparencia', texto: 'Claridad total en los procesos de pensamiento y costos de la IA (Gobernanza).', color: '#10b981' },
              { numero: '04', titulo: 'Innovación Evolutiva', texto: 'Compromiso con la actualización constante de nuestros modelos y flujos de trabajo.', color: '#f59e0b' },
            ].map((item, i) => (
              <div key={i} className="rounded-xl p-5" style={{background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)'}}>
                <p className="text-2xl font-bold mb-2" style={{color: item.color}}>{item.numero}</p>
                <p className="text-sm font-semibold text-white mb-2">{item.titulo}</p>
                <p className="text-xs leading-relaxed" style={{color: 'rgba(255,255,255,0.45)'}}>{item.texto}</p>
              </div>
            ))}
          </div>
        </div>

       {/* Gobernanza */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-white mb-2">🏛️ Marco de Gobernanza de IA</h3>
          <p className="text-sm mb-8" style={{color: 'rgba(255,255,255,0.35)'}}>
            Este marco asegura que la fábrica de software multi-agente de Balam sea segura, escalable, y alinee la velocidad de la inteligencia artificial con los límites del negocio.
          </p>
        </div>

        {/* Núcleo */}
        <div className="mb-10 rounded-2xl p-8" style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)'}}>
          <h3 className="text-xl font-bold text-white mb-6">El Núcleo del Modelo Operativo</h3>
          <p className="text-base mb-6 leading-relaxed" style={{color: 'rgba(255,255,255,0.5)'}}>
            El estándar NIST establece que la gestión de riesgos en sistemas de IA requiere cuatro funciones continuas: Gobernar (Govern), Mapear (Map), Medir (Measure) y Gestionar (Manage). En el ecosistema Balam, esto define las responsabilidades:
          </p>
          {[
            { subtitulo: 'Gobernar (Comité de IA y Políticas TRiSM)', texto: 'Los actores clave responsables de la gobernanza de la IA incluyen el liderazgo superior de Balam y sus clientes. Se establece un esquema de "IA de Confianza" donde Balam es legalmente responsable de auditar a sus agentes, mientras el cliente retiene la aprobación estratégica a través de un modelo Human-in-the-Loop (HITL).' },
            { subtitulo: 'Mapear (Identificación de Riesgos por Agente)', texto: 'Antes de cualquier despliegue, el orquestador Paperclip debe anticipar los riesgos emergentes a lo largo del ciclo de vida del software. Riesgo en Balam_Analista: Mala interpretación de los requisitos de la PyME. Riesgo en Balam_Developer: Inclusión de dependencias o librerías vulnerables. Riesgo en Balam_QA: Falsos positivos en la aprobación de pruebas unitarias.' },
            { subtitulo: 'Medir (Métricas Cuantitativas)', texto: 'La precisión y la robustez contribuyen a la confiabilidad de los sistemas de IA, aunque a veces pueden estar en tensión en el desarrollo. Balam medirá: Tasa de hallazgos de QA: Porcentaje de defectos lógicos capturados internamente antes de mostrar el código al cliente. Token Burnout: Control de gasto en la API por cada flujo de requerimientos.' },
            { subtitulo: 'Gestionar (Mitigación TRiSM)', texto: 'Se asignan recursos para mitigar los riesgos documentados. El orquestador implementa límites estrictos (Max Iterations) para que los agentes no entren en bucles de alto costo.' },
          ].map((item, j) => (
            <div key={j} className="flex gap-4 mb-5">
              <div className="w-1 rounded-full flex-shrink-0" style={{background: 'linear-gradient(to bottom, #3b82f6, #8b5cf6)', minHeight: '40px'}} />
              <div>
                <p className="text-base font-semibold text-white mb-1">{item.subtitulo}</p>
                <p className="text-base leading-relaxed" style={{color: 'rgba(255,255,255,0.5)'}}>{item.texto}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Seguridad */}
        <div className="mb-10 rounded-2xl p-8" style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)'}}>
          <h3 className="text-xl font-bold text-white mb-4">🔐 Seguridad de Infraestructura y Datos</h3>
          <p className="text-base mb-6 leading-relaxed" style={{color: 'rgba(255,255,255,0.5)'}}>
            Dado que Balam generará software propietario para empresas (sistemas de facturación, bases de datos), la protección del código fuente es el activo más valioso.
          </p>
          {[
            { subtitulo: 'Aislamiento de Perímetros (VPC y IAM)', texto: 'Se aplicarán controles de Servicio de VPC y políticas estrictas de Identidad y Acceso (IAM). El agente Balam_Developer solo tendrá permisos de escritura sobre el repositorio de código del cliente actual y cero visibilidad sobre los proyectos de otros clientes.' },
            { subtitulo: 'Prevención de "Prompt Injection" (Model Armor)', texto: 'Los agentes autónomos son vulnerables a ataques de inyección si procesan datos externos maliciosos. Balam filtrará las instrucciones y respuestas de los modelos base usando herramientas como Model Armor para mitigar inyecciones, jailbreaking y filtración de datos sensibles.' },
            { subtitulo: 'Confidencialidad desde el Hardware (Confidential Computing)', texto: 'Balam garantiza a los clientes que su código no será usado para entrenar otros modelos. Mediante IA confidencial y Confidential VMs, se asegura la protección, aislamiento e integridad de las cargas de trabajo de IA desde la CPU hasta la GPU.' },
            { subtitulo: 'Cumplimiento y Soberanía de Datos (LFPDPPP)', texto: 'Toda la arquitectura de Balam está diseñada para cumplir con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) de México, así como con estándares internacionales (como ISO 27001). Aseguramos que los datos sensibles que el cliente comparta en los requerimientos no saldrán de las regiones seguras de la nube y se aplicarán políticas de anonimización antes de que cualquier prompt sea procesado por los modelos fundacionales.' },
            { subtitulo: 'Política de Retención y Destrucción Segura', texto: 'Una vez que el cliente aprueba el despliegue final del software y finaliza el proyecto, Balam ejecuta un protocolo de borrado criptográfico de los repositorios temporales de los agentes. El cliente retiene la propiedad intelectual absoluta (IP) del código generado y Balam no retiene fragmentos de código fuente ni datos de prueba en sus bases de datos activas.' },
          ].map((item, j) => (
            <div key={j} className="flex gap-4 mb-5">
              <div className="w-1 rounded-full flex-shrink-0" style={{background: 'linear-gradient(to bottom, #6366f1, #8b5cf6)', minHeight: '40px'}} />
              <div>
                <p className="text-base font-semibold text-white mb-1">{item.subtitulo}</p>
                <p className="text-base leading-relaxed" style={{color: 'rgba(255,255,255,0.5)'}}>{item.texto}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Escalabilidad */}
        <div className="mb-10 rounded-2xl p-8" style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)'}}>
          <h3 className="text-xl font-bold text-white mb-4">📈 Política de Escalabilidad Responsable</h3>
          <p className="text-base mb-6 leading-relaxed" style={{color: 'rgba(255,255,255,0.5)'}}>
            Para soportar el salto de 10 a más de 500 proyectos regionales en el primer año sin comprometer la calidad, Balam operará con una política estricta de escalado:
          </p>
          {[
            { subtitulo: 'Niveles de Autonomía Gradual', texto: 'A medida que se integran modelos fundacionales más avanzados en el framework Paperclip, aumentan las capacidades de los agentes. La política RSP dicta que antes de dotar a Balam_Developer de herramientas de mayor riesgo (ej. despliegue automático directo en servidores productivos del cliente), el sistema debe someterse a simulaciones de ruta de ataque ("Red Teaming").' },
            { subtitulo: 'Resiliencia contra Interrupciones (DDoS de IA)', texto: 'Se contemplan defensas como Cloud Armor para prevenir ataques de denegación de servicio en la capa de aplicación, asegurando que las células ágiles de Balam estén disponibles 24/7.' },
            { subtitulo: 'Mecanismo de "Kill-Switch" (Apagado de Emergencia)', texto: 'Balam contará con un interruptor de emergencia a nivel de orquestador. Si el sistema detecta un comportamiento anómalo grave el framework Paperclip congela automáticamente todos los agentes de esa célula, revoca los accesos a la API y notifica al cliente y al equipo de soporte de Balam, evitando cualquier daño colateral.' },
          ].map((item, j) => (
            <div key={j} className="flex gap-4 mb-5">
              <div className="w-1 rounded-full flex-shrink-0" style={{background: 'linear-gradient(to bottom, #10b981, #059669)', minHeight: '40px'}} />
              <div>
                <p className="text-base font-semibold text-white mb-1">{item.subtitulo}</p>
                <p className="text-base leading-relaxed" style={{color: 'rgba(255,255,255,0.5)'}}>{item.texto}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Multi-LLM */}
        <div className="mb-10 rounded-2xl p-8" style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)'}}>
          <h3 className="text-xl font-bold text-white mb-4">🔄 Riesgo de Dependencia de Proveedores</h3>
          <div className="flex gap-4">
            <div className="w-1 rounded-full flex-shrink-0" style={{background: 'linear-gradient(to bottom, #f59e0b, #d97706)', minHeight: '40px'}} />
            <div>
              <p className="text-base font-semibold text-white mb-1">Estrategia Multi-LLM y Continuidad del Negocio</p>
              <p className="text-base leading-relaxed" style={{color: 'rgba(255,255,255,0.5)'}}>Para garantizar la resiliencia operativa y no depender de un solo proveedor de Inteligencia Artificial, el orquestador de Balam es "agnóstico al modelo". En caso de una caída del servicio de la API principal, el sistema puede enrutar las tareas de Balam_Analista o Balam_Developer hacia modelos de respaldo preconfigurados, garantizando que el desarrollo de software del cliente nunca se detenga.</p>
            </div>
          </div>
        </div>

        {/* Transparencia */}
        <div className="mb-10 rounded-2xl p-8" style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)'}}>
          <h3 className="text-xl font-bold text-white mb-4">👁️ Transparencia y Explicabilidad</h3>
          <p className="text-base mb-6 leading-relaxed" style={{color: 'rgba(255,255,255,0.5)'}}>
            La gobernanza no es solo seguridad, es la propuesta de valor para el cliente. Según los estándares de gestión de riesgo, la transparencia, la explicabilidad y la interpretabilidad son características distintas pero que se apoyan mutuamente.
          </p>
          <div className="flex gap-4">
            <div className="w-1 rounded-full flex-shrink-0" style={{background: 'linear-gradient(to bottom, #3b82f6, #06b6d4)', minHeight: '40px'}} />
            <div>
              <p className="text-base font-semibold text-white mb-1">Rastro de Pensamiento (Observabilidad Agéntica)</p>
              <p className="text-base leading-relaxed" style={{color: 'rgba(255,255,255,0.5)'}}>Los riesgos de interpretabilidad se mitigan al comunicar por qué un sistema de IA tomó cierta decisión. El Dashboard de Balam documentará inmutablemente por qué Balam_Analista eligió una arquitectura específica, brindándole al cliente visibilidad total y confianza antes del "clic" de aprobación humana.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 py-8 border-t" style={{borderColor: 'rgba(255,255,255,0.06)'}}>
          <p className="text-sm" style={{color: 'rgba(255,255,255,0.3)'}}>© 2026 Balam Agentic Systems · Todos los derechos reservados</p>
          <p className="text-xs mt-2" style={{color: 'rgba(255,255,255,0.2)'}}>Documento institucional oficial — Versión 1.0</p>
        </div>

      </div>
    </div>
  )
}