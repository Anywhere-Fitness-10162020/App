import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import * as yup from 'yup'
import instructorSignUpSchema from '../schemas/instructor_signup_schema'



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
    password: '',
    name: '',
    email: '',
    address: '',
    phone: '',
    crossfit: false,
    hiit: false,
    cardio: false,
    bodybuilding: false,
    yoga: false,
    pilates: false,
    monwedfri: false,
    tuethurs: false,
    satsun: false,
    about_me: ''
}

//Default Error State
const defaultErrors = {
    username: '',
    password: '',
    name: '',
    email: '',
    address: '',
    phone: '',
    crossfit: false,
    hiit: false,
    cardio: false,
    bodybuilding: false,
    yoga: false,
    pilates: false,
    monwedfri: false,
    tuethurs: false,
    satsun: false,
    about_me: ''
}



export default function InstructorForm(props) {

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
            name: formValues.name,
            email: formValues.email,
            address: formValues.address,
            phone: formValues.phone,
            crossfit: formValues.crossfit,
            hiit: formValues.hiit,
            cardio: formValues.cardio,
            bodybuilding: formValues.bodybuilding,
            yoga: formValues.yoga,
            pilates: formValues.pilates,
            monwedfri: formValues.monwedfri,
            tuethurs: formValues.tuethurs,
            satsun: formValues.satsun,
            about_me: formValues.about_me
        }
        
        axios.post('https://reqres.in/api/instructor', newInstructor)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err.data)
            })
    };



    return(
        <FormContainer>
            <h2>Instructor Signup</h2>
            <ErrorContainer>
                <div>{errors.username}</div>
                <div>{errors.password}</div>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.address}</div>
                <div>{errors.phone}</div>
            </ErrorContainer>
            <form onSubmit={submit}>
                <div>
                <h3>Username / Password</h3>
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
                            type="text"
                            name="password"
                            value={formValues.password}
                            onChange={handleChange}
                        />
                    </label><br/>
                <h3>Address Information</h3>
                    <label>Name<br/>
                        <input
                            type="text"
                            name="name"
                            value={formValues.name}
                            onChange={handleChange}
                        />
                    </label><br/>
                    <label>Email<br/>
                        <input
                            type="email"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                        />
                    </label><br/>
                    <label>Address<br/>
                        <input
                            type="text"
                            name="address"
                            value={formValues.address}
                            onChange={handleChange}
                        />
                    </label><br/>
                    <label>Phone<br/>
                        <input
                            type="tel"
                            name="phone"
                            value={formValues.phone}
                            onChange={handleChange}
                        />
                    </label><br/>
                    </div>
                    <div>
                <h3>Instructional Expertise</h3>
                    <label>
                        <input
                            type="checkbox"
                            name="crossfit"
                            value={formValues.crossfit}
                            onChange={handleChange}
                        />Crossfit
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="hiit"
                            value={formValues.hiit}
                            onChange={handleChange}
                        />H.I.I.T
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="cardio"
                            value={formValues.cardio}
                            onChange={handleChange}
                        />Cardio
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="bodybuilding"
                            value={formValues.bodybuilding}
                            onChange={handleChange}
                        />Bodybuilding
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="yoga"
                            value={formValues.yoga}
                            onChange={handleChange}
                        />Yoga
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="pilates"
                            value={formValues.pilates}
                            onChange={handleChange}
                        />Pilates
                    </label>
                <h3>Availability</h3>
                <label>
                        <input
                            type="checkbox"
                            name="monwedfri"
                            value={formValues.monwedfri}
                            onChange={handleChange}
                        />Monday, Wednesday, Friday
                    </label><br/>
                    <label>
                        <input
                            type="checkbox"
                            name="tuethurs"
                            value={formValues.tuethurs}
                            onChange={handleChange}
                        />Tuesday, Thursday
                    </label><br/>
                    <label>
                        <input
                            type="checkbox"
                            name="satsun"
                            value={formValues.satsun}
                            onChange={handleChange}
                        />Saturday, Sunday
                    </label>
                <h3>About Me</h3>
                    <textarea
                        type="text"
                        name="about_me"
                        value={formValues.about_me}
                        onChange={handleChange}
                    />
                <br/><br/>
                <button disabled={disabled}>Submit</button>
                </div>
            </form>
        </FormContainer>
    )
}
