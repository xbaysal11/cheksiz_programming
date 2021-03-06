import React, { Component } from "react";

import Fade from "react-reveal/Fade";
import { withTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import eu from "../assets/img/27018.jpg";

library.add(fab, fas);

class Header extends Component {
  state = {
    lang: "ru",
    collapsed: "collapse"
  };
  render() {
    const { t, i18n } = this.props;
    return (
      <Fade>
        <nav
          className="navbar navbar-default navbar-expand-lg  ftco_navbar ftco-navbar-light navbar-fixed-top"
          id="ftco-navbar"
        >
          <div className="container">
            <a
              className="navbar-brand"
              href="#!"
              style={{
                display: "flex",
                alignItems: "center"
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "spacce-between"
                }}
              >
                <img
                  style={{
                    width: "3.0em",
                    height: "1.5em",
                    margin: "0 auto"
                  }}
                  src={eu}
                  alt=""
                />
                <span
                  style={{
                    fontSize: "8px",
                    textAlign: "center",
                    margin: "3px 0"
                  }}
                >
                  {t("US")}
                  <br />
                  {t("US1")}
                </span>
              </div>
              <svg
                id="logo_kssda"
                width="73px"
                height="30px"
                viewBox="0 0 73 30"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                style={{ margin: " 0 10px" }}
              >
                <title>Logo</title>
                <desc>Created with Sketch.</desc>
                <defs />
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
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
              <span style={{ fontSize: "0.8em", margin: "0 10px 0 10px" }}>
                KSSDA
              </span>

              <div className="ripple-container" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => {
                this.setState({
                  collapsed: this.state.collapsed === "" ? "collapse" : ""
                });
              }}
            >
              <FontAwesomeIcon
                icon={["fas", "bars"]}
                className="align-self-center"
              />
            </button>

            <div
              className={`${
                this.state.collapsed === "" ? "" : "collapse"
              } navbar-collapse`}
              id="ftco-nav"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item ">
                  <a href="#about-us" className="nav-link">
                    {t("Header About Us")}
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#goals" className="nav-link">
                    {t("Header Goals")}
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#program" className="nav-link">
                    {t("Header Program")}
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#gallery" className="nav-link">
                    {t("Header Gallery")}
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#reviews" className="nav-link">
                    {t("Header Testimonial")}
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#contacts" className="nav-link">
                    {t("Header Contacts")}
                  </a>
                </li>
                <li className="nav-item text-center">
                  <button
                    className={this.state.lang === "ru" ? "active" : ""}
                    onClick={() => {
                      i18n.changeLanguage("ru");
                      this.setState({ lang: "ru" });
                    }}
                  >
                    RU
                  </button>
                  <button
                    className={this.state.lang === "kg" ? "active" : ""}
                    onClick={() => {
                      i18n.changeLanguage("kg");
                      this.setState({ lang: "kg" });
                    }}
                  >
                    KG
                  </button>
                  <button
                    className={this.state.lang === "en" ? "active" : ""}
                    onClick={() => {
                      i18n.changeLanguage("en");
                      this.setState({ lang: "en" });
                    }}
                  >
                    EN
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Fade>
    );
  }
}
export default withTranslation()(Header);
