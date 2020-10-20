import React, {useState} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {userLogin} from '../actions/index.js';
import {useHistory, useRouteMatch} from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom'
import errors from '../../src/components/src/validateInfo'
 
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
        
        <div className='form-content-right'>
        <form onSubmit={handleSubmit} className='form' noValidate>
          <h1>
            Get started with us today! Create your account by filling out the
            information below.
          </h1>
          <div className='form-inputs'>
            <label className='form-label'>Username</label>
            <input
              className='form-input'
              type='text'
              name='username'
              placeholder='Enter your username'
              value={newUser.username}
              onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
          </div>
         
          <div className='form-inputs'>
            <label className='form-label'>Password</label>
            <input
              className='form-input'
              type='password'
              name='password'
              placeholder='Enter your password'
              value={newUser.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
         
          <button className='form-input-btn' type='submit'>
            Sign In
          </button>
          <span className='form-input-login'>
            Don't have an account? Sign Up <Link to='/clients/signup'>here</Link>
            </span>
        </form>
      </div>
    )
    }

export default connect(null,{userLogin})(ClientSignUp);
// <div>
        //     <h2>Client Form</h2>
        //     <h3>Sign up:</h3>
        //     <form onSubmit={handleSubmit}>
        //         <input type="text" 
        //             name="username" 
        //             placeholder="Username" 
        //             onChange={handleChange} 
        //             autoComplete="off"
        //         />
        //         <input 
        //             type="password" 
        //             name="password" 
        //             placeholder="Password" 
        //             onChange={handleChange} 
        //             autoComplete="off" 
        //         />
        //         <input 
        //             type="email" 
        //             name="email" 
        //             placeholder="Email" 
        //             onChange={handleChange} 
        //             autoComplete="off" 
        //         />
        //         <button type="submit">Sign Up</button>
        //     </form>
        // </div>