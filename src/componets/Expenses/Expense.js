import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expense.css";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expense(props) {
  const [yearState, setYearState] = useState("2020");

  const choosedYearHandler = (year) => {
    setYearState(year);
    console.log("state in Expenses.js" + yearState);
  };
  console.log(props.data);
  return (
    <Card className="expenses">
      <ExpensesFilter chosedYear={yearState} onChoseYear={choosedYearHandler} />
      {props.data
        .filter(
          (expense) => expense.date.getFullYear().toString() === yearState
        )
        .map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </Card>
  );
}

export default Expense;
