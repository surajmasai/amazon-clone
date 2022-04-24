import React, { useEffect } from 'react'
import { Productlist } from './Productlist'
import { useDispatch } from 'react-redux';
import { storeData } from "../redux/Product/action";

export const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        fetch("https://surajproductdata.herokuapp.com/products")
            .then((res) => res.json())
            .then((res) => dispatch(storeData(res)))
            .catch((err) => console.error(err))

    }, [])

    return (
        <div>
            <Productlist />
        </div>
    )
}
