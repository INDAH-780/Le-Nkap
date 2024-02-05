import React from 'react'
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { Link } from "react-router-dom";
import './Dashboard.css'

function Dashboard() {
  return (
    <div>
      <div className="header">
        <h3>Transactions</h3>
        <button className="butt">
          <Link to="/income">Income </Link>
        </button>
        <button className="butt">
          <Link to="/expense">Expense </Link>
        </button>
      </div>
      <h4>Total Income: 0fcfa </h4>
      <h4>Total Expense: 0fcfa </h4>
      <div>
        <AddRoundedIcon />
      </div>
    </div>
  );
}

export default Dashboard;
