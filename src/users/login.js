import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk, registerThunk} from "./users-thunks";

const Login = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const dispatch = useDispatch()
    const handleLoginBtn = () => {
        setError(null)
        const loginUser = {username, password}
        dispatch(loginThunk(loginUser))
    }
    return(
        <>
            <div className="form_wrapper">
            <h1 className="sign">Login</h1>
            {
                error &&
                <div className="alert alert-danger">
                    {error}
                </div>
            }
            <input
                className="un mb-2"
                value={username}
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}/>
            <input
                className="un mb-2"
                value={password}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}/>
            <button
                onClick={handleLoginBtn}
                className="loginbtn">
                Login
            </button>
            {
                currentUser &&
                <h2>Welcome {currentUser.username}</h2>
            }
            </div>
        </>
    )
}

export default Login