import { capitalize } from 'lodash'
import React, { Component } from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { connect } from 'react-redux'

const AssetTypes = [
  'Bitcoin (BTC)',
  'Ethereum (ETH)',
  'Bitcoin Cash (BCH)',
  'Mana (MANA)',
  'DAI (DAI)',
  'Stellar (XLM)',
  'Ripple (XRP)',
]

class AssetTypeDropdown extends Component {
  render = () => {
    const { value, onChange } = this.props
    const options = AssetTypes.map((k, i) => ({
      value: i,
      label: capitalize(k),
    }))
    return (
      <Dropdown
        options={options}
        onChange={onChange}
        value={value}
        placeholder='Select an account'
      />
    )
  }
}

export default connect(({ balances }) => ({ balances }))(AssetTypeDropdown)
