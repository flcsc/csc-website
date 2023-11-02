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
      <div className="main">
        {projectInfo.map((project) => (
          <div className="project-card" key={project.id}>
            <a href={project.html_url}><h3><u>{project.full_name}</u></h3></a>
            <p>{project.description}</p>
            <p>Last updated: {project.updated_at}</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Projects;
