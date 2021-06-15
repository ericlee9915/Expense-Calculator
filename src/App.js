import ExpenseItem from "./components/ExpenseItem";

function App() {
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
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
