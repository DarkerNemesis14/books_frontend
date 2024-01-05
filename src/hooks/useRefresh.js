// import react hooks
import { useState } from "react"

// import custom hooks
import { useAuthContext } from "./useAuthContext"
import { useCookie } from "./useCookie"
import { useTime } from "./useTime"

const useRefresh = () => {
    // initiate variables
    const [error, setError] = useState(null)

    const { setCookie } = useCookie()
    const { timeISO } = useTime()
    const { user, dispatch } = useAuthContext()

    // function to get new access token
    const refresh = async (refresh) => {
        // calculate present time
        const timeNow = timeISO()

        // check access token expiration
        if (new Date(user.access_expire) <= new Date(timeNow)) {
            // request access token
            const response = await fetch("https://cors-anywhere.herokuapp.com/https://assignment.ongshak.com/rest-auth/token/refresh/", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ refresh })
            })
            // get json
            const json = await response.json()
            
            // check for errors
            if (response.ok) {
                const user = { access: json.access, refresh, access_expire: json.access_expiration }
                dispatch({ type: "LOGIN", payload: user })
                setCookie("user", user)
            } else {
                setError("Could not refresh authorization token.")
            }
        }

        return user.access
    }

    return { refresh, error }
}

export { useRefresh }