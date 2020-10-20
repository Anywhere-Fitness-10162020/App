import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import * as yup from 'yup'
import instructorSignUpSchema from '../schemas/instructor_signup_schema'
import {connect} from 'react-redux'
import {userLogin} from '../actions/index.js'


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

    form {
        display: flex;
        flex-direction: row nowrap;
        justify-content: space-between;
        padding: 2%;
    }

    button {
        padding: 1% 2%;
        font-size: 1.6rem;
        font-weight: 700;
    }
`;

//Default Form Values
const defaultFormValues = {
    username: '',
    email: '',    
    password: '',
    auth_code: ''
}

//Default Error State
const defaultErrors = {
    username: '',
    email: '',    
    password: '',
    auth_code: ''
}



const InstructorForm = (props) => {
    //Setup-----------------------------    
    const {userLogin}=props;



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
        instructorSignUpSchema.isValid(formValues)
            .then(valid => setDisabled(!valid));
    }, [formValues])

    //Handlers 
    const handleChange = (event) => {
        //destructure event.target
        const { name, value, type, checked } = event.target;

        //Determine if there's a checkbox if so use checked value instead
        const valueToUse = type === 'checkbox' ? checked : value;

        //Each time user interacts reach into Yup schema
        yup.reach(instructorSignUpSchema, name)
            .validate(valueToUse)
            //If valid, clear error log else add errors for display
            .then(valid => setErrors({ ...errors, [name]: '' }))
            .catch(error => setErrors({ ...errors, [name]: error.errors[0] }))
        

        setFormValues({ ...formValues, [name]: valueToUse });
    };

    const submit = (event) => {
        //Prevent default form behaviour
        event.preventDefault();

        const newInstructor = {
            username: formValues.username,
            password: formValues.password,
            email: formValues.email,
            role: formValues.auth_code
        }
        const newInstructorApi = 'https://anywherefitnesswebapi.herokuapp.com/api/auth/register';
        
        axios
            .post(newInstructorApi, newInstructor)
            .then(res => {
                console.log(res.data);
                userLogin("instructor");
                history.push(`../instructors/home`);
            })
            .catch(err => {
                console.log("Signup error: ", err);
                console.log("Error posting data: ", newInstructor);
                console.log("Attempted to post to: ", newInstructorApi);
            })

        setFormValues(defaultFormValues);
        history.push('/instructors/confirmation')
    };



    return(
        <FormContainer>
            <h2>Instructor Signup</h2>
            <ErrorContainer>
                <div>{errors.username}</div>
                <div>{errors.password}</div>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.phone}</div>
            </ErrorContainer>
            <form onSubmit={submit}>
                <div>
                    <label>Username<br/>
                        <input
                            type="text"
                            name="username"
                            value={formValues.username}
                            onChange={handleChange}
                        />
                    </label><br/><br/>
                    <label>Email<br/>
                        <input
                            type="email"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                        />
                    </label><br/><br/>                    
                    <label>Password<br/>
                        <input
                            type="text"
                            name="password"
                            value={formValues.password}
                            onChange={handleChange}
                        />
                    </label><br/><br/>
                    <label>Auth Code<br/>
                        <input
                            type="text"
                            name="auth_code"
                            value={formValues.auth_code}
                            onChange={handleChange}
                        />
                    </label><br/><br/>
                  
                <button disabled={disabled}>Submit</button>
                </div>
            </form>
        </FormContainer>
    )
}

export default connect(null,{userLogin})(InstructorForm);