import { FaGraduationCap } from "react-icons/fa";

const About = () => {
  return (

      <section className="relative block px-6 py-10 md:py-20 md:px-10 border-t border-b border-neutral-900 bg-neutral-900/30">
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
            My Education
          </span>
          <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
            Academic Achievements
          </h2>
          <div className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
            <div className="flex justify-center items-center">
              <FaGraduationCap className="text-3xl mr-2" />
              <div>
                <p className="mb-1">Secondary School Certificate (SSC)</p>
                <p className="text-sm">
                  Group: Science | GPA: 4.28 | Session: 2016-2018
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center mt-3">
              <FaGraduationCap className="text-3xl mr-2" />
              <div>
                <p className="mb-1">Higher Secondary Certificate (HSC)</p>
                <p className="text-sm">
                  Group: Arts | GPA: 4.28 | Session: 2020-2022
                </p>
              </div>
            </div>
            <p className="mt-4">College: Fatickchhari Govt. College - 4341</p>
          </div>
        </div>

        {/* <div
          className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
          style="background-image: linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%); border-color: rgba(92, 79, 240, 0.2);"
        ></div>
        <div
          className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
          style={{
            backgroundImage:
              "linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)",
            borderColor: "rgba(92, 79, 240, 0.2)",
          }}
        ></div> */}
      </section>

  );
};

export default About;
