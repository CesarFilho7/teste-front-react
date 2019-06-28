import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/dashboard">
            <a className="navbar-brand">Loja</a>
        </Link>
        <Link to="/compras">
            <a className="navbar-brand">Minha Compras</a>
        </Link>
       
    </nav>
);
export default Header;  