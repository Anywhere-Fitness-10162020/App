import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Homepage from './components/Homepage'
import ClientForm from './components/ClientForm'
import InstructorSignIn from './components/InstructorSignIn'
import InstructorSignUp from './components/InstructorSignUp'


const NavContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    color: #2E2E3A;
    
    background-color: #F34213;

    h1 {
        font-size: 5rem;
        margin: 2%;
    }

    nav {
        padding: 2%;
        width: 100%;
    }

    a {
        margin: 2%;
        font-size: 1.7rem;
        text-decoration: none;
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
            </nav>
        
        </NavContainer>
    
        <AppContainer>
            <Switch>
                <Route path='/instructors/signup'>
                    <InstructorSignUp />
                </Route>
                <Route path='/instructors'>
                    <InstructorSignIn />
                </Route>
                <Route path='/clients'>
                    <ClientForm />
                </Route>
                <Route path='/'>
                    <Homepage />
                </Route>
            </Switch>
        
        </AppContainer>
     </>
    )
}
