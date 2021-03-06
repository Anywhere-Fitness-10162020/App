import React, { useState } from 'react'
import styled from 'styled-components'
import { axiosWithAuth } from '../api/axiosWithAuth';
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

    div.col {
        display: flex;
        flex-flow: row wrap;
        width: 40%;
        margin-bottom: 2%;
        margin-right: 2%;
        /* border: 1px solid red;     */
    }

    div.edit {
        width: 100%;
        /* border: 1px solid red;     */
    }

    img {
        width: 100%;      
    }

    .col button {
        border-radius: 10px;
        padding: 1%;
        height: 10px;
        font-weight: 700;
    }

    
`;




export default function InstructorClassCard(props) {   
    //Props passed from InstructorSchedule Component  
    const {class_city, class_duration,
        class_intensity_level, class_name, class_timezone,
        max_attendees, start_time, type, getCards, id} = props;

    //State if user hit edit button
    const [edit, setEdit] = useState(false);
    
    


    //Edit Handler    
    const handleEdit = (e) => {
        e.preventDefault();
        setEdit(!edit);
    }
    const handleSignUp = (e) => {
        const newReservation = {

            id: id,
            user_id: 1,
            class_id: id
        }
        e.preventDefault()
        axiosWithAuth()
        .post('https://anywherefitnesswebapi.herokuapp.com/api/reservations', newReservation)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err.error)
        })
    }

    return(
        <>
        
        <ClassContainer>    
           {edit ? <h3>Edit Class</h3> : <h3>{class_name}</h3> }
            <ClassInfo>

                {/*Displays specific image / info per class type. If in edit mode show none*/}
                {edit 
                    ? 
                        null
                    :   
                        <>
                        <div className="col">
                            {type === 'yoga' ? <img src='/assets/yoga.jpg' alt="yoga"/> : null }
                            {type === 'weightlifting' ? <img src='/assets/weightlifting.jpg' alt="weightlifting"/> : null }
                            {type === 'swimming' ? <img src='/assets/swimming.jpg' alt="swimming"/> : null }
                            {type === 'running' ? <img src='/assets/running.jpg' alt="running"/> : null }
                            {type === 'pilates' ? <img src='/assets/pilates.jpg' alt="pilates"/> : null }
                            {type === 'martial arts' ? <img src='/assets/martialarts.jpg' alt="martial arts"/> : null }
                            {type === 'crossfit' ? <img src='/assets/crossfit.jpg' alt="crossfit"/> : null }
                            {type === 'boxing' ? <img src='/assets/boxing.jpg' alt="boxing"/> : null }
                            {type === 'biking' ? <img src='/assets/biking.jpg' alt="biking"/> : null }
                            {type === 'Adventure' ? <img src='/assets/adventure.jpg' alt="adventure"/> : null }

                        </div>
                        <div className="col">
                                <p>Type: {type}</p>
                                <p>Class Duration: {class_duration}</p>
                                <p>Intensity: {class_intensity_level}</p>
                                <p>Date: {start_time.split(' ', 1)}</p>
                                <p>Time: {start_time.split(' ')[1]} {class_timezone}</p>
                                <p>City: {class_city}</p> 
                        </div>
                        </>
                }

                {/*If edit button is clicked, show EditClass form*/}               
                {edit
                    ?   
                        <div className="edit">
                        <EditClass
                            class_city={class_city}
                            class_duration={class_duration}
                            class_intensity_level={class_intensity_level}
                            class_name={class_name}
                            class_timezone={class_timezone}
                            max_attendees={max_attendees}
                            start_time={start_time}
                            type={type}
                            id={id}
                            getCards = {getCards}
                            handleEdit = {handleEdit}
                        />
                        </div>
                    : null
                }                               
            </ClassInfo>             
           <button onClick={handleSignUp}>Sign Up</button>
        </ClassContainer>
        </>
    )
}
