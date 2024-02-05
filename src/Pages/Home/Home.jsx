import SocialIcon from "../../Components/SocialIcon";
import Navbar from "./Navbar";
import Mood from "./Mood";
import ResNav from "./ResNav";
import "./Style.css";
import Container from "../../Components/Container";
import MyImg from "../../assets/banner.png";
import resume from "../../assets/Liton_Nath_Resume.pdf";
import TypeWriter from "../../Components/TypeWriter";

const Home = () => {
  const openResumeInNewTab = () => {
    window.open(resume, "_blank");
  };

  return (
    <Container>
      <div className="background-container h-screen py-5">
        <div className="background-animation">
          <div className="border rounded-full px-5 py-1">
            <div>
              <div className="md:flex justify-between  items-center hidden">
                <div className="flex gap-10 items-center">
                  <div>
                    <Navbar />
                  </div>
                </div>
                <div className="hidden md:flex gap-4 items-center">
                  <button className="btnCv" onClick={openResumeInNewTab}>
                    Resume
                  </button>
                  <Mood />
                </div>
              </div>
              <div className="flex justify-between md:hidden p-2">
                <ResNav />
                <div className="flex gap-4">
                  <button className="btnCv" onClick={openResumeInNewTab}>
                    Resume
                  </button>
                  <Mood />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center h-5/6 md:gap-32 lg:gap-5 mt-20 md:mt-0 text-white">
            <div className="text-center md:text-left flex-1">
              <h1 className=" font-bold md:mb-5 mb-3">WELCOME TO MY WORLD</h1>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold md:mb-5 mb-3">
                I Am{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                  Liton Nath
                </span>
              </h1>
              <TypeWriter />
              <p className="text-sm md:text-base lg:text-lg mb-4 mt-10">
                A passionate MERN Stack Developer dedicated to crafting
                exceptional web experiences. Explore my portfolio to discover a
                showcase of projects that reflect my commitment to innovative
                and efficient solutions.
              </p>
              <div className="flex flex-col items-center md:items-start">
                <h1 className="text-lg md:text-xl lg:text-2xl mb-2 mt-10">
                  Find Me On
                </h1>
                <SocialIcon />
              </div>
            </div>
            <div className="flex-1 justify-center md:px-20">
              <img src={MyImg} alt="" className="md:w-full bg-img w-full" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
