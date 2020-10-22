export const TEST_ACTION='TEST_ACTION';

export const testAction=(text)=>{
    console.log("actions received: ", text);
    return{
        type:TEST_ACTION,
        payload:text
    }
}

export const USER_LOGIN='USER_LOGIN';

export const userLogin=(role)=>{
    return{
        type:USER_LOGIN,
        payload:{
            loggedIn:true,
            role:role,
        }
    }
}

export const USER_LOGOUT='USER_LOGOUT';

export const userLogout=()=>{
    return{
        type:USER_LOGOUT,
        payload:{
            loggedIn:false,
            role:"public",
        }
    }
}

export const NEW_ONBOARD='NEW_ONBOARD';

export const newOnboard = () => {
    return {
        type:NEW_ONBOARD
    }
}

export const DISMISS_ONBOARD='DISMISS_ONBOARD';

export const dismissOnboard=()=>{
    return{
        type:DISMISS_ONBOARD
    }
}