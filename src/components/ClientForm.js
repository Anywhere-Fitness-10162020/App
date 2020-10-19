import React, {useState} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {userLogin} from '../actions/index.js';

const ClientForm = (props) => {
    const {userLogin}=props;
    const initialState={
        username:"",
        password:""
    };
    const [signupVals, setSignupVals] = useState(initialState);
    const handleChange = (e) => {
        setSignupVals(
            {...signupVals, [e.target.name]:e.target.value}
        )
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(signupVals);
        userLogin("client");
        //usage: userLogin("roleName")
    }
    return(
        <div>
            <h2>Client Form</h2>
            <h3>Sign up:</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" onChange={handleChange} autoComplete="username"/>
                <input type="password" name="password" placeholder="password" onChange={handleChange} autoComplete="current-password" />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default connect(null,{userLogin})(ClientForm);
