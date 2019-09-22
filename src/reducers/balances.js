import { UPDATE_COINBASEPRO_BALANCES, UPDATE_KRAKEN_BALANCES } from "./index";

const balances = (state = { kraken: [], coinbase: [] }, { type, data }) => {
    switch (type) {
    case UPDATE_KRAKEN_BALANCES:
        return { ...state, kraken: data };
    case UPDATE_COINBASEPRO_BALANCES:
        return { ...state, coinbasepro: data };
    default:
        return state;
    }
};

export default balances;
