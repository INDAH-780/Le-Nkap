import React, { useState, useEffect } from "react";
import "./Transactions.css";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import TotalExpense from "./TotalExpense";

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
