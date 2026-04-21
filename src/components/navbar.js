import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <NavLink className="nav__brand" to="/">YourName</NavLink>
        <nav className="nav__links">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;