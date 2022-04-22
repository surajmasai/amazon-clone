import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import "./cart.css"
import { useDispatch } from 'react-redux';

import { delCart, addCart } from '../redux/Cart/action';


export const Cart = () => {

    const dispatch = useDispatch();

    const [fprice, setFprice] = useState(null)

    const cartdata = useSelector((state) => state.handleCart);


    useEffect(() => {

        const sum = cartdata.reduce((accumulator, object) => {
            return accumulator + Number(object.final)
        }, 0);
        setFprice(sum)
    }, [cartdata])

    console.log(typeof fprice)


    // console.log(cartdata);
    const deleteproduct = (product) => {
        // console.log(e + 1)
        dispatch(delCart(product))
    }

    const increment = (product) => {
        dispatch(addCart(product))
    }





    return (
        <div>
            <h1>Cart</h1>

            {

                // { cart.qty } X Rs.{cart.price} = {cart.qty * cart.price}
                cartdata.map((e) => {
                    return (
                        <div>
                            <div className="cart_cont">
                                <img src={e.img} alt={e.title} />
                                <h3>{e.title}</h3>
                                <button onClick={() => increment(e)}>+</button>
                                <p>{e.qty}</p>
                                <button onClick={() => deleteproduct(e)}>-</button>
                                <span>
                                    <p>Rs.</p>
                                    <p>₹{e.price}</p>
                                </span>
                                <span>
                                    <p>total Price</p>
                                    <p> ₹{e.final}</p>
                                </span>

                                <button>delete</button>
                            </div>
                            <hr></hr>
                        </div>
                    )
                })

            }

            <h2>Final Amount{fprice}</h2>


        </div>
    )
}
