import CoinbasePro from 'coinbase-pro'
import {
  CoinbaseProKey,
  CoinbaseProPassphrase,
  CoinbaseProSecret,
} from '../accountsSecrets'

const CoinbaseproClient = new CoinbasePro.AuthenticatedClient(
  CoinbaseProKey,
  CoinbaseProSecret,
  CoinbaseProPassphrase,
  'https://api.pro.coinbase.com',
)

export default CoinbaseproClient
