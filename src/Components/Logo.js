import React from 'react';
import '../styles/logo.css';
import logo from '../images/logo.svg'

const Logo = () => {
    return (
        <div className="div-logo">
        <img src={logo} alt="dosoft-logo" />
        </div>
    )
}

export default Logo; 