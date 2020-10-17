import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import * as yup from 'yup'
import instructor_schema from '../schemas/instructor_schema'



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
        font-size: 1rem;
        font-weight: 700;
    }
`;

//Default Form Values
const defaultFormValues = {
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
        instructor_schema.isValid(formValues)
            .then(valid => setDisabled(!valid));
    }, [formValues])

    //Handlers 
    const handleChange = (event) => {
        //destructure event.target
        const { name, value, type, checked } = event.target;

        //Determine if there's a checkbox if so use checked value instead
        const valueToUse = type === 'checkbox' ? checked : value;

        //Each time user interacts reach into Yup schema
        yup.reach(instructor_schema, name)
            .validate(valueToUse)
            //If valid, clear error log else add errors for display
            .then(valid => setErrors({ ...errors, [name]: '' }))
            .catch(error => setErrors({ ...errors, [name]: error.errors[0] }))
        

        setFormValues({ ...formValues, [name]: valueToUse });
    };

    const submit = (event) => {
        //Prevent default form behaviour
        event.preventDefault();
        
    };



    return(
        <FormContainer>
            <h2>Instructor Signup</h2>
            <ErrorContainer>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.address}</div>
                <div>{errors.phone}</div>
            </ErrorContainer>
            <form onSubmit={submit}>
                <h3>Info</h3>
                    <label>Name&nbsp;&nbsp;&nbsp;&nbsp;
                        <input
                            type="text"
                            name="name"
                            value={formValues.name}
                            onChange={handleChange}
                        />
                    </label><br/>
                    <label>Email&nbsp;&nbsp;&nbsp;&nbsp;
                        <input
                            type="email"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                        />
                    </label><br/>
                    <label>Address&nbsp;
                        <input
                            type="text"
                            name="address"
                            value={formValues.address}
                            onChange={handleChange}
                        />
                    </label><br/>
                    <label>Phone&nbsp;&nbsp;&nbsp;&nbsp;
                        <input
                            type="tel"
                            name="phone"
                            value={formValues.phone}
                            onChange={handleChange}
                        />
                    </label><br/>
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
                        />Monday | Wednesday | Friday
                    </label><br/>
                    <label>
                        <input
                            type="checkbox"
                            name="tuethurs"
                            value={formValues.tuethurs}
                            onChange={handleChange}
                        />Tuesday | Thursday
                    </label><br/>
                    <label>
                        <input
                            type="checkbox"
                            name="satsun"
                            value={formValues.satsun}
                            onChange={handleChange}
                        />Saturday | Sunday
                    </label>
                <h3>About Me</h3>
                    <textarea
                        type="text"
                        name="about_me"
                        value={formValues.about_me}
                        onChange={handleChange}
                    />
                <br/>
                <button disabled={true}>Submit</button>
            </form>
        </FormContainer>
    )
}
