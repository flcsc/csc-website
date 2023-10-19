function dropDown()
{
  return (
    <div className="dropDown">
      <h1>Pooog</h1>
    </div>
  );
}

const Navbar = (props) => {
  return (
    <header>
      <div>
        <a href="/"><img className="home-button" src="logo5.png" /></a>
        <a href="https://tcdsb.elearningontario.ca/d2l/home/23924060" target="blank">D2L Page</a>
        <a href="/projects">Projects</a>
        <a href="/schedule">Schedule</a>
        <button className="dropDown-Button" onClick={dropDown}>Button</button>
      </div>
    </header>
  );
};

export default Navbar;
