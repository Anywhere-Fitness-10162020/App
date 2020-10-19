// import React from 'react';
import { TEST_ACTION } from '../actions';

const initialState={
    testKey:""
};
export const reducer = (state = initialState, action) => {
    console.log("reducer received action: ", action);
    switch(action.type){

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