import { ADDITEM, DELITEM, DEL_PRODUCT } from "./actionTypes"

const cart = [];


const handleCart = (state = cart, action) => {

    // console.log(state, "jell")
    const product = action.payload;
    switch (action.type) {

        case ADDITEM:
            //Check if Product is Already Exist;
            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                //increase the quantity;
                return state.map((x) => x.id === product.id ? { ...x, qty: x.qty + 1, final: (x.qty + 1) * x.price } : x);
            } else {
                // console.log(state, action);
                const product = action.payload;

                var result = [...state, { ...product, qty: 1, final: product.price }]

                // console.log(result);
                return result;
            }
            break;

        case DELITEM:
            const exist1 = state.find((x) => x.id === product.id);
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== exist1.id)
            } else {
                return state.map((x) => x.id === product.id ? { ...x, qty: x.qty - 1, final: (x.qty - 1) * x.price } : x);
            }
            break;

        default:
            return state;
            break;
    }
}


export { handleCart };