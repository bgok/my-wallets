import { cloneDeep } from 'lodash'
import { UPDATE_COINBASEPRO_BALANCES, UPDATE_KRAKEN_BALANCES } from './index'

const INITIAL_STATE = {
  kraken: [],
  coinbasepro: [],
  metamask: [
    { symbol: 'ETH', balance: '1.234' },
    { symbol: 'MANA', balance: '21,999' },
    { symbol: 'DAI', balance: '49.95' },
  ],
  keybase: [{ symbol: 'XLM', balance: '13333' }],
  dcent: [
    { symbol: 'BTC', balance: '3.14259' },
    { symbol: 'ETH', balance: '8.888' },
    { symbol: 'XRP', balance: '6,191.95046' },
  ],
}

const balances = (state = cloneDeep(INITIAL_STATE), { type, data }) => {
  switch (type) {
    case UPDATE_KRAKEN_BALANCES:
      return { ...state, kraken: data }
    case UPDATE_COINBASEPRO_BALANCES:
      return { ...state, coinbasepro: data }
    default:
      return state
  }
}

export default balances
