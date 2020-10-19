import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Homepage from './components/Homepage'
import ClientForm from './components/ClientForm'
import InstructorSignIn from './components/InstructorSignIn'
import InstructorSignUp from './components/InstructorSignUp'
import ClientHome from './components/ClientHome'
import InstructorHome from './components/InstructorHome'
import InstructorConfirmation from './components/InstructorConfirmation'
import CreateClass from './components/CreateClass'
import InstructorSchedule from './components/InstructorSchedule'
import ClassesPublic from './components/ClassesPublic'
 

const NavContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    color: #2E2E3A;
    
    background-color: #F34213;

    nav {
        padding: 2%;
        width: 100%;
    }    
`;

const AppContainer = styled.div`
`;
 
 
export default function App(props) {
    return(
    <>
        <NavContainer>
            <nav>                
                <h1>Anywhere Fitness</h1>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/clients'>Clients</NavLink>
                <NavLink to='/instructors'>Instructors</NavLink>
                <NavLink to='/public'>Classes Available</NavLink>
            </nav>
            <nav class="testing">
                <NavLink to='/instructors/home'>View: Instructor</NavLink>
                <NavLink to='/clients/home'>View: Client</NavLink>
            </nav>
        </NavContainer>
        <AppContainer>
            <Switch>
                <Route path='/instructors/home' >
                    <InstructorHome />
                </Route>
                <Route path='/clients/home' >
                    <ClientHome />
                </Route>
                <Route path='/instructors/createclass'>
                    <InstructorSchedule />
                    <CreateClass />
                </Route>
                <Route path='/instructors/confirmation'>
                    <InstructorConfirmation />
                </Route>
                <Route path='/instructors/signup'>
                    <InstructorSignUp />
                </Route>
                <Route path='/instructors'>
                    <InstructorSignIn />
                </Route>
                <Route path='/clients'>
                    <ClientForm />
                </Route>
                <Route path='/public'>
                    <ClassesPublic />
                </Route>
                <Route path='/'>
                    <Homepage />
                </Route>

            </Switch>
        
        </AppContainer>
     </>
    )
}
