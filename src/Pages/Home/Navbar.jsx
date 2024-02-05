import Lottie from "lottie-react";
import home from "../../../public/Home.json";
import About from "../../../public/About.json";
import Contact from "../../../public/Contact.json";
import Skills from "../../assets/Skills.png";
import Projects from "../../assets/projects.png";
import "./Style.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="flex-1">
      <ul className="md:flex gap-4 uppercase font-semibold hidden">
        <Link to="/" spy={true} smooth={true} offset={50} duration={1000}>
          <li className="flex items-center">
            <div className="w-8">
              <Lottie animationData={home} />
            </div>{" "}
            <button className="w-24 h-16 text-white rounded-full hover:text-green-400 duration-300 relative group font-semibold">
              <span className="absolute w-0 group-hover:w-full duration-500 flex group-hover:justify-start rounded-full inset-2 bg-sky-300 group-hover:bg-blue-500 group-hover:duration-300 mt-10"></span>
              HOME
            </button>
          </li>
        </Link>

        <Link to="about" spy={true} smooth={true} offset={50} duration={1000}>
          <li className="flex items-center ">
            <div className="w-8">
              <Lottie animationData={About} />
            </div>{" "}
            <button className="w-24 h-16 text-white rounded-full hover:text-green-400 duration-300 relative group font-semibold">
              <span className="absolute w-0 group-hover:w-full duration-500 flex group-hover:justify-start rounded-full inset-2 bg-sky-300 group-hover:bg-blue-500 group-hover:duration-300 mt-10"></span>
              ABOUT
            </button>
          </li>
        </Link>
        <Link to="skill" spy={true} smooth={true} offset={50} duration={1000}>
          <li className="flex items-center ">
            <div className="w-8">
              <img src={Skills} alt="" />
            </div>{" "}
            <button className="w-24 h-16 text-white rounded-full hover:text-green-400 duration-300 relative group font-semibold">
              <span className="absolute w-0 group-hover:w-full duration-500 flex group-hover:justify-start rounded-full inset-2 bg-sky-300 group-hover:bg-blue-500 group-hover:duration-300 mt-10"></span>
              SKILLS
            </button>
          </li>
        </Link>
        <Link to="project" spy={true} smooth={true} offset={50} duration={1000}>
          <li className="flex items-center ">
            <div className="w-8">
              <img src={Projects} alt="" />
            </div>{" "}
            <button className="w-24 h-16 text-white rounded-full hover:text-green-400 duration-300 relative group font-semibold">
              <span className="absolute w-0 group-hover:w-full duration-500 flex group-hover:justify-start rounded-full inset-2 bg-sky-300 group-hover:bg-blue-500 group-hover:duration-300 mt-10"></span>
              PROJECTS
            </button>
          </li>
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={50} duration={1000}>
          <li className="flex items-center ">
            <div className="w-8">
              <Lottie animationData={Contact} />
            </div>{" "}
            <button className="w-24 h-16 text-white rounded-full hover:text-green-400 duration-300 relative group font-semibold">
              <span className="absolute w-0 group-hover:w-full duration-500 flex group-hover:justify-start rounded-full inset-2 bg-sky-300 group-hover:bg-blue-500 group-hover:duration-300 mt-10"></span>
              CONTACT
            </button>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
