import React, { Component } from 'react'
import Form from './common/form';
import Joi from 'joi-browser';

export default class RegisterForm extends Form{
    state = {
        data:{username:'', password:'', name:''},
        errors:{}
    }

    schema = Joi.object({
        username: Joi.string().email().required().label("Username"),
        password: Joi.string().required().min(5).label("Password"),
        name: Joi.string().required().label("Name"),
    });

    doSubmit = () => {

        //call server
        console.log("Submitted");
    }

    render() {
        return (
            <div>
                <h1>Register Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', "password")}
                    {this.renderInput('name', 'Name')}
                    {this.renderButton('Register')}
                </form>
            </div>
        )
    }
}
