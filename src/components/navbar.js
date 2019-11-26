import React from "react";
import "../style/navbar.css";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import fullstackdads from "./fullstackdads.png";
import { PrivateRoute } from "./PrivateRouter";
import HomePage from "./homePage";
import { userService } from "../services/user-service";
import { LoginPage } from "./LoginPage";
import { SequenceManager } from "./SequenceManager";
import { SignUp } from "./SignUp";
import { Schedule } from "./Schedule";
import { AdminView } from "./AdminView";
import { DelCourses } from "./DelCourses";
import { AddCourses } from "./AddCourses";
import { UpdateMajor } from "./UpdateMajor";
import { DelMajor } from "./DelMajor";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: this.isLoggedIn() };
  }
  isLoggedIn() {
    return userService.isLoggedIn();
  }
  render() {
    let button;
    // Not quite working
    if (!userService.isLoggedIn()) {
      button = (
        <li className="nav-link-li">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      );
    } else {
      button = (
        <li className="nav-link-li">
          <Link className="nav-link" to="/login">
            Logout
          </Link>
        </li>
      );
    }
    return (
      <Router>
        {/*Private routes need to be logged in*/}
        {/*Regular routes are irrelevant*/}
        <nav>
          <ul className="nav-links">
            <li className="nav-link-li">
              <img
                className="logo"
                src={fullstackdads}
                alt={"Full Stack Dads"}
              ></img>
            </li>
            <li className="nav-link-li">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-link-li">
              <Link className="nav-link" to="/schedule">
                My Schedule
              </Link>
            </li>
            <li className="nav-link-li">
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            </li>
            {button}
          </ul>
        </nav>
        <PrivateRoute exact path="/Schedule" component={Schedule} />
        <PrivateRoute exact path="/" component={HomePage} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="/login" component={LoginPage} />
        <PrivateRoute path="/sequence" component={SequenceManager} />
        <PrivateRoute path="/admin" component={AdminView} />
        <PrivateRoute path="/Delcourses" component={DelCourses} />
        <PrivateRoute path="/addcourses" component={AddCourses} />
        <PrivateRoute path="/updatemajor" component={UpdateMajor} />
        <PrivateRoute path="/delmajor" component={DelMajor} />
      </Router>
    );
  }
}

export default NavBar;
