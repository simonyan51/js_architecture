import userReducer from "./userReducer";
import todoReducer from "./todoReducer";
import combineReducers from "redux/es/combineReducers";

const reducers = combineReducers({
    user: userReducer,
    todo: todoReducer
});

export default reducers;