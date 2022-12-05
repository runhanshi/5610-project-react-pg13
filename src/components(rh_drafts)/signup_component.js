import React, {Component, useState} from "react";
import "../App.css";
export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            usertype:"",
            firstname: "",
            lastname: "",
            email: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit(e) {
        e.preventDefault();
        const { username,  usertype, firstname, lastname, email, password } = this.state;
        console.log(username,  usertype, firstname, lastname, email, password);
        fetch("http://localhost:4000/register", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                username,
                usertype,
                firstname,
                lastname,
                email,
                password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userRegister");
            });
    }

    render() {

        return (
            <div className="App">
                <div className="auth-wrapper">
                    <div className="auth-inner">
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>
                <div className="mb-3">
                    <label>Username</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        onChange={(e) => this.setState({ username: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label>Usertype</label>
                    <select id="select-usertype" onChange={(e) => {
                        this.setState({ usertype: e.target.value  })}}>
                        <option defaultValue="CUSTOMER">Customer</option>
                        <option value="Creator">Creator</option>
                        <option value="ADMIN">Admin</option>
                    </select>

                </div>
                <div className="mb-3">
                    <label>First name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        onChange={(e) => this.setState({ firstname: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label>Last name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        onChange={(e) => this.setState({ lastname: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={(e) => this.setState({ email: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        onChange={(e) => this.setState({ password: e.target.value })}
                    />
                </div>

                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Sign Up
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form>
                    </div>
                </div>
            </div>
        );
    }
}