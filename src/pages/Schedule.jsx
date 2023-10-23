import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Event from "../components/Event"
import React from "react"

class Schedule extends React.Component{
    events = [];

    constructor(props)
    {
        super(props);

        events = props.events;
        fetch("/src/data/events.json")
        .then(result => result.json()).then((data) =>
        {
            data.events.forEach(event => events.push(<Event name={event.name} description={event.description} date={event.date}/>))
            console.log(events);
            this.setState({events: this.state.events});
        }, console.error());
    }

    render()
    {
        return (
            <>
                <Navbar />
                <div className = "main">
                    {events}
                </div>
                <Footer />
            </>
        );
    }
}

export default Schedule;