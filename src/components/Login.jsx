import React from 'react'
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="mainContainer">
      <h2>Welcome Back</h2>
      <h4></h4>
      <div className="form">
        <input type="email" placeholder="Enter email" className="input" />
        <input type="password" placeholder="Password" className="input" />
       
        <button>Signin</button>
        <h3>
          Don't have an account ? <Link to="/signup">Register Now</Link>
        </h3>
      </div>
    </div>
  );
}

export default Login
