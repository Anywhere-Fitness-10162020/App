import React from 'react';
import InstructorSchedule from './InstructorSchedule'
import Onboarding from './Onboarding'
import {connect} from 'react-redux';
// import InstructorSignIn from './InstructorSignIn'

const InstructorHome = (props) => {
    const {showOnboard} = props;

    return (
        <div>
            <>
                {showOnboard ? <Onboarding/>: null}
                <InstructorSchedule />                 
            </>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        showOnboard:state.showOnboard
    }
};

export default connect(mapStateToProps,null)(InstructorHome);