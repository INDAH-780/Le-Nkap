import React from "react";

function TotalExpense({ totalExpense }) {
  return (
    <header>
      <h1> your Expenses</h1>
      <div className="total-income">{totalExpense}FCFA</div>
    </header>
  );
}

export default TotalExpense;
