import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Homepage from './components/Homepage'
import ClientForm from './components/ClientForm'
import InstructorSignIn from './components/InstructorSignIn'
import InstructorSignUp from './components/InstructorSignUp'


const AppContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    max-width: 100%;

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
    }
`;


export default function App(props) {
    return(
        <AppContainer>
            <nav>                
                <h1>Anywhere Fitness</h1>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/clients'>Clients</NavLink>
                <NavLink to='/instructors'>Instructors</NavLink>
            </nav>
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
    )
}
