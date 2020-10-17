import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import * as yup from 'yup'
import instructorSigninSchema from '../schemas/instructor_schema'



//Styled Components
const ErrorContainer = styled.div`
    color: red;
`;

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

//Default Form Values
const defaultFormValues = {
    username: '',
    password: ''
}

//Default Error State
const defaultErrors = {
    username: '',
    password: '',
}



export default function InstructorSignIn(props) {

    //Keep track of form values
    const [formValues, setFormValues] = useState(defaultFormValues);

    //Keep track of errors
    const [errors, setErrors] = useState(defaultErrors)

    //Keep button state
    const [disabled, setDisabled] = useState(true)

    //Instantiate useHistory hook
    const history = useHistory();

    //Effect Hook: Check if form valid on user input, if so enable submit
    useEffect(() => {
        instructorSigninSchema.isValid(formValues)
            .then(valid => setDisabled(!valid));
    }, [formValues])

    //Handlers 
    const handleChange = (event) => {
        //destructure event.target
        const { name, value, type, checked } = event.target;

        //Determine if there's a checkbox if so use checked value instead
        const valueToUse = type === 'checkbox' ? checked : value;

        //Each time user interacts reach into Yup schema
        yup.reach(instructorSigninSchema, name)
            .validate(valueToUse)
            //If valid, clear error log else add errors for display
            .then(valid => setErrors({ ...errors, [name]: '' }))
            .catch(error => setErrors({ ...errors, [name]: error.errors[0] }))
        

        setFormValues({ ...formValues, [name]: valueToUse });
    };


    const handleClick = () => {
        history.push('/')
    }

    const submit = (event) => {
        //Prevent default form behaviour
        event.preventDefault();

        const newInstructor = {
            name: formValues.username,
            email: formValues.password
        }

        axios.post('https://reqres.in/')
            .then(success => {

            })
            .catch(error => {

            })
        
    };



    return(
        <FormContainer>
            <h2>Instructor Sign-in</h2>
            <ErrorContainer>
                <div>{errors.username}</div>
                <div>{errors.password}</div>
            </ErrorContainer>
            <form onSubmit={submit}>
                <label>Username<br/>
                        <input
                            type="text"
                            name="username"
                            value={formValues.username}
                            onChange={handleChange}
                        />
                    </label><br/><br/>     
                    <label>Password<br/>
                        <input
                            type="email"
                            name="password"
                            value={formValues.password}
                            onChange={handleChange}
                        />
                    </label><br/><br/>               
                <button disabled={true}>Sign In</button><br/><br/>
                <div>Don't have an account? <span onClick={handleClick}>Sign-up</span></div>
                
            </form>
        </FormContainer>
    )
}
