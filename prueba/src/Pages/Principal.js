import React, { Fragment } from 'react'
import Welcome from '../Components/Welcome'
import AddButton from '../Components/AddButton'
import UserList from '../Components/UserList'
import datos from '../config'

const Principal = () => (
    <Fragment>
        <Welcome
            username="Luisk"
        />
        <UserList
            users={datos}
        />
        <AddButton/>       
    </Fragment>
)

export default Principal