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
import send from "/icons/send.svg";

// background
import iVariCover from "/designs/iVariRevamp/iVariCover.png";
import iVariHRMSCover from "/designs/iVariHRMS/iVariHRMScover.png";
import StonepaperCover from "/designs/Stonepaper/StonepaperCover.png";
import GetmyjobsCover from "/designs/Getmyjobs/GetmyjobsCover.png";
import CampusBuyCover from "/designs/Campusbuy/CampusBuyThumbnail.png";
import CareerpulseappCover from "/designs/Careerpulseapp/Careerpulsethumbnail.png";
import DesignAssignments from "/designs/Netclan/DesignAssignmentsCover.png";
import backgroundGif from "/myImages/Background.gif";

// components
import Footer from "../components/Footer.jsx";
import TextStack from "../components/Text.jsx";
import ImageSlider from "../components/ImageSlider.jsx";

function Home() {
  // images array

  // Animations effect
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    observeElements();
  }, []);

  const navigate = useNavigate();

  // handlers

  const handleiVariWebsite = () => {
    navigate("/iVariRevamp");
  };

  const handleiVariHRMS = () => {
    navigate("/iVariHRMS");
  };

  const handleStonepaper = () => {
    navigate("/stonepaper");
  };

  const handlegetmyjobs = () => {
    navigate("/getmyjobs");
  };

  // contact handler

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "310a6ec8-3b3d-4ce6-b334-8c7152ec6914");

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
      <div className="backgroundImg">
        {/* <img src={backgroundGif} alt="Background image" />; */}
      </div>

      <div className="hero-section" id="heroSection">
        <TextStack />

        <div className="hero-container1">
          <div className="hero-row1">
            <div className="home-vl"></div>
            <p>
              A designer obsessed with creating digital experiences
              <i> and I can code too!</i>
            </p>
          </div>

          <div className="hero-row2">
            <div className="home-vl-hidden"></div>
            <p>
              I believe good design is as<span> simple </span>and
              <span> minimal </span> as possible. Explore my case studies and
              projects to see how I blend
              <span> creativity </span>and
              <span> functionality </span> into seamless user experiences.
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
            <a href="#contactSection" rel="noopener noreferrer">
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
              Here are some of my<span> latest </span>projects where I’ve
              combined design and development to create impactful
              <span> digital experiences</span>. I believe good design is as
            </p>
          </div>
        </div>

        <div className="projects-container2">
          <div
            data-tooltip="iVari Security Systems website revamp"
            className="project-card"
            onClick={handleiVariWebsite}
          >
            <img src={iVariCover} alt="iVari security systems" />
          </div>

          <div
            data-tooltip="iVari hrms portal design & development"
            className="project-card"
            onClick={handleiVariHRMS}
          >
            <img src={iVariHRMSCover} alt="iVari HRMS cover" />
          </div>

          <div
            data-tooltip="StonePaper website design & development"
            className="project-card"
            onClick={handleStonepaper}
          >
            <img src={StonepaperCover} alt="Stone paper cover" />
          </div>

          <div
            data-tooltip="Getmyjobs.in website design & development"
            className="project-card"
            onClick={handlegetmyjobs}
          >
            <img src={GetmyjobsCover} alt="Getmyjobs cover" />
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
              In-depth explorations of my design and development process,
              showcasing how I tackle
              <span> challenges </span>and deliver impactful
              <span> digital solutions</span>.
            </p>
          </div>
        </div>

        <div className="projects-container2">
          <a
            href="https://www.behance.net/gallery/193439937/Campus-Buy"
            target="_blank"
            className="project-card"
            data-tooltip="Product reselling app (Case study)"
          >
            <img src={CampusBuyCover} alt="CampusBuy cover" />
          </a>

          <a
            href="https://www.behance.net/gallery/195561159/Career-pulse"
            target="_blank"
            className="project-card"
            data-tooltip="Interview Preparation app (Design assigmnet)"
          >
            <img src={CareerpulseappCover} alt="Career plus app cover" />
          </a>

          <a
            href="https://www.behance.net/vivektigadi"
            target="_blank"
            className="project-card"
            data-tooltip="Check out my Behance"
          >
            <img src={DesignAssignments} alt="Design assignment cover" />
          </a>
        </div>
      </div>

      <div className="about-section" id="about">
        <div className="about-container1">
          <div className="about-row1">
            <div className="home-vl"></div>
            <p>About</p>
          </div>

          <div className="about-row2">
            <div className="home-vl-hidden"></div>
            <p>
              Hi, I’m Vivek Tigadi, a UI/UX
              <span> Designer </span>and Front-end
              <span> Developer </span>passionate about crafting digital
              experiences that blend aesthetics and functionality. With
              expertise in tools like
              <span> Figma</span>,<span> React.js</span>,<span> Spline</span>,
              <span> Framer </span> and
              <span> Vercel</span>. I bring ideas to life through intuitive
              designs and seamless development.
            </p>
          </div>
        </div>

        <div className="about-row3">
          <div className="about-r3-col1 skills-container">
            <h5>Design skills</h5>
            <ul>
              <li>Design thinking</li>
              <li>User interface</li>
              <li>User experience</li>
              <li>User research</li>
              <li>Prototyping</li>
              <li>Wireframing</li>
              <li>Responsive design</li>
            </ul>
          </div>
          <div className="about-r3-col2 skills-container">
            <h5>Development skills</h5>
            <ul>
              <li>React.js</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className="about-r3-col3 skills-container">
            <h5>Tools</h5>
            <ul>
              <li className="figma">
                <a target="_blank" href="https://www.figma.com/">
                  Figma
                </a>
              </li>
              <li className="vercel">
                <a target="_blank" href="https://vercel.com/">
                  Vercel
                </a>
              </li>
              <li className="spline">
                <a target="_blank" href="https://spline.design/">
                  Spline
                </a>
              </li>
              <li className="framer">
                <a target="_blank" href="https://www.framer.com/">
                  Framer
                </a>
              </li>
              <li className="photopea">
                <a target="_blank" href="https://www.photopea.com/">
                  Photopea
                </a>
              </li>
            </ul>
          </div>
          <div className="about-r3-col4 skills-container">
            <h5>Others</h5>
            <ul>
              <li>Team work</li>
              <li>Documentation</li>
              <li>Brand identity</li>
              <li>Mockups</li>
              <li>Humor</li>
              <li>Photography</li>
            </ul>
          </div>
          <div className="about-r3-col5 skills-container">
            <ImageSlider interval={3000} />
          </div>
        </div>
      </div>

      <div className="experience-section" id="experienceSection">
        <div className="experience-container1">
          <div className="experience-row1">
            <div className="home-vl"></div>
            <p>Experience</p>
          </div>
        </div>

        <div className="work-exp">
          <div className="experience-container2 expDesc">
            <div className="expDesc-row1">
              <h5> UI UX DESIGNER</h5>
              <div className="verticle-line"></div>

              <a href="https://www.ivari.in" target="_blank">
                iVari Security Systems Pvt Ltd
              </a>
              <p>(May 2024 - Mar 2025) </p>
            </div>
            <div className="expDesc-row2">
              <p>
                Designed intuitive and user-centric digital experiences for web
                and mobile platforms. Led the redesign of the company website
                and internal systems, ensuring alignment with the brand’s
                identity. Collaborated with cross-functional teams to deliver
                responsive and functional designs using tools like Figma and
                developed them.
              </p>
            </div>
          </div>

          <div className="experience-container3 expDesc">
            <div className="expDesc-row1">
              <h5>DESIGNE TRAINEE</h5>
              <div className="verticle-line"></div>

              <a href="https://www.ivari.in" target="_blank">
                Designerrs academy
              </a>
              <p>(Oct 2023 - Mar 2024)</p>
            </div>
            <div className="expDesc-row2">
              <p>
                Contributed to the development of dynamic and interactive web
                interfaces using HTML, CSS, JavaScript, and Bootstrap. Worked on
                enhancing the usability and design of client-facing
                applications, focusing on creating responsive and accessible
                user experiences.
              </p>
            </div>
          </div>

          <div className="experience-container4 expDesc">
            <div className="expDesc-row1">
              <h5>FRONT-END DEVELOPER</h5>
              <div className="verticle-line"></div>

              <a href="https://www.ivari.in" target="_blank">
                Hamdan InfoCom
              </a>
              <p>(Oct 2022 - Nov 2022)</p>
            </div>
            <div className="expDesc-row2">
              <p>
                Designed intuitive and user-centric digital experiences for web
                and mobile platforms. Led the redesign of the company website
                and internal systems, ensuring alignment with the brand’s
                identity. Collaborated with cross-functional teams to deliver
                responsive and functional designs using tools like Figma and
                developed them.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-section" id="contactSection">
        <div className="projects-container1">
          <div className="contact-row1">
            <div className="home-vl"></div>
            <p>Contact</p>
          </div>

          <div className="contact-row2">
            <div className="home-vl-hidden"></div>
            <p>
              Have a question, opportunity, or just want to say hello? Fill out
              the form below, and I'll get back to you as soon as possible!
            </p>
          </div>
        </div>

        <form className="contact-row3" onSubmit={onSubmit}>
          <div className="contact-form-row1">
            <input type="text" placeholder="NAME" required name="name" />
            <input type="email" placeholder="EMAIL" required name="email" />
            <textarea placeholder="MESSAGE" required name="message"></textarea>
          </div>
          <button type="submit" className="contact-cta">
            <img src={send} alt="->" />
            SEND
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
