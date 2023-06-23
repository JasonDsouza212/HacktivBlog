import react from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <Link to="/ " className="logo">
          Hacktiv Blog
        </Link>
        <nav className="nav-itmes">
          <Link to="/login" className="">
            Login
          </Link>
          <Link to="/register" className="">
            Register
          </Link>
          <Link to="/contact" className="">
            Contact
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Header;