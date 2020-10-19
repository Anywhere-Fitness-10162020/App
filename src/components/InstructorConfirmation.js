import React from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'



//Styled Components
const FormContainer = styled.div`
    max-width: 100%;
    margin: 4%;
    padding: 2%;
    border: 1px solid #333;
    border-radius: 10px;
    box-shadow: 5px 5px 20px #000;
    background-color: #333;
    color: #fff;
    font-weight: 300;
    font-size: 1.5rem;
    letter-spacing: 2px;
    line-height: 1.6rem;

    h2 {
        font-weight: 700;
        font-size: 4rem;
    }

    h3 {
        font-weight: 700;
        font-size: 2rem;
    }

    button {
        padding: 1% 2%;
        font-size: 1.6rem;
        font-weight: 700;
    }

    span {
        text-decoration: underline;
    }
`;


export default function InstructorConfirmation(props) {

    //Instantiate useHistory hook
    const history = useHistory();


    //Click Handler   
    const handleClick = () => {
        history.push(`/instructors`);
    }


    return(
        <FormContainer>
            <h2>Thank you for signing up!</h2>
            <p>Please sign in to get started</p>
            <button onClick={handleClick}>Sign In</button><br/><br/> 
           
        </FormContainer>
    )
}
