import React from 'react';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import './App.css';
import thunk from "redux-thunk";
import AppRouter from "./AppRouter";
import reducer from "./reducers/index";

const store = createStore(reducer, {balances: {kraken: [], coinbase: []}}, applyMiddleware(thunk));

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <AppRouter/>
            </div>
        </Provider>
    );
}

export default App;
