import React, {useState} from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";


const expenses1 = [
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
const App = () => {
 
  const [expenses2, setExpenses] = useState(expenses1)

  const addExpenseHandler = (expense) =>{
    console.log('In App.js');
    console.log(expense);

    setExpenses(prevExpenses =>{
      return [expense, ...prevExpenses]
    });

  };

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses items={expenses2} />
    </div>
  );
};

export default App;
