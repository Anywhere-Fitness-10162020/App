import React from 'react';
import {connect} from 'react-redux';

const InstructorHome = (props) => {
    const {loggedIn, userRole} = props;

    return (
        <div>
            <p className="testing">User: {userRole}, {loggedIn ? "is logged in" : "is NOT logged in"}</p>
            <h2>Instructor Homepage</h2>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        loggedIn:state.loggedIn,
        userRole:state.userRole,
    }
}

export default connect (mapStateToProps,null)(InstructorHome);