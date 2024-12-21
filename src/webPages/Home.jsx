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
import iVari from "/logo/iVariLogo.svg";

// background
// import Logo3D from "../assets/BackgroundImg/iVariLogo3d.png";

// components
// import Footer from "../components/Footer.jsx";

function Home() {
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
        navigate("/iVariRevamp");
    };

    // contact handler

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "3a3a44b7-7f8b-4de1-8495-5f579285dbb2");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            Swal.fire({
                title: "Thank You",
                text: "Message sent",
                icon: "success",
                timer: 1500,
            });
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="home blur">
            <div className="hero-section" id="heroSection">
                <h1>VIVEK TIGADI</h1>

                <div className="hero-container1">
                    <div className="hero-row1">
                        <div className="home-vl"></div>
                        <p>
                            A designer obsessed with creating digital
                            experiences.
                        </p>
                    </div>

                    <div className="hero-row2">
                        <div className="home-vl-hidden"></div>
                        <p>
                            I believe good design is as<span> simple </span>and
                            <span> minimal </span> as possible. Explore my case
                            studies and projects to see how I blend
                            <span> creativity </span>and
                            <span> functionality </span> into seamless user
                            experiences.
                        </p>
                    </div>
                </div>

                <div className="hero-container2">
                    <li className="hero-link">
                        <a href="#projectsSection" rel="noopener noreferrer">
                            <img src={projectsIcon} alt="projects" />
                            <span>PROJECTS</span>
                        </a>
                    </li>

                    <li className="hero-link">
                        <a
                            href="/documents/VivekTigadiDesigner.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={cvIcon} alt="CV" />
                            <span>CV</span>
                        </a>
                    </li>

                    <li className="hero-link">
                        <a
                            href="https://www.instagram.com/vicky__67t/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={instagramIcon} alt="Instagram" />
                        </a>
                    </li>

                    <li className="hero-link">
                        <a
                            href="https://www.linkedin.com/in/vivek-tigadi/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={linkedInIcon} alt="LinkedIn" />
                        </a>
                    </li>

                    <li className="hero-link">
                        <a href="#contact" rel="noopener noreferrer">
                            <img src={emailIcon} alt="Email" />
                        </a>
                    </li>
                </div>
            </div>

            <div className="projects-section" id="projectsSection">
                <div className="projects-container1">
                    <div className="projects-row1">
                        <div className="home-vl"></div>
                        <p>Featured Projects</p>
                    </div>

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
                    <div className="project-card" onClick={handleiVariWebsite}>
                        <img src={iVari} alt="iVari security systems1" />
                    </div>

                    <div className="project-card" onClick={handleiVariWebsite}>
                        <img src={iVari} alt="iVari security systems1" />
                    </div>

                    <div className="project-card" onClick={handleiVariWebsite}>
                        <img src={iVari} alt="iVari security systems1" />
                    </div>

                    <div className="project-card" onClick={handleiVariWebsite}>
                        <img src={iVari} alt="iVari security systems1" />
                    </div>
                </div>
            </div>

            <div className="projects-section" id="projectsSection">
                <div className="projects-container1">
                    <div className="projects-row1">
                        <div className="home-vl"></div>
                        <p>Case studies</p>
                    </div>

                    <div className="projects-row2">
                        <div className="home-vl-hidden"></div>
                        <p>
                            In-depth explorations of my design and development
                            process, showcasing how I tackle
                            <span> challenges </span>and deliver impactful
                            <span> digital solutions</span>.
                        </p>
                    </div>
                </div>

                <div className="projects-container2">
                    <div className="project-card" onClick={handleiVariWebsite}>
                        <img src={iVari} alt="iVari security systems1" />
                    </div>

                    <div className="project-card" onClick={handleiVariWebsite}>
                        <img src={iVari} alt="iVari security systems1" />
                    </div>

                    <div className="project-card" onClick={handleiVariWebsite}>
                        <img src={iVari} alt="iVari security systems1" />
                    </div>

                    <div className="project-card" onClick={handleiVariWebsite}>
                        <img src={iVari} alt="iVari security systems1" />
                    </div>
                </div>
            </div>

            <div className="about" id="about">
                <h2>About</h2>
            </div>

            <div className="contact" id="contact">
                <h2>contact</h2>
            </div>
        </div>
    );
}

export default Home;
