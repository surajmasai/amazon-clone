import React from 'react'
import "./productlist.css"
import { useNavigate } from "react-router-dom";
// import { catData } from "../redux/Product/action";
// import { useSelector, useDispatch } from "react-redux";


export const Productlist = () => {

    const navigate = useNavigate()

    // const dispatch = useDispatch();

    // function filterdata(el) {
    //     const payload = {
    //         category: el
    //     };
    //     dispatch(catData(payload))
    //     navigate("/showProduct")
    // }




    return (
        <div className='productlist-cont'>
            <div onClick={() => navigate(`/showProduct/${'home'}`)}>
                <h1>Home</h1>
                <img src="https://m.media-amazon.com/images/I/91FwdCVfcJL._AC_UL320_.jpg" height="150" width="150" alt="home" />
            </div>
            <div onClick={() => navigate(`/showProduct/${'book'}`)}>
                <h1>Books</h1>
                <img src="https://m.media-amazon.com/images/I/71frknp-CWL._AC_UY218_.jpg" height="150" width="150" alt="book" />
            </div>
            <div onClick={() => navigate(`/showProduct/${'electronics'}`)}>
                <h1>Electronics</h1>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Electronic._SY116_CB431401553_.jpg" alt="electronics" />
            </div>
            <div onClick={() => navigate(`/showProduct/${'fashion'}`)}>
                <h1>Fashion</h1>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fashion._SY116_CB431401553_.jpg" alt="fashion" />
            </div>
        </div>
    )
}
