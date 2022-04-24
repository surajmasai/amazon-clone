import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// import OutlinedInput from '@mui/material/OutlinedInput';

// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./register.css"
export const Register = () => {

    const [form, setForm] = useState({});

    const handleChange = (e) => {

        let { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })

    }

    const handleregister = () => {
        const payload = {
            username: form.username,
            email: form.email,
            password: form.password,
            mobile: form.mobile
        }
        // console.log(payload)
        fetch("https://surajauthapi.herokuapp.com/register", {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                "Content-type": "application/json"
            }
        }).then((res) => res.json()).then((res) => {
            // console.log(res)
            alert(res.message)
            navigate("/login")
        }).catch(err => {
            console.log(err)
        })

    }


    const navigate = useNavigate()

    return (
        <div>
            <h4 className="heading2">Register</h4>
            <div className="register_cont">

                <div className="register">
                    <input name="username" onChange={handleChange} placeholder="Username" /><br /> <br />
                    <input name="email" onChange={handleChange} placeholder="Email" /><br /> <br />
                    <input name="password" onChange={handleChange} placeholder="Password" /><br /> <br />
                    <input name="mobile" onChange={handleChange} placeholder="Mobile no." /><br /> <br />

                    <div className="register_btn">
                        <Button variant="contained" onClick={handleregister}>Register</Button>
                        <Button variant="contained" onClick={() => navigate("/login")}>Login</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
