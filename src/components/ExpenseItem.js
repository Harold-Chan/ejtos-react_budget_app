import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const {selectedCurrency} = props; // Receive the selected currency as a prop
    const optionStyle1 = {
        // width: '10px',
        // height: '10px',
        color: 'white',
        fontSize: '120%',
        fontWeight: 'bold',
        backgroundColor: 'forestgreen',
        borderRadius: '50%',
        borderWidth: '0',
    };
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{selectedCurrency}{props.cost}</td>
        <td ><button style={optionStyle1} onClick={event=> increaseAllocation(props.name)}> + </button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;