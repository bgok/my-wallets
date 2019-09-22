import React from 'react';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import './App.css';
import { createLogger } from "redux-logger/src";
import thunk from "redux-thunk";
import AppRouter from "./AppRouter";
import reducer from "./reducers/index";

const logger = createLogger()
const store = createStore(reducer, {}, applyMiddleware(thunk, logger));

function App() {
    return (
        <Provider store={store}>
            <div className="App" style={{color: "lightgray"}}>
                <AppRouter/>
            </div>
        </Provider>
    );
}

export default App;
