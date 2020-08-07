import React, { Component } from 'react'
import Joi from 'joi-browser';
import Form from './common/form';

export default class LoginForm extends Form {
    state = {
        data: { username: '', password: '' },
        errors: {}
    }

    schema = Joi.object({
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password")
    });

    doSubmit = () => {

        //call server
        console.log("Submitted");
    }

    render() {
        const { data, errors } = this.state;
        return (
            <div>
                <h1>Login Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', "password")}

                    {this.renderButton('Login')}
                </form>
            </div>
        )
    }
}
