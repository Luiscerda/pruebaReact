import React from 'react'

const UserForm = ({onChange, onSubmit,form}) => (
    <div className="container">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Usuario"
                    name="usuario"
                    onChange={onChange}
                    value={form.usuario}
                />
            </div>
            <div><br/></div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Contrasena"
                    name="contrasena"
                    onChange={onChange}
                    value={form.contrasena}
                />
            </div>
            <div><br/></div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="razon"
                    name="razon"
                    onChange={onChange}
                    value={form.razon}
                />
            </div>
            <div><br/></div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Rol"
                    name="rol"
                    onChange={onChange}
                    value={form.rol}
                />
            </div>
            <div><br/></div>
            <div className="form-row">
                <div className="col">
                    <input 
                        type="color" 
                        className="form-control" 
                        placeholder="leftColor" 
                        name="leftColor"
                        onChange={onChange}
                        value={form.leftColor}
                    />
                </div>
                <div><br/></div>
                <div className="col">
                    <input 
                        type="color" 
                        className="form-control"
                        placeholder="rightColor" 
                        name="rightColor"
                        onChange={onChange}
                        value={form.rightColor}
                    />    
                </div>
            </div>
            <div>
                <button type="submit" className="btn btn-primary float-right">Submit</button>
            </div>
            
        </form>
    </div>
)

export default UserForm