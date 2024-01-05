// import css file
import "./Scrollbar.css"

// import react hooks
import { useState } from "react"

const Scrollbar = () => {
    // initiate variables
    const [userScroll, setUserScroll] = useState(0)

    // function to calculate scroll height
    const onScroll = () => {
        const scrolled = document.documentElement.scrollTop
        const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const height = (scrolled / pageHeight) * 100
        setUserScroll(height)
    }

    // scroll event listener
    window.addEventListener("scroll", onScroll);
    
    return (
        <div className="barSection">
                <div className="progressBar" style={{height : `${userScroll}%`}}></div>
        </div>
    );
}
 
export default Scrollbar;