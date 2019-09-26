import KrakenClient from 'kraken-api'
import { KrakenKey, KrakenSecret } from '../accountsSecrets'

const krakenClient = new KrakenClient(KrakenKey, KrakenSecret)

export default krakenClient
