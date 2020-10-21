import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Homepage from './components/Homepage'
import ClientSignIn from './components/ClientSignIn'
import ClientSignUp from './components/ClientSignUp'
import InstructorSignIn from './components/InstructorSignIn'
import InstructorSignUp from './components/InstructorSignUp'
import ClientHome from './components/ClientHome'
import InstructorHome from './components/InstructorHome'
import InstructorConfirmation from './components/InstructorConfirmation'
import ClassesPublic from './components/ClassesPublic'
import LogoutButton from './components/LogoutButton'
import InstructorSchedule from './components/InstructorSchedule'
import PrivateRoute from './api/PrivateRoute'
import {connect} from 'react-redux'
 

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
 
  
const App = (props) => {
    const {loggedIn, role} = props;
    return(
    <>
        <NavContainer>
            <nav>                
                <h1>Anywhere Fitness</h1>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/clients'>Clients</NavLink>
                <NavLink to='/instructors'>Instructors</NavLink>
                {/* <NavLink to='/public'>Classes Available</NavLink> */}
                {loggedIn ? <LogoutButton /> : null }
            </nav>
            <p className="testing">User: {role}, {loggedIn ? "is logged in" : "is NOT logged in"}</p>
            {/* <nav className="testing">
                <NavLink to='/instructors/home'>View: Instructor</NavLink>
                <NavLink to='/clients/home'>View: Client</NavLink>
            </nav> */}
        </NavContainer>
        <AppContainer>
            <Switch>

                {/* Login-only sections */}
                <PrivateRoute exact path='/instructors/home' component={InstructorHome} />
                <PrivateRoute exact path='/clients/home' component={ClientHome} />

                {/* Public sections */}
                <Route path='/instructors/confirmation'>
                    <InstructorConfirmation />
                </Route>

                <Route path='/instructors/signup'>
                    <InstructorSignUp />
                    {/* <InstructorSchedule /> */}
                </Route>

                <Route path='/clients/signup'>
                    <ClientSignUp />
                </Route>

                <Route path='/instructors'>
                    <InstructorSignIn />
                </Route>

                <Route path='/clients'>
                    <ClientSignIn />
                </Route>

                {/* <Route path='/public'>
                    <ClassesPublic />
                </Route> */}

                <Route path='/'>
                    <Homepage />
                </Route>

            </Switch>
        
        </AppContainer>
    </>
)
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        role: state.role
    }
}

export default connect (mapStateToProps,null)(App)