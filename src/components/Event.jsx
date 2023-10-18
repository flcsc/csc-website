export default function Event(props)
{
    return (
        <div key={Math.pow(3, 10*Math.random())+""} className="event">
            <h3>{props.name}</h3>
            <p>{props.date}</p>
            <p>{props.description}</p>
        </div>
    );
};