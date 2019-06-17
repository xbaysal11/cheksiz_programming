import React, { Component } from "react";

import Fade from "react-reveal/Fade";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import eu from "../assets/img/27018.jpg";

library.add(fab, fas);

export default class Header extends Component {
  render() {
    return (
      <Fade>
        <nav
          // className="navbar  navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light navbar-fixed-top"
          className="navbar navbar-default navbar-expand-lg  ftco_navbar ftco-navbar-light navbar-fixed-top"
          id="ftco-navbar"
        >
          <div className="container">
            {/* <a className="navbar-brand" href="index.html">
              KSSDA
            </a> */}
            <a className="navbar-brand" href="/">
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
              {/* <svg className="hidden" id="logo_kssda_color" width="73px" height="30px" viewBox="0 0 73 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                <!-- Generator: Sketch 48.1 (47250) - http://www.bohemiancoding.com/sketch -->
                <title>logo_color</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
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
              <div className="ripple-container" />
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
      </Fade>
    );
  }
}
