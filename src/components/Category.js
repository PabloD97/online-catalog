import React from "react";
import '../css/Category.css'
import {Card, Col} from "react-bootstrap";


const Category = (props) => {

    const {name, image, func} = props

    return (
        <>
            <Col class='category'>
                <Card onClick={func}>
                    <Card.Img variant="top" src={image} class='foto'/>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            aca va una description?
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">{name}</small>
                    </Card.Footer>
                </Card>
            </Col>
        </>
    );
}

export default Category;