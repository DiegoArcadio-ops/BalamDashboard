export async function POST(request) {
  try {
    const { resumen, sessionToken } = await request.json()

    const titulo = resumen.proyecto
    const descripcion = `
Proyecto solicitado por cliente via dashboard.

**Descripción del proyecto:** ${resumen.proyecto}
**Tecnologías:** ${resumen.tecnologias}
**Plazo estimado:** ${resumen.plazo}
**Agentes sugeridos:** ${resumen.agentes.join(', ')}

Por favor coordinar con el equipo para iniciar el desarrollo.
    `.trim()

    const response = await fetch(
      `${process.env.PAPERCLIP_URL}/api/companies/${process.env.PAPERCLIP_COMPANY_ID}/issues`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cookie': `better-auth.session_token=${sessionToken}`,
        },
        body: JSON.stringify({
          title: titulo,
          description: descripcion,
          assigneeAgentId: process.env.PAPERCLIP_CEO_AGENT_ID,
          priority: 'high',
        }),
      }
    )

    const data = await response.json()
    console.log('Respuesta Paperclip:', response.status, data)

    if (!response.ok) {
      return Response.json({ error: 'Error al crear el proyecto', detalle: data }, { status: 500 })
    }

    return Response.json({ ok: true, issueId: data.id })

  } catch (error) {
    console.error('Error:', error)
    return Response.json({ error: 'Error interno' }, { status: 500 })
  }
}