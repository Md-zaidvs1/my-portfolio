function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center py-20 px-6 md:px-20 text-white text-center">

      <h2 className="text-3xl font-bold mb-2">Contact Me</h2>
      <div className="w-12 h-1 bg-blue-500 mx-auto mb-4 rounded"></div>
      <p className="text-gray-400 mb-10">
        I am currently looking for opportunities. Feel free to reach out!
      </p>

      <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
        <a href="mailto:mdzaidv574@gmail.com" className="w-full border border-gray-600 px-6 py-3 rounded-lg hover:border-blue-400 hover:text-blue-400 transition">
          mdzaidv574@gmail.com
        </a>
        <a href="tel:7418773765" className="w-full border border-gray-600 px-6 py-3 rounded-lg hover:border-blue-400 hover:text-blue-400 transition">
          +91 7418773765
        </a>
        <a href="https://github.com/Md-zaidvs1?tab=repositories" target="_blank" rel="noreferrer" className="w-full border border-gray-600 px-6 py-3 rounded-lg hover:border-blue-400 hover:text-blue-400 transition">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/mohamed-zaid-v-s-014931391/" target="_blank" rel="noreferrer" className="w-full bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition">
          LinkedIn
        </a>
      </div>

    </section>
  );
}

export default Contact;