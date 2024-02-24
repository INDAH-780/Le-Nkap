import React from "react";

function TotalIncome({ totalIncome }) {
  return (
    <header>
      <h1> My Income</h1>
      <div className="total-income">{totalIncome}FCFA</div>
    </header>
  );
}

export default TotalIncome;
