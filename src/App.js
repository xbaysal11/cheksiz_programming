import React, { Component } from "react";
import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import image_1 from "./assets/img/image_1.jpg";
import image_2 from "./assets/img/image_2.jpg";
import image_3 from "./assets/img/image_3.jpg";
import image_4 from "./assets/img/image_4.jpg";
import image_5 from "./assets/img/image_5.jpg";
import image_6 from "./assets/img/image_6.jpg";
import person_1 from "./assets/img/person_1.jpg";
import person_2 from "./assets/img/person_2.jpg";
import person_3 from "./assets/img/person_3.jpg";
import person_4 from "./assets/img/person_4.jpg";
import work_1 from "./assets/img/work-1.jpg";
import work_2 from "./assets/img/work-2.jpg";
import work_3 from "./assets/img/work-3.jpg";
import work_4 from "./assets/img/work-4.jpg";
import work_5 from "./assets/img/work-5.jpg";
import work_6 from "./assets/img/work-6.jpg";
import about from "./assets/img/about.jpg";
import bg_1 from "./assets/img/bg_1.jpg";
import bg_2 from "./assets/img/bg_2.jpg";
import dashboard_full_1 from "./assets/img/dashboard_full_1.jpg";
import dashboard_full_2 from "./assets/img/dashboard_full_2.jpg";
import dashboard_full_3 from "./assets/img/dashboard_full_3.jpg";
import loc from "./assets/img/loc.png";
import eu from "./assets/img/27018.jpg";

library.add(fab, fas);

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav
          // className="navbar  navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light navbar-fixed-top"
          className="navbar navbar-default navbar-expand-lg  ftco_navbar ftco-navbar-light navbar-fixed-top"
          id="ftco-navbar"
        >
          <div className="container">
            {/* <a className="navbar-brand" href="index.html">
              KSSDA
            </a> */}
            <a class="navbar-brand" href="/">
              <svg
                id="logo_kssda"
                width="73px"
                height="30px"
                viewBox="0 0 73 30"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
              >
                {/* <!-- Generator: Sketch 48.1 (47250) - http://www.bohemiancoding.com/sketch --> */}
                <title>Logo</title>
                <desc>Created with Sketch.</desc>
                <defs />
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="Kssda_logo"
                    transform="translate(-104.000000, -98.000000)"
                    fill="#FFFFFF"
                  >
                    <g id="Logo" transform="translate(104.000000, 98.000000)">
                      <polygon
                        id="Fill-147"
                        points="27.7162025 8.52816456 72.4891139 8.52816456 72.4891139 6.39607595 27.7162025 6.39607595"
                      />
                      <polygon
                        id="Fill-148"
                        points="27.7162025 14.9242405 57.5650633 14.9242405 57.5650633 12.7921519 27.7162025 12.7921519"
                      />
                      <polygon
                        id="Fill-149"
                        points="8.52797468 10.6600633 27.7162025 10.6600633 27.7162025 8.52816456 8.52797468 8.52816456"
                      />
                      <polygon
                        id="Fill-150"
                        points="21.3201266 17.0561392 27.7162025 17.0561392 27.7162025 14.9242405 21.3201266 14.9242405"
                      />
                      <polygon
                        id="Fill-151"
                        points="10.6598734 29.8482911 27.7162025 29.8482911 27.7162025 27.7163924 10.6598734 27.7163924"
                      />
                      <polygon
                        id="Fill-152"
                        points="27.7162025 27.7163924 34.1122785 27.7163924 34.1122785 25.5843038 27.7162025 25.5843038"
                      />
                      <polygon
                        id="Fill-153"
                        points="0 23.4522152 27.7162025 23.4522152 27.7162025 21.3203165 0 21.3203165"
                      />
                      <polygon
                        id="Fill-154"
                        points="27.7162025 21.3203165 44.7723418 21.3203165 44.7723418 19.1882278 27.7162025 19.1882278"
                      />
                      <polygon
                        id="Fill-155"
                        points="27.7162025 2.13208861 63.96 2.13208861 63.96 0 27.7162025 0"
                      />
                      <polygon
                        id="Fill-156"
                        points="14.9240506 4.26398734 27.7162025 4.26398734 27.7162025 2.13208861 14.9240506 2.13208861"
                      />
                    </g>
                  </g>
                </g>
              </svg>
              {/* <svg class="hidden" id="logo_kssda_color" width="73px" height="30px" viewBox="0 0 73 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                <!-- Generator: Sketch 48.1 (47250) - http://www.bohemiancoding.com/sketch -->
                <title>logo_color</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="logo_color">
                        <polygon id="Fill-147" fill="#DA116F" points="27.7162025 8.52816456 72.4891139 8.52816456 72.4891139 6.39607595 27.7162025 6.39607595"></polygon>
                        <polygon id="Fill-148" fill="#802C7C" points="27.7162025 14.9242405 57.5650633 14.9242405 57.5650633 12.7921519 27.7162025 12.7921519"></polygon>
                        <polygon id="Fill-149" fill="#DA116F" points="8.52797468 10.6600633 27.7162025 10.6600633 27.7162025 8.52816456 8.52797468 8.52816456"></polygon>
                        <polygon id="Fill-150" fill="#802C7C" points="21.3201266 17.0561392 27.7162025 17.0561392 27.7162025 14.9242405 21.3201266 14.9242405"></polygon>
                        <polygon id="Fill-151" fill="#802C7C" points="10.6598734 29.8482911 27.7162025 29.8482911 27.7162025 27.7163924 10.6598734 27.7163924"></polygon>
                        <polygon id="Fill-152" fill="#802C7C" points="27.7162025 27.7163924 34.1122785 27.7163924 34.1122785 25.5843038 27.7162025 25.5843038"></polygon>
                        <polygon id="Fill-153" fill="#DA116F" points="0 23.4522152 27.7162025 23.4522152 27.7162025 21.3203165 0 21.3203165"></polygon>
                        <polygon id="Fill-154" fill="#DA116F" points="27.7162025 21.3203165 44.7723418 21.3203165 44.7723418 19.1882278 27.7162025 19.1882278"></polygon>
                        <polygon id="Fill-155" fill="#802C7C" points="27.7162025 2.13208861 63.96 2.13208861 63.96 0 27.7162025 0"></polygon>
                        <polygon id="Fill-156" fill="#802C7C" points="14.9240506 4.26398734 27.7162025 4.26398734 27.7162025 2.13208861 14.9240506 2.13208861"></polygon>
                    </g>
                </g>
            </svg> */}
              <span style={{ fontSize: "0.8em", margin: "0 10px 0 10px" }}>
                KSSDA
              </span>
              <img
                style={{
                  width: "4.2em",
                  height: "2.2em"
                }}
                src={eu}
              />
              <div class="ripple-container" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#ftco-nav"
              aria-controls="ftco-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon
                icon={["fas", "bars"]}
                className="align-self-center"
              />{" "}
              Меню
            </button>

            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a href="index.html" className="nav-link">
                    О нас
                  </a>
                </li>
                <li className="nav-item">
                  <a href="about.html" className="nav-link">
                    Цели проекта
                  </a>
                </li>
                <li className="nav-item">
                  <a href="services.html" className="nav-link">
                    Программа
                  </a>
                </li>
                <li className="nav-item">
                  <a href="blog.html" className="nav-link">
                    Галлерея
                  </a>
                </li>
                <li className="nav-item">
                  <a href="blog.html" className="nav-link">
                    Отзывы
                  </a>
                </li>
                <li className="nav-item">
                  <a href="contact.html" className="nav-link">
                    Контакты
                  </a>
                </li>
                {/* <li className="nav-item cta">
                  <a href="contact.html" className="nav-link">
                    <span>Get in touch</span>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>

        <div className="hero-wrap js-fullheight">
          <div className="overlay" />
          <div id="particles-js" />
          <div className="container">
            <div
              className="row no-gutters slider-text align-items-center justify-content-center"
              data-scrollax-parent="true"
            >
              <div
                className="col-md-6 ftco-animate text-center"
                data-scrollax=" properties: { translateY: '70%' }"
              >
                <h1
                  className="mb-4"
                  data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
                >
                  В Кыргызстане{" "}
                  <span className="text-highl">
                    <strong> 28 200 тысячи</strong>
                  </span>{" "}
                  детей младше 18 лет с ограниченными возможностями здоровья, и
                  только у{" "}
                  <span className="text-highl">
                    <strong>28%</strong>
                  </span>{" "}
                  из них есть доступ к образованию.
                </h1>
                <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
                  <a
                    href="#"
                    className="btn btn-primary btn-outline-white px-5 py-3"
                  >
                    Get in touch
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

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
                    образованное, тем лучше будет развиваться страна. Этот
                    проект небольшой, но он имеет позитивный эффект и
                    положительно влияет на участников. Они получили возможность
                    использовать свой потенциал, чтобы изменить свою жизнь»{" "}
                    <br />
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

        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-5">
              <div className="col-md-6 text-center heading-section ftco-animate">
                <span className="subheading">Our Services</span>
                <h2 className="mb-4">
                  Web &amp; Mobile app design, bring your ideas to life
                </h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services d-block text-center">
                  <div className="d-flex justify-content-center">
                    <div className="icon color-3 d-flex justify-content-center mb-3">
                      <span>
                        <FontAwesomeIcon
                          icon={["fas", "lightbulb"]}
                          className="align-self-center"
                          size="3x"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="media-body p-2 mt-3">
                    <h3 className="heading">Strategy</h3>
                    <p>
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services d-block text-center">
                  <div className="d-flex justify-content-center">
                    <div className="icon color-1 d-flex justify-content-center mb-3">
                      <span>
                        <FontAwesomeIcon
                          icon={["fas", "laptop"]}
                          className="align-self-center"
                          size="3x"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="media-body p-2 mt-3">
                    <h3 className="heading">Design</h3>
                    <p>
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services d-block text-center">
                  <div className="d-flex justify-content-center">
                    <div className="icon color-2 d-flex justify-content-center mb-3">
                      <span>
                        <FontAwesomeIcon
                          icon={["fas", "cog"]}
                          className="align-self-center"
                          size="3x"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="media-body p-2 mt-3">
                    <h3 className="heading">Development</h3>
                    <p>
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services d-block text-center">
                  <div className="d-flex justify-content-center">
                    <div className="icon color-4 d-flex justify-content-center mb-3">
                      <span className="align-self-center icon-live_help" />
                      <span>
                        <FontAwesomeIcon
                          icon={["fas", "question"]}
                          className="align-self-center"
                          size="3x"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="media-body p-2 mt-3">
                    <h3 className="heading">Help &amp; Supports</h3>
                    <p>
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-section-parallax">
          <div className="parallax-img d-flex align-items-center">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
                  <h2>Subcribe to our Newsletter</h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in
                  </p>
                  <div className="row d-flex justify-content-center mt-5">
                    <div className="col-md-6">
                      <form action="#" className="subscribe-form">
                        <div className="form-group">
                          <span className="icon icon-paper-plane">
                            <FontAwesomeIcon icon={["fas", "paper-plane"]} />
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter email address"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-section">
          <div className="container">
            <div className="row no-gutters justify-content-center mb-5 pb-5">
              <div className="col-md-7 text-center heading-section ftco-animate">
                <span className="subheading">Works</span>
                <h2 className="mb-4">
                  View our works below to see our design and way of development.
                </h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in
                </p>
              </div>
            </div>
            <div className="row">
              <div
                className="block-3 d-md-flex ftco-animate"
                data-scrollax-parent="true"
              >
                <a
                  href="portfolio.html"
                  className="image"
                  style={{ backgroundImage: `url(${work_1})` }}
                  data-scrollax=" properties: { translateY: '-20%'}"
                />
                <div className="text">
                  <h4 className="subheading">Illustration</h4>
                  <h2 className="heading">
                    <a href="portfolio.html">
                      Even the all-powerful Pointing has no control
                    </a>
                  </h2>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name of Lorem
                    Ipsum decided to leave for the far World of Grammar.
                  </p>
                  <p>
                    <a href="portfolio.html" className="btn btn-primary px-4">
                      View Portfolio
                    </a>
                  </p>
                </div>
              </div>
              <div
                className="block-3 d-md-flex ftco-animate"
                data-scrollax-parent="true"
              >
                <a
                  href="portfolio.html"
                  className="image image-2 order-2"
                  style={{ backgroundImage: `url(${work_2})` }}
                  data-scrollax=" properties: { translateY: '-20%'}"
                />
                <div className="text order-1">
                  <h4 className="subheading">Application</h4>
                  <h2 className="heading">
                    <a href="portfolio.html">
                      Even the all-powerful Pointing has no control
                    </a>
                  </h2>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name of Lorem
                    Ipsum decided to leave for the far World of Grammar.
                  </p>
                  <p>
                    <a href="portfolio.html" className="btn btn-primary px-4">
                      View Portfolio
                    </a>
                  </p>
                </div>
              </div>
              <div
                className="block-3 d-md-flex ftco-animate"
                data-scrollax-parent="true"
              >
                <a
                  href="portfolio.html"
                  className="image"
                  style={{ backgroundImage: `url(${work_2})` }}
                  data-scrollax=" properties: { translateY: '-20%'}"
                />
                <div className="text">
                  <h4 className="subheading">Web Design</h4>
                  <h2 className="heading">
                    <a href="portfolio.html">
                      Even the all-powerful Pointing has no control
                    </a>
                  </h2>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name of Lorem
                    Ipsum decided to leave for the far World of Grammar.
                  </p>
                  <p>
                    <a href="portfolio.html" className="btn btn-primary px-4">
                      View Portfolio
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <span>
                  <a href="#" className="btn btn-primary py-3 px-5">
                    View All Projects
                  </a>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-section testimony-section bg-light">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-5">
              <div className="col-md-7 text-center heading-section ftco-animate">
                <span className="subheading">Customer Says</span>
                <h2 className="mb-4">Our satisfied customer says</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in
                </p>
              </div>
            </div>
            <div className="row ftco-animate">
              <div className="col-md-12">
                <div className="carousel-testimony owl-carousel ftco-owl">
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
                          countries Vokalia and Consonantia, there live the
                          blind texts.
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
                          countries Vokalia and Consonantia, there live the
                          blind texts.
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
                          countries Vokalia and Consonantia, there live the
                          blind texts.
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
                          countries Vokalia and Consonantia, there live the
                          blind texts.
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
                          countries Vokalia and Consonantia, there live the
                          blind texts.
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

        <section className="ftco-section ftco-counter" id="section-counter">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-5">
              <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
                <h2>Our achievements</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number" data-number="400">
                      0
                    </strong>
                    <span>
                      Customers are satisfied with our professional support
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number" data-number="1000">
                      0
                    </strong>
                    <span>Amazing preset options to be mixed and combined</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number" data-number="8000">
                      0
                    </strong>
                    <span>
                      Average response time on live chat support channel
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-section bg-light">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-5">
              <div className="col-md-7 text-center heading-section ftco-animate">
                <span className="subheading">Blog</span>
                <h2>Recent Blog</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 ftco-animate">
                <div className="blog-entry">
                  <a
                    href="blog-single.html"
                    className="block-20"
                    style={{ backgroundImage: `url(${image_1})` }}
                  />
                  <div className="text p-4 d-block">
                    <div className="meta mb-3">
                      <div>
                        <a href="#">July 12, 2018</a>
                      </div>
                      <div>
                        <a href="#">Admin</a>
                      </div>
                      <div>
                        <a href="#" className="meta-chat">
                          <span className="icon-chat" /> 3
                        </a>
                      </div>
                    </div>
                    <h3 className="heading">
                      <a href="#">
                        Even the all-powerful Pointing has no control about the
                        blind texts
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ftco-animate">
                <div className="blog-entry" data-aos-delay="100">
                  <a
                    href="blog-single.html"
                    className="block-20"
                    style={{
                      backgroundImage: `url(${image_2})`
                    }}
                  />
                  <div className="text p-4">
                    <div className="meta mb-3">
                      <div>
                        <a href="#">July 12, 2018</a>
                      </div>
                      <div>
                        <a href="#">Admin</a>
                      </div>
                      <div>
                        <a href="#" className="meta-chat">
                          <span className="icon-chat" /> 3
                        </a>
                      </div>
                    </div>
                    <h3 className="heading">
                      <a href="#">
                        Even the all-powerful Pointing has no control about the
                        blind texts
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ftco-animate">
                <div className="blog-entry" data-aos-delay="200">
                  <a
                    href="blog-single.html"
                    className="block-20"
                    style={{
                      backgroundImage: `url(${image_3})`
                    }}
                  />
                  <div className="text p-4">
                    <div className="meta mb-3">
                      <div>
                        <a href="#">July 12, 2018</a>
                      </div>
                      <div>
                        <a href="#">Admin</a>
                      </div>
                      <div>
                        <a href="#" className="meta-chat">
                          <span className="icon-chat" /> 3
                        </a>
                      </div>
                    </div>
                    <h3 className="heading">
                      <a href="#">
                        Even the all-powerful Pointing has no control about the
                        blind texts
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="ftco-footer ftco-bg-dark ftco-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Snipp.</h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4 ml-5">
                  <h2 className="ftco-heading-2">Quick Links</h2>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#" className="py-2 d-block">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-2 d-block">
                        Case studies
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-2 d-block">
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-2 d-block">
                        Portfolio
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-2 d-block">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-2 d-block">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Contact Information</h2>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#" className="py-2 d-block">
                        198 West 21th Street, Suite 721 New York NY 10016
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-2 d-block">
                        + 1235 2355 98
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-2 d-block">
                        info@yoursite.com
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-2 d-block">
                        email@email.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                  <ul className="ftco-footer-social list-unstyled float-md-left float-lft">
                    <li className="ftco-animate">
                      <a href="#">
                        <span className="icon-twitter">
                          <FontAwesomeIcon icon={["fab", "twitter"]} />
                        </span>
                      </a>
                    </li>
                    <li className="ftco-animate">
                      <a href="#">
                        <span className="icon-facebook">
                          <FontAwesomeIcon icon={["fab", "facebook"]} />
                        </span>
                      </a>
                    </li>
                    <li className="ftco-animate">
                      <a href="#">
                        <span className="icon-instagram">
                          <FontAwesomeIcon icon={["fab", "instagram"]} />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* <!-- loader --> */}
        {/* <div id="ftco-loader" className="show fullscreen">
          <svg className="circular" width="48px" height="48px">
            <circle
              className="path-bg"
              cx="24"
              cy="24"
              r="22"
              fill="none"
              stroke-width="4"
              stroke="#eeeeee"
            />
            <circle
              className="path"
              cx="24"
              cy="24"
              r="22"
              fill="none"
              stroke-width="4"
              stroke-miterlimit="10"
              stroke="#F96D00"
            />
          </svg>
        </div> */}

        {/* <script src="js/jquery.min.js"></script>
      <script src="js/jquery-migrate-3.0.1.min.js"></script>
      <script src="js/popper.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/jquery.easing.1.3.js"></script>
      <script src="js/jquery.waypoints.min.js"></script>
      <script src="js/jquery.stellar.min.js"></script>
      <script src="js/owl.carousel.min.js"></script>
      <script src="js/jquery.magnific-popup.min.js"></script>
      <script src="js/aos.js"></script>
      <script src="js/jquery.animateNumber.min.js"></script>
      <script src="js/bootstrap-datepicker.js"></script>
      <script src="js/jquery.timepicker.min.js"></script>
      <script src="js/particles.min.js"></script>
      <script src="js/particle.js"></script>
      <script src="js/scrollax.min.js"></script>
      <script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"></script>
      <script src="js/google-map.js"></script>
      <script src="js/main.js"></script> */}
      </div>
    );
  }
}

export default App;
