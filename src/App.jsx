import { useState } from 'react'
import './App.css'
import Login from './components/Login';
import SignUp from './components/SignUp';
import Expense from './components/Transactions/Expense';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Income from './components/Transactions/Income';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard';
import Income1 from './components/Income/Income1';
import Expense1 from './components/Expenses/Expense1';

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Navbar />
          </Route>
          <Route path="/signup" exact>
            <SignUp/>
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
          <Route path="/dash">
            <Dashboard />
          
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App
