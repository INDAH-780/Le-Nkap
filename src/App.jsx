import { useState } from 'react'
import './App.css'
import Login from './components/Login';
import SignUp from './components/SignUp';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Expense from './components/Expense';

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/signup" exact>
            <Expense />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App
