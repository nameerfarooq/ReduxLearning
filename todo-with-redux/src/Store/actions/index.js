export const AddTodo = (todo) => {
    return {
        type: "ADD_TODO",
        payload: todo
    }
}

export const DelTodo = (todo_index) => {
    return {
        type: "DEL_TODO",
        payload: todo_index
    }
}

export const DelAll = () => {
    return {
        type: "DEL_ALL",
    }
}