import React from 'react';
import {connect} from 'react-redux';
import InstructorSchedule from './InstructorSchedule'
// import InstructorSignIn from './InstructorSignIn'
import CreateClass from './CreateClass'

const InstructorHome = (props) => {
    const {loggedIn, role} = props;

    return (
        <div>
            <p className="testing">User: {role}, {loggedIn ? "is logged in" : "is NOT logged in"}</p>
            
            {/* Leaving this view public for development */}
            {/* For release, will be locked to login-only with a private route */}
            {/* ---------------------------------------- */}
                {/* {loggedIn ? (<><InstructorSchedule /> <CreateClass /></>) : (<><p className="testing">Please Sign In</p> <InstructorSignIn /></>)} */}

            <>
                <InstructorSchedule /> 
                <CreateClass />
            </>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        loggedIn:state.loggedIn,
        role:state.role,
    }
}

export default connect (mapStateToProps, null)(InstructorHome);