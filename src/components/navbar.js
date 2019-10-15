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
            <li className='nav-link-li'><Link className='nav-link' to='/scheduel'>My Scheduel</Link></li>
            <li className='nav-link-li'><Link className='nav-link' to='/rate'>Rate My Class</Link></li>
       </ul>
   </nav>
  );
}
}

export default NavBar;
