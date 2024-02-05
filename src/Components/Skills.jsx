const Skills = () => {
  const skills = {
    HTML: 90,
    CSS: 85,
    Bootstrap: 80,
    Tailwind: 75,
    JavaScript: 85,
    React: 80,
    MongoDB: 75,
    Express: 70,
  };

  return (
    <section className="">
      <div className="container  py-10 mx-auto">
        <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
          My Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mt-8 xl:mt-12">
          {Object.entries(skills).map(([skill, percentage]) => (
            <div
              key={skill}
              className="space-y-3 rounded-xl"
            >
              <h1 className="text-2xl font-semibold  capitalize dark:text-white mb-10">
                {skill}
              </h1>

                <div className="bg-stroke dark:bg-dark-3 relative h-2.5 w-full rounded-2xl">
                  <div className="bg-primary absolute top-0 left-0 h-full w-[90%] rounded-2xl">
                    <span className="bg-primary absolute -right-4 bottom-full mb-2 rounded-sm px-3.5 py-1 text-sm text-white">
                      <span className="bg-primary absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"></span>
                      {percentage} %
                    </span>
                  </div>
                </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
