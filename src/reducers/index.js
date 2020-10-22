// import React from 'react';
import { TEST_ACTION, USER_LOGIN, USER_LOGOUT, NEW_ONBOARD, DISMISS_ONBOARD } from '../actions';

const initialState={
    testKey:"",
    loggedIn:false,
    role:"public",
    showOnboard:false,
};
export const reducer = (state = initialState, action) => {
    console.log("reducer received action: ", action);
    switch(action.type){

        case USER_LOGIN:
            const userLoginState = {
                ...state,
                loggedIn:action.payload.loggedIn,
                role:action.payload.role
            }
            console.log("reducer: user logged in with role: ", action.payload.role);
            return userLoginState;

        case USER_LOGOUT:
            const userLogoutState={
                ...state,
                loggedIn:false,
                role:"public"
            }
            return userLogoutState;

        case NEW_ONBOARD:
            const newOnboardState={
                ...state,
                showOnboard:true
            }
            return newOnboardState;

        case DISMISS_ONBOARD:
            const dismissOnboardState={
                ...state,
                showOnboard:false
            }
        return dismissOnboardState;

        case TEST_ACTION:
                const testState = {
                    ...state,
                    testKey:action.payload
                }
                console.log("reducer: test action completed: ", action.payload);
                return testState;
        default:
                console.log("reducer defaulted");
                return state;
    }
};