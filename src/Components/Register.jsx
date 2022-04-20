import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Register = () => {

    const navigate = useNavigate()

    return (
        <div>
            <h1>Register</h1>
            <input type="text" placeholder="Name" /><br /><br />
            <input type="text" placeholder="Email" /><br /><br />
            <input type="text" placeholder="Password" /><br /><br />
            <input type="number" placeholder="Mobile No." /><br /><br />
            <button>Register</button>
            <button onClick={() => navigate("/login")}>login</button>
        </div>
    )
}
