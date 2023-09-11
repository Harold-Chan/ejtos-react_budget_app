import React from 'react';

const Currency = (props) => {
    const { selectedCurrency, handleCurrencyChange } = props;

    const optionStyle = {
        backgroundColor: 'black',
        color: 'white',
    };

    // Event handler for the currency dropdown change event
    const handleChange = (event) => {
        handleCurrencyChange(event.target.value);
    };

    return (
        <div className='alert alert-warning'>
            <label htmlFor="currency">Currency: </label>
            <select
                id="currency"
                style={optionStyle}
                onChange={handleChange}
                value={selectedCurrency}
            >
                <option value="$" name="dollar">$ Dollar</option>
                <option value="£" name="pound">£ Pound</option>
                <option value="€" name="euro">€ Euro</option>
                <option value="₹" name="ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
};

export default Currency;
