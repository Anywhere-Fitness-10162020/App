// import React from 'react';
import { TEST_ACTION, USER_LOGIN, USER_LOGOUT } from '../actions';

const initialState={
    testKey:"",
    loggedIn:false,
    userRole:"public"
};
export const reducer = (state = initialState, action) => {
    console.log("reducer received action: ", action);
    switch(action.type){

        case USER_LOGIN:
            const userLoginState = {
                ...state,
                loggedIn:action.payload.loggedIn,
                userRole:action.payload.userRole
            }
            return userLoginState;

        case USER_LOGOUT:
            const userLogoutState={
                ...state,
                loggedIn:false,
                userRole:"public"
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