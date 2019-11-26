import React, { Component } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/adminView.css";

class AdminView extends Component {
  render() {
    return (
      <div class="container" style={{ color: "orange" }}>
        <p>
          <h2 class="mb-0">Administrator View</h2>
          <Link to="/addcourses" class="btn btn-primary btn-block">
            Add Courses
          </Link>
          <Link to="/DelCourses" class="btn btn-primary btn-block">
            Delete Courses
          </Link>
          <Link to="/updatemajor" class="btn btn-primary btn-block">
            Update Majors
          </Link>
          <Link to="/delmajor" className="btn btn-primary btn-block">
            Delete Majors
          </Link>
          Administrator PageIn this webpage, the administrator can login to his
          or her account using the landing page. Then he or she can use the
          following functionalities such as add, delete, update and delete
          courses.
        </p>
      </div>
    );
  }
}

export { AdminView };
