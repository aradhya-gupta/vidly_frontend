import React from 'react'

export default function MovieForm(props) {
    return (
        <div>
            <h1>MovieForm{props.match.params.id}</h1>
        </div>
    )
}
