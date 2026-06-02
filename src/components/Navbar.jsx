import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/95 backdrop-blur-xl border-b border-yellow-500/20">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="flex justify-between items-center h-24">

          {/* Logo Section */}
          <a
            href="#home"
            className="flex items-center gap-4"
          >
            <img
              src={logo}
              alt="Minahil Logo"
              className="w-16 h-16 object-contain"
            />

            <div>
              <h1
                className="text-3xl font-bold text-yellow-500"
                style={{
                  fontFamily: "Cinzel, serif",
                  letterSpacing: "3px",
                }}
              >
                MINAHIL
              </h1>

              <p className="text-[9px] uppercase tracking-[6px] text-gray-400">
                Luxury Perfumes
              </p>
            </div>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10">

            <li>
              <a
                href="#home"
                className="text-white hover:text-yellow-500 transition"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#collection"
                className="text-white hover:text-yellow-500 transition"
              >
                Collection
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="text-white hover:text-yellow-500 transition"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#reviews"
                className="text-white hover:text-yellow-500 transition"
              >
                Reviews
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="text-white hover:text-yellow-500 transition"
              >
                Contact
              </a>
            </li>

            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-400 text-black font-bold hover:scale-105 transition">
              Shop Now
            </button>

          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-yellow-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-yellow-500/20">

          <ul className="flex flex-col items-center gap-6 py-8">

            <li>
              <a
                href="#home"
                className="text-white"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#collection"
                className="text-white"
                onClick={() => setIsOpen(false)}
              >
                Collection
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="text-white"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#reviews"
                className="text-white"
                onClick={() => setIsOpen(false)}
              >
                Reviews
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="text-white"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>

            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-400 text-black font-bold">
              Shop Now
            </button>

          </ul>

        </div>
      )}
    </nav>
  );
};

export default Navbar;