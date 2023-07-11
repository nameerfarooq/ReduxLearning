const initialState = [123, 123, 123, 123]


const todoReducer = (state = initialState, actions) => {
    console.log(actions.type, "state action type")
    console.log(actions.payload, "state payload")
    switch (actions.type) {
        case "ADD_TODO": return state = state.push(actions.payload);
        case "DEL_TODO": return state = state.splice(actions.payload, 1);
        case "DEL_ALL": return state = initialState;
        default: return state
    }
}

export default todoReducer