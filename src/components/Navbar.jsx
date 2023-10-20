import Dropdown from "./Dropdown"

const Navbar = (props) => {

  return (

    <header>
      <div>
        <a href="/"><img className="home-button" src="logo5.png" /></a>
        <Dropdown/>
      </div>
    </header>
  );
};

export default Navbar;
