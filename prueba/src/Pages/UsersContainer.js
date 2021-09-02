import React from 'react'
import Principal from './Principal'
import UserNewContainer from './UserNewContainer'

const UsersContainer = () => {
    const {data} = <UserNewContainer />
    return <Principal
        data={data}            
    />
            
}

export default UsersContainer