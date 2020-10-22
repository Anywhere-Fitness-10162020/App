import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import errors from "./src/validateInfo";
import "./Form.css";
import useForm from './src/useForm';
import validateInfo from "./src/validateInfo";

import {apiLogin} from '../api/helpers';

const ClientSignIn = (props) => {

  //Routing-----------------------------
  const history = useHistory();
  // const {path}=useRouteMatch();

  //Form State-----------------------------
  const initialState = {
    username: "",
    password: "",
  };
  const [user, setUser] = useState(initialState);

  //Events-----------------------------

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    apiLogin("login",user);
  };
  const { errors } = useForm(
    
    validateInfo
  );


  return (
    // <div>
    //     <h2>Client Sign-in</h2>
    //     <form onSubmit={handleSubmit}>
    //         <input
    //             onChange={handleChange}
    //             name="username"
    //             placeholder="Username"
    //             autoComplete="username"
    //         />
    //         <input
    //             onChange={handleChange}
    //             name="password"
    //             placeholder="Password"
    //             type="password"
    //             autoComplete="current-password"
    //         />
    //         <button type="submit">Sign In</button>
    //         <p>Don't have an account? <Link to="/clients/signup"><span >Sign-up</span></Link></p>
    //     </form>
    // </div>
    <>
    <div className="wrapper">
      <div className="form-content-right">
        <form onSubmit={handleSubmit} className="form" noValidate>
          <h1>
            Get started with us today! Create your account by filling out the
            information below.
          </h1>
          <div className="form-inputs">
            <label className="form-label">Username</label>
            <input
              className="form-input"
              type="text"
              name="username"
              placeholder="Enter your username"
              value={user.username}
              onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
          </div>

          <div className="form-inputs">
            <label className="form-label">Password</label>
            <input
              className="form-input"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={user.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>

          <button className="form-input-btn" type="submit">
            Sign In
          </button>
          <span className="form-input-login">
            Don't have an account? Sign Up{" "}
            <Link to="/clients/signup">here</Link>
          </span>
        </form>
      </div>
    </div>
    </>
  );
};

export default ClientSignIn;
