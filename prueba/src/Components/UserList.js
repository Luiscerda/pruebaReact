import React, { Fragment } from 'react'
import Tarjeta from './Tarjeta'

const UserList = ({users}) => (
    <Fragment>
        { users.map((user) => (
            <Tarjeta
                key={user.id}
                {...user}
            />
        ))}
    </Fragment>
)

export default UserList