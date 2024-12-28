import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Project.css";

// js files
import { observeElements } from "../Javascript/animation.js";

// designs
import StonepaperHome from "/designs/Stonepaper/Home.png";
import stonePaperStyleGuide from "/designs/Stonepaper/StyleGuide.png";

// components
import Footer from "../components/Footer.jsx";

function StonePaper() {
    // Scroll to top on component load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Animations effect
    useEffect(() => {
        observeElements();
    }, []);

    const navigate = useNavigate();

    const [result, setResult] = useState("");

    return (
        <div className="project blur">
            <div className="project-title" id="heroSection">
                <div className="project-name">
                    <h1>StonePaper</h1>
                </div>
            </div>

            <div className="project-row">
                <div className="project-heading">
                    <div className="home-vl"></div>
                    <p>Brand identity</p>
                </div>

                <ul className="project-text">
                    <li>
                        Created a logo that encapsulates the brand’s values of
                        sustainability and luxury.
                    </li>
                    <li>
                        Designed mockups emphasizing a minimalist aesthetic that
                        resonated with a premium target audience.
                    </li>
                    <li>
                        Developed branding guidelines to maintain consistency
                        across digital and physical touchpoints.
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
                        Crafted high-fidelity designs in Figma, focusing on a
                        clean, modern layout that highlighted the brand's unique
                        product offerings.
                    </li>
                    <li>
                        Paid attention to details like elegant typography, ample
                        white space, and visually appealing product displays.
                    </li>
                    <li>
                        Designed intuitive navigation to help users explore
                        products effortlessly, driving engagement and
                        conversions.
                    </li>
                </ul>
            </div>

            <div className="project-image-row">
                <div className="project-row-col">
                    <img src={StonepaperHome} alt="Image 1" />
                </div>
                <div className="project-row-col">
                    <img src={stonePaperStyleGuide} alt="Image 1" />
                </div>
            </div>

            <div className="project-row">
                <div className="project-heading">
                    <div className="home-vl"></div>
                    <p>Development</p>
                </div>

                <ul className="project-text">
                    <li>
                        Implemented the front-end using React.js, utilizing
                        reusable components to streamline updates and
                        scalability.
                    </li>
                    <li>
                        Focused on creating a fully responsive design optimized
                        for desktop, tablet, and mobile devices.
                    </li>
                    <li>
                        Integrated advanced interactions to enhance user
                        engagement, such as hover effects and animated
                        transitions.
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
                        Launched a sleek and user-friendly e-commerce website
                        that effectively communicated the brand’s premium
                        positioning while boosting user engagement. (Full
                        designs are not shareable due to NDA)
                    </li>
                </ul>
            </div>

            <Footer />
        </div>
    );
}

export default StonePaper;
