import {
    STORE_DATA,
    SEARCH_DATA
} from "./actionTypes";


const initState = {
    data: [],
    search: []
}




const reducer = (state = initState, action) => {
    switch (action.type) {
        case STORE_DATA:
            return { ...state, data: action.payload }

        case SEARCH_DATA:
            const newState = { ...state, search: state.data && state.data.filter((el) => el.title.toLowerCase().includes(action.payload.title.toLowerCase())) };
            // console.log(newState);
            return newState;
        default:
            return state;
    }
}

export { reducer }