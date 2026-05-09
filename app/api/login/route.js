import { verificarUsuario } from '@/lib/usuarios'
import { cookies } from 'next/headers'

export async function POST(request) {
  try {
    const { email, password } = await request.json()

    const usuario = verificarUsuario(email, password)

    if (!usuario) {
      return Response.json({ error: 'Credenciales incorrectas' }, { status: 401 })
    }

    const cookieStore = await cookies()
    cookieStore.set('balam_session', JSON.stringify({
      id: usuario.id,
      nombre: usuario.nombre,
      email: usuario.email,
    }), {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7, // 7 días
      path: '/',
    })

    return Response.json({ ok: true, usuario: { nombre: usuario.nombre, email: usuario.email } })

  } catch (error) {
    console.error('Error login:', error)
    return Response.json({ error: 'Error interno' }, { status: 500 })
  }
}