// import css file
import "./Login.css"

// import packages
import { motion } from "framer-motion"

// import react hooks
import { useState } from "react";

// import custom hooks
import { useLogin } from "../hooks/useLogin";

// import components
import Button from "../components/Button";

const Login = () => {
    // initiate variables
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const { login, error } = useLogin()

    // handle submit login form
    const handleLogin = async (e) => {
        e.preventDefault()
        
        await login(email, password)
    }

    return (
        <motion.div initial={{y:50, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.5}} className="login">
            <form layout className="loginform">
                <p className="header">Login</p>
                <div className="section">
                    <label>Email:</label>
                    <input
                        type = "email"
                        onChange = {(e) => setEmail(e.target.value)}
                        value = { email }
                        placeholder="Enter Email"
                    />
                </div>
                <div className="section">
                    <label>Password:</label>
                    <input
                        type = "password"
                        onChange = {(e) => setPassword(e.target.value)}
                        value = { password }
                        placeholder="Enter Password"
                    />
                </div>
                <div className="err">
                    {error && <p>{ error }</p>}
                </div>
                <Button text = { "login" } handleClick = { handleLogin }/>
            </form>
        </motion.div>
    );
}
 
export default Login;