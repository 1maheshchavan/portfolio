import React from "react";

const Skills = () => {
  return (
    <section
      className="skills"
      id="skills"
      style={{ justifyContent: "center" }}
    >
      <h2 className="heading">
        <i
          className="fas fa-laptop-code"
          style={{ justifyContent: "center" }}
        ></i>{" "}
        <center>Skills</center>
      </h2>
      <br />
      <div
        className="main-skill-container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {/* First row of skills */}
        <div className="skill-box">
          <img
            className="skill-img"
            src="https://img.icons8.com/color/48/000000/html-5--v1.png"
            alt="HTML5"
          />
          <span className="skil-hea">HTML 5</span>
        </div>
        <div className="skill-box">
          <img
            className="skill-img"
            src="https://img.icons8.com/color/48/000000/css3.png"
            alt="CSS3"
          />
          <span className="skil-hea">CSS</span>
        </div>
        <div className="skill-box">
          <img
            className="skill-img"
            src="https://img.icons8.com/color/48/000000/javascript--v1.png"
            alt="JavaScript"
          />
          <span className="skil-hea">JavaScript</span>
        </div>
      </div>
      <div
        className="main-skill-container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {/* Second row of skills */}
        <div className="skill-box">
          <img
            className="skill-img"
            src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
            alt="ReactJS"
          />
          <span className="skil-hea">ReactJS</span>
        </div>
        
        <div className="skill-box">
          <img
            className="skill-img"
            src="https://img.icons8.com/color/48/bootstrap--v2.png"
            alt="MongoDB"
          />
          <span className="skil-hea">bootstrap</span>
        </div>
        <div className="skill-box">
          <img
            className="skill-img"
            src="https://img.icons8.com/fluency/48/my-sql.png"
            alt="MongoDB"
          />
          <span className="skil-hea">MY SQL</span>
        </div>
      </div>
      <div
        className="main-skill-container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {/* Third row of skills */}
        <div className="skill-box">
          <img
            className="skill-img"
            src="https://img.icons8.com/color/48/000000/nodejs.png"
            alt="NodeJS"
          />
          <span className="skil-hea">NodeJS</span>
        </div>
        <div className="skill-box">
          <img
            className="skill-img"
            src="https://img.icons8.com/fluency/48/000000/node-js.png"
            alt="ExpressJS"
          />
          <span className="skil-hea">ExpressJS</span>
        </div>
        <div className="skill-box">
          <img
            className="skill-img"
            src="https://img.icons8.com/color/48/mongo-db.png" alt="mongo-db"/>
            <span className="skil-hea">Mongo db</span>
        </div>
      
        {/* Add another skill box here */}
      </div>
    </section>
  );
};

export default Skills;
