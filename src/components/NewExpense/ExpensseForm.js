import './ExpenseForm.css';
import React, { useState } from 'react';

function ExpenseForm() {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [entereddate, setEnteredDate] = useState('');
    const [enteredInput, setuserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = (event) => {
        // setEnteredTitle(event.target.value);
        // setuserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });
        setuserInput((prevState) => {
            return { ...prevState, enteredTitle: event.target.value };
        });
    };

    const amountChangehandler = (event) => {
        // setEnteredAmount(event.target.value);
        // setuserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });
        setuserInput((prevState) => {
            return { ...prevState, enteredAmount: event.target.value };
        });
    }

    const dateChangehandler = (event) => {
        // setEnteredDate(event.target.value);
        // setuserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });
        setuserInput((prevState) => {
            return { ...prevState, enteredDate: event.target.value };
        });
    }
    return <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" onChange={amountChangehandler} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min="2018-01-01" max="2022-12-31" onChange={dateChangehandler} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>

};
export default ExpenseForm;