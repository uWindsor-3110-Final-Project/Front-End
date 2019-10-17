import React from 'react';
import '../style/homePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import NavBar from './navbar';
// import '../../node_modules/font-awesome/css/font-awesome.min.css';
// import 'font-awesome/css/font-awesome.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';

function HomePage() {

  function onClick(){
    // document.getElementById("id-popup").style.display = "block";
  }

  return (
    <div>
      <form className='form'>
        <h1 className='form-header'>Sign Up</h1>
        <input className='form-input' placeholder='Full Name'></input><br></br>
        <input className='form-input' placeholder='Email'></input><br></br>
        <input className='form-input' placeholder='Password'></input><br></br>
        <input className='form-input' placeholder='Renter Password'></input><br></br>
        <input className='form-button' type='button' value='Register'></input><br></br>
        <span className='form-input'>Already have an account? <Link to=''>Login</Link></span>
      </form>
    </div>
  );
}

export default HomePage;
