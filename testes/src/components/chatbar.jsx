import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Chatbar = () => {
    return (
        <div className="chatbar">
            <input type="text" name="" id="" placeholder='Olá, como vai você?'/>
            <button type="submit">
                <FontAwesomeIcon icon={faArrowUp} id='send' className='send'/>
            </button>
        </div>
    )
}
export default Chatbar