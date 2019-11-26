import React, { Component } from 'react';
import '../style/userInfo.css';
import Form from 'react-bootstrap/Form';
import ReactDOM from 'react-dom';
import { Col, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'

class Schedule extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            startYear: '',
            department: '',
            major: '',
            expectedGradYear: '',
            redirect: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //field handler
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ redirect: true });
    }

    render() {
        const startYear = ['Select', '2018', '2019', '2020', '2021'];
        const department = ['Select', 'Computer Science'];
        const expectedGradYear = [
            'Select',
            '2020',
            '2021',
            '2022',
            '2023',
            '2024',
            '2025'
        ];
        const major = [
            'Select',
            'Honours BCS w/ Software Engineering',
            'Honours BCS w/ Artificial Intelligence',
            'Honours BCS w/ Multimedia',
            'Honours BCS w/ Security',
            'Honours Bachelor of Applied Computing',
            'Bachelor of Computer Science (General)',
            'Computer Science for University Graduates'
        ];

        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/somewhere'/>;
        }

        return (
            <Form className='form-for-info' onSubmit={this.handleSubmit}>
                <Row>
                    <h3 className='form-header'>Enter the following details:</h3>
                </Row>
                <Row>
                    <Col>
                        <label className='entity-label'>University Start Year:</label>
                    </Col>
                    <Col>
                        <div className='selection-label'>
                            <select name="startYear" value={this.state.startYear} onChange={this.handleChange} className='menu'>
                                {startYear.map(list => (
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
                        <label className='entity-label'>Department:</label>
                    </Col>
                    <Col>
                        <div className='selection-label'>
                            <select name="department" value={this.state.department} onChange={this.handleChange} className='menu'>
                                {department.map(list => (
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
                        <label className='entity-label'>Major:</label>
                    </Col>
                    <Col>
                        <div className='selection-label'>
                            <select name="major" value={this.state.major} onChange={this.handleChange} className='menu'>
                                {major.map(list => (
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
                        <label className='entity-label'>Expected Graduation Year:</label>
                    </Col>
                    <Col>
                        <select name="expectedGradYear" value={this.state.expectedGradYear} onChange={this.handleChange} className='menu'>
                            {expectedGradYear.map(list => (
                                <option key={list} value={list}>
                                    {list}
                                </option>
                            ))}
                        </select>
                    </Col>
                </Row>

                <Row>
                    <input type='submit' value='Submit' />
                </Row>
            </Form>
        );
    }
}

export { Schedule };