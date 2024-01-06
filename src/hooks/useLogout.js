// import packages
import { useNavigate } from "react-router-dom"

// import custom hooks
import { useAuthContext } from "./useAuthContext"
import { useCookie } from "./useCookie"

const useLogout = () => {
    // initiate variables
    const navigate = useNavigate()

    const { dispatch } = useAuthContext()
    const { removeCookie } = useCookie()

    // function to handle logout request
    const logout = async (refresh) => {
        // request logout
        await fetch("rest-auth/logout/", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ refresh })
        })

        // delete login info
        dispatch({ type: "LOGOUT" })
        removeCookie("user")
        navigate("/login")
    }

    return { logout }
}

export { useLogout }