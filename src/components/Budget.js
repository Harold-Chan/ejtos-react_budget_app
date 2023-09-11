import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = ({selectedCurrency}) => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        const value = event.target.value;

        if (value > 20000) {
            window.alert('Budget cannot exceed £20,000');
            setNewBudget(20000); // Set it to the maximum allowed value
        } else if (value < totalExpenses) {
            window.alert('You cannot reduce the budget value lower than the spending');
            setNewBudget(totalExpenses); // Set it to the spending
        } else
        {
            setNewBudget(value);
        }
    };
    
    return (
<div className='alert alert-secondary'>
<span>Budget: {selectedCurrency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;