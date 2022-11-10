const jokeUrl = 'https://api.chucknorris.io/jokes/random'

const urlUsuarios = 'https://reqres.in/api/users?page=2'

const obtenerChiste = async () => {
  try {
    const resp = await fetch(jokeUrl)
    if (!resp.ok) throw 'No se pudo realizar la petición'
    return await resp.json()
  } catch (err) {
    throw err
  }
}

const obtenerUsuarios = async () => {
  try {
    const resp = await fetch(urlUsuarios)
    const { data: usuarios } = await resp.json()
    return usuarios
  } catch (error) {
    console.log(error)
  }
}

export { obtenerUsuarios, obtenerChiste }
