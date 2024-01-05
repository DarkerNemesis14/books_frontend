// import react hooks
import { useContext } from "react"

// import custom hooks
import { AuthContext } from "../contexts/AuthContext"

const useAuthContext = () => {
    // get context
    const context = useContext(AuthContext)

    return context
}

export { useAuthContext }