import { useContext } from "react";
import { ThemeContext } from "../../Components/ThemeProvider";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";

const Mood = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div>
      <button
        className={`btn ${
          isDarkMode
            ? "dark-mode bg-black text-white"
            : "light-mode bg-white text-black"
        } hover:bg-white hover:text-black`}
        onClick={() => toggleDarkMode(isDarkMode)}
      >
        {isDarkMode ? (
          <CiLight className="text-2xl" />
        ) : (
          <MdOutlineDarkMode className="text-2xl" />
        )}
      </button>
    </div>
  );
};

export default Mood;
