import Axios from 'axios';
import React, { useState } from 'react'
import styled from 'styled-components'
import EditClass from './EditClass'


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
        font-size: 3rem;
        margin: 2% 0;
        padding: 0;
    }

`;

const ClassInfo = styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-between;

    p {
        width: 100%;
    }

    div {
        display: flex;
        flex-flow: row wrap;
        width: 40%;
        margin-bottom: 2%;
        margin-right: 2%;
        border: 1px solid red;
    }

    img {
        width: 100%;
    }
    button {
        border-radius: 10px;
        padding: 1%;
        height: 10px;
        font-weight: 700;
    }

    form {
        display: flex;
        flex-flow: column nowrap;

        input {
            width: 100%;
        }
    }
`;




export default function InstructorClassCard(props) {   
        
    const {class_city, class_duration,
        class_intensity_level, class_name, class_timezone,
        max_attendees, start_time, type, id} = props;

    const [edit, setEdit] = useState(false);
        

    //Delete Handler    
    const handleDelete = (e) => {
        e.preventDefault();

        Axios.delete(`https://anywherefitnesswebapi.herokuapp.com/${id}`)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err.data)
            })
    }

    //Edit Handler    
    const handleEdit = (e) => {
        e.preventDefault();
        setEdit(!edit);
    }

    return(
        <ClassContainer>    
            <h3>{class_name}</h3>
            <ClassInfo>
                <div>
                    {type === 'yoga' ? <img src='/assets/yoga.jpg' /> : null }
                    {type === 'weightlifting' ? <img src='/assets/weightlifting.jpg' /> : null }
                    {type === 'swimming' ? <img src='/assets/swimming.jpg' /> : null }
                    {type === 'running' ? <img src='/assets/running.jpg' /> : null }
                    {type === 'pilates' ? <img src='/assets/pilates.jpg' /> : null }
                    {type === 'martial arts' ? <img src='/assets/martialarts.jpg' /> : null }
                    {type === 'crossfit' ? <img src='/assets/crossfit.jpg' /> : null }
                    {type === 'boxing' ? <img src='/assets/boxing.jpg' /> : null }
                    {type === 'biking' ? <img src='/assets/biking.jpg' /> : null }
                    {type === 'Adventure' ? <img src='/assets/adventure.jpg' /> : null }
                </div>
                <div>
                    {edit
                    ?   
                        <EditClass />
                    :   <>
                            <p>Type: {type}</p>
                            <p>Class Duration: {class_duration}</p>
                            <p>Intensity: {class_intensity_level}</p>
                            <p>Date: {start_time.split(' ', 1)}</p>
                            <p>Time: {start_time.split(' ')[1]} {class_timezone}</p>
                            <p>City: {class_city}</p> 
                            <p>Attendees: {max_attendees}</p>
                        </>
                    }
                </div>                
            </ClassInfo>             
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleEdit}>Edit</button>
        </ClassContainer>
    )
}
