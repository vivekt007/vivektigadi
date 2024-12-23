import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/project.css";

// js files
import { observeElements } from "../Javascript/animation.js";

// Icons
import linkIcon from "/icons/link.svg";
import fileIcon from "/icons/file.svg";

// designs
import iVariHome from "/designs/iVariRevamp/iVariHome.png";
import iVariAbout from "/designs/iVariRevamp/iVariAbout.png";
import iVariServices from "/designs/iVariRevamp/iVariServices.png";
import iVariProduct from "/designs/iVariRevamp/iVariProduct.png";

// components
import Footer from "../components/Footer.jsx";

function IvariRevamp() {
    // Animations effect
    useEffect(() => {
        observeElements();
    }, []);

    const navigate = useNavigate();

    const [result, setResult] = React.useState("");

    return (
        <div className="project blur">
            <div className="project-title" id="heroSection">
                <div className="project-name">
                    <h1>iVari Security Systems website revamp</h1>
                    <a href="https://www.ivari.in" target="_blank">
                        <img src={linkIcon} alt="link" />
                        <span>website</span>
                    </a>
                </div>
                <a
                    href="/documents/iVariRevampDoc.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="document-link"
                >
                    <img src={fileIcon} alt="File" />
                    <span>DOCUMENTATION</span>
                </a>
            </div>

            <div className="project-row">
                <div className="project-heading">
                    <div className="home-vl"></div>
                    <p>Requirement Gathering</p>
                </div>

                <ul className="project-text">
                    <li>
                        Collaborated with internal teams to define objectives
                        for the website redesign, ensuring alignment with the
                        company’s brand identity and business goals.
                    </li>

                    <li>
                        Identified user pain points and areas for improvement in
                        the existing website.
                    </li>
                </ul>
            </div>

            <div className="project-row">
                <div className="project-heading">
                    <div className="home-vl"></div>
                    <p>Design</p>
                </div>

                <ul className="project-text">
                    <li>
                        Designed high-fidelity mockups in Figma, focusing on a
                        modern, minimalistic aesthetic.
                    </li>
                    <li>
                        Created responsive designs optimized for both desktop
                        and mobile platforms.
                    </li>
                    <li>
                        Ensured consistency with the company’s branding,
                        including color schemes, typography, and imagery.
                    </li>
                </ul>
            </div>

            <div className="project-image-row">
                <div className="project-row-col">
                    <img src={iVariHome} alt="Image 1" />
                    <img src={iVariProduct} alt="Image 1" />
                </div>
                <div className="project-row-col">
                    <img src={iVariAbout} alt="Image 1" />
                    <img src={iVariServices} alt="Image 1" />
                    <a
                        className="web-link"
                        href="https://www.ivari.in"
                        target="_blank"
                    >
                        <span>Website</span>
                        <img src={linkIcon} alt="link" />
                    </a>
                </div>
            </div>

            <div className="project-row">
                <div className="project-heading">
                    <div className="home-vl"></div>
                    <p>Development</p>
                </div>

                <ul className="project-text">
                    <li>
                        Translated designs into functional components using
                        React.js.
                    </li>
                    <li>
                        Implemented responsive layouts with CSS Grid, Flexbox,
                        and media queries to ensure compatibility across
                        devices.
                    </li>
                    <li>
                        Incorporated interactive elements for enhanced user
                        engagement.
                    </li>
                </ul>
            </div>

            <div className="project-row">
                <div className="project-heading">
                    <div className="home-vl"></div>
                    <p>Deploymnet & testing</p>
                </div>

                <ul className="project-text">
                    <li>
                        Deployed the website on Vercel, optimizing for
                        performance and fast loading speeds.
                    </li>
                    <li>
                        Conducted rigorous testing for responsiveness, browser
                        compatibility, and usability.
                    </li>
                </ul>
            </div>

            <div className="project-row">
                <div className="project-heading">
                    <div className="home-vl"></div>
                    <p>Outcome</p>
                </div>

                <ul className="project-text">
                    <li>
                        Delivered a modern, user-friendly website that elevated
                        the company’s online presence and improved user
                        engagement.
                    </li>
                </ul>
            </div>

            <Footer />
        </div>
    );
}

export default IvariRevamp;
