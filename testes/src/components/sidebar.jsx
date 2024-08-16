import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const sidebar = () => {

    const handleClick = () => {
        document.getElementById('sidebar').style.display = 'none';
    }

    return (
        <div className="sidebar" id='sidebar'>

            <div className="sidebar-header">
                <span>Seus chats:</span>
                <FontAwesomeIcon icon={faTimes} className='times' id='times' onClick={handleClick} />
            </div>

            <hr />

            <div className="chats"></div>
        </div>
    )
}

export default sidebar
