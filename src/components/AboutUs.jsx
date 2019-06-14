import React, { Component } from "react";

import image_1 from "../assets/img/image_1.jpg";
import image_2 from "../assets/img/image_2.jpg";
import image_3 from "../assets/img/image_3.jpg";
import image_4 from "../assets/img/image_4.jpg";
import image_5 from "../assets/img/image_5.jpg";
import image_6 from "../assets/img/image_6.jpg";
import person_1 from "../assets/img/person_1.jpg";

export default class AboutUs extends Component {
  render() {
    return (
      <div id="bg-light-uniq" className="bg-light">
        <section className="ftco-section-featured ftco-animate">
          <div className="container-fluid" data-scrollax-parent="true">
            <div
              className="row no-gutters d-flex align-items-center"
              data-scrollax=" properties: { translateY: '-30%'}"
            >
              <div className="col-md-3 mb-3">
                <a href="#" className="featured-img">
                  <div className="text-1 p-4 d-flex align-items-center">
                    <h3>
                      The Verge
                      <br />
                      <span className="tag">Website</span>
                    </h3>
                  </div>
                  <img src={image_1} className="img-fluid" alt="" />
                  <div className="text p-4 d-flex align-items-center">
                    <div className="user d-flex align-items-center">
                      <div
                        className="user-img mr-3"
                        style={{
                          backgroundImage: `url(${image_1})`
                        }}
                      />
                      <h3>
                        John Bruce <br />
                        <span className="position">Designer</span>
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-md-6">
                <div className="row no-gutters">
                  <div className="col-md-12">
                    <div className="row no-gutters d-flex align-items-end">
                      <div className="col-md-8">
                        <a href="#" className="featured-img">
                          <div className="text-1 p-4 d-flex align-items-center">
                            <h3>
                              Racks
                              <br />
                              <span className="tag">Website</span>
                            </h3>
                          </div>
                          <img src={image_5} className="img-fluid" alt="" />
                          <div className="text p-4 d-flex align-items-center">
                            <div className="user d-flex align-items-center">
                              <div
                                className="user-img mr-3"
                                style={{
                                  backgroundImage: `url(${person_1})`
                                }}
                              />
                              <h3>
                                John Bruce <br />
                                <span className="position">Designer</span>
                              </h3>
                            </div>
                          </div>
                        </a>
                      </div>

                      <div className="col-md-4">
                        <a href="#" className="featured-img">
                          <div className="text-1 p-4 d-flex align-items-center">
                            <h3>
                              Zendesk
                              <br />
                              <span className="tag">Website</span>
                            </h3>
                          </div>
                          <img src={image_4} className="img-fluid" alt="" />
                          <div className="text p-4 d-flex align-items-center">
                            <div className="user d-flex align-items-center">
                              <div
                                className="user-img mr-3"
                                style={{
                                  backgroundImage: `url(${person_1})`
                                }}
                              />
                              <h3>
                                John Bruce <br />
                                <span className="position">Designer</span>
                              </h3>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="row no-gutters d-flex align-items-start">
                      <div className="col-md-8">
                        <a href="#" className="featured-img">
                          <div className="text-1 p-4 d-flex align-items-center">
                            <h3>
                              Curator
                              <br />
                              <span className="tag">Website</span>
                            </h3>
                          </div>
                          <img src={image_6} className="img-fluid" alt="" />
                          <div className="text p-4 d-flex align-items-center">
                            <div className="user d-flex align-items-center">
                              <div
                                className="user-img mr-3"
                                style={{
                                  backgroundImage: `url(${person_1})`
                                }}
                              />
                              <h3>
                                John Bruce <br />
                                <span className="position">Designer</span>
                              </h3>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-4">
                        <a href="#" className="featured-img">
                          <div className="text-1 p-4 d-flex align-items-center">
                            <h3>
                              Tasty
                              <br />
                              <span className="tag">Website</span>
                            </h3>
                          </div>
                          <img src={image_3} className="img-fluid" alt="" />
                          <div className="text p-4 d-flex align-items-center">
                            <div className="user d-flex align-items-center">
                              <div
                                className="user-img mr-3"
                                style={{
                                  backgroundImage: `url(${person_1})`
                                }}
                              />
                              <h3>
                                John Bruce <br />
                                <span className="position">Designer</span>
                              </h3>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <a href="#" className="featured-img">
                  <div className="text-1 p-4 d-flex align-items-center">
                    <h3>
                      Voyage
                      <br />
                      <span className="tag">Website</span>
                    </h3>
                  </div>
                  <img src={image_2} className="img-fluid" alt="" />
                  <div className="text p-4 d-flex align-items-center">
                    <div className="user d-flex align-items-center">
                      <div
                        className="user-img mr-3"
                        style={{
                          backgroundImage: `url(${person_1})`
                        }}
                      />
                      <h3>
                        John Bruce <br />
                        <span className="position">Designer</span>
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="row mt-5 d-flex justify-content-center">
              <div className="col-md-8 text-center heading-section ftco-animate">
                <h1 className="h5">
                  «Сфера образования - это одна из наших ключевых сфер, где мы
                  сотрудничаем с правительством Кыргызстана. Это пилотный
                  проект, такие нечасто реализуются даже на международном
                  уровне. Мы задействованы в сфере образования, потому что это
                  приносит свои плоды в будущем. Чем более общество
                  образованное, тем лучше будет развиваться страна. Этот проект
                  небольшой, но он имеет позитивный эффект и положительно влияет
                  на участников. Они получили возможность использовать свой
                  потенциал, чтобы изменить свою жизнь» <br />
                  <span style={{ color: "#7B7B7B" }}>
                    Посол Европейского Союза в КР, Эдуард Ауэр
                  </span>
                </h1>
                {/* <p>
                    <a href="#" className="btn btn-primary mt-3 py-3 px-5">
                      Get in touch
                    </a>
                  </p> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
