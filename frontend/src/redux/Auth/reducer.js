import { USER_DATA } from "./actionTypes";

const initState = {
    user: [],
    isAuth: false
}


const userReducer = (state = initState, action) => {

    switch (action.type) {
        case USER_DATA:
            return { ...state, user: action.payload, isAuth: true }
        default:
            return state
    }
}

export { userReducer }