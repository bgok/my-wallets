import { combineReducers } from 'redux'
import balances from './balances'

export const UPDATE_KRAKEN_BALANCES = 'UPDATE_KRAKEN_BALANCES'
export const UPDATE_COINBASEPRO_BALANCES = 'UPDATE_COINBASEPRO_BALANCES'

const reducer = combineReducers({
  balances,
})

export default reducer
