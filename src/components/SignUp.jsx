import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";
import validation from "./validation";

import './Register.css';



 //function SignUp({submitForm}) {
  const SignUp = ({ submitForm }) => {
   

  const [values, setValues] = useState({
    fullname: "",
    email: "",
    number: "",
    password: "",
    confirm_password: ""
  })
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]:event.target.value,
    })
  };
  const handleformSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    setDataIsCorrect(true);
    let payload = {
      fullname: "",
      email: "",
      number: "",
      password: "",
      confirm_password: "",
    };
    axios
      .post(
        "https://le-nkap-v1.onrender.com/docs/#/default/registerUser",
        payload
      )
      .then((r) => {
        setDataIsCorrect(true);
        setValues(response.data);
      })
      
     setValues(values);
     
     console.log(values);

  }

  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);
  const [data, setData] = useState ("");

  useEffect(() => {
    if(Object.keys(errors).length === 0 && dataIsCorrect){
      submitForm(true);
      
    }

  }, [errors]);
  React.useEffect(() => {
    axios
      .get(
        `${"https://le-nkap-v1.onrender.com/docs/#/default/getLoggedInUser"}`
      )
      .then((response) => {
        setValues(response.data);
      });
  }, []);

  


  useEffect(() => {
    if (setValues) {
     
    }
  }, [setValues]); 




  
  return (
    <div className="mainContainer">
      <form className="" >
        <div className="field">
          <label>Full Name</label>
          <input
            className="input"
            type="text"
            name="fullname"
            value={values.fullname}
            onChange={handleChange}
          />
          {errors.fullname && <p className="error">{errors.fullname}</p>}
        </div>
        <div className="field">
          <label>Email</label>
          <input
            className="input"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="field">
          <label>Number</label>
          <input
            className="input"
            type="number"
            name="number"
            value={values.number}
            onChange={handleChange}
          />
          {errors.number && <p className="error">{errors.number}</p>}
        </div>
        <div className="field">
          <label>Password</label>
          <input
            className="input"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="field">
          <label>Confirm Password</label>
          <input
            className="input"
            type="confirm_password"
            name="confirm_password"
            value={values.confirm_password}
            onChange={handleChange}
          />
          {errors.confirm_password && <p className="error">{errors.confirm_password}</p>}
        </div>
        <div>
          <button className="buton" onClick={handleformSubmit}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
  }
  

 
   
export default SignUp;
