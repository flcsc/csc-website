import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div class="main">
        <h1>Welcome to the Computer Science Club!</h1>
        <h2>This page is currently under construction. Please check back later!</h2>
        <p>This website was constructed by the members of <strong>Francis Libermann Catholic High School Computer Science Club</strong>, or the <strong>FLCSC</strong> for short!
          Take a look around and learn about previous and upcoming projects and competitions! If you are a student at Francis Libermann, you might
          have the chance to contribute to the improval of these very pages. <strong>Enjoy!</strong>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Home;
