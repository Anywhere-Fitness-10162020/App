import React, {useState} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {userLogin} from '../actions/index.js';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom'
import errors from './src/validateInfo'
import './Form.css';
 
const ClientSignUp = (props) => {
    //Setup-----------------------------    
    const {userLogin}=props;
    
    //Routing-----------------------------
    const history=useHistory();
    // const {path}=useRouteMatch();

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
       <div className="wrapper">
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
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={newUser.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
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
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={newUser.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account? Login <a href='FormSignIn.js'>here</a>
        </span>
      </form>
    </div>
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