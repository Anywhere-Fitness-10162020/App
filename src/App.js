import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Homepage from './components/Homepage'
import ClientForm from './components/ClientForm'
import Instructors from './components/Instructors'
import InstructorForm from './components/InstructorForm'


const AppContainer = styled.div`
    width: 100%;
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
                <Route path='/instructors'>
                    <Instructors />
                    <InstructorForm />
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
