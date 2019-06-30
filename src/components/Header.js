import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/dashboard">
            Loja
        </Link>
        <Link className="navbar-brand" to="/compras">
            Minha Compras
        </Link>
       
    </nav>
);
export default Header;  