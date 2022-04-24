import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import "./cart.css";

import { Button } from '@mui/material';

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

    // console.log(typeof fprice)


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
            <h1 className="heading">Cart</h1>

            {
                cartdata.length === 0 ? (<h1>Cart is empty</h1>) : (
                    cartdata.map((e, i) => {
                        return (
                            <div key={i}>
                                <div className="cart_cont">
                                    <div className="cart_img">
                                        <img src={e.img} alt={e.title} />
                                    </div>
                                    <div className="cart_details">
                                        <h3>{e.title}</h3>
                                        <Button variant="outlined" onClick={() => increment(e)}>+</Button>
                                        <p>{e.qty}</p>
                                        <Button variant="outlined" onClick={() => deleteproduct(e)}>-</Button>
                                        <p>MRP. - ₹{e.price}</p>
                                        <p>Total Price - ₹{e.final}</p>
                                        <Button variant="outlined">Delete</Button>
                                    </div>

                                </div>
                                {/* <hr></hr> */}

                            </div>
                        )

                    })
                )

            }
            {cartdata.length === 0 ? "" : <h2 className="right">Final Amount: ₹{fprice}</h2>}


        </div>
    )
}
