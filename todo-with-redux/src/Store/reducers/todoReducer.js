const initialState = []


const todoReducer = (state = initialState, actions) => {
    console.log(actions.type, "<= state action type")
    console.log(actions.payload, "<= state payload")
    console.log(state, "<= state is")
    switch (actions.type) {
        case "ADD_TODO": return [...state, actions.payload];
        case "DEL_TODO": return state.filter((todo, Index) => Index+1 !== actions.payload);
        case "DEL_ALL": return state = initialState;
        default: return state
    }

}

export default todoReducer