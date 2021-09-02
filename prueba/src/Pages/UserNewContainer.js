import React, { useState } from 'react'
import '../Components/styles/UserNew.css'
import Loading from '../Components/Loading'
import UserNew from './UserNew'
import datos from '../config'

const UserNewContainer = ({history}) => {
    
    const [ form, setForm ] = useState({usuario: '',
                                contrasena: '',
                                razon: '',
                                rol: 0,
                                leftColor: '',
                                rightColor: '',
                                id: datos.length + 1
                            })
    const [loading, setLoading] = useState(false)

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async e =>{
        setLoading(true)
        e.preventDefault()

        try {
            datos.push(form)
            setLoading(false)
            /*let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            }*/
        } catch (error) {
            setLoading(false)
        }
    }

    if(loading)
        return <Loading />

        
    return <UserNew form={form} onChange={handleChange} onSubmit={handleSubmit}/>

}

export default UserNewContainer