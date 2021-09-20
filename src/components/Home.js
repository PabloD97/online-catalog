import React from "react";
import '../css/Navbar.css'
import Category from "./Category";
import {alfajores, masas, postres, tartas, tortas} from "../storage";

const Home = () => {

    return(
        <>
            <Category name='Alfajores' image={alfajores[0].image}/>
            <Category name='Tortas' image={tortas[0]?.image}/>
            <Category name='Tartas' image={tartas[0]?.image}/>
            <Category name='Postres' image={postres[0]?.image}/>
            <Category name='Masas' image={masas[0]?.image}/>

        </>
    )
}

export default Home;