import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "../components/Home.js"
import Products from "../components/Products.js"
import {alfajores, masas, tartas, postres, tortas} from "../storage/index.js";

const Routes = () => {

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/inicio" component= {Home}/>
                    <Route path="/alfajores" component={() => (<Products products={alfajores}/>) }/>
                    <Route path="/postres" component={() => (<Products products={postres}/>) }/>
                    <Route path="/tartas" component={() => (<Products products={tartas}/>) }/>
                    <Route path="/masas" component={() => (<Products products={masas}/>) }/>
                    <Route path="/tortas" component={() => (<Products products={tortas}/>) }/>
                    <Route path="/" component= {Home}/>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Routes;