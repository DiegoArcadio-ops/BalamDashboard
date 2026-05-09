// Base de usuarios del sistema
// Para agregar un cliente nuevo, agrega un objeto a este array
export const usuarios = [
  {
    id: '1',
    nombre: 'Cliente Demo',
    email: 'cliente@empresa.com',
    password: 'demo1234',
  }
]

export function verificarUsuario(email, password) {
  return usuarios.find(u => u.email === email && u.password === password) || null
}