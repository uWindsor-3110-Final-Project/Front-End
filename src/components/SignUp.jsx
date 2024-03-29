import React from 'react';
import '../style/homePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className='form'>
                    <h1 className='form-header'>Sign Up</h1>
                    <input className='form-input' placeholder='Full Name'></input><br></br>
                    <input className='form-input' placeholder='Email'></input><br></br>
                    <input className='form-input' type='password' placeholder='Password'></input><br></br>
                    <input className='form-input' type='password' placeholder='Renter Password'></input><br></br>
                    <input className='form-button' type='button' value='Register'></input><br></br>
                    <span className='form-input'>Already have an account? <Link to='/login'>Login</Link></span>
                </div>
            </div>
        );
    }
}

export { SignUp };
