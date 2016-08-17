//REDUCER RAIZ
import ls from 'local-storage'
import { LOGIN, LOGOUT, ADD_TRANSFER } from '../actions/action_creators'

import { initialStateFile } from '../initialState'

//LA PRIMERA VEZ SE FIJA SI YA HAY GUARDADO ALGUN STATE EN EL LOCALSTORAGE
let state = ls.get('state')

//STATE INICIAL
let initialState = initialStateFile

if(state !== null){
  initialState = state 
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        userLoged: true
      })

    case LOGOUT:
      return Object.assign({}, state, {
        userLoged: false
      })

    case ADD_TRANSFER: //!!!!!!! !!!!! !!!!! IMPLEMENTAR IMMUTABLEJS PARA MANEJAR EL STATE
      state.ultimosMovimientos.unshift(action.item)

      state.cuentas.resumenMes.gastos = parseInt(state.cuentas.resumenMes.gastos, 10)
      state.cuentas.saldoActual.importe = parseInt(state.cuentas.saldoActual.importe, 10)
      action.item.valor.importe = parseInt(action.item.valor.importe, 10)

      state.cuentas.saldoActual.importe -= action.item.valor.importe
      state.cuentas.resumenMes.gastos += action.item.valor.importe

      if(action.item.cuentaDebito === 'CA'){
        state.cajaDeAhorro.saldoActual -= action.item.valor.importe
        state.cajaDeAhorro.ultimosMovimientos.unshift(action.item)
      }

      if(action.item.cuentaDebito === 'CC'){
        state.cuentaCorriente.saldoActual -= action.item.valor.importe
        state.cuentaCorriente.ultimosMovimientos.unshift(action.item)
      }      
      return state

    default:
      return state

  }
}