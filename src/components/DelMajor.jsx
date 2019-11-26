import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class DelMajor extends Component {
  render() {
    return (
      <div>
        <p>
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Enter Major name</label>
              <input
                type="text"
                id="dep"
                class="form-control"
                placeholder="Enter Major"
              />
            </div>

            <div>
              <button type="submit" class="btn btn-primary btn-block">
                Submit
              </button>
            </div>

            <div>
              <a role="button" href="./admin" class="btn btn-success btn-block">
                Return
              </a>
            </div>
          </form>
        </p>
      </div>
    );
  }
}

export { DelMajor };
