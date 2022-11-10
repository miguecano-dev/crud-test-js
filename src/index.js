// import { init } from './js/chistes-page'
// init()
// import { obtenerUsuarios } from './js/provider'
// obtenerUsuarios().then(console.log)

// import { init } from './js/usuarios-page'
// init()dddd

import * as CRUD from './js/crud-provider'

CRUD.getUsuario(2).then(console.log)

CRUD.crearUsuario({
  name: 'fernando',
  job: 'developer'
}).then(console.log)

CRUD.updateUsuario(1, {
  name: 'miguel',
  job: 'developer'
}).then(console.log)

CRUD.deleteUsuario(10).then(console.log)
