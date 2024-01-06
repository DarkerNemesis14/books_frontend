// import packages
import { useNavigate } from "react-router-dom"

// import react hooks
import { useState } from "react"

// import custom hooks
import { useAuthContext } from "./useAuthContext"
import { useCookie } from "./useCookie"
import { useTime } from "./useTime"

const useLogin = () => {
    // initiate variables
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const { dispatch } = useAuthContext()
    const { setCookie } = useCookie()
    const { timeISO } = useTime()

    // function to handle login request
    const login = async (email, password) => {
        // request login
        const response = await fetch("rest-auth/login/", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ email, password })
        })
        //get json
        const json = await response.json()

        // check for errors
        if (response.ok) {
            const timeNow = timeISO()
            const user = { access: json.access, refresh: json.refresh, access_expire: timeNow }
            dispatch({ type: "LOGIN", payload: user })
            setCookie("user", user)
            navigate("/feed")
        } else {
            setError("Incorrect email or password.")
        }
    }

    return { login, error }
}

export { useLogin }