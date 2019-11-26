import React from 'react';
import '../style/navbar.css';
import {Link, BrowserRouter as Router, Route} from 'react-router-dom';
import fullstackdads from './fullstackdads.png';
import { PrivateRoute } from './PrivateRouter';
import HomePage from './homePage';
import { userService } from '../services/user-service';
import { LoginPage } from './LoginPage';
import {SequenceManager} from './SequenceManager';

class NavBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: this.isLoggedIn()};
    }
    isLoggedIn() {
        return userService.isLoggedIn();
    }
    render() {
        let button;
        // Not quite working
        if (!userService.isLoggedIn()) {
            button = <li className='nav-link-li'><Link className='nav-link' to='/login'>Login</Link></li>
        } else {
            button =  <li className='nav-link-li'><Link className='nav-link' to='/login'>Logout</Link></li>
        }
      return (
          <Router>
              {/*Private routes need to be logged in*/}
              {/*Regular routes are irrelevant*/}
              <PrivateRoute exact path="/schedule" component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <nav>
                  <ul className='nav-links'>
                      <li className='nav-link-li'><img className='logo' src={fullstackdads} alt={"Full Stack Dads"}></img></li>
                      <li className='nav-link-li'><Link className='nav-link' to='/'>Home</Link></li>
                      <li className='nav-link-li'><Link className='nav-link' to='/schedule'>My Schedule</Link></li>
                      <li className='nav-link-li'><Link className='nav-link' to='/rate'>Rate My Class</Link></li>
                      {button}
                  </ul>
              </nav>
          </Router>
      );
    }
}

export default NavBar;
