import { reducer } from "./Product/reducer";

import { createStore } from "redux";

const store = createStore(reducer);

export { store };