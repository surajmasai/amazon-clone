import React from 'react'
import {
    Box,
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    CardMedia
} from '@mui/material';
import { useSelector } from 'react-redux';

import { useNavigate } from "react-router-dom";



export const Search = () => {

    const navigate = useNavigate()

    const data = useSelector((state) => state.search);
    // console.log(data)
    return (
        <div>
            <h1>Search</h1>

            {

                data.map((data, index) => {
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
    )
}
