import React, { Component } from "react";

import { withTranslation } from "react-i18next";

class Home extends Component {
  render() {
    const { t } = this.props;

    return (
      <div className="hero-wrap js-fullheight">
        <div className="overlay" />
        <div className="container">
          <div
            className="row no-gutters slider-text align-items-center justify-content-center"
            data-scrollax-parent="true"
          >
            <div
              className="col-md-8 ftco-animate text-center"
              data-scrollax=" properties: { translateY: '70%' }"
            >
              <h1
                className="mb-4"
                data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
              >
                {t("Home1")}
                <span className="text-highl">
                  <strong>{t("Home2")}</strong>
                </span>
                {t("Home3")}
                <span className="text-highl">
                  <strong>{t("Home4")}</strong>
                </span>
                {t("Home5")}
              </h1>
              <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
                <a
                  href="#about-us"
                  className="btn btn-primary btn-outline-white px-5 py-3"
                >
                  {t("Home Button")}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withTranslation()(Home);
