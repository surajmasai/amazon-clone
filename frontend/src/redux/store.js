import { reducer } from "./Product/reducer";

import { handleCart } from "./Cart/reducer";

import { userReducer } from "./Auth/reducer";

import { createStore, combineReducers } from "redux";


const mainReducer = combineReducers({
    reducer,
    handleCart,
    userReducer
})

const store = createStore(mainReducer);


export { store };