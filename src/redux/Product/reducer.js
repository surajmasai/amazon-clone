import {
    STORE_DATA,
    // CAT_DATA
} from "./actionTypes";


const initState = {
    data: []
}


const reducer = (state = initState, action) => {
    switch (action.type) {
        case STORE_DATA:
            return { ...state, data: action.payload }

        // case CAT_DATA:
        //     return { data: state.data.filter((el) => el.category === action.payload.category) }

        default:
            return state;
    }
}

export { reducer }