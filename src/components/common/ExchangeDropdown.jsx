import { capitalize } from 'lodash'
import React, { Component } from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { connect } from 'react-redux'

class ExchangeDropdown extends Component {
  render = () => {
    const { balances, value, onChange } = this.props
    const options = Object.keys(balances).map((k, i) => ({
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

export default connect(({ balances }) => ({ balances }))(ExchangeDropdown)
