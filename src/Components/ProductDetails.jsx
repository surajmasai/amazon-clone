import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


export const ProductDetails = () => {

    const { id } = useParams();

    const [details, setDetails] = useState([])
    // console.log("id", id)
    useEffect(() => {
        fetch(`http://localhost:3001/products/${id}`)
            .then(d => d.json())
            .then((res) => {
                // console.log('res:', res)
                setDetails(res)
            })
    }, [id])



    function addtocart() {

        fetch("http://localhost:3001/cart", {
            method: "POST",
            body: JSON.stringify(details),
            headers: {
                "Content-type": "application/json"
            }
        }).then(() => {
            console.log(details)
        }).catch(err => {
            console.log(err)
        })

    }

    // console.log(details)
    return (
        <div>
            <img src={details.img} alt={details.title} />
            <h1>{details.title}</h1>
            <p>{details.descr}</p>
            <button onClick={addtocart} className="addtocartbtn">ADD TO CART</button>
        </div>
    )
}
