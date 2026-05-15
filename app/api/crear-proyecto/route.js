export async function POST(request) {
  try {
    const { resumen } = await request.json()

    const headers = {
      'Content-Type': 'application/json',
      'Cookie': `better-auth.session_token=${process.env.PAPERCLIP_SESSION_TOKEN}`,
      'Origin': 'http://177.7.54.213:40976',
      'Referer': 'http://177.7.54.213:40976/BAL/dashboard',
    }

    // 1. Crear proyecto en Paperclip
    const proyectoRes = await fetch(
      `${process.env.PAPERCLIP_URL}/api/companies/${process.env.PAPERCLIP_COMPANY_ID}/projects`,
      {
        method: 'POST',
        headers,
        body: JSON.stringify({
          name: resumen.proyecto,
          description: `Proyecto solicitado por cliente via dashboard.\n\nTecnologías: ${resumen.tecnologias}\nPlazo: ${resumen.plazo}`,
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
          description: `
Proyecto solicitado por cliente via dashboard.

Descripción: ${resumen.proyecto}
Tecnologías: ${resumen.tecnologias}
Plazo estimado: ${resumen.plazo}
Agentes sugeridos: ${resumen.agentes.join(', ')}

Por favor coordinar con el equipo para iniciar el desarrollo.
          `.trim(),
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