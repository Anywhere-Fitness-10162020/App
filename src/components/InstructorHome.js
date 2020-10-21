import React from 'react';
import InstructorSchedule from './InstructorSchedule'
// import InstructorSignIn from './InstructorSignIn'
import CreateClass from './CreateClass'

const InstructorHome = (props) => {

    return (
        <div>
            <>
                <InstructorSchedule /> 
                <CreateClass />
            </>
        </div>
    );
};

export default InstructorHome;