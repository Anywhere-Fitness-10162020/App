import React, {useState} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {userLogin} from '../actions/index.js';
import {useHistory, useRouteMatch} from 'react-router-dom';
import axios from 'axios';
 
const ClientSignUp = (props) => {
    //Setup-----------------------------    
    const {userLogin}=props;
    
    //Routing-----------------------------
    const history=useHistory();
    const {path}=useRouteMatch();

    //Form State-----------------------------
    const initialState={
        username:"",
        password:"",
        email:"",
        role:"client",
    };
    const [newUser, setNewUser] = useState(initialState);


    //Events-----------------------------
    const handleChange = (e) => {
        setNewUser(
            {...newUser, [e.target.name]:e.target.value}
        )
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        //Signup Post------------------
        const newUserPost = {...newUser};
        const newUserApi = 'https://anywherefitnesswebapi.herokuapp.com/api/auth/register';
        axios
            .post(newUserApi, newUserPost)
            .then(res =>{
                console.log("Signup successful:", res.data);
                userLogin("client");
                //usage: userLogin("roleName")
                history.push(`../clients/home`);

            })
            .catch(err=>{
                console.log("Signup error: ", err);
                console.log("Error posting data: ", newUserPost);
                console.log("Attempted to post to: ", newUserApi);
            });
        
    } 

    //Return-----------------------------
    return(
        <div>
            <h2>Client Form</h2>
            <h3>Sign up:</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                    name="username" 
                    placeholder="Username" 
                    onChange={handleChange} 
                    autoComplete="off"
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    onChange={handleChange} 
                    autoComplete="off" 
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    onChange={handleChange} 
                    autoComplete="off" 
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default connect(null,{userLogin})(ClientSignUp);