import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Event from "../components/Event"
import "../data/events.json"

function getSchedule()
{
    let events = fetch("/src/data/events.json").then((result) => result.json()).finally((res)=> res);
    console.log(events);
}

function Schedule()
{
    getSchedule();
    var events = [
        <Event name="NewHacks" description="A hackathon hosted at the University of Toronto St. George campus, which will last 24-hours. Registration will close on October 29th, and there will be limited spots!" date="Nov 4-5"/>,
        <Event name="SkillsCanada" description="A coding competition for hackers to compete to increasing regional levels." />,
        <Event name="CanHack" description="A cybersecurity hacking competition. Consists of many 'Caputure the Flag' puzzles in which competitors must find a code (the flag) hidden using different sort of encryption at different difficulties." date="Unknown"/>
    ];
    return (
        <>
            <Navbar />
            <div className = "main">
                {events}
            </div>
            <Footer />
        </>
    )
}

export default Schedule;