import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "./users-thunks";

const Register = () => {
    const [username, setUsername] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [usertype, setUsertype] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [validatePassword, setValidatePassword] = useState('')
    const [error, setError] = useState(null)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleRegisterBtn = () => {
        if (password !== validatePassword) {
            setError('Passwords must match')
            return
        }
        setError(null)
        const newUser = {username, usertype, firstname,lastname,email,password}
        dispatch(registerThunk(newUser))
    }
    return(
        <>

                <h3>Sign Up</h3>
                <div className="mb-3">
                    <label>Username</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label>Usertype</label>
                    <select id="select-usertype" value={usertype} onChange={(e) => {
                        setUsertype(e.target.value )}}>
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
                        value={firstname}
                        onChange={(e) => setFirstname( e.target.value )}
                    />
                </div>

                <div className="mb-3">
                    <label>Last name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        value={lastname}
                        onChange={(e) => setLastname(  e.target.value )}
                    />
                </div>

                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value )}
                    />
                </div>

                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value )}
                    />
                </div>

            <div className="mb-3">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={validatePassword}
                    onChange={(e) => setValidatePassword(e.target.value )}
                />
            </div>

                <button
                    onClick={handleRegisterBtn}
                    className="btn btn-primary w-100">
                    Register
                </button>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>

            {/*{*/}
            {/*    currentUser &&*/}
            {/*    <h2>Welcome {currentUser.username}</h2>*/}
            {/*}*/}
        </>
    )
}

export default Register