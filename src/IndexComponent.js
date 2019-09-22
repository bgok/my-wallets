import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchCoinbaseProBalances, fetchKrakenBalances } from "./actions";

class IndexComponent extends Component {
    render = () => {
        const { kraken, coinbasepro } = this.props;
        return (
            <>
                <header>Welcome</header>
                <h2>Kraken Balances</h2>
                {kraken && kraken.map((b, i) => <div key={i}>{b.symbol}: {b.balance}</div>)}
                <h2>Coinbase Balances</h2>
                {coinbasepro && coinbasepro.map((b, i) => <div key={i}>{b.symbol}: {b.balance}</div>)}
            </>
        );
    };

    componentDidMount() {
        const {fetchKrakenBalances, fetchCoinbaseProBalances} = this.props;
        fetchKrakenBalances();
        fetchCoinbaseProBalances();
    }
}

export default connect(
    // ({balances: kraken}) => ({kraken}),
    ({balances: {kraken, coinbasepro}}) => ({kraken, coinbasepro}),
    dispatch => ({
        fetchKrakenBalances: () => dispatch(fetchKrakenBalances()),
        fetchCoinbaseProBalances: () => dispatch(fetchCoinbaseProBalances())
    })
)(IndexComponent);

