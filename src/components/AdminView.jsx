import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/adminView.css";

class AdminView extends Component {
  render() {
    return (
      <div class="container" style={{ color: "orange" }}>
        <p>
          <h2 class="mb-0">Administrator View</h2>
          <a role="button" href="/addcourses" class="btn btn-primary btn-block">
            Add Courses
          </a>
          <a role="button" href="/DelCourses" class="btn btn-primary btn-block">
            Delete Courses
          </a>
          <a
            role="button"
            href="/updatemajor"
            class="btn btn-primary btn-block"
          >
            Update Majors
          </a>
          <a role="button" href="/delmajor" class="btn btn-primary btn-block">
            Delete Majors
          </a>
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
