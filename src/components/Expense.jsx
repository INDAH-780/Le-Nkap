import React from 'react'
import ExpenseItem from './Transactions/ExpenseItem';
import { useState } from "react";

function Expense() {
      const [expenses, setExpenses] = useState([]);

      const addExpense = (expense) => {
        setExpenses((prevExpenses) => {
          return [...prevExpenses, expense];
        });
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const amount = event.target.amount.value;
        const date = event.target.date.value;
        addExpense({ name, amount, date });
        event.target.reset();
      };

  return (
    <div className="mainContainer">
      <h2>Add Expenses</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Expense Name"
          className="input"
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          className="input"
        />
        <input type="date" name="date" placeholder="Date" className="input" />
        <button type="submit">Add Expense</button>
      </form>
      {expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          name={expense.name}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default Expense
