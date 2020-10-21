import React from 'react';
import axios from 'axios';

const useApiAxios = (userAction, userObj) => {
    //userAction: "register" or "login"
    //userObj: user info object to post

    //change these according to app endpoints:
    const apiBase='https://anywherefitnesswebapi.herokuapp.com/api/auth';
    const apiRegister = '/register';
    const apiLogin = '/login';

    const userLogin = {..userObj} //sent for login
    const userRegister = {...userObj} //sent for register

    const axiosRegister = () => {
        axios
        .post(`${apiBase}${apiRegister}`,userObj)
        .then(res=>{
            console.log();
        })
        .catch(err=>{
            
        })
            
    }

 
    if(userAction==="register"){

    }else if(userAction==="login"){
        axios
        .post()
        .then()
        .catch()
    }else{
        return("Axios error");
    }


}

export default useApiAxios;