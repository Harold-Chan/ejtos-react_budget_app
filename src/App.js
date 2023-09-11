import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import Currency from './components/Currency';
import { AppProvider } from './context/AppContext';

const App = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('£'); // Default currency is Pound (£)

    // Function to update selected currency
    const handleCurrencyChange = (newCurrency) => {
        setSelectedCurrency(newCurrency);
    };

    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget selectedCurrency={selectedCurrency}/>
                    </div>
                    <div className='col-sm'>
                        <Remaining selectedCurrency={selectedCurrency}/>
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal selectedCurrency={selectedCurrency}/>
                    </div>
                    <div className='col-sm'>
                        <Currency
                            selectedCurrency={selectedCurrency}
                            handleCurrencyChange={handleCurrencyChange}
                        />
                    </div>
                </div>
                <h3 className='mt-3'>Allocation</h3>
                <div className='row'>
                    <div className='col-sm'>
                        <ExpenseList selectedCurrency={selectedCurrency}/>
                    </div>
                </div>
                <h3 className='mt-3'>Change allocation</h3>
                <div className='row'>
                    <div className='col-sm'>
                        <AllocationForm selectedCurrency={selectedCurrency} />
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;
