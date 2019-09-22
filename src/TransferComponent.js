import React, { useState } from 'react';
import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import ExchangeDropdown from "./ExchangeDropdown";

export default props => {
    const [sourceAccount, setSourceAccount] = useState();
    const [destAccount, setDestAccount] = useState();
    const [amount, setAmount] = useState(0);
    return (
        <>
            <h1>Transfer</h1>
            <Form className="form" style={{ width: '300px' }} onSubmit={submitTransfer(props)}>
                <FormGroup>
                    <FormLabel>Source account</FormLabel>
                    <ExchangeDropdown value={sourceAccount} onChange={setSourceAccount}/>
                </FormGroup>
                <FormGroup>
                    <FormLabel>Destination account</FormLabel>
                    <ExchangeDropdown value={destAccount} onChange={setDestAccount}/>
                </FormGroup>
                <FormGroup>
                    <FormLabel>Amount</FormLabel>
                    <FormControl value={amount} onChange={setAmount} className='text-right'/>
                </FormGroup>
                <FormGroup>
                    <Button type='submit'>
                        Transfer
                    </Button>
                </FormGroup>
            </Form>
        </>
    );
}

const submitTransfer = (props) => {
    console.log('submitted')
}
