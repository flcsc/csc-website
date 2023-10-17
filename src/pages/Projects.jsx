import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

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
      <footer></footer>
    </>
  );
}

export default Projects;
