import React, { Component } from "react";
import "../style/UserInfo.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import ReactDOM from "react-dom";
import { Col, Row } from "react-bootstrap";

class schedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      startYear: ["Select", "2018", "2019", "2020", "2021"],
      department: ["Select", "Computer Science"],
      major: [
        "Select",
        "Honours BCS w/ Software Engineering",
        "Honours BCS w/ Artificial Intelligence",
        "Honours BCS w/ Multimedia",
        "Honours BCS w/ Security",
        "Honours Bachelor of Applied Computing",
        "Bachelor of Computer Science (General)",
        "Computer Science for University Graduates"
      ],
      expectedGradYear: [
        "Select",
        "2020",
        "2021",
        "2022",
        "2023",
        "2024",
        "2025"
      ]
    };

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //field handler
  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit(event) {
    alert(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Form className="form-for-info" onSubmit={this.handleSubmit}>
        <Row>
          <h3 className="form-header">Enter the following details:</h3>
        </Row>

        <Row>
          <Col>
            <label className="entity-label">University Start Year:</label>
          </Col>
          <Col>
            <div className="selection-label">
              <select className="menu">
                {this.state.startYear.map(list => (
                  <option key={list} value={list}>
                    {list}
                  </option>
                ))}
              </select>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <label className="entity-label">Department:</label>
          </Col>
          <Col>
            <div className="selection-label">
              <select className="menu">
                {this.state.department.map(list => (
                  <option key={list} value={list}>
                    {list}
                  </option>
                ))}
              </select>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <label className="entity-label">Major:</label>
          </Col>
          <Col>
            <div className="selection-label">
              <select className="menu">
                {this.state.major.map(list => (
                  <option key={list} value={list}>
                    {list}
                  </option>
                ))}
              </select>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <label className="entity-label">Expected Graduation Year:</label>
          </Col>
          <Col>
            <select className="menu">
              {this.state.expectedGradYear.map(list => (
                <option key={list} value={list}>
                  {list}
                </option>
              ))}
            </select>
          </Col>
        </Row>

        <Row>
          <input type="submit" value="Submit" />
        </Row>
      </Form>
    );
  }
}

export default schedule;
