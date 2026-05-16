import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar-logo">Muhammad Saad</span>
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
