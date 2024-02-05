import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Profile from "../../Components/Profile";
import Skills from "../../Components/Skills";
import Container from "../../Components/Container";
import Heading from "../../Components/Heading";
import "./About.css";

const About = () => {
  // const tabs = [
  //   { icon: <Profile />, label: "Skills" },
  //   { icon: <Skills />, label: "Lettuce" },
  //   { icon: "🧀", label: "Cheese" },
  //   { icon: "🥕", label: "Carrot" },
  //   { icon: "🍌", label: "Banana" },
  //   { icon: "🫐", label: "Blueberries" },
  //   { icon: "🥂", label: "Champers?" },
  // ];
  // const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <Container>
      <Heading title={"About Me"} tagline={"Know About Me Everything"} />

      {/* <div>
        {tabs.map((item) => (
          <ul
            key={item.label}
            className="inline-block"
            onClick={() => setSelectedTab(item)}
          >
            <li className="flex items-center px-2 py-1  rounded-full">
              {`${item.label}`}
            </li>
            {item === selectedTab ? <motion.div /> : null}
          </ul>
        ))}
      </div>
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab ? selectedTab.icon : ""}
          </motion.div>
        </AnimatePresence>
      </main> */}

      <div>
        <div className="flex">
          <div className="cards">
            <div className="card2 p-5">
              <h1 className="text-white">
                Hello <br />
                I’m Liton Nath, an Award-Winning Product Designer.
              </h1>
            </div>
          </div>
          <div className="cards">
            <div className="card2"></div>
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </Container>
  );
};

export default About;
