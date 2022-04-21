import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import "./header.css"

import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux';
// import { catData } from "../redux/Product/action";
import { searchData } from "../redux/Product/action";

export const Header = () => {

    const navigate = useNavigate();


    const [search, setSearch] = useState("")

    // const [searchres, setSearchres] = useState("");

    // const res = useSelector((state) => state.data);

    // useEffect(() => {
    //     var result = res.filter((product) => {
    //         if (search === "") {
    //             return product;
    //         } else {
    //             return product.title.toLowerCase().includes(search.toLowerCase()) || product.type.toLowerCase().includes(search.toLocaleLowerCase());
    //         }

    //     })
    //     console.log(result)
    //     // setSearchres(result)
    // }, [search])

    // console.log(searchres)

    const dispatch = useDispatch()


    useEffect(() => {
        if (search.length > 0) {
            const payload = {
                title: search
            };
            dispatch(searchData(payload));
        }
    }, [search]);

    // console.log(search)


    return (
        <div>
            <header id="container">
                <div id="nav-bar">
                    <div id="nav-belt">
                        <div class="nav-left">
                            <div id="nav-logo">
                                <Link to="/"><img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" height="30" width="90" alt="logo" /></Link>
                            </div>
                        </div>
                        <div class="nav-fill">
                            <div id="nav-search">
                                <div id="nav-search-bar-form">
                                    <div class="nav-left">
                                        <Link to="">ALL</Link>
                                    </div>
                                    <div class="nav-fill">
                                        <input type="text" onChange={(e) => setSearch(e.target.value)} />
                                    </div>
                                    <div class="nav-right">
                                        <button onClick={() => navigate('/search')}>Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="nav-right">
                            <div id="nav-tools">
                                <Link to="/">Account</Link>
                                <Link to="/login">Log in</Link>
                                <Link to="/cart">Cart(0)</Link>
                            </div>
                        </div>
                    </div>
                    <div id="nav-main">
                        <span onClick={() => navigate(`/showProduct/${'home'}/${'freashner'}/${'cleaning'}/${'camera'}`)}>Home</span>
                        <span onClick={() => navigate(`/showProduct/${'electronics'}/${'mobile'}/${'harddisk'}/${'tv'}`)}>Electronics</span>
                        <span onClick={() => navigate(`/showProduct/${'book'}/${'motivation'}/${'stories'}/${'poem'}`)}>Book</span>
                        <span onClick={() => navigate(`/showProduct/${'fashion'}/${'shirt'}/${'bag'}/${'scarf'}`)}>Fashion</span>
                    </div>
                </div>
            </header>
        </div>
    )
}
