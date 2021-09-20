import React from "react";
import '../css/Category.css'
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";


const Category = (props) => {

    const {name, image} = props

    return (
        <>
            <Card sx={{ maxWidth: 345 }} class='category'>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        alt={name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
}

export default Category;