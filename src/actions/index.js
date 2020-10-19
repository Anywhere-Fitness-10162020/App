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
            userRole:role,
        }
    }
}

export const USER_LOGOUT='USER_LOGOUT';

export const userLogout=()=>{
    return{
        type:USER_LOGOUT,
        payload:{
            loggedIn:false,
            userRole:"public",
        }
    }
}