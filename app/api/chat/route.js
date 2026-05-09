export async function POST(request) {
  try {
    const { mensaje, historial } = await request.json()

    const PAPERCLIP_URL = process.env.PAPERCLIP_URL
    const COMPANY_ID = process.env.PAPERCLIP_COMPANY_ID
    const CEO_ID = process.env.PAPERCLIP_CEO_AGENT_ID
    const TOKEN = process.env.PAPERCLIP_SESSION_TOKEN

    // 1. Crear issue en Paperclip asignado al CEO
    const issueRes = await fetch(
      `${PAPERCLIP_URL}/api/companies/${COMPANY_ID}/issues`,
      {
        method: 'POST',
       headers: {
  'Content-Type': 'application/json',
  'Cookie': `better-auth.session_token=${TOKEN}`,
  'Origin': 'http://177.7.54.213:40976',
  'Referer': 'http://177.7.54.213:40976/BAL/dashboard',
},
        body: JSON.stringify({
          title: `Chat cliente: ${mensaje.slice(0, 60)}`,
          description: `
El cliente envió el siguiente mensaje via dashboard:

"${mensaje}"

Historial de la conversación:
${historial.map(m => `${m.rol === 'cliente' ? 'Cliente' : 'Agente'}: ${m.texto}`).join('\n')}

Por favor responde directamente al cliente de forma conversacional para entender mejor su proyecto.
          `.trim(),
          assigneeAgentId: CEO_ID,
          priority: 'high',
        }),
      }
    )

    const issueData = await issueRes.json()

    if (!issueRes.ok) {
      console.error('Error creando issue:', issueData)
      return Response.json({ error: 'Error al contactar al agente' }, { status: 500 })
    }

    // 2. Por ahora devolvemos confirmación — el CEO trabajará en Paperclip
    return Response.json({
      ok: true,
      respuesta: `Entendido. He registrado tu consulta (${issueData.identifier}) y el CEO está analizando tu proyecto. En breve tendrás una respuesta detallada.`,
      issueId: issueData.identifier
    })

  } catch (error) {
    console.error('Error:', error)
    return Response.json({ error: 'Error interno' }, { status: 500 })
  }
}