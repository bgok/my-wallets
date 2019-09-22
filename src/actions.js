import CoinbasePro from 'coinbase-pro';
import KrakenClient from 'kraken-api';
import { CoinbaseProKey, CoinbaseProPassphrase, CoinbaseProSecret, KrakenKey, KrakenSecret } from "./accountsSecrets";

import { UPDATE_COINBASEPRO_BALANCES, UPDATE_KRAKEN_BALANCES } from "./reducers";

const krakenClient = new KrakenClient(KrakenKey, KrakenSecret);
const coinbaseProClient = new CoinbasePro.AuthenticatedClient(
    CoinbaseProKey, CoinbaseProSecret, CoinbaseProPassphrase, 'https://api.pro.coinbase.com'
);

export const fetchKrakenBalances = () => dispatch => {
    krakenClient.api('Balance', null, (error, {result}) => {
        if (error) {
            console.error(error);
        } else {
            const data = Object.keys(result).map((k) => ({symbol: k, balance: result[k]}));
            dispatch({type: UPDATE_KRAKEN_BALANCES, data: data})
        }
    });
 };

export const getFundingMethods = symbol => dispatch => {
    const params = {asset: symbol, wtf: 'huh'};
    console.log(' ....', params)
    krakenClient.api('DepositMethods', params, (err, {result}) => {
        if (err) {
            console.error('e',err)
        } else {
            console.log(result)
        }
    })
}

export const getKrakenDestinationAddress = () => dispatch => {
    krakenClient.api('DepositAddresses', null, (error, {result}) => {
        if (error) {
            console.error(error);
        } else {
            console.log(result);
        }
    })
}

export const fetchCoinbaseProBalances = () => async dispatch => {
    const response = await coinbaseProClient.getCoinbaseAccounts();
    const data = response
        .filter(({balance}) => parseFloat(balance) !== 0)
        .map(({currency: symbol, balance}) => ({ symbol, balance }))
    dispatch({type: UPDATE_COINBASEPRO_BALANCES, data: data})

}

