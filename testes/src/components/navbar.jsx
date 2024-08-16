import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

    const handleClick = () => {
        document.getElementById('sidebar').style.display = 'block';
        //document.getElementById('sidebar').style.display = 'flex';
    }

    return (
        <div className="navbar">
            <FontAwesomeIcon icon={faBars} className='bars' id="bars" onClick={handleClick}/>
            <div className="links">
                <a href="#">Sobre</a>
                <a href="#">Contato</a>                
            </div>
        </div>
    );
};

export default Navbar;