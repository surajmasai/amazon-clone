import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import OutlinedInput from '@mui/material/OutlinedInput';

import { userData } from "../redux/Auth/action"

import { useDispatch, useSelector } from "react-redux"

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const Login = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState(null);

    const dispatch = useDispatch()

    const handleChange = (e) => {
        let { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }

    const handleLogin = () => {

        // console.log(form)
        fetch("https://surajauthapi.herokuapp.com/login", {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((res) => {
                // console.log(res)
                dispatch(userData(res))
                // localStorage.setItem("userdata", JSON.stringify(res));
                navigate("/")
            });
    }

    // useEffect(() => {
    //     const data = JSON.parse(localStorage.getItem("userdata"));
    //     dispatch(userData(data))
    //     // console.log(data)
    // }, [])

    const res = useSelector((state) => state.userReducer.isAuth)

    // console.log(res)

    const handleLogout = () => {
        window.location.reload()
    }

    return (
        <div>
            <h1>{res === true ? "Logout" : "Login"}</h1>

            {res === true ? (<Button variant="contained" onClick={handleLogout}>LOGOUT</Button>) : (

                <div>
                    <OutlinedInput name="email" onChange={handleChange} placeholder="Email" /><br /> <br />

                    <OutlinedInput name="password" onChange={handleChange} placeholder="password" /><br /> <br />

                    <Stack spacing={2} direction="row">
                        <Button variant="contained" onClick={handleLogin}>Login</Button>
                        <Button variant="contained" onClick={() => navigate("/register")}>Register</Button>
                    </Stack>
                </div>

            )}

        </div>
    )
}
