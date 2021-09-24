import React from "react";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";

const Product = (props) => {

    const {name, image, price, description} = props;

    return(
        <>
            <Card sx={{ maxWidth: 345 , marginLeft:'2%'}}>
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
                        <Typography variant="body2" color="text.secondary">
                            {description} {price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}

export default Product;