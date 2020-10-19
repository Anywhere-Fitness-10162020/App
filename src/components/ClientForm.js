import React, {useState} from 'react';
import styled from 'styled-components';

const ClientForm = (props) => {
    
    const initialState={
        username:"",
        password:""
    };
    const [signupVals, setSignupVals] = useState(initialState);
    const handleChange = (e) => {
        setSignupVals(
            {...signupVals, [e.target.name]:e.target.value}
        )
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(signupVals);
    }
    return(
        <div>
            <h2>Client Form</h2>
            <h3>Sign up:</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" onChange={handleChange}/>
                <input type="password" name="password" placeholder="password" onChange={handleChange}/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default ClientForm;
