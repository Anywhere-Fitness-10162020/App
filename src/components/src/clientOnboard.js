import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const OnboardingMsg = styled.div;
const ClientOnboard = (props) =>{

    
    return(
        <>  
            <OnboardingMsg>
                <h2>Welcome!</h2>
                <p>Thank you for choosing Anywhere Fitness!</p>
                <p>Search for a class and add it to your schedule.</p>
            </OnboardingMsg>
        </>
    )   
}

const mapStateToProps = state => {
    return {
        showOnboard:state.showOnboard
    }
}

export default connect()(ClientOnboard)