import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
    const [input, setInput] = useState({
      Email: "",
      password: "",
    });
     const handleSubmitEvent = (e) => {
       e.preventDefault();
       if (input.Email !== "" && input.password !== "") {
         //dispatch action from hooks
       }
       alert("please provide a valid input");
     };

     const handleInput = (e) => {
       const { name, value } = e.target;
       setInput((prev) => ({
         ...prev,
         [name]: value,
       }));
     };
  return (
    <div className="mainContainer">
      <form onSubmit={handleSubmitEvent}>
        <h2>Welcome Back</h2>
        <h4></h4>
        <div className="form">
          <input
            type="email"
            placeholder="Enter email"
            className="input"
            id="user-email"
            name="email"
            aria-invalid="false"
            onChange={handleInput}
          />
          <input
            type="password"
            placeholder="Password"
            className="input"
            id="password"
            name="password"
            aria-invalid="false"
            onChange={handleInput}
          />

          <button>Signin</button>
          <h3>
            Don't have an account ? <Link to="/signup">Register Now</Link>
          </h3>
        </div>
      </form>
    </div>
  );
}

export default Login
