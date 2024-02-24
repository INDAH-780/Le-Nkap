import React, { useState, useEffect } from "react";
import "./Expense.css";
import ExpenseList from "./ExpenseList";
import TotalExpense from "./TotalExpense";
import ExpenseForm from "./ExpenseForm";

function Expense() {
  const [expense, setExpense] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < expense.length; i++) {
      temp += parseInt(expense[i].price);
    }

    setTotalExpense(temp);
  }, [expense]);

  return (
    <div className="App">
      <TotalExpense totalExpense={totalExpense} />
      <ExpenseForm expense={expense} setExpense={setExpense} />
      <ExpenseList expense={expense} setExpense={setExpense} />
    </div>
  );
}

export default Expense;
