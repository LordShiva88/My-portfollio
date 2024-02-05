import { FaGithub } from "react-icons/fa";
import "./SocialIcon.css";
const SocialIcon = () => {
  return (
    <div className="flex gap-5">
      <a
        className="button"
        aria-label="Visit TrendyMinds LinkedIn"
        href="https://www.linkedin.com/in/liton-nath/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="bloom-container">
          <div className="button-container-main">
            <div className="button-inner">
              <div className="back"></div>
              <div className="front">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="h-8"
                >
                  <path
                    fill="currentColor"
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="button-glass">
              <div className="back"></div>
              <div className="front"></div>
            </div>
          </div>
          <div className="bloom bloom1"></div>
        </div>
      </a>
      <a
        className="button"
        aria-label="Visit TrendyMinds Facebook"
        href="https://www.facebook.com/profile.php?id=100078188022644"
        target="_blank"
        rel="noreferrer"
      >
        <div className="bloom-container">
          <div className="button-container-main">
            <div className="button-inner">
              <div className="back"></div>
              <div className="front">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="h-8"
                >
                  <path
                    fill="currentColor"
                    d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="button-glass">
              <div className="back"></div>
              <div className="front"></div>
            </div>
          </div>
          <div className="bloom bloom1"></div>
        </div>
      </a>
      <a
        href="https://github.com/LordShiva88"
        className="button"
        aria-label="Visit TrendyMinds LinkedIn"
        rel="noreferrer"
        target="_blank"
      >
        <div className="bloom-container">
          <div className="button-container-main">
            <div className="button-inner">
              <div className="back"></div>
              <div className="front">
                <FaGithub className="text-3xl" />
              </div>
            </div>
            <div className="button-glass">
              <div className="back"></div>
              <div className="front"></div>
            </div>
          </div>
          <div className="bloom bloom1"></div>
        </div>
      </a>
    </div>
  );
};

export default SocialIcon;
