import React, { useState, useEffect } from 'react'
import {axiosWithAuth} from '../api/axiosWithAuth';
import styled from 'styled-components'
import InstructorClassCard from './InstructorClassCard'


//Styled Components
const ScheduleContainer = styled.div`
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
`;


//Default Form Values
const defaultClass = [{
    id: '',
    class_name: '',
    class_duration: '',
    class_intensity_level: '',
    class_city: '',
    start_time: '',
    class_timezone: '',
    type: '',
    max_attendees: '',
    instructor_id: ''
}];


export default function InstructorSchedule(props) {   
    //Classes state    
    const [classes, setClasses] = useState(defaultClass);

    //Get Card Functionality
    const getCards = () => {
        
        axiosWithAuth()        
        .get('https://anywherefitnesswebapi.herokuapp.com/api/classes')
            .then(res => {
                //Store the array of classes
                const classArray = res.data;
                setClasses(classArray)
                console.log('Classes displayed ',res.data);
            })
            .catch(err => {
                console.log('Error displaying classes: ', err.data)
            })
    }


    //Use Effect Hook
    useEffect(() => {
        getCards();
    }, []);
    

    return(
        <ScheduleContainer>
            <h2>Instructor Schedule</h2>     

            {classes ? classes.map((item) => 
            <InstructorClassCard
                key = {item.id}
                id = {item.id}
                class_name={item.class_name}
                class_duration= {item.class_duration}
                class_intensity_level = {item.class_intensity_level}
                class_city = {item.class_city}
                start_time = {item.start_time}
                class_timezone = {item.class_timezone}
                type = {item.type}
                max_attendees = {item.max_attendees}
                instructor_id = {item.instructor_id}
                getCards = {getCards}
            />)
            : null}
        </ScheduleContainer>
    )
}
