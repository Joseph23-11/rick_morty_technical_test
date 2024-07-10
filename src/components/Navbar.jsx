import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const navItems = [
    { id: 1, text: "Character", path: "/" },
    { id: 2, text: "Location", path: "/location" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-blue-500 flex justify-between items-center h-16 md:h-24 w-full px-4 text-white ${
        isScrolled ? "fixed top-0 left-0 right-0 z-10" : ""
      }`}
      style={{
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
      }}
    >
      <Link
        to="/"
        className="text-xl font-semibold text-white transition-colors"
      >
        Rick and Morty
      </Link>
      <div className="flex space-x-4 md:space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className="text-white-500 font-semibold hover:text-blue-800 hover:underline transition-colors duration-300"
          >
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
