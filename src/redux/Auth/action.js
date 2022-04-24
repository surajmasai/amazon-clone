import { USER_DATA } from "./actionTypes";

const userData = (payload) => ({
    type: USER_DATA,
    payload: payload
})

export { userData }