import { ADD_USER, SET_USER } from "./../../global/constants/string.constants";

const userReducer = (state = {
    currentUser: {},
    users: []
}, action) => {
    switch(action.type) {
        case SET_USER:
            return {...state, currentUser: action.payload};
        case ADD_USER:
            return {...state, users: [...users, action.payload]};
        default:
            return state;
    }
};

export default userReducer;