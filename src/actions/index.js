export const TEST_ACTION='TEST_ACTION';

export const testAction=(text)=>{
    console.log("actions: ", text);
    return{
        type:TEST_ACTION,
        payload:text
    }
}