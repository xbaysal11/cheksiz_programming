import React, { Component } from "react";

import Fade from "react-reveal/Fade";

export default class Methodic extends Component {
  render() {
    return (
      <Fade>
        <section className="ftco-section-parallax">
          <div className="parallax-img d-flex align-items-center">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
                  <h2>Методика обучения</h2>
                  <p>
                    Методика обучения: лекции и презентации, практические
                    занятия, разработка проектов.
                    <br />
                    Язык проведения курса - русский и кыргызский.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>
    );
  }
}
