import React from 'react'
import styled from 'styled-components'


const HomepageContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    max-width: 100%;
    margin: auto;
    color: #fff;

    li {
        margin: 1% 2%;
        list-style: circle;
    }

    .hero {
        background: url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
        background-attachment: fixed;
        background-size: cover;
        padding: 4%;
        width: 100%;
        text-align: center;
        text-shadow: 1px 1px 20px #000;
    }

    .info, .info2, .info3 {
        max-width: 100%;
        padding: 2%;
        text-shadow: 1px 1px 20px #000;
    }

    .info {        
        background-color: #2E2E3A;
    }

    .info2 {
        background: url('https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
        background-attachment: fixed;
        background-size: cover;
    }

    .info3 {        
        background-color: #BC5D2E;
    }  
`;

const InstructorContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin: 0 2%;

    .instructor {
        border-radius: 100%;
        width: 70%;
    }

`;

export default function Homepage(props) {
    return(
        <HomepageContainer>
            <div className="hero">
                <h2>Take your workouts to the next level</h2>
                <p>
                    THESE DAYS, FITNESS CLASSES CAN BE HELD ANYWHERE-
                    A PARK, AN UNFINISHED BASEMENT OR A GARAGE- NOT 
                    JUST AT A TRADITIONAL GYM. CERTIFIED FITNESS INSTRUCTORS
                    NEED AN EASY WAY TO TAKE THE AWKWARDNESS OUT OF ATTENDANCE
                    TAKING AND CLIENT PAYMENT PROCESSING.
                </p>
            </div>
            <div className="info">
                <h2>Learn More</h2>
                <p>
                   Get the most out of your workouts with Anywhere Fitness! We provide
                   professional guidance for all of your fitness needs. We offer a
                   wide selection of classes from yoga to weightlifting and we'll work with
                   you to get you in tip top shape within a matter of weeks. Each client will
                   be paired with an instructor and a nutritionist to keep your workouts and 
                   diet on track. Easy class scheduling for instructors and easy signup for clients.
                   Manage all of your classes in one place.
                </p>
            </div>
            <div className="info2">
                <h2>Classes </h2>
                <p>
                    We offer high quality classes in the following areas:
                    <ul>
                        <li>Yoga</li>
                        <li>Pilates</li>
                        <li>Biking</li>
                        <li>Swimming</li>
                        <li>Crossfit</li>
                        <li>Martial Arts</li>
                        <li>Running</li>
                        <li>Boxing</li>
                        <li>Weightlifting</li>
                    </ul>
                </p>
            </div>
            <div className="info3">
                <h2>Experienced Instructors</h2>     
                <InstructorContainer>
                    <div>
                        <h3>Eric</h3>
                        <img src='/assets/Eric.png' className="instructor" alt="Eric"></img>
                    </div>                    
                    <div>
                        <h3>Austin</h3>
                        <img src='/assets/Austin.png' className="instructor" alt="Austin"></img>
                    </div>
                    <div>
                        <h3>Suzanne</h3>
                        <img src='/assets/Suzanne.png' className="instructor" alt="Suzanne"></img>
                    </div>
                    <div>
                        <h3>Brendan</h3>
                        <img src='/assets/Brendan.png' className="instructor" alt="Brendan"></img>
                    </div>
                    <div>
                        <h3>Sam</h3>
                        <img src='/assets/Sam.png' className="instructor" alt="Sam"></img>
                    </div>
                </InstructorContainer>
            </div>
        </HomepageContainer>       
    )
}
