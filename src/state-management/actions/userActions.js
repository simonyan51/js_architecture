import {ADD_USER, SET_USER} from "../../global/constants/string.constants";

export function setUser(user) {
    return {
        type: SET_USER,
        payload: user
    }
}

export function addUser(user) {
    return {
        type: ADD_USER,
        payload: user
    }
}

