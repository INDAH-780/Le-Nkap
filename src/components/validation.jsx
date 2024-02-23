import React from 'react'

function validation(values) {
    let errors = {};
    if(!values.fullname){
        errors.fullname="Name is required."
    }
    if (!values.email) {
      errors.email = "email is required."
    } else if (!/\s+@\s+\.\s+/.test(values.email)){
       errors.email = "Email is invalid" 
    }
    if (!values.number) {
      errors.number = "Number is required.";
    }
    if (!values.password) {
      errors.password = "password is required.";
    } else if (values.password.length < 5 ){
        errors.password = "password must be more than five characters"
    }
  return errors;
}

export default validation
