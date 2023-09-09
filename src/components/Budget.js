import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const value = event.target.value;

        if (value > 20000) {
            window.alert('Budget cannot exceed £20,000');
            setNewBudget(20000); // Set it to the maximum allowed value
        } else {
            setNewBudget(value);
        }
    };
    
    return (
<div className='alert alert-secondary'>
<span>Budget: £   </span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;