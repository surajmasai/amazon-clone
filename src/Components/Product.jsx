import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
    Box,
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    CardMedia
} from '@mui/material';
import "./product.css"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


import { useNavigate } from "react-router-dom";

export const Product = () => {

    const [sorting, setSorting] = useState("");
    const [categorytype, setCategoryType] = useState("")
    // const [] = useState("")
    // console.log(categorytype)
    const { cat, type1, type2, type3 } = useParams();

    const navigate = useNavigate()

    const res = useSelector((state) => state.reducer.data);
    // console.log(res)

    return (
        <div className="product-cont">
            <h4 className="sortbycost">sort by cost</h4>
            <Stack spacing={2} direction="row">
                <Button variant="outlined" onClick={() => setSorting("asc")}>Low To High</Button>
                <Button variant="outlined" onClick={() => setSorting("desc")}>High To Low</Button>
            </Stack>
            <h4>filter by category</h4>
            <Stack spacing={2} direction="row">
                <Button variant="outlined" onClick={() => setCategoryType("")}>All</Button>
                <Button variant="outlined" onClick={() => setCategoryType(type1)}>{type1}</Button>
                <Button variant="outlined" onClick={() => setCategoryType(type2)}>{type2}</Button>
                <Button variant="outlined" onClick={() => setCategoryType(type3)}>{type3}</Button>

            </Stack>
            <h1>Show Products</h1>
            <div className="product-cont1">
                {
                    res.filter((categ) => {
                        return categ.category === cat
                    }).filter((types) => {
                        if (categorytype === "") {
                            return res
                        } else {
                            return types.type === categorytype
                        }
                    })
                        .sort((a, b) => {
                            if (sorting === "asc") {
                                return a.price - b.price
                            } else if (sorting === "desc") {
                                return b.price - a.price
                            } else {
                                return 0;
                            }
                        })
                        .map((data, index) => {
                            return (
                                <div key={index}>
                                    <Box width='300px' >
                                        <Card>
                                            <CardMedia
                                                component='img'
                                                height='280'
                                                image={data.img}
                                                alt='unsplash image'
                                                className="Prodimage"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant='h5' component='div'>
                                                    {data.title}
                                                </Typography>
                                                <Typography gutterBottom variant='p' component='div'>
                                                    Rs. {data.price}
                                                </Typography>
                                            </CardContent>
                                            <CardActions className="btn">
                                                <Button variant="contained" onClick={() => { navigate(`/productDetails/${data.id}/${data.type}`) }}>Buy Now</Button>
                                            </CardActions>
                                        </Card>
                                    </Box>
                                </div>
                            )
                        })
                }
            </div>
            <Stack spacing={2}>
                <Pagination count={5} variant="outlined" shape="rounded" />
            </Stack>
        </div>
    )
}
