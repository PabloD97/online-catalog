import React from "react";
import '../css/Navbar.css'
import Category from "./Category";
import {alfajores, masas, postres, tartas, tortas} from "../storage";
import {Row} from "react-bootstrap";

const Home = () => {

    return (
        <>
            <Row xs={1} md={4} className="g-4" style={ {margin: "auto"}}>
                <Category name='Alfajores' image={alfajores[0].image}/>
                <Category name='Tortas' image={tortas[0]?.image}/>
                <Category name='Tartas' image={tartas[0]?.image}/>
                <Category name='Postres' image={postres[0]?.image}/>
                <Category name='Masas' image={masas[0]?.image}/>
            </Row>
        </>
    )
}

export default Home;