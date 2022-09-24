import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
  };
  const addNewExpenseHandler = () => {
    setShowForm((prevState) => {
      return !prevState;
    });
  };

  if (!showForm) {
    return (
      <div className="new-expense">
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onFormCloser={addNewExpenseHandler}
      />
    </div>
  );
};

export default NewExpense;
