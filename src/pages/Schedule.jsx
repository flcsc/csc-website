import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Event from "../components/Event"

function Schedule()
{
    var events = [
        <Event name="NewHacks" description="Hackathon" date="Nov 4-5"/>,
        <Event name="SkillsCanada" description="Computer coding competition" />,
        <Event name="CanHack" description="Cybersecurity competition" date="Unknown"/>
    ];
    return (
        <>
            <Navbar />
            <ul>{events}</ul>;
            <Footer />
        </>
    )
}

export default Schedule;