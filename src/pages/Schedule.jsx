import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Event from "../components/Event"
import React from "react"

class Schedule extends React.Component{
    events = [];

    constructor(props)
    {
        super(props);
        this.state = {events:props.events};
    }

    componentDidMount()
    {
        if(this.state.events.length !== 0) return; 
        console.log("Component did mount. Length: " + this.state.events.length)

        fetch("/src/data/events.json")
        .then(result => result.json(), console.error())
        .then((data) =>
        {
            data.events.forEach(event => this.state.events.push(<Event name={event.name} description={event.description} date={event.date}/>))
            this.setState({events: this.state.events});
        }, console.error());
    }

    componentWillUnmount()
    {
        for(let i = 0; i < this.state.events.length; i++)
            this.state.events[i] = null;
    }

    render()
    {
        if(this.state.events.length === 0)
        {
            return(
                <>
                    <Navbar/>
                    <div className="main">
                        <h1>There are no scheduled events (just yet)!</h1>
                    </div>
                    <Footer/>
                </>
            )
        }

        return (
            <>
                <Navbar />
                <div className = "main">
                    {this.state.events}
                </div>
                <Footer />
            </>
        );
    }
}

export default Schedule;