import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/project.css";
import Swal from "sweetalert2";

// js files
import { observeElements } from "../Javascript/animation.js";

// designs
import iVariHRMSHome from "/designs/iVariHRMS/Home.png";
import iVariHRMSSalary from "/designs/iVariHRMS/Salaryslips.png";
import iVariHRMSLeave from "/designs/iVariHRMS/Leave.png";
import iVariHRMSPunchIn from "/designs/iVariHRMS/PunchIn.png";
import iVariHRMSOutReach from "/designs/iVariHRMS/OutReach.png";
import iVariHRMSSales from "/designs/iVariHRMS/SalesUpload.png";
import iVariHRMSAttendance from "/designs/iVariHRMS/HRMSAttendance.png";
import iVariHRMSDashboard from "/designs/iVariHRMS/HRMSDashboard.png";
import iVariHRMSDashboardSalary from "/designs/iVariHRMS/HRMSDashboardSalary.png";
import iVariHRMSDashboardLeave from "/designs/iVariHRMS/HRMSDashboardLeave.png";
import iVariHRMSDashboardSales from "/designs/iVariHRMS/HRMSDashboardSales.png";
import iVariHRMSDashboardOutReach from "/designs/iVariHRMS/HRMSDashboardOutReach.png";

// components
import Footer from "../components/Footer.jsx";

function IvariHRMS() {
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
                    <h1>iVari HRMS</h1>
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
                        Worked closely with the HR team to define core features
                        and workflows for employee and admin dashboards.
                    </li>
                    <li>
                        Conducted detailed analysis of existing HR processes,
                        identifying pain points such as manual leave tracking,
                        document management inefficiencies, and fragmented
                        communication channels.
                    </li>
                    <li>
                        Outlined a comprehensive list of functionalities to
                        ensure a smoother and more efficient HR workflow.
                    </li>
                </ul>
            </div>

            <div className="project-row">
                <div className="project-heading">
                    <div className="home-vl"></div>
                    <p>Research & Planning</p>
                </div>

                <ul className="project-text">
                    <li>
                        Designed user flows for both employee and admin
                        personas, ensuring seamless navigation and role-specific
                        accessibility.
                    </li>
                    <li>
                        Strategically planned features like attendance tracking,
                        leave applications, document downloads, and sales data
                        updates for usability and practicality.
                    </li>
                    <li>
                        Mapped out a modular system to accommodate future
                        scalability and additional features.
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
                        Designed high-fidelity Web and mobile pages in Figma
                        tailored to distinct workflows for employees and
                        adminis.
                    </li>
                    <li>
                        Ensured design consistency through standardized
                        typography, colors, and layout grids.
                    </li>
                    <li>
                        Focused on a user-centric approach, prioritizing
                        simplicity and ease of use across all devices.
                    </li>
                </ul>
            </div>

            <div className="project-image-row">
                <div className="project-row-col">
                    <img src={iVariHRMSHome} alt="Image 1" />
                    <img src={iVariHRMSPunchIn} alt="Image 4" />
                    <img src={iVariHRMSLeave} alt="Image 3" />
                    <img src={iVariHRMSSales} alt="Image 5" />
                    <img src={iVariHRMSSalary} alt="Image 2" />
                    <img src={iVariHRMSOutReach} alt="Image 6" />
                </div>
                <div className="project-row-col">
                    <img src={iVariHRMSDashboard} alt="Image 7" />
                    <img src={iVariHRMSAttendance} alt="Image 8" />
                    <img src={iVariHRMSDashboardLeave} alt="Image 9" />
                    <img src={iVariHRMSDashboardSales} alt="Image 10" />
                    <img src={iVariHRMSDashboardSalary} alt="Image 11" />
                    <img src={iVariHRMSDashboardOutReach} alt="Image 11" />

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
                        Built the system’s front-end with HTML, CSS, and
                        JavaScript, ensuring a responsive and visually appealing
                        interface.
                    </li>
                    <li>
                        Integrated interactive features such as dynamic
                        dashboards, real-time data updates, and intuitive
                        navigation tools.
                    </li>
                    <li>
                        Ensured cross-browser and multi-device compatibility for
                        flawless user experience.
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
                        Delivered a fully functional HR management portal that
                        simplified routine tasks, enhanced communication between
                        employees and admins, and streamlined overall
                        operations.
                    </li>
                </ul>
            </div>

            <Footer />
        </div>
    );
}

export default IvariHRMS;
