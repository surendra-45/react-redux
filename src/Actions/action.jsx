export const handleChangeEmail = (event) => {
    return {
        type: "GET_EMIL",
        payload: event
    }
}

export const handleChangePassword = (event) => {
    return {
        type: "GET_PASSWORD",
        payload: event
    }
}


export const userData = (usersData) => {
    return {
        type: "USER_DATA",
        payload: usersData
    }
}