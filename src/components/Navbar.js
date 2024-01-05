// import css file
import "./Navbar.css"

// import packages
import { Link } from "react-router-dom";

// import custom hooks
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const NavBar = () => {
    // initiate variables
    const { user } = useAuthContext()
    const { logout } = useLogout()

    // handle logout request
    const handleLogout = () => {
        const logoutWrapper = async () => {
            await logout(user.refresh)
        }
        logoutWrapper()
    }

    return (
        <nav className="navbar">
            <Link to = "/">
                <p className="name"><span>B</span>oo<span>K</span>s</p>
            </Link>

            {user && <ul className="menu">
                <li><Link to = "/feed"><p>Feed</p></Link></li>
                <li onClick={ handleLogout }><p>Logout</p></li>
            </ul>}
            {!user && <ul className="menu">
                <li><Link to = "/login"><p>Login</p></Link></li>
            </ul>}
        </nav>
    );
}
 
export default NavBar;