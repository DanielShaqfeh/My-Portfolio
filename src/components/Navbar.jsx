import { useState } from "react";
import { Link } from "react-scroll";

export default function NavLinks() {
  const [active, setActive] = useState("about");

  const links = [
    { name: "ABOUT", href: "#about" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          to={link.href} // The 'to' prop corresponds to the section id
          smooth={true} // Enables smooth scrolling
          duration={2000} // Time for smooth scrolling in milliseconds
          spy={true} // Allows the active link to change as you scroll
          onSetActive={() => setActive(link.name.toLowerCase())}
          onClick={() => setActive(link.name.toLowerCase())}
          className={`group flex items-center space-x-4 transition-all duration-300 
            ${active === link.name.toLowerCase() ? "text-teal-200" : "text-teal-500 hover:text-teal-200"}`}
        >
          {/* Static bar that grows on hover or if active */}
          <span
            className={`block h-0.5 bg-teal-300 transition-all duration-300
              ${active === link.name.toLowerCase() ? "w-30" : "w-15 group-hover:w-30"}`}
          ></span>

          {/* Text that scales slightly on hover or if active */}
          <span
            className={`font-mono text-sm tracking-wider transform transition-all duration-300 
              ${active === link.name.toLowerCase() ? "scale-110" : "group-hover:scale-110"}`}
          >
            {link.name}
          </span>
        </a>
      ))}
    </>
  );
}
