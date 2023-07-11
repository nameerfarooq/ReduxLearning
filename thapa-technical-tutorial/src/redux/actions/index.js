export const incNumber = (num) => {
    return {
        type: "INCREMENT",
        payload: num
    }
}
export const decNumber = (num) => {
    return {
        type: "DECREMENT",
        payload: num
    }
}

export const mulNumber = (num) => {
    return {
        type: 'MULTIPLY',
        payload: num
    }
}
export const DivNumber = (num) => {
    return {
        type: "DIVIDE",
        payload: num
    }
}

export const changeNameToFather = (new_name) => {
    return {
        type: "FATHER",
        payload: new_name
    }
}

export const changeNameToSon = (new_name) => {
    return {
        type: "SON",
        payload: new_name
    }
}