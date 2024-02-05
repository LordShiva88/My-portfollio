import { FaGraduationCap } from "react-icons/fa";
import Skills from "../Components/Skills";
import Heading from "../Components/Heading";
import Profile from "../Components/Profile";
const AboutMe = () => {
  return (
    <div className="mt-32 container mx-auto">
      <div className="md:w-1/3 w-full fixed lg:block hidden">
        <Profile></Profile>
      </div>
      <div className="w-full lg:ml-[450px]">
        <div className="flex">
          <Heading
            title={"About Me"}
            tagline={"Explore my recent work and projects."}
          ></Heading>
        </div>
        <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl my-10">
          Academic Achievements
        </h2>
        <div className="space-y-5">
          <div className="flex items-center gap-5">
            <FaGraduationCap className="text-3xl mr-2" />
            <div>
              <p className="mb-1 text-xl text-left">
                Secondary School Certificate (SSC)
              </p>
              <p className="mb-1">
                Fatickchari Coronation Govt. Model High School
              </p>
              <p className="text-sm text-left">
                Group: Science | GPA: 4.28 | Session: 2016-2018
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <FaGraduationCap className="text-3xl mr-2" />
            <div>
              <p className="mb-1 text-xl text-left">
                Higher Secondary Certificate (HSC)
              </p>
              <p className="mb-1 text-left">
                Fatickchhari Govt. College - 4341
              </p>
              <p className="text-sm text-left">
                Group: Arts | GPA: 3.83 | Session: 2020-2022
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <FaGraduationCap className="text-3xl mr-2" />
            <div>
              <p className="mb-1 text-xl text-left">Bachelor of Arts (BA)</p>
              <p className="mb-1">Government Hazi Mohammad Mohsin College</p>
              <p className="text-sm text-left">
                Group: ARTS | GPA: Running| Session: 2022-2023
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:ml-[450px]">
        <Skills></Skills>
      </div>
    </div>
  );
};

export default AboutMe;
