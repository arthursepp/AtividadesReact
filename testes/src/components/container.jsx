import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'

const container = () => {
    return (
        <div className='container'>
            <FontAwesomeIcon icon={faComments} id='iconCenter' className='icon-center'/>

            <div className="chat" id='chat'>
                <div className="right user-message">
                    <h2>texto</h2>
                </div>

                <div className="left response">
                    <h2>Texto2</h2>
                </div>
            </div>

        </div>
    )
}
export default container