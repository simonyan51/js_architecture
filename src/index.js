import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App/App";
import store from "./state-management/store/store";

const root = document.getElementById('root');
const main = (
    <Provider store={{...store}}>
        <App />
    </Provider>
);
ReactDOM.render(main, root);