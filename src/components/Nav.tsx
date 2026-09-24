function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="logo">
          DevStack
        </div>

        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#technologies">Technologies</a>
          </li>
          <li>
            <a href="#stack">My Stack</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>

        <button className="nav-button">
          Build Stack
        </button>
      </div>
    </nav>
  );
}

export default Navbar;