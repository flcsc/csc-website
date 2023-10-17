import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div class="main">
        <h1>Welcome to the Computer Science Club!</h1>
        <h2>
          This page is currently under construction. Please check back later!
        </h2>
      </div>
      <footer>
        <a href="https://github.com/flcsc/csc-website">
          <img src="gitHubLogo.png"></img>
        </a>
      </footer>
    </>
  );
};

export default Home;
