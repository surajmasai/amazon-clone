import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { useDispatch } from 'react-redux';

import { addCart } from "../redux/Cart/action";


export const ProductDetails = () => {

    const { id, type } = useParams();
    const dispatch = useDispatch();

    const [product, setProduct] = useState([]);


    // console.log("type", type)
    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(`http://localhost:3001/products/${id}`);
            setProduct(await response.json());
        }
        getProduct()
        //  fetch(`http://localhost:3001/products/${id}`)
        //     .then(d => d.json())
        //     .then((res) => {
        //         // console.log('res:', res)
        //         setDetails(res)
        //     })
    }, [])



    const addProduct = (product) => {
        dispatch(addCart(product))
    }

    // fetch("http://localhost:3001/cart", {
    //     method: "POST",
    //     body: JSON.stringify(details),
    //     headers: {
    //         "Content-type": "application/json"
    //     }
    // }).then(() => {
    //     console.log(details)
    // }).catch(err => {
    //     console.log(err)
    // })
    // console.log(details)
    return (
        <div>
            <img src={product.img} alt={product.title} />
            <h1>{product.title}</h1>
            <p>{product.descr}</p>
            <button onClick={() => addProduct(product)} className="addtocartbtn">ADD TO CART</button>
            <button>GO TO CART</button>

        </div>
    )
}
