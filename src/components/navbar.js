import React from 'react';
import '../style/navbar.css';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import fullstackdads from './fullstackdads.png';

class NavBar extends React.Component{
render(){
  return (
   <nav>   
       <ul className='nav-links'>
            <li className='nav-link-li'><img className='logo' src={fullstackdads}></img></li>
            <li className='nav-link-li'><Link className='nav-link' to='/'>Home</Link></li>
            <li className='nav-link-li'><Link className='nav-link' to='/scheduel'>My Scheduel</Link>
              <div className='drop-down'>
                <Link to='' className='drop-down-item'>Hello</Link>
                <Link to='' className='drop-down-item'>Wirld</Link>
              </div>
            </li>
            <li className='nav-link-li'><Link className='nav-link' to='/rate'>Rate My Class</Link></li>
            <li className='nav-link-li'><Link className='nav-link' to='/rate'>Login</Link>
            <div id='login-popup' className='drop-down'>
                <form className='form-login'>
                  <input ref={(input) => {this.login = input}} className='form-input' placeholder='Email'></input>
                  <input className='form-input' placeholder='Password'></input>
                  <input className='form-button' type='button' value='Login'></input>
                </form>
              </div>
            </li>
       </ul>
   </nav>
  );
}
}

export default NavBar;
