import React, { useState, useEffect } from "react";
import "./Transactions.css";
import IncomeForm from "./IncomeForm";
import IncomeList from "./IncomeList";
import TotalIncome from "./TotalIncome";

function Income() {
  const [income, setIncome] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < income.length; i++) {
      temp += parseInt(income[i].price);
    }

    setTotalIncome(temp);
  }, [income]);

  return (
    <div className="App">
      <TotalIncome totalIncome={totalIncome} />
      <IncomeForm income={income} setIncome={setIncome} />
      <IncomeList income={income} setIncome={setIncome} />
    </div>
  );
}

export default Income;
