import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Footer from "../components/Footer";

function Projects() {
  const [projectInfo, setProjectInfo] = useState([]);

  useEffect(() => {
    axios.get("https://api.github.com/orgs/flcsc/repos").then((response) => {
      setProjectInfo(response.data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="main"></div>
      <Footer />
    </>
  );
}

export default Projects;
