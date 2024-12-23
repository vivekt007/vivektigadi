import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Project.css";

// js files
import { observeElements } from "../Javascript/animation.js";

// designs
import getmyjobsHome from "/designs/Getmyjobs/Homepage.png";
import GetmyJobsLogin from "/designs/Getmyjobs/Loginpage.png";

// components
import Footer from "../components/Footer.jsx";

function Getmyjobs() {
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
                    <h1>Getmyjobs.in</h1>
                    {/* <a href="https://www.ivari.in" target="_blank">
                        <img src={linkIcon} alt="link" />
                        <span>website</span>
                    </a> */}
                </div>
                {/* <a
                    href="/documents/iVariRevampDoc.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="document-link"
                >
                    <img src={fileIcon} alt="File" />
                    <span>DOCUMENTATION</span>
                </a> */}
            </div>

            <div className="project-row">
                <div className="project-heading">
                    <div className="home-vl"></div>
                    <p>Requirement Gathering</p>
                </div>

                <ul className="project-text">
                    <li>
                        Partnered with stakeholders to identify the needs of two
                        key user groups: job seekers and recruiters.
                    </li>
                    <li>
                        Defined separate workflows for each user group to ensure
                        a tailored experience, such as quick job search for
                        seekers and streamlined posting tools for recruiters.
                    </li>
                    <li>
                        Conducted user interviews and market research to
                        understand industry trends and user pain points.
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
                        Created comprehensive Figma designs focusing on
                        accessibility and simplicity, particularly for
                        non-technical users.
                    </li>
                    <li>
                        Developed interfaces for key features like search
                        filters, application tracking, and profile management.
                    </li>
                    <li>
                        Designed a responsive layout optimized for both web and
                        mobile users to maximize usability.
                    </li>
                </ul>
            </div>

            <div className="project-image-row">
                <div className="project-row-col">
                    <img src={GetmyJobsLogin} alt="Image 2" />
                </div>
                <div className="project-row-col">
                    <img src={getmyjobsHome} alt="Image 1" />
                    {/* <a
                        className="web-link"
                        href="https://www.ivari.in"
                        target="_blank"
                    >
                        <span>Website</span>
                        <img src={linkIcon} alt="link" />
                    </a> */}
                </div>
            </div>

            <div className="project-row">
                <div className="project-heading">
                    <div className="home-vl"></div>
                    <p>Development</p>
                </div>

                <ul className="project-text">
                    <li>
                        Implemented the front-end using HTML, CSS, and
                        JavaScript to deliver fast-loading, responsive, and
                        visually engaging pages.
                    </li>
                    <li>
                        Incorporated features like real-time updates for job
                        applications and intuitive recruiter dashboards.
                    </li>
                    <li>
                        Ensured browser compatibility and conducted extensive
                        testing for a seamless experience across different
                        platforms.
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
                        Delivered an innovative job portal that offered ease of
                        use for job seekers and recruiters, successfully
                        connecting talent with opportunity. (Full designs are
                        not shareable due to NDA)
                    </li>
                </ul>
            </div>

            <Footer />
        </div>
    );
}

export default Getmyjobs;
