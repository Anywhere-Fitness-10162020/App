import React from 'react';
import {userLogout} from '../actions/index';
import {clearStorage} from '../api/helpers'
import {connect} from 'react-redux';

const LogoutButton = (props) => {
    const {userLogout} = props;
    const handleClick=(e)=>{
        e.preventDefault();
        clearStorage();
        userLogout()
    }
    return (
        <button onClick={handleClick}>Logout</button>
    );
}

export default connect(null,{userLogout})(LogoutButton);