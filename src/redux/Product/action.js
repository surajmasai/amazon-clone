

import {
    STORE_DATA
    // CAT_DATA
} from './actionTypes';

const storeData = (payload) => ({
    type: STORE_DATA,
    payload: payload
})


// const catData = (payload) => ({
//     type: CAT_DATA,
//     payload: payload
// })

export { storeData }

