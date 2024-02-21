import React from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";



function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const baseURL = "https://le-nkap-v1.onrender.com/docs/#/default/loginUser";


  useEffect(() => {
    
    axios
      .get("https://le-nkap-v1.onrender.com/docs/#/default/getLoggedInUser")
      .then((response) => {
        
        {
          navigate("/dashboard");
        }
      });
  }, []);
   
  

   


  const loginAction = (e) => {
    /*check for errors*/
    setValidationErrors({});
    /*cancel the default event behavior (browser refresh) while allowing us to execute any code we write inside handleSubmit*/
    e.preventDefault();
    setIsSubmitting(true);
    let payload = {
      email: email,
      password: password,
    };
    axios
      .post("https://le-nkap-v1.onrender.com/docs/#/default/loginUser", payload)
      /*The then() method in JavaScript has been defined in the Promise API and is used to deal with asynchronous tasks such as an API call.*/
      /* A Promise is a proxy for a value not necessarily known when the promise is created*/
      .then((r) => {
        setIsSubmitting(true);
        
        navigate("/dashboard");
      })
      .catch((e) => {
        setIsSubmitting(false);
        if (e.response.data.errors != undefined) {
          setValidationErrors(e.response.data.errors);
        }
      });
  };

  return (
    <div className="mainContainer">
      <form
        onSubmit={(e) => {
          loginAction(e);
        }}
      >
        {Object.keys(validationErrors).length != 0 && (
          <p className="text-center ">
            <small className="text-danger">Incorrect Email or Password</small>
          </p>
        )}
        <h2>Welcome Back</h2>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="input"
            id="user-email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="input"
            id="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <button disabled={isSubmitting} type="submit" className="buton">
            Login
          </button>
          <p className="text-center">
            Don't have account? <Link to="/signup">Register here</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
