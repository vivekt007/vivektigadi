import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import GithubLastUpdate from "../components/GithubLastUpdate";

// Css
import "../styles/Navbar.css";

// js files
import { observeElements } from "../Javascript/animation.js";

function Footer() {
    const navigate = useNavigate();

    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <GithubLastUpdate />
            <div className="footer-col1">
                <a target="_blank" href="https://github.com/vivekt007">
                    Github
                </a>
                <div className="verticle-line"></div>
                <a target="_blank" href="https://www.instagram.com/vicky__67t/">
                    Instagram
                </a>
                <div className="verticle-line"></div>
                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/vivek-tigadi/"
                >
                    LinkedIn
                </a>
            </div>
            <div className="footer-col2">
                <p>&copy; Vivek Tigadi {currentYear}. ALL RIGHTS RESERVED.</p>
            </div>
        </footer>
    );
}

export default Footer;
