// import React from 'react';
import axios from 'axios';
import {store} from '../index'
import {testAction, userLogin} from '../actions/index'

export const saveToken = (token) => {
    window.localStorage.setItem('token',token);
}

export const clearStorage = () => {
    window.localStorage.clear();
}

export const apiLogin = (userAction, userObj) => {
    //userAction: "register" or "login"
    //userObj: user info object to post

    //change these according to app endpoints:
    const apiBase='https://anywherefitnesswebapi.herokuapp.com/api/auth';
    const apiRegister = `${apiBase}/register`;
    const apiLogin = `${apiBase}/login`;

    //--- user data sent to registration api:
    const userInfoRegister = {
        username:userObj.username,
        password:userObj.password,
        email:userObj.email,
        role:userObj.role
    }

    //--- user data sent to login api:
    const userInfoLogin={
        username:userObj.username,
        password:userObj.password
    }
    
    //--- ogin only:
    const axiosLogin = (userInfoLogin) => {
        console.log("----------------------")
        console.log("Logging in..")
        return axios
            .post(apiLogin,userInfoLogin)
            .then((res)=>{
                //--- confirmation details
                console.log("Axios login successful");
                // console.log('Posted login to url: ', apiLogin);
                // console.log('Login server response: ',res);

                //--- save token to localstorage
                // console.log('Token: ',res.data.token);
                saveToken(res.data.token);
                
                //--- dispatch login action to reducer
                //--- sets "loggedIn" and "role" state
                if(res.data.role === "instructor"){
                    store.dispatch(
                        userLogin("instructor")
                    );
                }else{
                    store.dispatch(
                        userLogin("client")
                    );
                } 
                return res;
            })
            .catch(err=>{
                console.log("Axios login error: ", err);
                return err;
            }) 
    }

    //signup then auto-login on successful registration:
    const axiosRegister = (userInfoRegister,userInfoLogin) => {
        console.log("----------------------")
        console.log("Signing up...")
        axios
            .post(apiRegister,userInfoRegister)
            .then((res)=>{
                //confirmation details
                console.log("Axios registration successful");
                // console.log('Registered new user to url: ', apiRegister);
                // console.log('Registration server response: ',res);

                //send userinfo to Login function
                axiosLogin(userInfoLogin);

            })
            .catch(err=>{
                console.log("Axios registration error: ", err);
                return err;
            })
    }

    if(userAction==="register"){
        return(
            axiosRegister(userInfoRegister, userInfoLogin)
            );
    }else if(userAction==="login"){
        return(
            axiosLogin(userInfoLogin)
            );
    }else{
        return("Axios error, check parameters. userAction must be 'login' or 'register' ");
    }
};

export const testDispatch = () => {
    store.dispatch(testAction('Stack Overflow'));
}


// const testClick=()=>{
//     const testLoginUser = {...user}
//     // apiLogin("login",testloginUser);
//     console.log("test clicked");
//     console.log('testLoginUser: ', testLoginUser);

//     apiLogin("register",testLoginUser)
    
//   }

    