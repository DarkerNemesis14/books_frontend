// import css file
import "./DispComment.css"

const DispComment = ({ comment }) => {
    return (
        <div className="comment">
            <p>{ comment }</p>
        </div>
    );
}
 
export default DispComment;