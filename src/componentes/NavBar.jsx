import React from "react";
import "../App.css"

const NavBar = () => {
    return (
        <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#news">Quienes somos</a></li>
            <li><a href="#contact">Trabajos</a></li>
            <li><a className="active" href="#about">Contacto</a></li>
        </ul>
    )
}

export default NavBar