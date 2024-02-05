import { Link } from "react-router-dom";
import resume from "../assets/SCIC__Assignment2.pdf";
import TypeWriter from "../Components/TypeWriter";
import { useContext } from "react";
import { ThemeContext } from "../Components/ThemeProvider";
import bannerImg from "../assets/banner.png";
// import banner from "animation.json";

const Banner = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section
      className={`pt-10 overflow-hidden ${
        isDarkMode ? "dark" : "light"
      } md:pt-0 sm:pt-16 2xl:pt-16`}
    >
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div className="relative">
            <img
              className="absolute bottom-0 -translate-x-1/2 left-1/2"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
              alt="Blob Shape"
            />
            <img className="relative" src={bannerImg} alt="Liton Nath" />
          </div>

          <div className="">
            <h2 className="">
              Hey There 👋
              <br />
              <span
                className={`text-transparent bg-clip-text bg-gradient-to-r ${
                  isDarkMode
                    ? "to-blue-500 from-purple-500"
                    : "to-emerald-600 from-sky-400"
                }`}
              >
                I am Liton Nath
              </span>
              <TypeWriter />
            </h2>

            <a href={resume} download="Liton_Nath_Resume.pdf">
              <a
                href="#_"
                className="relative px-10 py-3 font-medium text-white transition duration-300 bg-green-400 rounded-md hover:bg-green-500 ease"
              >
                <span className="absolute bottom-0 left-0 h-full -ml-2">
                  <svg
                    viewBox="0 0 487 487"
                    className="w-auto h-full opacity-100 object-stretch"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                      fill="#FFF"
                      fill-rule="nonzero"
                      fill-opacity=".1"
                    ></path>
                  </svg>
                </span>
                <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                  <svg
                    viewBox="0 0 487 487"
                    className="object-cover w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                      fill="#FFF"
                      fill-rule="nonzero"
                      fill-opacity=".1"
                    ></path>
                  </svg>
                </span>
                <span className="relative">Download CV</span>
              </a>
            </a>
            <Link to="/contact">
              <a
                href="#_"
                className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Button Text</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

// data.forEach((details) => {
//   const ImageLinkElement = details.querySelector(
//     ".woocommerce-product-gallery__image img"
//   );
//   const NameElement = details.querySelector(".product-title");
//   const ConditionElement = details.querySelector(
//     'li.uppercase span[data-text-color="success"]'
//   );

  // Checking if elements exist before reading properties
  // const ImageLink = ImageLinkElement
  //   ? ImageLinkElement.getAttribute("src")
  //   : null;
  // const Name = NameElement ? NameElement.textContent : null;
  // const Condition = ConditionElement ? ConditionElement.textContent : null;

  // Extracting all image links from the thumbnail slider
  // const ImageLinks = Array.from(
  //   details.querySelectorAll(".product-thumbnails a")
  // ).map((thumb) => {
  //   const thumbImage = thumb.querySelector("img");
  //   return thumbImage ? thumbImage.getAttribute("data-src") : null;
  // });

  // const MeterCountElement = details.querySelector(
  //   'li.uppercase:nth-child(2) span[data-text-color="success"]'
  // );
  // const DeliveryElement = details.querySelector(
  //   'li.uppercase:nth-child(3) span[data-text-color="success"]'
  // );

  // Checking if elements exist before reading properties
  // const MeterCount = MeterCountElement ? MeterCountElement.textContent : null;
  // const Delivery = DeliveryElement ? DeliveryElement.textContent : null;

  // Extracting delivery and installation starting costs
  // const DeliveryStartsAtElement = details.querySelector(
  //   ".us-container:nth-child(5) span"
  // );
  // const InstallationStartsAtElement = details.querySelector(
  //   ".us-container:nth-child(6) span"
  // );

  // Checking if elements exist before reading properties
//   const DeliveryStartsAt = DeliveryStartsAtElement
//     ? DeliveryStartsAtElement.textContent
//     : null;
//   const InstallationStartsAt = InstallationStartsAtElement
//     ? InstallationStartsAtElement.textContent
//     : null;

//   console.log({
//     ImageLink,
//     Name,
//     Condition,
//     ImageLinks,
//     MeterCount,
//     Delivery,
//     DeliveryStartsAt,
//     InstallationStartsAt,
//   });
// });
