// import css file
import "./Feed.css"

// import packages
import ReactLoading from 'react-loading';
import { motion } from "framer-motion"

// import react hooks
import { useEffect, useState } from "react"

// import custom hooks
import { useBook } from "../hooks/useBook"

// import components
import DispBook from "../components/DispBook"

const Feed = () => {
    // initiate variables
    const [sortBy, setSortBy] = useState("")

    const { getBooks, sortBooks, books, error } = useBook()

    // fetch book list
    useEffect(() => {
        const getBooksWrapper = async () => {
            await getBooks()
        }
        getBooksWrapper()
    }, [])

    // handle book list sorting
    const handleSort = async (e) => {
        setSortBy(e.target.value)
        await sortBooks(e.target.value)
    }
    
    return (
        <div className="feed">
            <motion.div initial={{y:-50, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.5}} className="options">
                <div className="container">
                    <label>Sort By:</label>
                    <select onChange={handleSort}>
                        <option value="" selected hidden>None</option>
                        <option value="publish">Publication Year</option>
                        <option value="birth">Author Birth Year</option>
                    </select>
                </div>
            </motion.div>
            <motion.div layout initial={{y:50, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.5}}>
                {books? books.map(book => (
                    <DispBook book = { book } />
                    )) : <ReactLoading type={"bars"} color={"#40e0d0"} height={'50px'} width={'50px'} />
                }
            </motion.div>
            {error && <div className="error">
                    { error }
            </div>}
        </div>
    )
}

export default Feed