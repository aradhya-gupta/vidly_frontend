import React from 'react'

export default function Input({name, label, value, onChange}) {
    return (
        <div className="form-group">
            <label htmlFor={name}>Username</label>
            <input
                value={value}
                onChange={onChange}
                className="form-control"
                name={name}
                id={name}
                type="text" />
        </div>
    )
}
