function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-20 text-white gap-10">

      <div className="text-center md:text-left max-w-xl">
        <p className="text-blue-400 text-sm uppercase tracking-widest mb-3">
          Welcome to my portfolio
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I'm <span className="text-blue-500">Mohamed Zaid</span>
        </h1>
        <p className="mt-4 text-gray-400 text-lg">
          Frontend Developer | React Enthusiast
        </p>
        <p className="mt-2 text-gray-500 text-sm max-w-md">
          I build clean, responsive web applications and love turning ideas into real products.
        </p>
        <div className="mt-6 flex gap-4 justify-center md:justify-start">
          <button
            onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition font-medium"
          >
            View Projects
          </button>
          <button
            onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-2 border border-gray-600 rounded-lg hover:border-blue-400 hover:text-blue-400 transition"
          >
            Contact Me
          </button>
        </div>

        <div className="mt-10 flex gap-8 justify-center md:justify-start">
          <div>
            <p className="text-2xl font-bold text-blue-400">3+</p>
            <p className="text-gray-500 text-xs">Projects Built</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-400">MERN</p>
            <p className="text-gray-500 text-xs">Stack</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-400">Open</p>
            <p className="text-gray-500 text-xs">To Work</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="relative flex items-center justify-center">

          <div className="absolute w-80 h-80 rounded-full bg-blue-600 opacity-10 blur-3xl"></div>

          <div
            className="absolute w-80 h-80 rounded-full border-2 border-dashed border-blue-400 opacity-30 animate-spin"
            style={{ animationDuration: "15s" }}
          ></div>

          <div
            className="absolute w-72 h-72 rounded-full border-2 border-dotted border-blue-300 opacity-20 animate-spin"
            style={{ animationDuration: "10s", animationDirection: "reverse" }}
          ></div>

          <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-blue-500 opacity-50"></div>

          <div className="absolute top-2 left-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400"></div>

          <div className="absolute bottom-2 left-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400"></div>

          <div className="absolute left-2 top-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400"></div>

          <div className="absolute right-2 top-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400"></div>

          <img
            src="/profile.png"
            alt="profile"
            className="relative w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-4 border-blue-500 shadow-2xl z-10"
          />

        </div>
      </div>

    </section>
  );
}

export default Hero;