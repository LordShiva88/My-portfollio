import Heading from "../Components/Heading";
import Banner from "./Banner";
import ContactMe from "./ContactMe";
import Project from "./Project";
import Projects from "./Projects";

const Home = () => {
  return (
    <div className="my-20">
      <Banner />
      <div className="mt-20">
        <Heading
          title={"My Latest Work"}
          tagline={"Explore my recent work and projects."}
        ></Heading>
        <Project />
        <Projects />
      </div>
      <div id="contactUs">
        <ContactMe />
      </div>
    </div>
  );
};

export default Home;
