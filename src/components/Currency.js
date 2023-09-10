import React from 'react';

const Currency = () => {
    const optionStyle = {
        backgroundColor: 'black',
        color: 'white',
    };

return (
    <div className='alert alert-warning'>
        <label for="currency">Currency: </label>
        <select id="currency" style={optionStyle}>
            <option value="Dollar" name="dollar">$ Dollar</option>
            <option value="Pound" name="pound" selected>£ Pound</option>
            <option value="Euro" name="euro">€ Euro</option>
            <option value="Ruppee" name="ruppee">₹ Ruppee</option>
        </select>
    </div>
);
};

export default Currency;