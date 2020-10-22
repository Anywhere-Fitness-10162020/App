// import React from 'react';
import { TEST_ACTION, USER_LOGIN, USER_LOGOUT } from '../actions';

const initialState={
    testKey:"",
    loggedIn:false,
    role:"public"
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