export async function POST(request) {
  try {
    const { resumen } = await request.json()

    const descripcion = `
Proyecto solicitado por cliente via dashboard.

Descripción: ${resumen.proyecto}
Tecnologías: ${resumen.tecnologias}
Plazo estimado: ${resumen.plazo}
Agentes sugeridos: ${resumen.agentes.join(', ')}
    `.trim()

    const response = await fetch(
      `${process.env.PAPERCLIP_URL}/api/companies/${process.env.PAPERCLIP_COMPANY_ID}/issues`,
      {
        method: 'POST',
       headers: {
  'Content-Type': 'application/json',
  'Cookie': `better-auth.session_token=${TOKEN}`,
  'Origin': 'http://177.7.54.213:40976',
  'Referer': 'http://177.7.54.213:40976/BAL/dashboard',
},
        body: JSON.stringify({
          title: resumen.proyecto,
          description: descripcion,
          assigneeAgentId: process.env.PAPERCLIP_CEO_AGENT_ID,
          priority: 'high',
        }),
      }
    )

    const data = await response.json()
    console.log('Paperclip response:', response.status, data)

    if (!response.ok) {
      return Response.json({ error: 'Error Paperclip', detalle: data }, { status: 500 })
    }

    return Response.json({ ok: true, issueId: data.identifier })

  } catch (error) {
    console.error('Error:', error)
    return Response.json({ error: 'Error interno' }, { status: 500 })
  }
}