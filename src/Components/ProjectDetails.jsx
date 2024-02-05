import { FaArrowRight, FaGithub } from "react-icons/fa";
import { FcCheckmark, FcRight } from "react-icons/fc";

const ProjectDetails = ({ project }) => {
  return (
    <>
      <div
        className="overflow-hidden rounded-lg cursor-pointer group md:w-1/3 h-96 bg-center bg-contain bg-no-repeat hover:shadow-lg relative bg-gray-600 md:my-10"
        style={{
          backgroundImage: `url(${project.image})`,
        }}
      >
        <div className="flex flex-col justify-center items-center w-full h-full transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-blue-200/20 group-hover:opacity-100">
          <h1 className="text-2xl text-white mb-4">{project.name}</h1>
          <a
            href={`${project.URL}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-awesome w-32 text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 hover:text-white rounded-md flex items-center justify-center space-x-2"
          >
            <span>Go To Live</span>
            <FaArrowRight></FaArrowRight>
          </a>
          <div className="flex gap-10 mt-10">
            <a
              href={`${project.client_site}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-awesome w-32 text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 hover:text-white rounded-md flex items-center justify-center space-x-2"
            >
              <div className="flex gap-2">
                <span>Client Code</span>
                <FaGithub></FaGithub>
              </div>
            </a>
            <a
              href={`${project.server_site}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-awesome w-32 text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 hover:text-white rounded-md flex items-center justify-center space-x-2"
            >
              <div className="flex gap-2">
                <span>Server Code</span>
                <FaGithub></FaGithub>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="flex-1 md:my-10 my-10">
        <div className="relative h-full ml-0 mr-0">
          <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
          <div className="relative h-full p-5 bg-gray-900 border-2 border-indigo-500 rounded-lg">
            <div className="flex items-center -mt-1">
              <h3 className="my-2 ml-3 text-lg font-medium text-white flex items-center gap-3">
                <FcRight size={24} />
                {project.name}
              </h3>
            </div>
            <div className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">
              <div className="h-1 w-96 mb-4 bg-black rounded-full">
                <div className="h-1 rounded-full bg-yellow-500 "></div>
              </div>
            </div>
            <p className="mb-2 font-medium text-white">{project.description}</p>
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="mb-2 text-base text-white flex items-center"
              >
                <FcCheckmark size={20} className="mr-2 text-green-500" />
                <p>{feature.description}</p>
              </div>
            ))}
            <ul className="flex gap-2">
              {project.skills.map((skill, index) => (
                <li
                  key={index}
                  className="bg-blue-300 rounded-full px-3 py-1 text-base  text-white"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
