export default function Event(name, description, date="")
{
    return 
    <li>
        <h1>{name}</h1>
        <br/>
        <p>{description}</p>
        <br/>
        <p>{date}</p>
    </li>
};