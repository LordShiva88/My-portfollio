import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";
const ResNav = () => {
  return (
    <div className="">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <FaBars className="text-3xl text-white" />
        </div>
        <ul
          tabIndex={0}
          className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <Link to="/" spy={true} smooth={true} offset={50} duration={1000}>
            <li className="flex items-center">
              <button className="w-24 h-16 text-sky-800 rounded-full hover:text-green-400 duration-300 relative group font-semibold">
                <span className="absolute w-0 group-hover:w-full duration-500 flex group-hover:justify-start rounded-full inset-2 bg-sky-300 group-hover:bg-blue-500 group-hover:duration-300 mt-10"></span>
                HOME
              </button>
            </li>
          </Link>

          <Link to="about" spy={true} smooth={true} offset={50} duration={1000}>
            <li className="flex items-center ">
              <button className="w-24 h-16 text-sky-800 rounded-full hover:text-green-400 duration-300 relative group font-semibold">
                <span className="absolute w-0 group-hover:w-full duration-500 flex group-hover:justify-start rounded-full inset-2 bg-sky-300 group-hover:bg-blue-500 group-hover:duration-300 mt-10"></span>
                ABOUT
              </button>
            </li>
          </Link>
          <Link to="skill" spy={true} smooth={true} offset={50} duration={1000}>
            <li className="flex items-center ">
              <button className="w-24 h-16 text-sky-800 rounded-full hover:text-green-400 duration-300 relative group font-semibold">
                <span className="absolute w-0 group-hover:w-full duration-500 flex group-hover:justify-start rounded-full inset-2 bg-sky-300 group-hover:bg-blue-500 group-hover:duration-300 mt-10"></span>
                SKILLS
              </button>
            </li>
          </Link>
          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
          >
            <li className="flex items-center ">
              <button className="w-24 h-16 text-sky-800 rounded-full hover:text-green-400 duration-300 relative group font-semibold">
                <span className="absolute w-0 group-hover:w-full duration-500 flex group-hover:justify-start rounded-full inset-2 bg-sky-300 group-hover:bg-blue-500 group-hover:duration-300 mt-10"></span>
                PROJECTS
              </button>
            </li>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
          >
            <li className="flex items-center ">
              <button className="w-24 h-16 text-sky-800 rounded-full hover:text-green-400 duration-300 relative group font-semibold">
                <span className="absolute w-0 group-hover:w-full duration-500 flex group-hover:justify-start rounded-full inset-2 bg-sky-300 group-hover:bg-blue-500 group-hover:duration-300 mt-10"></span>
                CONTACT
              </button>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default ResNav;
