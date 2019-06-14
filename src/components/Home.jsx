import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
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
    );
  }
}
