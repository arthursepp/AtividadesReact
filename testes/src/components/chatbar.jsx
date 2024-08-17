import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Chatbar = () => {

    const checkInput = () => {        
        const message = document.getElementById('chatInput').value
        
            if (!message || message.trim() === '') {
                alert('Digite algo')
            } 
        
            else {
                let messages = []
                messages.push(message)
                document.getElementById('iconCenter').style.display = 'none'
                document.getElementById('chatInput').value = ''
                document.getElementById('chat').style.display = 'block'
                document.getElementById('chat').style.display = 'grid'
                console.log(messages)               
            }
    }

    return (
        <div className="chatbar">
            <input type="text" name="" id="chatInput" placeholder='Olá, como vai você?'/>
            <button type="submit" id='send' onClick={checkInput}>
                <FontAwesomeIcon icon={faArrowUp} id='send' className='send'/>
            </button>
        </div>
    )
}
export default Chatbar