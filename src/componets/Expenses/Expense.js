import { useState } from "react";

import "./Expense.css";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expense(props) {
  const [yearState, setYearState] = useState("2020");

  const choosedYearHandler = (year) => {
    setYearState(year);
  };

  const filtredData = props.data.filter(
    (expense) => expense.date.getFullYear().toString() === yearState
  );

  return (
    <Card className="expenses">
      <ExpensesFilter chosedYear={yearState} onChoseYear={choosedYearHandler} />
      <ExpensesList items={filtredData} />
    </Card>
  );
}

export default Expense;
