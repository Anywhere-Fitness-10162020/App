import React from 'react';
import {connect} from 'react-redux';
import InstructorSchedule from './InstructorSchedule'
import CreateClass from './CreateClass'

const InstructorHome = (props) => {
    const {loggedIn, role} = props;

    return (
        <div>
            <p className="testing">User: {role}, {loggedIn ? "is logged in" : "is NOT logged in"}</p>
            
            <InstructorSchedule />
            <CreateClass />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        loggedIn:state.loggedIn,
        role:state.role,
    }
}

export default connect (mapStateToProps,null)(InstructorHome);