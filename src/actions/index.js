//SE IMPORTAN LAS POSIBLES ACCIONES
import { LOGIN, LOGOUT, ADD_TRANSFER } from './action_creators'

//FUNCIONES QUE RETORNAN LAS ACCIONES PARA LUEGO HACER EL DISPATCH
export const login = () => {
  return {
    type: LOGIN
  }
}

export const logout = () => {
  return {
    type: LOGOUT
  }
}

export const add_transfer = (item) => {
  return {
    type: ADD_TRANSFER,
    item
  }
}