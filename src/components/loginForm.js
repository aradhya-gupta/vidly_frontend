import React, { Component } from 'react'
import Input from './common/input';
import Joi from 'joi-browser';

export default class LoginForm extends Component {
    state = {
        account: { username: '', password: '' },
        errors: {}
    }

    schema = Joi.object({
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password")
    });

    validate = () => {
        const result = this.schema.validate(this.state.account, { abortEarly: false });
        console.log(result);
        if (!result.error) return null;

        const errors = {};
        for (let item of result.error.details)
            errors[item.path[0]] = item.message;
        return errors;
    }

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;
    }

    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = Joi.object({ [name]: Joi.string().required() });
        const { error } = schema.validate(obj);
        return error ? error.details[0].message : null;
    }

    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const account = { ...this.state.account };
        account[input.name] = input.value;

        this.setState({ account, errors });
    }

    render() {
        const { account, errors } = this.state;
        return (
            <div>
                <h1>Login Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        name="username"
                        label="Username"
                        value={account.username}
                        onChange={this.handleChange}
                        error={errors.username}
                    />
                    <Input
                        name="password"
                        label="Password"
                        value={account.password}
                        onChange={this.handleChange}
                        error={errors.password}
                    />

                    <button className="btn btn-primary" disabled={this.validate()}>
                        Login
                    </button>
                </form>
            </div>
        )
    }
}
