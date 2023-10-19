import Dropdown from "./Dropdown"

const Navbar = (props) => {

  return (
    <header>
      <div>
        <a href="/"><img className="home-button" src="logo5.png" /></a>
        <a href="https://tcdsb.elearningontario.ca/d2l/home/23924060" target="blank">D2L Page</a>
        <Dropdown/>
      </div>
    </header>
  );
};

export default Navbar;
