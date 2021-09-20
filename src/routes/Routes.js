import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "../components/Home.js"
import Products from "../components/Products.js"
import { alfajores, masas, tartas, postres } from "../storage/index.js";

const Routes = () => {

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/inicio" component= {Home}/>
                    <Route path="/alfajores" > 
                        <Products product = {alfajores}/> 
                    </Route>
                    <Route path="/postres"> 
                        <Products product = {postres}/> 
                    </Route>
                    
                    <Route path="/tartas"> 
                        <Products product = {tartas}/> 
                    </Route>
                    <Route path="/masas"> 
                        <Products product = {masas}/> 
                    </Route>
                    <Route path="/" component= {Home}/>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Routes;