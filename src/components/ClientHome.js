import React from 'react';
import { connect } from 'react-redux';

const ClientHome = (props) => {
    const {loggedIn, userRole} = props;

    return(
        <div>
            <p className="testing">User role: {userRole} {loggedIn ? "is logged in" : "is NOT logged in"}</p>
            <h2>Client Homepage</h2>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        loggedIn:state.loggedIn,
        userRole:state.userRole
    }
}

export default connect(mapStateToProps,null)(ClientHome);