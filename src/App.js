import React from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 299.99,
      date: new Date(2021, 5, 15),
    },
    {
      id: "e2",
      title: "SodaStream",
      amount: 149.99,
      date: new Date(2021, 3, 12),
    },
    {
      id: "e3",
      title: "Coffee",
      amount: 5.99,
      date: new Date(2021, 4, 25),
    },
    {
      id: "e4",
      title: "Shoes",
      amount: 125.99,
      date: new Date(2021, 2, 10),
    },
  ];

  const addExpenseHandler = expense =>{
    console.log('In App.js');
    console.log(expenses);
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
