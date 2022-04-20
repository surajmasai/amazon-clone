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

import { useNavigate } from "react-router-dom";

export const Product = () => {

    const [sorting, setSorting] = useState("");

    const { cat } = useParams();

    const navigate = useNavigate()
    // console.log(cat)

    const res = useSelector((state) => state.data);
    // console.log(res)

    console.log(sorting)


    return (
        <div className="product-cont">
            <h4>sort by cost</h4>
            <button onClick={() => setSorting("asc")}>low to high</button>
            <button onClick={() => setSorting("desc")}>high to low</button>
            <h1>Show Products</h1>
            <div className="product-cont1">
                {
                    res.filter((categ) => {
                        return categ.category === cat
                    }).sort((a, b) => {
                        if (sorting === "asc") {
                            return a.costforone - b.costforone
                        }
                        else if (sorting === "desc") {
                            return b.costforone - a.costforone
                        } else {
                            return 0
                        }
                    }).map((data, index) => {
                        return (
                            <>
                                <Box width='300px' key={index}>
                                    <Card>
                                        <CardMedia
                                            component='img'
                                            height='200'
                                            image={data.img}
                                            alt='unsplash image'
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant='h5' component='div'>
                                                {data.title}
                                            </Typography>
                                            <Typography gutterBottom variant='p' component='div'>
                                                {data.price}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size='small' onClick={() => { navigate(`/productDetails/${data.id}`) }}>Buy Now</Button>
                                        </CardActions>
                                    </Card>
                                </Box>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}
