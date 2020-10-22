import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {dismissOnboard} from '../actions/index';

const OnboardingMsg = styled.div;
const ClientOnboard = (props) =>{
    const {role,showOnboard,dismissOnboard} = props;

    return(
        <>  
            <OnboardingMsg>

                <h2>Welcome!</h2>
                
                <p>Thank you for choosing Anywhere Fitness!</p>
                { role==="instructor" ?

                <p>Start teaching classes now!</p>
                : 
                <p>Search for a class and add it to your schedule.</p>
                }


            </OnboardingMsg>
        </>
    )   
};

const mapStateToProps = state => {
    return {
        showOnboard:state.showOnboard,
        role:state.role
    }
};

export default connect(mapStateToProps,{dismissOnboard})(ClientOnboard)