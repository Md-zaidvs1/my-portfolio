function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="flex justify-between items-center p-5 bg-gray-800 text-white sticky top-0 z-50">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <ul className="flex gap-6">
        <li onClick={() => scrollTo("home")} className="cursor-pointer hover:text-blue-400">Home</li>
        <li onClick={() => scrollTo("about")} className="cursor-pointer hover:text-blue-400">About</li>
        <li onClick={() => scrollTo("projects")} className="cursor-pointer hover:text-blue-400">Projects</li>
        <li onClick={() => scrollTo("contact")} className="cursor-pointer hover:text-blue-400">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;