import "./Footer.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function Footer() {

    const { darkMode } = useContext(ThemeContext);
    return (
        <footer className={darkMode ? "Footer dark-footer" : "Footer"}>
        <p>© 2026 Movie Hub. All rights reserved.</p>
        </footer>
    );
    }

export default Footer;