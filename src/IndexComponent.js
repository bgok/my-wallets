import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchCoinbaseProBalances, fetchKrakenBalances } from "./actions";

class IndexComponent extends Component {
    render = () => {
        const { balances: { kraken, coinbasepro, metamask, keybase, dcent } } = this.props;
        return (
            <>
                <WalletBalances name='Kraken' wallet={kraken}/>
                <WalletBalances name='CoinbasePro' wallet={coinbasepro}/>
                <WalletBalances name='Metamask' wallet={metamask}/>
                <WalletBalances name='Keybase' wallet={keybase}/>
                <WalletBalances name="D'Cent" wallet={dcent}/>
            </>
        );
    };

    componentDidMount() {
        const { fetchKrakenBalances, fetchCoinbaseProBalances } = this.props;
        fetchKrakenBalances();
        fetchCoinbaseProBalances();
    }
}

const WalletBalances = ({ name, wallet }) => (
    <>
        <h2>{name} Balances</h2>
        {wallet && wallet.map((b, i) => <div key={i}>{b.symbol}: {b.balance}</div>)}
    </>
);

export default connect(
    ({ balances }) => ({ balances }),
    dispatch => ({
        fetchKrakenBalances: () => dispatch(fetchKrakenBalances()),
        fetchCoinbaseProBalances: () => dispatch(fetchCoinbaseProBalances()),
    }),
)(IndexComponent);

