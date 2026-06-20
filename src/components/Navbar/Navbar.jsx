import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";
import { useContext , useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";


    function Navbar({ search, setSearch }) {
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={darkMode ? "navbar dark-nav" : "navbar"}>


        <h1>
            <RiMovie2Fill size={35} color="gold" />
            Movie Hub
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                                    ☰
                                    </div>
        </h1>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
  <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
  <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
  <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
  <Link to="/services" onClick={() => setMenuOpen(false)}>Contact Us</Link>
</div>

        <div className="search-box">
            <FaSearch />

            <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) =>
                setSearch(e.target.value)
            }
            />
        </div>

        <button
            className="theme-btn"
            onClick={() =>
            setDarkMode(!darkMode)
            }
        >
            Dark Mode
        </button>

        </nav>
    );
    }

    export default Navbar;