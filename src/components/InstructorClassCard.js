import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

//Styled Components
const ClassContainer = styled.div`
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



export default function InstructorClassCard(props) {   
        
    const {class_city, class_date, class_duration,
        class_intensity_level, class_name, class_timezone,
        max_attendees, start_time, type, instructor_id} = props;

    return(
        <ClassContainer>    
            <div>
                <h3>{class_name}</h3>
                <p>{type}</p>
                <p>{class_duration}</p>
                <p>{class_intensity_level}</p>
                <p>{class_date}{start_time}</p>
                <p>{class_city}</p>
                <p>{class_timezone}</p>
                <p>{max_attendees}</p>
            </div> 
        </ClassContainer>
    )
}
