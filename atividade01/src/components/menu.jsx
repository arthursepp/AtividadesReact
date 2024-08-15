import React from 'react'
import Logo from './logo.jsx'
const Menu = () => {
    return (
        <div className="menu">
            <Logo />

            <div className="search">
                <input type="text" name="" id="" placeholder='Pesquisar' />
            </div>

            <div className="links">
                <a href="#">Home</a>
                <a href="#">Sobre</a>
                <a href="#">Contato</a> 
            </div>
        </div>
    )
}

export default Menu
