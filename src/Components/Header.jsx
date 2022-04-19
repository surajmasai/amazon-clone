import React from 'react'
import { Link } from 'react-router-dom';
import "./header.css"

export const Header = () => {
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
                                <form id="nav-search-bar-form">
                                    <div class="nav-left">
                                        <Link to="">ALL</Link>
                                    </div>
                                    <div class="nav-fill">
                                        <input type="text" />
                                    </div>
                                    <div class="nav-right">
                                        <button type="submit">Search</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="nav-right">
                            <div id="nav-tools">
                                <Link to="/">Account</Link>
                                <Link to="/">Log in</Link>
                                <Link to="/">Cart(0)</Link>
                            </div>
                        </div>
                    </div>
                    <div id="nav-main">
                        <Link to="">Home</Link>
                        <Link to="">Electronics</Link>
                        <Link to="">Book</Link>
                        <Link to="">Fashion</Link>
                    </div>
                </div>
            </header>
        </div>
    )
}
