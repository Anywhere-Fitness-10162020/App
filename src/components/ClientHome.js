import React from 'react';
import { connect } from 'react-redux';

const ClientHome = (props) => {
    const {loggedIn, role} = props;

    return(
        <div>
            <p className="testing">User: {role}, {loggedIn ? "is logged in" : "is NOT logged in"}</p>
            <h2>Client Homepage</h2>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        loggedIn:state.loggedIn,
        role:state.role
    }
}

export default connect(mapStateToProps,null)(ClientHome);