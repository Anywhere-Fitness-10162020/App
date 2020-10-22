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

    //user data sent to registration api:
    const userRegister = {
        username:userObj.username,
        password:userObj.password,
        email:userObj.email,
        role:userObj.role
    }

    //user data sent to login api:
    const userLogin={
        username:userObj.username,
        password:userObj.password
    }
    
    //login only:
    const axiosLogin = (userLogin) => {
        console.log("----------------------")
        console.log("Axios Login Function: ", userLogin)
        axios
            .post(apiLogin,userLogin)
            .then((res)=>{
                //confirmation details
                console.log("Axios login successful");
                console.log('Posted login to url: ', apiLogin);
                console.log('Login server response: ',res);

                //save token to localstorage
                console.log('Token: ',res.data.token);
                saveToken(res.data.token);
            })
            .catch(err=>{
                console.log("Axios login error: ", err);
            }) 
    }

    //signup then auto-login on successful registration:
    const axiosRegister = (userRegister,userLogin) => {
        console.log("----------------------")
        console.log("Axios Register Function: ", userRegister)
        axios
            .post(apiRegister,userRegister)
            .then((res)=>{
                //confirmation details
                console.log("Axios registration successful");
                console.log('Registered new user to url: ', apiRegister);
                console.log('Registration server response: ',res);

                //send userinfo to Login function
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
        return("Axios error, check parameters");
    }
};



// const testClick=()=>{
//     const testLoginUser = {...user}
//     // apiLogin("login",testloginUser);
//     console.log("test clicked");
//     console.log('testLoginUser: ', testLoginUser);

//     apiLogin("register",testLoginUser)
    
//   }

    