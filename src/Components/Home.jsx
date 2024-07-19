import React from "react";
import Navbar from "./Navbar.jsx";
import mahesh from "./images/mahesh.jpg";
import AboutMe from "./AboutMe.jsx";
import Projects from "./Project.jsx";
import Skills from "./Skills.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import Mahesh_Chavan from "./1Mahesh_Chavan-Resume-.pdf";
import Education from "./Education.jsx";
import Footercredit from "./Footercredit.jsx";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="home" id="Home">
        <div className="home-content">
          <h3>
            Hello, It's Me<span className="wave">👋</span>
          </h3>
          <h1>Mahesh Chavan</h1>

          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/mahesh-chavan-2a6b99249"
              target="blank"
            >
              <i class="bx bxl-linkedin"></i>
            </a>
              <a
                href="https://youtube.com/@code_with_mahesh_?si=4CVVLkRhw2KviIp7" target="black">
                  <i class="bx bxl-youtube"></i>
                </a>
           
            <a
              href="https://instagram.com/mahesh_chavan___?igshid=MzRlODBiNWFlZA=="
              target="blank"
            >
              <i class="bx bxl-instagram"></i>
            </a>
            <a href="https://github.com/1maheshchavan" target="blank">
              <i class="bx bxl-github"></i>
            </a>
          </div>
          <a href={Mahesh_Chavan} target="blank" className="btn">
            Download Resume
          </a>
        </div>

        <div className="home-img">
          <img src={mahesh} alt=""></img>
        </div>
      </section>

      <AboutMe />

      <Projects />

      <Skills />

      <Education />

      <Contact />

      <Footer />

      <Footercredit />
    </>
  );
}
