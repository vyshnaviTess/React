import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Council Tax bill',
      amount: 131.00,
      date: new Date(2022, 0, 5),
    },
    {
      id: 'e2',
      title: 'Current Bill',
      amount: 111.00,
      date: new Date(2022, 0, 7),
    },
    {
      id: 'e3',
      title: 'House Rent',
      amount: 720.00,
      date: new Date(2022, 0, 14),
    },
    {
      id: 'e4',
      title: 'Water Bill',
      amount: 30.00,
      date: new Date(2022, 0, 17),
    },
  ];

  //Jsx
  // return (
  //   <div>
  //     <h2>Let's get started!</h2>
  //     <Expenses items={expenses}/>
  //   </div>
  // );

  return React.createElement(
    'div',
    {},
    React.createElement(NewExpense, {}),
    React.createElement(Expenses, { items: expenses })
  );
}

export default App;
