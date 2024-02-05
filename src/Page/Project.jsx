import { useEffect, useState } from "react";
import ProjectDetails from "../Components/ProjectDetails";

const Project = () => {
  const [projects, setProject] = useState([]);

  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
      });
  }, []);

  return (
    <div className="container px-6 py-10 mx-auto">
      {projects.map((project, index) => (
        <div key={index} className="flex gap-10 flex-col md:flex-row">
          <ProjectDetails project={project}></ProjectDetails>
        </div>
      ))}
    </div>
  );
};

export default Project;
