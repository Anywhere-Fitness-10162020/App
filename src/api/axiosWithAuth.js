import axios from 'axios';

//this is Axios for the secure portions of the site
//usage: 
//basically the same as axios, add parentheses
//
//      axiosWithAuth()
//          .get(url,obj)
//          .then(res=>{resultstuff})
//          .catch(err=>{errorstuff})

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        headers: {
            Authorization: token
        }
    });
};

