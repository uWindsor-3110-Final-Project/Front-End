import React, { Component } from "react";
import "../style/UserInfo.css";
import "bootstrap/dist/css/bootstrap.min.css";

class schedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startYear: "",
      department: "",
      major: "",
      expectedGradYear: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //field handler
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="form-2">
        <form onSubmit={this.handleSubmit}>
          <h3 className="form-header">Enter the following details:</h3>
          <br></br>
          <div>
            <label className="entity-label">
              University Start Year:
              <select
                className="menu"
                value={this.state.value}
                onChange={this.handleChange}
              >
                <option default>Select</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
              </select>
            </label>
            <br></br>

            <label className="entity-label">
              Department:
              <select
                className="menu"
                value={this.state.value}
                onChange={this.handleChange}
              >
                <option default>Select</option>
                <option value="Computer Science">Computer Science</option>
              </select>
            </label>
            <br></br>
            <label className="entity-label">
              Major:
              <select
                className="menu"
                value={this.state.value}
                onChange={this.handleChange}
              >
                <option default>Select</option>
                <option value="softeng">
                  Honours BCS w/ Software Engineering
                </option>
                <option value="ai">
                  Honours BCS w/ Artificial Intelligence
                </option>
                <option value="multimedia">Honours BCS w/ Multimedia</option>
                <option value="security">Honours BCS w/ Security</option>
                <option value="applied computing">
                  Honours Bachelor of Applied Computing
                </option>
                <option value="general">
                  Bachelor of Computer Science (General)
                </option>
                <option value="unigrads">
                  Computer Science for University Graduates
                </option>
              </select>
            </label>
            <br></br>
            <label className="entity-label">
              Expected Graduation Year:
              <select
                className="menu"
                value={this.state.value}
                onChange={this.handleChange}
              >
                <option default>Select</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </select>
            </label>
            <br></br>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default schedule;
