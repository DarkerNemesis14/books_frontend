// import css file
import "./DispAuthor.css"

const DispAuthor = ({ author }) => {
    return (
        <div className="author">
            <p className="name">{ author.name }</p>
            <p>Born: { author.birth_year }</p>
            <p>Gender: { author.gender }</p>
        </div>
    );
}
 
export default DispAuthor;