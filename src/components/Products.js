import React from "react";
import Product from "./Product";

const Products = (props) =>{

    const {products} = props;

    const viewProducts = () =>{
        return(
            <>
                {products?.map( (product) => (
                    <Product name={product.name} image={product.image} price={product.price} description={product.description} />
                ))}
            </>
        )
    }

    return (
        <>
        {console.log(products)}
            {viewProducts()}
        </>
    )
}

export default Products;

