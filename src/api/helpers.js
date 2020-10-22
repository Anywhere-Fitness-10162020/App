

import React from 'react';
import axios from 'axios';

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

    // const userLogin = {...userObj} //sent for login
    // const userRegister = {...userObj} //sent for register


    const userRegister = {
        username:userObj.username,
        password:userObj.password,
        email:userObj.email,
        role:userObj.role
    }
    const userLogin={
        username:userObj.username,
        password:userObj.password
    }
    

    const axiosLogin = (userLogin) => {
        console.log("----------------------")
        console.log("Axios Login Function: ", userLogin)
        axios
            .post(apiLogin,userLogin)
            .then((res)=>{
                console.log("Axios login successful: ", userRegister);
                console.log('Posted login to url: ', apiRegister);
                console.log('Login server response: ',res);
            })
            .catch(err=>{
                console.log("Axios login error: ", err);
            }) 
    }

    const axiosRegister = (userRegister,userLogin) => {
        console.log("----------------------")
        console.log("Axios Register Function: ", userRegister)
        axios
            .post(apiRegister,userRegister)
            .then((res)=>{
                console.log("Axios registration successful: ", userRegister);
                console.log('Registered new user to url: ', apiRegister);
                console.log('Registration server response: ',res);
                // console.log('Next step, login user: ', userLogin);
                axiosLogin(userLogin);
            })
            .catch(err=>{
                console.log("Axios registration error: ", err);
            })
    }

    if(userAction==="register"){
        return(axiosRegister(userRegister, userLogin));
    }else if(userAction==="login"){
        return(axiosLogin(userLogin));
    }else{
        return("Axios error");
    }
};



// const testClick=()=>{
//     const testLoginUser = {...user}
//     // apiLogin("login",testloginUser);
//     console.log("test clicked");
//     console.log('testLoginUser: ', testLoginUser);

//     apiLogin("register",testLoginUser)
    
//   }

    