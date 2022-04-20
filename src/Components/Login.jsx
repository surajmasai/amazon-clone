import React from 'react'
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="Email" /><br /> <br />
            <input type="text" placeholder="Password" /><br />  <br />
            <button>Login</button>
            <button onClick={() => navigate("/register")}>Register</button>

        </div>
    )
}
