import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import Swal from "sweetalert2";

// js files
import { observeElements } from "../Javascript/animation.js";

// Icons
import projectsIcon from "/icons/projects.svg";
import cvIcon from "/icons/cv.svg";
import instagramIcon from "/icons/instagram.svg";
import linkedInIcon from "/icons/linkedIn.svg";
import emailIcon from "/icons/email.svg";

// logos
// import Zudio from "../assets/Logo/zudio.png";

// background
// import Logo3D from "../assets/BackgroundImg/iVariLogo3d.png";

// components
// import Footer from "../components/Footer.jsx";

function IvariRevamp() {
    // Animations effect
    useEffect(() => {
        observeElements();
    }, []);

    const navigate = useNavigate();

    // handlers

    const handleCareerNav = () => {
        window.location.href =
            "https://www.linkedin.com/company/ivari-security-systems-pvt-ltd/";
    };

    const handleiVariWebsite = () => {
        navigate("/services");
    };

    const [result, setResult] = React.useState("");

    return (
        <div className="home blur">
            <div className="hero-section" id="heroSection">
                <h1>iVari Security Systems revamp</h1>
            </div>

            <div className="projects-section" id="projectsSection">
                <div className="projects-row1">
                    <div className="home-vl"></div>
                    <p></p>
                </div>

                <div className="projects-container1">
                    <div className="projects-row2">
                        <div className="home-vl-hidden"></div>
                        <p>
                            Here are some of my<span> latest </span>projects
                            where I’ve combined design and development to create
                            impactful<span> digital experiences</span>. I
                            believe good design is as
                        </p>
                    </div>
                </div>

                <div className="projects-container2">
                    <div
                        className="project-card"
                        onClick={handleiVariWebsite}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default IvariRevamp;
