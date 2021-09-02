import React from 'react'
import './styles/AddButton.css'
import buttomImg from '../images/add.png'
import { Link } from 'react-router-dom'

const AddButton = () => (
    <Link to="/user/new">
        <img src={buttomImg} className="User-Add" alt="userAdd"/>
    </Link>

)

export default AddButton