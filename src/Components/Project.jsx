import React from "react";
import output from "./images/portlogo.jpg.png";
import output2 from "./images/crudlogo.jpg.png";

export default function Projects() {
  return (
    <>
      <section className="project" id="Project">
        <h2 className="heading-projects">Projects</h2>
        <div
          id="carouselExampleControlsNoTouching"
          className="carousel slide"
          data-bs-touch="false"
          data-bs-interval="false"
        >
          <div className="carousel-inner">
            <div className="carousel-item">
              <div className="card mb-3" style={{ maxWidth: "900px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={output2} className="img-fluid rounded-start" alt="CRUD Project" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">CRUD</h5>
                      <p className="card-text">
                        In this CRUD project, we can add, update, read, delete data. It also has database connectivity, so that the data is stored on the database.
                      </p>
                      <p className="card-texts">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                      <div className="button-container">
                        <a
                          href="https://github.com/1maheshchavan/CRUD"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-button"
                        >
                          View Project
                        </a>
                        <a
                          href="https://github.com/1maheshchavan/CRUD"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-button"
                        >
                          Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-3" style={{ maxWidth: "900px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={output} className="img-fluid rounded-start" alt="Portfolio Project" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Portfolio</h5>
                      <p className="card-text">
                        Presenting my portfolio website. Take a tour and explore my world of creativity! Designed and implemented user interfaces.
                      </p>
                      <p className="card-texts">
                        <small className="text-muted">
                          Last updated 5 mins ago
                        </small>
                      </p>
                      <div className="button-container">
                        <a
                          href="https://example.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-button"
                        >
                          View Project
                        </a>
                        <a
                          href="https://example.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-button"
                        >
                          Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </section>
    </>
  );
}