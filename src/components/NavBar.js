import React from "react";
import '../css/Navbar.css'
import logo from '../../src/images/logo.png'

const NavBar = () => {

    return (
        <>
            <nav >
                <div className='colores'>
                    <a href='/inicio'>
                        <img
                            alt='logo'
                            src={logo}
                            className="d-inline-block align-top logo"
                        />
                    </a>
                </div>
            </nav>
        </>
    );
}

export default NavBar;