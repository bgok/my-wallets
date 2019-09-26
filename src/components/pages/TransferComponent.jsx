import React, { useState } from 'react'
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from 'react-bootstrap'
import { connect } from 'react-redux'
import {
  getFundingMethods,
  getKrakenDestinationAddress,
} from '../../actions/KrakenActions'
import AssetTypeDropdown from '../common/AssetTypeDropdown'
import ExchangeDropdown from '../common/ExchangeDropdown'

const TransferComponent = ({ getKrakenDestinationAddress }) => {
  const [sourceAccount, setSourceAccount] = useState()
  const [destAccount, setDestAccount] = useState()
  const [amount, setAmount] = useState(0)
  const [assetType, setAssetType] = useState(0)
  // console.log({ sourceAccount, destAccount, amount, assetType })
  return (
    <div className='container-fluid text-left form-dark'>
      <h1>Transfer Funds</h1>
      <Form
        className='form'
        style={{ width: '300px' }}
        onSubmit={submitTransfer({
          sourceAccount,
          destAccount,
          amount,
        })}>
        <FormGroup>
          <FormLabel>Asset</FormLabel>
          <AssetTypeDropdown value={assetType} onChange={setAssetType} />
        </FormGroup>
        <FormGroup>
          <FormLabel>Source account</FormLabel>
          <ExchangeDropdown
            value={sourceAccount}
            onChange={setSourceAccount}
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Destination account</FormLabel>
          <ExchangeDropdown
            value={destAccount}
            onChange={setDestAccount}
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Amount</FormLabel>
          <FormControl
            value={amount}
            onChange={setFromE(setAmount)}
            className='text-right'
            required
          />
        </FormGroup>
        <FormGroup>
          <Button type='submit'>Transfer</Button>
        </FormGroup>
      </Form>
    </div>
  )
}

const submitTransfer = props => e => {
  // const { getKrakenDestinationAddress } = props;
  e.preventDefault()

  getFundingMethods('ETH')
  // getKrakenDestinationAddress();
  console.log('submitted:', props)
}

const setFromE = setter => ({ target: { value } }) => setter(value)

export default connect(
  null,
  dispatch => ({
    getKrakenDestinationAddress: dispatch(getKrakenDestinationAddress()),
  }),
)(TransferComponent)
