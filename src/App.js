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
import LogoutButton from './components/LogoutButton'
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
    button{
        padding: 1%;
        font-weight: 700;
        background-color:white;
        font-family:sans-serif;
        font-size:1.7rem;
        border:none;
        color:#F34213;
        margin-left:1rem;

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
                {loggedIn ? <NavLink to='/clients/home'>Clients</NavLink> : <NavLink to='/clients'>Clients</NavLink>}
                {loggedIn && role === "instructor" ? <NavLink to='/instructors/home'>Instructors</NavLink> : <NavLink to='/instructors'>Instructors</NavLink>}
                {loggedIn ? <LogoutButton /> : null }
            </nav>
            {/* <p className="testing">User: {role}, {loggedIn ? "is logged in" : "is NOT logged in"}</p> */}
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