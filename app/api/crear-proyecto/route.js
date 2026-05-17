export async function POST(request) {
  try {
    const { resumen } = await request.json()

    const headers = {
      'Content-Type': 'application/json',
      'Cookie': `better-auth.session_token=${process.env.PAPERCLIP_SESSION_TOKEN}`,
      'Origin': 'http://177.7.54.213:40976',
      'Referer': 'http://177.7.54.213:40976/BAL/dashboard',
    }

    const descripcion = `
## SOLICITUD DEL CLIENTE
${resumen.proyecto}

## INSTRUCCIONES PARA EL CEO
Eres el Director de Proyecto. Analiza la solicitud y delega INMEDIATAMENTE las siguientes tareas a tu equipo en este orden estricto:

1. → Analista de negocios ágil:
Define 3 historias de usuario esenciales del proyecto con criterios de aceptación claros y concisos. Sin documentos extensos.

2. → Desarrollador de Software:
Desarrolla exactamente lo que el cliente pidió. Entrega código limpio, modular y funcional. Si es frontend: un solo archivo HTML con CSS y JavaScript integrados, diseño moderno oscuro, sin dependencias externas. Verifica que no haya errores de sintaxis antes de reportar al CEO.

3. → Documentador técnico:
Redacta un README.md con: descripción del proyecto, instrucciones de instalación y uso, y estructura del código. Máximo 20 líneas, claro y preciso.

4. → Ingeniero de QA:
Revisa el código del Desarrollador. Verifica que funcione sin errores, que el diseño sea correcto y que cumpla con lo solicitado por el cliente. Da aprobación final o reporta bugs con precisión.

5. → Especialista en ciberseguridad:
Audita el código bajo estándares OWASP. Verifica que no haya vulnerabilidades críticas, datos expuestos ni código malicioso. Emite reporte de aprobación o bloqueo.

6. → Encargado de despliegue:
Empaqueta el proyecto en un Dockerfile y docker-compose.yml funcional. Redacta una guía de uso de Docker simple para el cliente en máximo 10 pasos.

7. → Contador administrativo:
Calcula el costo estimado del proyecto: uso de API, tiempo de desarrollo y recursos del servidor. Emite reporte financiero breve al CEO.

8. → Analista de negocios ágil:
Una vez completado el desarrollo, valida que el entregable final cumpla con las historias de usuario definidas al inicio. Emite aprobación final.

## REGLAS CRÍTICAS
- Delega INMEDIATAMENTE en orden, sin análisis previo extenso
- Cada agente debe ser breve y directo en su entrega
- Prioridad de todas las tareas: HIGH
- El entregable principal es código 100% funcional
- Plazo: inmediato
    `.trim()

    // 1. Crear proyecto en Paperclip
    const proyectoRes = await fetch(
      `${process.env.PAPERCLIP_URL}/api/companies/${process.env.PAPERCLIP_COMPANY_ID}/projects`,
      {
        method: 'POST',
        headers,
        body: JSON.stringify({
          name: resumen.proyecto,
          description: `Proyecto solicitado por cliente via dashboard.`,
        }),
      }
    )

    const proyectoData = await proyectoRes.json()
    console.log('Proyecto creado:', proyectoRes.status, proyectoData)

    if (!proyectoRes.ok) {
      return Response.json({ error: 'Error al crear proyecto', detalle: proyectoData }, { status: 500 })
    }

    const projectId = proyectoData.id

    // 2. Crear issue asignado al CEO dentro del proyecto
    const issueRes = await fetch(
      `${process.env.PAPERCLIP_URL}/api/companies/${process.env.PAPERCLIP_COMPANY_ID}/issues`,
      {
        method: 'POST',
        headers,
        body: JSON.stringify({
          title: resumen.proyecto,
          description: descripcion,
          assigneeAgentId: process.env.PAPERCLIP_CEO_AGENT_ID,
          projectId: projectId,
          priority: 'high',
        }),
      }
    )

    const issueData = await issueRes.json()
    console.log('Issue creado:', issueRes.status, issueData)

    if (!issueRes.ok) {
      return Response.json({ error: 'Error al crear issue', detalle: issueData }, { status: 500 })
    }

    return Response.json({
      ok: true,
      issueId: issueData.identifier,
      projectId: projectId,
      projectName: proyectoData.name
    })

  } catch (error) {
    console.error('Error:', error)
    return Response.json({ error: 'Error interno' }, { status: 500 })
  }
}