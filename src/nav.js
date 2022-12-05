import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";

// function Nav() {
//     return (
//         <div>
//             <Link to="/sign-in">Sign in</Link> |
//             <Link to="/sign-up">Sign up</Link>
//         </div>
//     );
// }
//
// export default Nav;

const Nav = () => {
    const { currentUser } = useSelector((state) => state.users)
    const { pathname } = useLocation()
    const parts = pathname.split('/')
    console.log(parts)

    const screens = [
        // 'search',
        'users'
    ]
    if (currentUser) {
        // screens.push('profile')
    } else {
        screens.push('login')
        screens.push('register')
    }

    return (
        <ul className="nav nav-pills">
            <li className="nav-item">
                <Link to="/"
                    className={`nav-link ${parts[1] === '' ? 'active' : ''}`}>
                    Home
                </Link>
            </li>
            {
                screens.map((screen) =>
                    <li className="nav-item">
                        <Link to={`/${screen}`}
                            className={`nav-link ${parts[1] === screen ? 'active' : ''}`}>
                            <span className="text-capitalize">{screen}</span>
                        </Link>
                    </li>
                )
            }
            <li className="nav-item">
                <Link to="/search"
                    className={`nav-link ${parts[1] === 'search' ? 'active' : ''}`}>
                    Search
                </Link>
            </li>

        </ul>
    )
}

export default Nav