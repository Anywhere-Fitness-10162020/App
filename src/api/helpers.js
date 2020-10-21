
export const saveToken = (token) => {
    window.localStorage.setItem('token',token);
}

export const clearStorage = () => {
    window.localStorage.clear();
}