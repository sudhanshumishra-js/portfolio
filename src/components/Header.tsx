import { Link, useLocation } from "react-router-dom";
import hamburger from "../assets/Images/hamburger.svg";
import cross from "../assets/Images/cross.svg";
import React from "react";
const Header: React.FC = () => {
  const [showMenuIcon, setShowMenuIcon] = React.useState(false);
  const location = useLocation();

  // const updateColors = (
  //   color: string,
  //   backgroundColor: string,
  //   opacity: string
  // ) => {
  //   const links = document.querySelectorAll(".navbar-links ul li a");

  //   links.forEach((link) => {
  //     (link as HTMLAnchorElement).style.color = color;
  //     (link as HTMLAnchorElement).style.backgroundColor = backgroundColor;
  //     (link as HTMLAnchorElement).style.opacity = opacity;
  //   });
  // };
  // React.useEffect(() => {
  //   const scroll = () => {
  //     if (location.pathname === "/") {
  //       if (window.scrollY >= window.innerHeight) {
  //         updateColors("black", "#D3D3D3", "0.6");
  //       } else {
  //         updateColors("white", "initial", "initial");
  //       }
  //     }
  //   };

  //   document.addEventListener("scroll", scroll);
  //   return () => document.removeEventListener("scroll", scroll);
  // }, [location]);

  // React.useEffect(() => {
  //   window.scrollTo(0, 0);
  //   if (location.pathname === "/") {
  //     updateColors("white", "black", "initial");
  //   }
  // }, [location]);
  const closeMenu = () => {
    if (showMenuIcon) setShowMenuIcon(false);
  };
  return (
    <nav className="header">
      {showMenuIcon ? (
        <img
          src={cross}
          onClick={() => setShowMenuIcon(!showMenuIcon)}
          className="menu-icon"
        />
      ) : (
        <img
          src={hamburger}
          className="menu-icon"
          onClick={() => setShowMenuIcon(!showMenuIcon)}
        />
      )}
      <div className={showMenuIcon ? "navbar-links expanded" : "navbar-links"}>
        <ul>
          <li>
            {location.pathname !== "/about" ? (
              <Link to="/about" onClick={closeMenu}>
                About
              </Link>
            ) : (
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            )}
          </li>
          <li>
            {location.pathname !== "/projects" ? (
              <Link to="/projects" onClick={closeMenu}>
                Work
              </Link>
            ) : (
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            )}
          </li>
          <li>
            {location.pathname !== "/contact" ? (
              <Link to="/contact" onClick={closeMenu}>
                Contact
              </Link>
            ) : (
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

//   return null;
// };

export default Header;
