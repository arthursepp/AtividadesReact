import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'

const container = () => {
    return (
        <div className='container'>
            <FontAwesomeIcon icon={faComments} id='iconCenter' className='icon-center'/>
        </div>
    )
}
export default container