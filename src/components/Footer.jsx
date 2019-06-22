import React, { Component } from "react";

import Fade from "react-reveal/Fade";
import { withTranslation } from "react-i18next";

import eu from "../assets/img/27018.jpg";
import facebook from "../assets/img/facebook.png";
import instagram from "../assets/img/instagram.png";

class Footer extends Component {
  render() {
    const { t } = this.props;
    return (
      <Fade>
        <footer id="contacts" className="ftco-footer ftco-bg-dark ftco-section">
          <div className="container">
            <div className="row ">
              <div className="col-md">
                <div className="ftco-footer-widget ">
                  <h2 className="ftco-heading-2">
                    {" "}
                    <a className="navbar-brand" href="/">
                      <svg
                        className="hidden"
                        id="logo_kssda_color"
                        width="73px"
                        height="30px"
                        viewBox="0 0 73 30"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xlink="http://www.w3.org/1999/xlink"
                      >
                        {/* <!-- Generator: Sketch 48.1 (47250) - http://www.bohemiancoding.com/sketch --> */}
                        <title>logo_color</title>
                        <desc>Created with Sketch.</desc>
                        <defs />
                        <g
                          id="Page-1"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g id="logo_color">
                            <polygon
                              id="Fill-147"
                              fill="#DA116F"
                              points="27.7162025 8.52816456 72.4891139 8.52816456 72.4891139 6.39607595 27.7162025 6.39607595"
                            />
                            <polygon
                              id="Fill-148"
                              fill="#802C7C"
                              points="27.7162025 14.9242405 57.5650633 14.9242405 57.5650633 12.7921519 27.7162025 12.7921519"
                            />
                            <polygon
                              id="Fill-149"
                              fill="#DA116F"
                              points="8.52797468 10.6600633 27.7162025 10.6600633 27.7162025 8.52816456 8.52797468 8.52816456"
                            />
                            <polygon
                              id="Fill-150"
                              fill="#802C7C"
                              points="21.3201266 17.0561392 27.7162025 17.0561392 27.7162025 14.9242405 21.3201266 14.9242405"
                            />
                            <polygon
                              id="Fill-151"
                              fill="#802C7C"
                              points="10.6598734 29.8482911 27.7162025 29.8482911 27.7162025 27.7163924 10.6598734 27.7163924"
                            />
                            <polygon
                              id="Fill-152"
                              fill="#802C7C"
                              points="27.7162025 27.7163924 34.1122785 27.7163924 34.1122785 25.5843038 27.7162025 25.5843038"
                            />
                            <polygon
                              id="Fill-153"
                              fill="#DA116F"
                              points="0 23.4522152 27.7162025 23.4522152 27.7162025 21.3203165 0 21.3203165"
                            />
                            <polygon
                              id="Fill-154"
                              fill="#DA116F"
                              points="27.7162025 21.3203165 44.7723418 21.3203165 44.7723418 19.1882278 27.7162025 19.1882278"
                            />
                            <polygon
                              id="Fill-155"
                              fill="#802C7C"
                              points="27.7162025 2.13208861 63.96 2.13208861 63.96 0 27.7162025 0"
                            />
                            <polygon
                              id="Fill-156"
                              fill="#802C7C"
                              points="14.9240506 4.26398734 27.7162025 4.26398734 27.7162025 2.13208861 14.9240506 2.13208861"
                            />
                          </g>
                        </g>
                      </svg>
                      <span
                        style={{ fontSize: "0.8em", margin: "0 10px 0 10px" }}
                      >
                        KSSDA
                      </span>
                      <img
                        style={{
                          width: "4.2em",
                          height: "2.2em"
                        }}
                        src={eu}
                        alt=""
                      />
                      <div className="ripple-container" />
                    </a>
                  </h2>
                  <p>{t("Footer Description")}</p>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget">
                  <h2 className="ftco-heading-2"> {t("Footer Links")}</h2>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#about-us" className="py-2 d-block">
                        {t("Header About Us")}
                      </a>
                    </li>
                    <li>
                      <a href="#goals" className="py-2 d-block">
                        {t("Header Goals")}
                      </a>
                    </li>
                    <li>
                      <a href="#program" className="py-2 d-block">
                        {t("Header Program")}
                      </a>
                    </li>
                    <li>
                      <a href="#gallery" className="py-2 d-block">
                        {t("Header Gallery")}
                      </a>
                    </li>
                    <li>
                      <a href="#reviews" className="py-2 d-block">
                        {t("Header Testimonial")}
                      </a>
                    </li>
                    <li>
                      <a href="#contacts" className="py-2 d-block">
                        {t("Header Contacts")}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget">
                  <h2 className="ftco-heading-2">{t("Header Contacts")}</h2>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="mailto:office.kssda@gmail.com"
                        className="py-2 d-block"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        office.kssda@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget">
                  <h2 className="ftco-heading-2"> {t("Footer Social")}</h2>
                  <ul className="ftco-footer-social list-unstyled float-md-left float-lft">
                    <li className="">
                      <a
                        href="https://www.facebook.com/CheksizProgramming/"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <span className="icon-facebook">
                          {/* <FontAwesomeIcon icon={["fab", "facebook"]} /> */}
                          <img src={facebook} alt="" />
                        </span>
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="https://www.instagram.com/cheksizprogrammingkg/"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <span className="icon-instagram">
                          {/* <FontAwesomeIcon icon={["fab", "instagram"]} /> */}
                          <img src={instagram} alt="" />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Fade>
    );
  }
}
export default withTranslation()(Footer);
