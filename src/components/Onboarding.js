import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {dismissOnboard} from '../actions/index';

const OnboardingMsg = styled.div`
    background-color:#F34213;
    border-radius:10px;
    display:flex;
    flex-flow:column;
    padding:0 2rem 2rem 2rem;
    font-size:1.6rem;
    align-items:flex-start;
    margin:3%;

    h2{
        color:white;
    }

    p{
        line-height:1;
        margin-bottom:1.1rem;
        padding:0;
        color:white;
    }

    button{
        text-align:center;
        border:none;
        padding:1rem;
        font-weight:bold;
        /* border-radius:10px; */
        font-size:1.6rem;
        margin-top:2rem;
        margin-left:.8rem;
    }
    button:hover{
        cursor:pointer;
        background-color:rgb(239, 239, 239);
    }
`;

const Onboarding = (props) =>{
    const {role,dismissOnboard} = props;

    return(
        <>  
            <OnboardingMsg onClick={dismissOnboard}>

                <h2>Welcome!</h2>
                
                <p>Thank you for choosing Anywhere Fitness!</p>
                { role==="instructor" ?<p>Start teaching classes now! Add or edit your class details below.</p>:<p>Search for a class below and add it to your schedule.</p>}
                <button onClick={dismissOnboard}>Continue</button>


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

export default connect(mapStateToProps,{dismissOnboard})(Onboarding)