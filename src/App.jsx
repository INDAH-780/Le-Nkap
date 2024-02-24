import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Expense from "./components/Transactions/Expense/Expense";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Income from "./components/Transactions/Income/Income";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard";

function App() {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitForm = () => {
    setFormIsSubmitted(true);
  };

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Navbar />
          </Route>
          <Route path="/signup" exact>
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/income">
            <Income />
          </Route>
          <Route path="/expense">
            <Expense />
          </Route>
          <Route path="/dashboard">
            {!formIsSubmitted ? (
              <SignUp submitForm={submitForm} />
            ) : (
              <Dashboard />
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
