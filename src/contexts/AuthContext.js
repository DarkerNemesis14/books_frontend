// import react hooks
import { useEffect, createContext, useReducer } from "react"

// import custom hooks
import { useCookie } from "../hooks/useCookie"

// create context
const AuthContext = createContext()

// reducer function
const authReducer = (state, action) => {
    switch (action.type){
        case "LOGIN":
            return { user: action.payload }
        case "LOGOUT":
            return { user: null }
        default:
            return state
    }
}

// context provider
const AuthContextProv = ({ children }) => {
    // initiate variables
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

    const { getCookie } = useCookie()

    // retrieve previous login
    useEffect(() => {
        const cookie = getCookie("user")
        if (cookie) {
            dispatch({ type: "LOGIN", payload: JSON.parse(cookie) })
        }
    }, [])

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            { children }
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProv, authReducer }