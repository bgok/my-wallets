import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCoinbaseProBalances } from '../../actions/CoinbaseproActions'
import { fetchKrakenBalances } from '../../actions/KrakenActions'

class IndexComponent extends Component {
  render = () => {
    const {
      balances: { kraken, coinbasepro, metamask, keybase, dcent },
    } = this.props
    return (
      <div className='container-fluid mt-3'>
        <WalletBalances name='Kraken' wallet={kraken} />
        <WalletBalances name='CoinbasePro' wallet={coinbasepro} />
        <WalletBalances name='Metamask' wallet={metamask} />
        <WalletBalances name='Keybase' wallet={keybase} />
        <WalletBalances name="D'Cent" wallet={dcent} />
      </div>
    )
  }

  componentDidMount() {
    const { fetchKrakenBalances, fetchCoinbaseProBalances } = this.props
    fetchKrakenBalances()
    fetchCoinbaseProBalances()
  }
}

const WalletBalances = ({ name, wallet }) => (
  <div className='row mb-3 pb-3 border-bottom'>
    <div className='col-6 text-left'>{name} Balances</div>
    <div className='col-6 text-right'>
      {wallet &&
        wallet.map((b, i) => (
          <div key={i}>
            {b.balance} {b.symbol}
          </div>
        ))}
    </div>
  </div>
)

export default connect(
  ({ balances }) => ({ balances }),
  dispatch => ({
    fetchKrakenBalances: () => dispatch(fetchKrakenBalances()),
    fetchCoinbaseProBalances: () => dispatch(fetchCoinbaseProBalances()),
  }),
)(IndexComponent)
