import React from "react";
import Product from "./Product";
import {Row} from "react-bootstrap";

const Products = (props) =>{

    const {products} = props;

    const viewProducts = () =>{
        return(
            <>
                <Row xs={1} md={4} className="g-4" style={ {margin: "auto"}}>
                {products?.map( (product, i) => (
                    <Product key={i} name={product.name} image={product.image} price={product.price} description={product.description} />
                ))}
                </Row>
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

