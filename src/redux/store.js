import { reducer } from "./Product/reducer";

import { handleCart } from "./Cart/reducer"

import { createStore, combineReducers } from "redux";


const mainReducer = combineReducers({
    reducer,
    handleCart
})

const store = createStore(mainReducer);


export { store };