import React from 'react'

export default function Input({ name, label, value, onChange, error }) {
	return (
		<div className="form-group">
			<label htmlFor={name}>{label}</label>
			<input
				value={value}
				onChange={onChange}
				className="form-control"
				name={name}
				id={name}
				type="text"

			/>

			{error && <div className="alert alert-danger">{error}</div>}
		</div>
	)
}
