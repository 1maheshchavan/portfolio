import React from "react";

const Education = () => {
  return (
    <section className="education" id="education">
      <h1 className="heading">
        <i className="fas fa-graduation-cap"></i> My <span>Education</span>
      </h1>
      <p className="quote">
        Education is not the learning of facts, but the training of the mind to
        think.
      </p>
      <div className="box-container">
        <div className="box">
          <div className="image">
            <img src="" alt="" />
          </div>
          <div className="content">
            <h3 className="educa">MCA | Master of Computer Applications</h3>
            <p className="clg">
              Dattakala Group of Institutions, Swami-Chincholi, Tal.Daund
              Dist.Pune
            </p>
            <p className="sppu">Savitribai Phule Pune University (SPPU)</p>
            <h4>2023-2025 | Running</h4>
          </div>
        </div>

        <div className="box">
          <div className="content">
            <h3 className="educa">BCA | Bachelor of Computer Applications</h3>
            <p className="clg">Dada Patil Mahavidyalay, Tal.Karjat Dist.Ahilyanagar</p>
            <p className="sppu">Savitribai Phule Pune University (SPPU)</p>
            <h4>2021-2023 | Completed</h4>
          </div>
        </div>

        <div className="box">
          <div className="content">
            <h3 className="educa">HSC | Dada Patil Mahavidyalay Karjat, Dist.Ahilyanagar</h3>
            <p className="sppu">
              Maharashtra State Board of Secondary and Higher Secondary
              Education, Pune
            </p>
            <h4>2019-2020 | Completed</h4>
          </div>
        </div>

        <div className="box">
          <div className="content">
            <h3 className="educa">SSC | Shri Siddheshwar Vidyalaya, Bhambore</h3>
            <p className="sppu">
              Maharashtra State Board of Secondary and Higher Secondary
              Education, Pune
            </p>
            <h4>2017-2018 | Completed</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;