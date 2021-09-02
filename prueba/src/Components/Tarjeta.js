import React from 'react'
import './styles/Tarjeta.css'
import circlesImg from '../images/circles.png'

const Tarjeta = ({usuario,razon,rol,leftColor,rightColor}) => (
    <div className="tarjeta mx-auto User-Tarjeta" style={{backgroundImage:`url(${circlesImg}), linear-gradient(to right,${leftColor || '#56CCF2'}, ${rightColor || '#2F80ED'})`}}>
        <div className="card-body">
            <div className="row center">
                <div className="col-6">
    
                </div>
                <div className="col-6 User-Tarjeta-Info">
                    <h1>{usuario}</h1>
                    <h3>{razon}</h3>
                    <p>{rol}</p>
                </div>
            </div>
        </div>
    </div>
)

export default Tarjeta