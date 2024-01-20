import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function SignUp() {
    const [Name, setName] = useState("");
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
      value: "",
      isTouched: false,
    });
   

    const getIsFormValid = () => {
      return (
        Name &&
        email &&
        password.value.lengthrole 
      );
    };

    const clearForm = () => {
      setName("");
      setEmail("");
      setPassword({
        value: "",
        isTouched: false,
      });
      
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      alert("Account created!");
      clearForm();
    }; 
 
  return (
    <div className="mainContainer">
      <form onSubmit={handleSubmit}>
        
          <h2>Welcome to Le Nkap</h2>
          <div className="Field">
            
            <input
            className='input'
              value={Name}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder=" name"
            />
          </div>
          <div className="Field">
        
          </div>
          <div className="Field">
            
            <input
            className='input'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email address"
            />
          </div>
          <div className="Field">
            
            <input
            className='input'
              value={password.value}
              type="password"
              onChange={(e) => {
                setPassword({ ...password, value: e.target.value });
              }}
              onBlur={() => {
                setPassword({ ...password, isTouched: true });
              }}
              placeholder="Password"
            />
            {password.isTouched && password.value.length < 8 ? (
              <PasswordErrorMessage />
            ) : null}
          </div>
          
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
          
          
        <h5> Already have an account ? 
        <Link to="/" id='signin'>Move to login page</Link>
        </h5>
        
      
      </form>
    </div>
  );
}

export default SignUp