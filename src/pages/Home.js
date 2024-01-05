// import css file
import "./Home.css"

// import packages
import { motion } from "framer-motion";

const Home = () => {
    return (
        <motion.div initial={{y:50, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.5}} className="home">
            <p className="welcome">Welcome to</p>
            <p className="name"><span>B</span>oo<span>K</span>s</p>
            <p className="moto">Where Stories Unfold and Readers Flourish.</p>
        </motion.div>
    );
}

export default Home;