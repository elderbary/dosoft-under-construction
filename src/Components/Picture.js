import React from 'react';
import '../styles/picture.css';
import picture from '../images/picture.svg'

const Picture = () => {
    return (
        <div className="div-picture">
        <img src={picture} alt="picture" />
        </div>
    )
}

export default Picture; 