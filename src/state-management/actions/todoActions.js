import {GET_TODOS_BY_USER, SET_TODOS} from "../../global/constants/string.constants";

export function setTodos(todos) {
    return {
        type: SET_TODOS,
        payload: todos
    }
}

export function getTodosByUser(id) {
    return {
        type: GET_TODOS_BY_USER,
        payload: id
    }
}

