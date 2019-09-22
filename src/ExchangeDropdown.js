import React from 'react';

import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const options = [
    {value: 1, label: 'Kraken'},
    {value: 2, label: 'Coinbase'},
    {value: 3, label: 'Bittrex'},
];

export default ({value, onChange}) => {
    return (
        <Dropdown options={options} onChange={onChange} value={value}
                  placeholder="Select an account" />

    )
}
