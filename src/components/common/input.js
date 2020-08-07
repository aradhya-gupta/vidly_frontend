import React from 'react'

export default function Input({ name, label, error , ...rest}) {
	return (
		<div className="form-group">
			<label htmlFor={name}>{label}</label>
			<input
				{...rest}
				className="form-control"
				name={name}
				id={name}

			/>

			{error && <div className="alert alert-danger">{error}</div>}
		</div>
	)
}
