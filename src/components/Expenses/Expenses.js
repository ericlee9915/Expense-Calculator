import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setEnteredYear] = useState("2021");

  const setEnteredYearHandler = (enteredYear) => {
    console.log("In Expense.js: " + enteredYear);
    setEnteredYear(enteredYear);
  };

  const filteredExpenses = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No Expenses Found.</p>;

  if (filteredExpenses.length > 0 ){
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
      ))
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSetEnteredYear={setEnteredYearHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
