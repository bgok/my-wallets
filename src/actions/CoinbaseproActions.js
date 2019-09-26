import CoinbasePro from "coinbase-pro";
import { CoinbaseProKey, CoinbaseProPassphrase, CoinbaseProSecret } from "../accountsSecrets";
import { UPDATE_COINBASEPRO_BALANCES } from "../reducers";

const coinbaseProClient = new CoinbasePro.AuthenticatedClient(
    CoinbaseProKey, CoinbaseProSecret, CoinbaseProPassphrase, 'https://api.pro.coinbase.com',
);

export const fetchCoinbaseProBalances = () => async dispatch => {
    const response = await coinbaseProClient.getCoinbaseAccounts();
    const data = response
        .filter(({ balance }) => parseFloat(balance) !== 0)
        .map(({ currency: symbol, balance }) => ({ symbol, balance }));
    dispatch({ type: UPDATE_COINBASEPRO_BALANCES, data: data })
};
