import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import '../css/Navbar.css'
import logo from '../../src/images/logo.png'

const Navbar = () => {

    return (
        <>
             <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" class = "colores">
        <Toolbar>
            <img className='logo' src={logo}/>

            <div className='titulo'>Catalogo</div>
        </Toolbar>
      </AppBar>
    </Box>
        </>
    );
}

export default Navbar;