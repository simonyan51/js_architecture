import applyMiddleware from "redux/es/applyMiddleware";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger"

const middlewares = applyMiddleware(thunk, createLogger());

export default middlewares;