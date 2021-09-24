import React from "react";
import '../css/Navbar.css'
import Category from "./Category";
import {alfajores, masas, postres, tartas, tortas} from "../storage";
import {Row} from "react-bootstrap";
import Footer from "./Footer";
import {useHistory} from "react-router-dom";

const Home = () => {

    const history = useHistory();

    const goToProducts = (products) =>{
        history.push(`/${products}`);
    }

    return (
        <>
            <Row xs={1} md={4} className="g-4" style={ {margin: "auto"}}>
                <Category name='Alfajores' image={alfajores[0].image} func={() => goToProducts('alfajores')}/>
                <Category name='Tortas' image={tortas[0]?.image} func={() => goToProducts('tortas')}/>
                <Category name='Tartas' image={tartas[0]?.image} func={() => goToProducts('tartas')}/>
                <Category name='Postres' image={postres[0]?.image} func={() => goToProducts('postres')}/>
                <Category name='Masas' image={masas[0]?.image} func={() => goToProducts('masas')}/>
            </Row>
            <Footer/>
        </>
    )
}

export default Home;