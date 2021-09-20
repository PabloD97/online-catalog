import React from "react";

const Products = (props) =>{

    const {product} = props;

    return (
        <>
        {console.log(product)}
            <h1>{product.nombre}</h1>
        </>
    )
}

export default Products;

