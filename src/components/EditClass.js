import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import * as yup from 'yup'
import createClassSchema from '../schemas/instructor_class_schema'



//Styled Components
const ErrorContainer = styled.div`
    color: red;
`;

const FormContainer = styled.div`
    
`;

//Default Form Values
const defaultFormValues = {
    class_name: '',
    class_duration: '',
    class_intensity_level: '',
    class_city: '',
    class_date: '',
    start_time: '',
    class_timezone: '',
    type: '',
    max_attendees: '',
    instructor_id: ''
}

//Default Error State
const defaultErrors = {
    class_name: '',
    class_duration: '',
    class_intensity_level: '',
    class_city: '',
    class_date: '',
    start_time: '',
    class_timezone: '',
    type: '',
    max_attendees: '',
    instructor_id: ''
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
        createClassSchema.isValid(formValues)
            .then(valid => setDisabled(!valid));
    }, [formValues])

    //Handlers 
    const handleChange = (event) => {
        //destructure event.target
        const { name, value, type, checked } = event.target;

        //Determine if there's a checkbox if so use checked value instead
        const valueToUse = type === 'checkbox' ? checked : value;

        //Each time user interacts reach into Yup schema
        yup.reach(createClassSchema, name)
            .validate(valueToUse)
            //If valid, clear error log else add errors for display
            .then(valid => setErrors({ ...errors, [name]: '' }))
            .catch(error => setErrors({ ...errors, [name]: error.errors[0] }))
        

        setFormValues({ ...formValues, [name]: valueToUse });
    };

    const submit = (event) => {
        //Prevent default form behaviour
        event.preventDefault();

        const newClass = {
            class_name: formValues.class_name,
            class_duration: formValues.class_duration,
            class_intensity_level: formValues.class_intensity_level,
            class_city: formValues.class_city,
            start_time: `${formValues.class_date} ${formValues.start_time}`,
            class_timezone: formValues.class_timezone,
            type: formValues.type,
            max_attendees: formValues.max_attendees,
            instructor_id: formValues.id
        }

        console.log(newClass)
        
        axios.post('https://anywherefitnesswebapi.herokuapp.com/api/classes', newClass)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err.data)
            })

        setFormValues(defaultFormValues);
    };


    return(
        <FormContainer>
            <ErrorContainer>
                <div>{errors.class_name}</div>
                <div>{errors.class_duration}</div>
                <div>{errors.class_intensity_level}</div>
                <div>{errors.class_city}</div>
                <div>{errors.class_date}</div>
                <div>{errors.start_time}</div>
                <div>{errors.class_timezone}</div>
                <div>{errors.type}</div>
                <div>{errors.max_attendees}</div>
            </ErrorContainer>
            <form onSubmit={submit}>
                <div>              
                    <label>Name<br/>
                        <input
                            type="text"
                            name="class_name"
                            placeholder="Please enter class name"
                            value={formValues.class_name}
                            onChange={handleChange}
                        />
                    </label><br/><br/>
                    <label>Type<br/>
                        <select name="type" value={formValues.class_type} onChange={handleChange}>
                            <option value="">Select class type</option>
                            <option value="yoga">Yoga</option>
                            <option value="pilates">Pilates</option>
                            <option value="crossfit">Crossfit</option>
                            <option value="biking">Biking</option>
                            <option value="weightlifting">Weightlifting</option>
                            <option value="martial arts">Martial Arts</option>
                            <option value="boxing">Boxing</option>  
                            <option value="running">Running</option>
                            <option value="swimming">Swimming</option> 
                            <option value="adventure">Adventure</option>                                     
                        </select>
                    </label><br/><br/>
                    <label>Intensity Level<br/>
                        <select name="class_intensity_level" value={formValues.class_intensity_level} onChange={handleChange}>
                            <option value="">Select class intensity</option>
                            <option value="low">low</option>
                            <option value="medium">medium</option>
                            <option value="high">high</option>                                 
                        </select>
                    </label><br/><br/>                             
                    <label>Duration<br/>
                        <select name="class_duration" value={formValues.class_duration} onChange={handleChange}>
                            <option value="">Select class duration</option>
                            <option value="00:30:00">30 minutes</option>
                            <option value="00:45:00">45 minutes</option>
                            <option value="01:00:00">1 hour</option>  
                            <option value="01:30:00">1 hour 30 minutes</option>     
                            <option value="01:45:00">1 hour 45 minutes</option>  
                            <option value="02:00:00">2 hours</option>      
                            <option value="02:30:00">2 hours 30 minutes</option>  
                            <option value="02:45:00">2 hours 45 minutes</option>
                            <option value="03:00:00">3 hours</option>                            
                        </select>
                    </label><br/><br/>
                    </div>
                    <div>
                    <label>Class Size<br/>
                        <input
                            type="number"
                            name="max_attendees"
                            placeholder="Please enter class size"
                            value= {formValues.max_attendees}
                            onChange = {handleChange}
                        />
                    </label>      
                    <label>Time<br/>
                        <select name="start_time" value={formValues.start_time} onChange={handleChange}>
                            <option value="">Select class start time</option>
                            <option value="05:00:00">5 AM</option>
                            <option value="06:00:00">6 AM</option>
                            <option value="07:00:00">7 AM</option>
                            <option value="08:00:00">8 AM</option>
                            <option value="09:00:00">9 AM</option>
                            <option value="10:00:00">10 AM</option>
                            <option value="11:00:00">11 AM</option>
                            <option value="12:00:00">12 PM</option>
                            <option value="13:00:00">1 PM</option>
                            <option value="14:00:00">2 PM</option>
                            <option value="15:00:00">3 PM</option>
                            <option value="16:00:00">4 PM</option>
                            <option value="17:00:00">5 PM</option>
                            <option value="18:00:00">6 PM</option>
                            <option value="19:00:00">7 PM</option>
                            <option value="20:00:00">8 PM</option>
                            <option value="21:00:00">9 PM</option>                               
                        </select>
                        <select name="class_timezone" value={formValues.class_timezone} onChange={handleChange}>
                            <option value="">Select your time zone</option>
                            <option value="Eastern">Eastern</option>
                            <option value="Mountain">Mountain</option>
                            <option value="Pacific">Pacific</option>                    
                        </select>
                    </label><br/>
                    <label>Date<br/>
                        <input
                            type="date"
                            name="class_date"
                            value={formValues.class_date}
                            onChange={handleChange}
                        />
                    </label><br/>
                    <label>City<br/>
                        <select name="class_city" value={formValues.class_city} onChange={handleChange}>
                            <option value="">Select your city</option>
                            <option value="Chicago">Chicago</option>
                            <option value="Colorado">Colorado</option>
                            <option value="New York">New York</option>
                            <option value="Los Angeles">Los Angeles</option>
                            <option value="San Francisco">San Francisco</option>
                            <option value="Tennessee">Tennessee</option>    
                        </select>
                    </label><br/>
                    </div>
                    <button disabled={disabled}>Submit</button>
            </form>
        </FormContainer>
    )
}
