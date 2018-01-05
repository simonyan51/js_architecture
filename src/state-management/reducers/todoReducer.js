import { GET_TODOS_BY_USER, SET_TODOS } from "./../../global/constants/string.constants";

const todoReducer = (state = {
    todos: {
        selected: null,
        list: []
    }
}, action) => {
    switch(action.type) {
        case SET_TODOS:
            return {...state, todos: {selected: todos.selected, [selected]: [...action.payload]}};
        case GET_TODOS_BY_USER:
            return {...state, todos: {selected: action.payload}};
        default:
            return state;
    }
};

export default todoReducer;