import "./Card.css";

const Card = (props) => {
    return (
        <div className= {`card ${props.family}`}>
            <h2>{props.title}</h2>
            <p className="card-snippet">{props.snippet}</p>
            <p className="card-description">{props.description}</p>
            <a href={props.documentation_link} target="_blank">{props.documentation_title}</a>
        </div>
    )
}

export default Card;