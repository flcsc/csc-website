import React from "react"

class Event extends React.Component
{
    dropped = false;

    name = "";
    date = "";
    description = "";
    link = "";
    image = "";

    constructor(props)
    {
        super(props);

        this.state = {hovered:props.hovered, dropped:props.dropped, name:props.name, date:props.date, description:props.description, link:props.link, image:props.image};
        
        this.onClick = this.onClick.bind(this);
    }
    onClick()
    {
        this.setState({dropped:!this.state.dropped});
    }

    render()
    {
        var extraData =
        [
            (this.state.link !== "" ? 
            <>
                <h3>Link to the Competition</h3>
                <a href="https://cemc.uwaterloo.ca/contests/bcc.html#:~:text=The%20BCC%20is%20a%20problem-solving%20contest%20with%20a,described%20in%20the%20solutions%20to%20all%20past%20contests.">
                    <img className="link_image" src="link.jpg" target="blank"></img>
                </a>
            </>:<></>),
            (this.state.image !== "" ? <img className="event_image" src={this.state.image}></img> : <></>)
        ];

        return (
            <div key={Math.pow(3, 10*Math.random())+""} onClick={this.onClick} className={"event" + (this.state.dropped == true ? "_dropped" : "")}>
                <h2>{this.state.name}</h2>
                <h3>{this.state.date}</h3>
                <p>{this.state.description}</p>
                {extraData}
            </div>
        );
    };
}

export default Event;