import React from 'react'

const Formulario = () => {
    return (
        <div className="content">
            <div className='form'>
                <h1>Formulário</h1>

                <div className="input-field">

                    <span>Email:</span>
                    <br />
                    <input type="email" name="" id="" placeholder='arthursouzasepp@gmail.com' />
                </div>

                <div className="input-field">
                    <br />
                    <span>Senha:</span>
                    <br />
                    <input type="password" name="" className='senha ' id="" placeholder='12345678900' />
                </div>

                <div className="send">
                    <br />
                    <button type="submit">Enviar</button>
                </div>
            </div>
        </div>
    )
}

export default Formulario
