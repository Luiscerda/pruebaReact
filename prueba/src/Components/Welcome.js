import React from 'react'
import './styles/Welcome.css'

const Welcome = ({username}) => (
    <div className="container">
        <div className="User-Info">
            <h1>Hola {username}!</h1>
            <p>Te muestro lista de usuarios, con su razon social y la descripcion de su rol</p>
        </div>
    </div>
)

export default Welcome