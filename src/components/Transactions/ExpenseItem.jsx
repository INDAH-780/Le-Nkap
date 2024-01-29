import React from "react";
import "./Transactions.css";

function ExpenseItem({ expense, index, removeExpense }) {
  let date = new Date(expense.date);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  const removeHandle = (i) => {
    removeExpense(i);
  };

  return (
    <div className="income-item">
      <div className="desc">{expense.desc}</div>
      <div className="price">{expense.price}FCFA</div>
      <div className="date">{day + "/" + month + "/" + year}</div>
      <button className="remove-item" onClick={() => removeHandle(index)}>
        Delete
      </button>
    </div>
  );
}

export default ExpenseItem;
