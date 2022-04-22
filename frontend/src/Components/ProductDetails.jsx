import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { useDispatch } from 'react-redux';


import { addCart } from "../redux/Cart/action";

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { useNavigate } from 'react-router-dom'


export const ProductDetails = () => {

    const { id, type } = useParams();
    const dispatch = useDispatch();

    const navigate = useNavigate()


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
            <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={() => addProduct(product)}>ADD TO CART</Button>
                <Button variant="contained" onClick={() => navigate("/cart")}>GO TO CART</Button>
            </Stack>
            {/* <button onClick={() => addProduct(product)} className="addtocartbtn">ADD TO CART</button>
            <button>GO TO CART</button> */}

        </div>
    )
}
