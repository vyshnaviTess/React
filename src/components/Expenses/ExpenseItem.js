import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React, { useState, useStatev } from 'react';

// const ExpenseItem = (props) =>{} - alternative way of writting a function
function ExpenseItem(props) {
   const [title, setTitle] = useState(props.title);

    // let title = props.title;
    // const clickHandler = () => {}
    function clickHandler() {
        // title = "Updated!"
        setTitle('Updated!');
        console.log(title);
        console.log('Clicked!');
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">£{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Edit</button>
        </Card>
    );
}

export default ExpenseItem;