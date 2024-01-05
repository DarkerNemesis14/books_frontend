// import css file
import "./DispBook.css"

// import packages
import { motion } from "framer-motion"

// import components
import DispAuthor from "./DispAuthor";
import DispComment from "./DispComment"

const DispBook = ({ book }) => {
    return (
        <motion.div key={book.book_name} initial={{y:50, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.5}} className="book">
            <div className="bookinfo">
                <p className="name">{ book.book_name }</p>
                <p className="genre">Genre: { book.book_type }</p>
                <p className="year">Year: { book.published_on }</p>
            </div>
            <div className="authorinfo">
                <p>Author:</p>
                <DispAuthor author = { book.author_info } />
            </div>
            <div className="commentinfo">
            <p>Comments:</p>
                {book.comments? book.comments.map(comment => (
                    <DispComment comment = { comment } />
                )) : <div>No comments yet.</div>}
            </div>
        </motion.div>
    );
}
 
export default DispBook;