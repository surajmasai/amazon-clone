import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from 'react-redux';


import { addCart } from "../redux/Cart/action";

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { useNavigate } from 'react-router-dom'


export const ProductDetails = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    const navigate = useNavigate()


    const [product, setProduct] = useState([]);


    // console.log("type", type)
    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(`https://surajproductdata.herokuapp.com/products/${id}`);
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



    const auth = useSelector((state) => state.userReducer.isAuth)

    const addProduct = (product) => {

        // console.log(auth)
        if (auth === false) {
            navigate("/login")
        } else {
            dispatch(addCart(product))
        }


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

    const divStyle = {
        display: "flex",
        width: "60%",
        margin: "auto",
        marginTop: "80px",
        padding: "50px",
        boxShadow: "0 0 28px 4px rgba(0, 0, 0, 0.1)"
    }

    const productStyle = {
        width: "65%",
        margin: "0 auto",
        fontSie: "18px",
        marginTop: "30px",
    }


    return (
        <div className="productdetails_main" style={divStyle}>
            <div className="productdetailsimg">
                <img src={product.img} alt={product.title} width="300px" height="400px" />
            </div>
            <div className="productdetails_cont" style={productStyle}>
                <h1>{product.title}</h1>
                <h4>Rs. {product.price}</h4>
                <p>{product.type}</p>
                <p>{product.descr}</p>
                <Stack spacing={2} direction="row">
                    <Button variant="contained" onClick={() => addProduct(product)}>ADD TO CART</Button>
                    <Button variant="contained" onClick={() => navigate("/cart")}>GO TO CART</Button>
                </Stack>
            </div>
        </div>
    )
}
