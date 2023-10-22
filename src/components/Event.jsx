export default function Event(props)
{
    return (
        <div key={Math.pow(3, 10*Math.random())+""} className="event" onMouseEnter={() => console.log("Hover")}>
            <h2>{props.name}</h2>
            <h3>{props.date}</h3>
            <p>{props.description}</p>
        </div>
    );
};