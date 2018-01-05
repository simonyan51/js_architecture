import { createStore, applyMiddleware } from 'redux';
import reducers from "./../reducers/reducers";
import middlewares from "./../middlewares/middlewares";


const store = createStore(reducers, {}, middlewares);

export default store;