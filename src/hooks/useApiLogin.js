import React from 'react';
import axios from 'axios';

const useApiLogin = (userAction, userObj) => {
    //userAction: "register" or "login"
    //userObj: user info object to post

    //change these according to app endpoints:
    const apiBase='https://anywherefitnesswebapi.herokuapp.com/api/auth';
    const apiRegister = '/register';
    const apiLogin = '/login';

    const userLogin = {...userObj} //sent for login
    const userRegister = {...userObj} //sent for register

    // const axiosRegister = () => {
    //     axios
    //     .post(`${apiBase}${apiRegister}`,userObj)
    //     .then(res=>{
    //         console.log();
    //     })
    //     .catch(err=>{
    //     })
    // }

    // const axiosLogin = () => {
    //     axios
    //     .post(`${apiBase}${apiRegister}`,userObj)
    //     .then(res=>{
    //         console.log();
    //     })
    //     .catch(err=>{
    //     })
    // }



    const axiosLogin = (userLogin) => {
        console.log("Axios Login Function: ", userLogin)
    }

    const axiosRegister = (userRegister,userLogin) => {
        console.log("Axios Register Function: ", userRegister)
        axiosLogin(userLogin);
    }


    if(userAction==="register"){
        return(axiosRegister(userRegister, userLogin));
    }else if(userAction==="login"){
        return(axiosLogin(userLogin));
    }else{
        return("Axios error");
    }


}

export default useApiLogin;