import Axios from 'axios';
import React from 'react'
import styled from 'styled-components'

//Styled Components
const ClassContainer = styled.div`
    max-width: 100%;
    padding: 2%;
    border-top: 1px solid #555;
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
        margin: 0;
        padding: 0;
    }

`;

const ClassInfo = styled.div`
    display: flex;
    flex-flow: row wrap;

    p {
        width: 20%;
    }
    button {
        border-radius: 10px;
        padding: 1%;
        height: 10px;
        font-weight: 700;
    }
`;



export default function InstructorClassCard(props) {   
        
    const {class_city, class_date, class_duration,
        class_intensity_level, class_name, class_timezone,
        max_attendees, start_time, type, id} = props;


    const handleDelete = (id) => {
        Axios.delete(`https://anywherefitnesswebapi.herokuapp.com/${id}`)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err.data)
            })
    }

    return(
        <ClassContainer>    
            <h3>{class_name}</h3>
            <ClassInfo>                
                <p>Type: {type}</p>
                <p>Class Duration: {class_duration}</p>
                <p>Intensity: {class_intensity_level}</p>
                <p>Date: {class_date}</p>
                <p>Time: {start_time} {class_timezone}</p>
                <p>City: {class_city}</p> 
                <p>Attendees: {max_attendees}</p>
            </ClassInfo>             
            <button onClick={handleDelete(id)}>Delete</button>
        </ClassContainer>
    )
}
