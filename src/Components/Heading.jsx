import image from "../assets/icon-1.png";
const Heading = ({ title, tagline }) => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="absolute lg:text-[80px] text-[60px] text-gray-400 font-bold opacity-20">
        Liton Nath
      </div>
      <div className="flex justify-center items-center gap-10">
        <img src={image} />
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              {title}
            </span>{" "}
          </h1>
          <div className="h-1 w-32 mx-auto bg-black rounded-full mb-4">
            <div className="h-1 rounded-full bg-yellow-500"></div>
          </div>
          {tagline && (
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {tagline}
            </p>
          )}
        </div>
        <img src={image} />
      </div>
    </div>
  );
}

export default Heading;
