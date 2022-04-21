

import { STORE_DATA, SEARCH_DATA } from './actionTypes';

const storeData = (payload) => ({
    type: STORE_DATA,
    payload: payload
})


const searchData = (payload) => ({
    type: SEARCH_DATA,
    payload: payload
})

export { storeData, searchData }

