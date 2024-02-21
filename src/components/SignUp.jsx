import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import './Register.css';

 function SignUp() {
   const navigate = useNavigate();
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [Phone, setPhone] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const [validationErrors, setValidationErrors] = useState({});
   const [isSubmitting, setIsSubmitting] = useState(false);
  

   useEffect(() => {
    axios
      .get("https://le-nkap-v1.onrender.com/docs/#/default/getLoggedInUser")
      .then((response) => {
       
        {
          navigate("/dashboard");
        }
      });
  }, []);
   
     

   const registerAction = (e) => {
     e.preventDefault();
     setIsSubmitting(true);
     let payload = {
       name: name,
       email: email,
       phone: Phone,
       password: password,
       password_confirmation: confirmPassword,
     };
     axios
       .post(
         "https://le-nkap-v1.onrender.com/docs/#/default/registerUser",
         payload
       )
       .then((r) => {
         setIsSubmitting(true);

         /*localStorage.setItem("/users", r.data.token);*/
         navigate("/dashboard");
       })
       .catch((e) => {
         setIsSubmitting(false);
         if (e.response.errors != undefined) {
           setValidationErrors(e.response.errors);
         }
       });
       
   };

   return (
     <div className="mainContainer">
       <form onSubmit={(e) => registerAction(e)}>
         <div className="field">
           <label htmlFor="name" className="form-label">
             Name
           </label>
           <input
             type="text"
             className="input"
             id="name"
             name="name"
             value={name}
             onChange={(e) => {
               setName(e.target.value);
             }}
           />
           {validationErrors.name != undefined && (
             <div className="">
               <small className="text-danger">{validationErrors.name[0]}</small>
             </div>
           )}
         </div>
         <div className="field">
           <label htmlFor="email" className="form-label">
             Email address
           </label>
           <input
             type="email"
             className="input"
             id="email"
             name="email"
             value={email}
             onChange={(e) => {
               setEmail(e.target.value);
             }}
           />
           {validationErrors.email != undefined && (
             <div className="flex flex-col">
               <small className="text-danger">
                 {validationErrors.email[0]}
               </small>
             </div>
           )}
         </div>
         <div className="field">
           <label htmlFor="phone" className="form-label">
             Phone
           </label>
           <input
             type="phone"
             className="input"
             id="phone"
             name="phone"
             value={Phone}
             onChange={(e) => setPhone(e.target.value)}
           />
           {validationErrors.password != undefined && (
             <div>
               <small className="text-danger">
                 {validationErrors.phone[0]}
               </small>
             </div>
           )}
         </div>
         <div className="field">
           <label htmlFor="password" className="form-label">
             Password
           </label>
           <input
             type="password"
             className="input"
             id="password"
             name="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
           />
           {validationErrors.password != undefined && (
             <div>
               <small className="text-danger">
                 {validationErrors.password[0]}
               </small>
             </div>
           )}
         </div>
         <div className="field">
           <label htmlFor="confirm_password" className="form-label">
             Confirm Password
           </label>
           <input
             type="password"
             className="input"
             id="confirm_password"
             name="confirm_password"
             value={confirmPassword}
             onChange={(e) => setConfirmPassword(e.target.value)}
           />
         </div>
         <div className="">
           <button disabled={isSubmitting} type="submit" className="buton">
             Register Now
           </button>
           <p>
             Have already an account <Link to="/login">Login here</Link>
           </p>
         </div>
       </form>
     </div>
   );
 }
   
export default SignUp;
