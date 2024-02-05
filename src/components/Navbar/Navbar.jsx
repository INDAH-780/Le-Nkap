import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import image from './preview.png';

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <h2 className="logo">Le Nkap</h2>
        <ul>
          <li>
            <button className="design">
              <Link to="./login">LogIn</Link>
            </button>
          </li>
          <li>
            <button className="design">
              <Link to="./signup">SignUp</Link>
            </button>
          </li>
          
        </ul>
      </div>
      <div className="container">
        <div className="writeup">
          <h2>Track Your Income And Expenses</h2>
          <p>
            Le Nkap Is that favourite website that helps you keep track of your
            income and expenses, by calculating your income and expenses{" "}
          </p>
          <button className="design">
            <Link>SignUp</Link>
          </button>
        </div>
        <div className="imagecontainer">
          <img src={image} />
        </div>
      </div>
    </div>
  );
}

export default Navbar
