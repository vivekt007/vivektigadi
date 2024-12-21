import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "/logo/favIcon.svg";

// Css
import "../styles/Navbar.css";

// js files
import { observeElements } from "../Javascript/animation.js";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const navigateToSection = (path, sectionId) => {
        navigate(path);
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }, 100); // Delay for page load/rendering
    };

    useEffect(() => {
        observeElements();
    }, []);

    return (
        <nav className="navbar blur">
            <div className="logo">
                <a href="/">
                    <img src={Logo} alt="Logo" />
                </a>
            </div>

            <div className="navbar-links">
                <li>
                    <p onClick={() => navigateToSection("/", "heroSection")}>
                        PROJECTS
                    </p>
                </li>
                <li>
                    <div className="verticle-line"></div>
                </li>
                <li>
                    <p onClick={() => navigateToSection("/", "about")}>ABOUT</p>
                </li>
            </div>
        </nav>
    );
}

export default Navbar;
