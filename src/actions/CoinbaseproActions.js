import CoinbaseproClient from '../services/CoinbaseproClient'
import { UPDATE_COINBASEPRO_BALANCES } from '../reducers'

export const fetchCoinbaseProBalances = () => async dispatch => {
  const response = await CoinbaseproClient.getCoinbaseAccounts()
  const data = response
    .filter(({ balance }) => parseFloat(balance) !== 0)
    .map(({ currency: symbol, balance }) => ({ symbol, balance }))
  dispatch({ type: UPDATE_COINBASEPRO_BALANCES, data: data })
}
