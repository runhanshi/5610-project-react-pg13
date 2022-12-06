import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "./users-thunks";

const Register = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [username, setUsername] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [usertype, setUsertype] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [dateofbirth, setDateofBirth] = useState('')

    const [password, setPassword] = useState('')
    const [validatePassword, setValidatePassword] = useState('')
    const [error, setError] = useState(null)
    const dispatch = useDispatch()
    const handleRegisterBtn = () => {
        if (password !== validatePassword) {
            setError('Passwords must match')
            return
        }
        setError(null)
        const newUser = {username, usertype, firstname,lastname,email,phone, dateofbirth,password}
        dispatch(registerThunk(newUser))
    }
    return(
        <>
            <div className="form_wrapper">
                <h3 className="sign">Sign Up</h3>
                <div className="mb-3">
                    <input
                        type="text"
                        className="un"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="usertypeselect">&nbsp; Please choose your Usertype(select one)</label>
                    <select id="select-usertype" value={usertype} onChange={(e) => {
                        setUsertype(e.target.value )}}>
                        <option defaultValue="CUSTOMER">Customer</option>
                        <option value="Creator">Creator</option>
                        <option value="ADMIN">Admin</option>
                    </select>

                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="un"
                        placeholder="Firstname"
                        value={firstname}
                        onChange={(e) => setFirstname( e.target.value )}
                    />
                </div>

                <div className="mb-3">
                    <input
                        type="text"
                        className="un"
                        placeholder="Last name"
                        value={lastname}
                        onChange={(e) => setLastname(  e.target.value )}
                    />
                </div>

                <div className="mb-3">
                    <input
                        type="email"
                        className="un"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value )}
                    />
                </div>

                <div className="mb-3">
                    <input
                        type="text"
                        className="un"
                        placeholder="phonenumber"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value )}
                    />
                </div>

                <div className="mb-3">
                    <input
                        type="date"
                        className="un"
                        placeholder="Enter DateOfBirth"
                        value={dateofbirth}
                        onChange={(e) => setDateofBirth(e.target.value )}
                    />
                </div>

                <div className="mb-3">
                    <input
                        type="password"
                        className="un"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value )}
                    />
                </div>

            <div className="mb-3">
                <input
                    type="password"
                    className="un"
                    placeholder="Validate password"
                    value={validatePassword}
                    onChange={(e) => setValidatePassword(e.target.value )}
                />
            </div>

                <button
                    onClick={handleRegisterBtn}
                    className="registerbtn">
                    Register
                </button>
                <p className="alreadysignup">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </div>
            {/*{*/}
            {/*    currentUser &&*/}
            {/*    <h2>Welcome {currentUser.username}</h2>*/}
            {/*}*/}
        </>

    )
}

export default Register