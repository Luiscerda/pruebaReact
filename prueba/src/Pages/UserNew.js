import React from 'react'
import UserForm from '../Components/UserForm'
import Tarjeta from '../Components/Tarjeta'

const UserNew = ({form,onChange,onSubmit}) => (
    <div className="UserNew_Lateral_Spaces row">
        <div className="col-sm UserNew_Tarjeta_Space">
            <Tarjeta
                {...form}
            />
        </div>
        <div className="col-sm UserNew_Form_Space">
            <UserForm
                onChange={onChange}
                onSubmit={onSubmit}
                form={form}
            />            
        </div>
    </div>
)

export default UserNew