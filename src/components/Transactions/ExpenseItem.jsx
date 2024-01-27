import React from "react";

function ExpenseItem({ name, amount, date }) {
  // const { name, amount, date } = props;

  return (
    <div>
      <div className="expense">{name} {amount} {date}</div>
      
      <br />
    </div>
  );
}

export default ExpenseItem;
