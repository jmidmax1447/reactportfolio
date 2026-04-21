import { NavLink, useLocation } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import "../styles/navbar.css";

function Navbar() {
  const { pathname } = useLocation();
  const homePage = pathname === "/";

  const { scrollY } = useScroll();

  let [reveal, setReveal] = useState(!homePage);

  const visibleAnim = { y: 0, opacity: 1};
  const hiddenAnim = { y: -110, opacity: 0};
  let navAnimate = hiddenAnim;

  if (reveal) {
    navAnimate = visibleAnim;
  }

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!homePage) return;
    setReveal(latest > 40);
  });

 return (
    <motion.nav
      initial={false}
      animate={navAnimate}
      transition = {{ duration: 0.35, ease: [0.22, 1 ,0.36, 1]}}
    >
    <nav>
      <NavLink to="/" className="nav-header">
        JASON MIDLANE
      </NavLink>

      <ul className="nav-links">
        <li>
          <NavLink to="/about" className="nav-header">
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/projects" className="nav-header">
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" className="nav-header">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
    </motion.nav>
  );
}
export default Navbar;