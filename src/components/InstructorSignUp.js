import React, { useState, useEffect } from 'react'
// import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import * as yup from 'yup'
import instructorSignUpSchema from '../schemas/instructor_signup_schema'
import {apiLogin} from '../api/helpers';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {newOnboard} from '../actions/index';

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
    role: ''
}

//Default Error State
const defaultErrors = {
    username: '',
    email: '',    
    password: '',
    role: ''
}



const InstructorForm = (props) => {
    const {newOnboard} = props;
    const history = useHistory();
    // const { loggedIn, role } = props;

    //Keep track of form values
    const [formValues, setFormValues] = useState(defaultFormValues);

    //Keep track of errors
    const [errors, setErrors] = useState(defaultErrors)

    //Keep button state
    const [disabled, setDisabled] = useState(true)

    //Instantiate useHistory hook
    // const history = useHistory();

    //Effect Hook: Check if form valid on user input, if so enable submit
    useEffect(() => {
        instructorSignUpSchema.isValid(formValues)
            .then(valid => setDisabled(!valid));
    }, [formValues])



    //Change Handler 
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



    //Submit Handler
    const submit = (event) => {
        //Prevent default form behaviour
        event.preventDefault();
        apiLogin("register", formValues)
            .then(res=>{
                console.log("Promise success: ",res)
                //check that actual role is instructor before redirecting to instructors page
                //or add an auto redirect out of instructors page if user is not an instructor
                newOnboard();
                setTimeout(history.push(`../instructors/home`),1000);
        
            })
            .catch(err=>{
                console.log("Promise failed: ",err)
            });

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
                            name="role"
                            value={formValues.role}
                            onChange={handleChange}
                        />
                    </label><br/><br/>
                  
                <button disabled={disabled}>Submit</button>
                </div>
            </form>
        </FormContainer>
    )
}

const mapStateToProps = state => {
    return {
        loggedIn:state.loggedIn,
        role:state.role
    }
}
export default connect(mapStateToProps,{newOnboard})(InstructorForm);