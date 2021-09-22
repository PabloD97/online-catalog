import React from "react";
import '../css/Navbar.css'
import logo from '../../src/images/logo.png'
import {Container, Navbar} from "react-bootstrap";

const NavBar = () => {

    return (
        <>
            <nav className='colores'>
                <img
                    alt=""
                    src={logo}
                    className="d-inline-block align-top"
                    class='logo'
                />
            </nav>
        </>
    );
}

// <Navbar className='colores' style={{textAlign:'center'}}>
//     <Navbar.Brand href="/" >
//         <img
//             alt=""
//             src={logo}
//             className="d-inline-block align-top"
//             class='logo'
//         />
//     </Navbar.Brand>
// </Navbar>

export default NavBar;