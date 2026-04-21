function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-20 text-white">

      <h2 className="text-3xl font-bold text-center mb-12">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500/40 transition">
          <h3 className="text-xl font-semibold mb-1">SpendSense - Personal Finance Manager</h3>
          <p className="text-sm text-gray-500 mb-3">Full-Stack Web Application | MERN Stack</p>
          <p className="text-gray-400 mb-4 text-sm leading-relaxed">
            A personal finance manager app to help users track expenses, manage
            budgets, and plan finances. Includes expense categorization, financial
            reporting, and goal setting for comprehensive financial management.
          </p>
          <p className="text-sm text-blue-400 mb-4">MongoDB • Express.js • React • Node.js • Tailwind CSS • Chart.js</p>
          <div className="flex gap-4">
            <a href="https://symphonious-biscuit-b8266c.netlify.app/" target="_blank" rel="noreferrer" className="bg-blue-500 px-4 py-2 rounded">Live</a>
            <a href="https://github.com/Md-zaidvs1/Finance-project-frontend-1" target="_blank" rel="noreferrer" className="border px-4 py-2 rounded">Frontend</a>
            <a href="https://github.com/Md-zaidvs1/Personal--Finance-manager-backend" target="_blank" rel="noreferrer" className="border px-4 py-2 rounded">Backend</a>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500/40 transition">
          <h3 className="text-xl font-semibold mb-1">Invoice Builder</h3>
          <p className="text-sm text-gray-500 mb-3">Frontend Project | React</p>
          <p className="text-gray-400 mb-4 text-sm leading-relaxed">
            Users can input client info, add items with unit, quantity, and rate,
            auto-calculate totals and tax, and export the invoice as a PDF.
            Fully responsive and printable.
          </p>
          <p className="text-sm text-blue-400 mb-4">React</p>
          <div className="flex gap-4">
            <a href="https://heroic-rabanadas-d8a1e5.netlify.app/" target="_blank" rel="noreferrer" className="bg-blue-500 px-4 py-2 rounded">Live</a>
            <a href="https://github.com/Md-zaidvs1/Invoice-Builder" target="_blank" rel="noreferrer" className="border px-4 py-2 rounded">Code</a>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500/40 transition">
          <h3 className="text-xl font-semibold mb-1">Movie Review App</h3>
          <p className="text-sm text-gray-500 mb-3">Frontend Project | React</p>
          <p className="text-gray-400 mb-4 text-sm leading-relaxed">
            A movie review application built with React that allows users to search
            and filter movies, view detailed information, and provide star-based
            ratings — focused on data display and user interaction.
          </p>
          <p className="text-sm text-blue-400 mb-4">React</p>
          <div className="flex gap-4">
            <a href="https://m-review-app.netlify.app/" target="_blank" rel="noreferrer" className="bg-blue-500 px-4 py-2 rounded">Live</a>
            <a href="https://github.com/Md-zaidvs1/movie-review-app" target="_blank" rel="noreferrer" className="border px-4 py-2 rounded">Code</a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;