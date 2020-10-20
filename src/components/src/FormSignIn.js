import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import {useHistory, useRouteMatch} from 'react-router-dom'
import './Form.css';

const FormSignIn = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
      submitForm,
      validate
    );
    // const history = useHistory()
    const {path} = useRouteMatch()
    return (

      
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
              value={values.username}
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
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
         
          <button className='form-input-btn' type='submit'>
            Sign In
          </button>
          <span className='form-input-login'>
            Don't have an account? Sign Up <span onClick={history.push(`${path}`)}></span>
          </span>
        </form>
      </div>
    );
  };
  
  export default FormSignIn;
  