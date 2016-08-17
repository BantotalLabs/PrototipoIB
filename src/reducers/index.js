import ls from 'local-storage'
import { LOGIN } from '../actions/action_creators'

let state = ls.get('state')
let initialState = {}

if(state !== null){
  initialState = state 
}else {
  initialState = {
    userLoged: false
  }
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        userLoged: true
      })
    default:
      return state
  }
}