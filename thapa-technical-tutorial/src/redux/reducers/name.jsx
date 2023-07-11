const initialState = 'muhammad'

const changeTheName = (state = initialState, action) => {
    switch (action.type) {
        case "FATHER": return state = action.payload;
        case "SON": return state = action.payload;
        default: return state
    }
}

export default changeTheName