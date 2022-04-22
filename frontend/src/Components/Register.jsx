import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import OutlinedInput from '@mui/material/OutlinedInput';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
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
        fetch("http://localhost:3002/register", {
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
            <h1>Register</h1>
            <OutlinedInput name="username" onChange={handleChange} placeholder="Username" /><br /> <br />
            <OutlinedInput name="email" onChange={handleChange} placeholder="Email" /><br /> <br />
            <OutlinedInput name="password" onChange={handleChange} placeholder="Password" /><br /> <br />
            <OutlinedInput name="mobile" onChange={handleChange} placeholder="Mobile no." /><br /> <br />

            <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={handleregister}>Register</Button>
                <Button variant="contained" onClick={() => navigate("/login")}>Login</Button>
            </Stack>

        </div>
    )
}
