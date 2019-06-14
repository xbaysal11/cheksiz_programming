import React, { Component } from "react";

import person_1 from "../assets/img/person_1.jpg";
import person_2 from "../assets/img/person_2.jpg";

export default class Reviews extends Component {
  render() {
    return (
      <section className="ftco-section testimony-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-md-7 text-center heading-section ftco-animate">
              <span className="subheading">Customer Says</span>
              <h2 className="mb-4">Our satisfied customer says</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in
              </p>
            </div>
          </div>
          <div className="row ftco-animate">
            <div className="col-md-12">
              <div className="carousel-testimony owl-carousel owl-theme ftco-owl">
                <div className="item text-center">
                  <div className="testimony-wrap p-4 pb-5">
                    <div
                      className="user-img mb-4"
                      style={{
                        backgroundImage: `url(${person_1})`
                      }}
                    >
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left" />
                      </span>
                    </div>
                    <div className="text">
                      <p className="mb-5">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <p className="name">Dennis Green</p>
                      <span className="position">Marketing Manager</span>
                    </div>
                  </div>
                </div>
                <div className="item text-center">
                  <div className="testimony-wrap p-4 pb-5">
                    <div
                      className="user-img mb-4"
                      style={{
                        backgroundImage: `url(${person_2})`
                      }}
                    >
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left" />
                      </span>
                    </div>
                    <div className="text">
                      <p className="mb-5">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <p className="name">Dennis Green</p>
                      <span className="position">Interface Designer</span>
                    </div>
                  </div>
                </div>
                <div className="item text-center">
                  <div className="testimony-wrap p-4 pb-5">
                    <div
                      className="user-img mb-4"
                      style={{
                        backgroundImage: `url(${person_2})`
                      }}
                    >
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left" />
                      </span>
                    </div>
                    <div className="text">
                      <p className="mb-5">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <p className="name">Dennis Green</p>
                      <span className="position">UI Designer</span>
                    </div>
                  </div>
                </div>
                <div className="item text-center">
                  <div className="testimony-wrap p-4 pb-5">
                    <div
                      className="user-img mb-4"
                      style={{
                        backgroundImage: `url(${person_1})`
                      }}
                    >
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left" />
                      </span>
                    </div>
                    <div className="text">
                      <p className="mb-5">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <p className="name">Dennis Green</p>
                      <span className="position">Web Developer</span>
                    </div>
                  </div>
                </div>
                <div className="item text-center">
                  <div className="testimony-wrap p-4 pb-5">
                    <div
                      className="user-img mb-4"
                      style={{
                        backgroundImage: `url(${person_1})`
                      }}
                    >
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left" />
                      </span>
                    </div>
                    <div className="text">
                      <p className="mb-5">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <p className="name">Dennis Green</p>
                      <span className="position">System Analytics</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
