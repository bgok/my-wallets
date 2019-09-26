import KrakenClient from '../services/KrakenClient'
import { UPDATE_KRAKEN_BALANCES } from '../reducers'

export const fetchKrakenBalances = () => dispatch => {
  KrakenClient.api('Balance', null, (error, response) => {
    if (error || !response) {
      console.error(error)
    } else {
      const { result } = response
      const data = Object.keys(result).map(k => ({
        symbol: k,
        balance: result[k],
      }))
      dispatch({ type: UPDATE_KRAKEN_BALANCES, data: data })
    }
  })
}

export const getFundingMethods = symbol => dispatch => {
  const params = { asset: symbol, wtf: 'huh' }
  console.log(' ....', params)
  KrakenClient.api('DepositMethods', params, (err, { result }) => {
    if (err) {
      console.error('e', err)
    } else {
      console.log(result)
    }
  })
}

export const getKrakenDestinationAddress = () => dispatch => {
  KrakenClient.api('DepositAddresses', null, (error, { result }) => {
    if (error) {
      console.error(error)
    } else {
      console.log(result)
    }
  })
}
