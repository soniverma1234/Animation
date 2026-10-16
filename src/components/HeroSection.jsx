
const HeroSection = () => {



  return (
    <section className="bg-gray-950 px-6 py-24 text-center">
      <p className="mb-4 text-xs font-semibold  text-cyan-400">
       HI, WE ARE CREATIVE AGENCY
      </p>

      <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
        We Build <br />
        <span className="text-cyan-400">Stunning</span>Wwebsites 
      </h1>

      <p className="mt-6 text-lg font-medium text-gray-300">
        Design. Develop. Deliver.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button className="rounded-lg bg-blue-600 px-7 py-3 font-medium text-white  hover:bg-blue-700">
          Get Started
        </button>
        <button className="flex items-center gap-2 rounded-lg border border-gray-600 px-7 py-3 font-medium text-white  hover:bg-gray-800">
          Watch Video
        </button>
      </div>
    </section>
  );
};

export default HeroSection;