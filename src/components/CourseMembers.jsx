import React, { Component } from "react";

import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import VisibilitySensor from "react-visibility-sensor";
// import Parallax from "parallax-js";
import ReactOdometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";

import work_1 from "../assets/img/37367146_407467006408206_4380283471260549120_n.jpg";
import work_2 from "../assets/img/38284453_421666701654903_3074187438420131840_n.jpg";

class CourseMembers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requested: 0,
      choosed: 0,
      graduated: 0
    };
  }
  componentDidMount() {
    this.setState({ requested: 116 });
    this.setState({ choosed: 35 });
    this.setState({ graduated: 20 });
  }
  onChange(isVisible) {
    console.log("Element is now %s", isVisible ? "visible" : "hidden");
  }

  render() {
    const { t } = this.props;
    const { requested, graduated, choosed } = this.state;
    return (
      <Fade>
        <section className="ftco-section ftco-section-members">
          <div className="container">
            <div className="row no-gutters justify-content-center pb-5">
              <div className="col-md-9 text-center heading-section heading-section-white ftco-animate">
                <span className="subheading">{t("Member Subheading")} </span>
                <h2 className="mb-4">{t("Member Title")}</h2>
                <p>{t("Member Description")}</p>
              </div>
            </div>
            <Fade left>
              <div className="row justify-content-start">
                <div
                  className="block-3 d-flex  ftco-animate"
                  data-scrollax-parent="true"
                >
                  <div
                    className="image"
                    style={{ backgroundImage: `url(${work_1})` }}
                    // data-scrollax=" properties: { translateY: '-20%'}"
                  />
                  <div className="text">
                    <h4 className="subheading">{t("Member Subheading1")}</h4>
                    <h2 className="heading">
                      <div>{t("Member Title1")}</div>
                    </h2>
                    <ul>
                      <li>{t("Member Description1-1")}</li>
                      <li>{t("Member Description1-2")}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="row justify-content-end">
                <div
                  className="block-3 d-flex  ftco-animate"
                  data-scrollax-parent="true"
                >
                  <div className="text">
                    <h4 className="subheading">{t("Member Subheading2")}</h4>
                    <h2 className="heading">
                      <div>{t("Member Title2")}</div>
                    </h2>
                      <ul>
                        <li>{t("Member Description2-1")}</li>
                        <li>{t("Member Description2-2")}</li>
                        <li>{t("Member Description2-3")}</li>
                      </ul>
                  </div>
                  <div
                    className="image"
                    style={{ backgroundImage: `url(${work_2})` }}
                    // data-scrollax=" properties: { translateY: '-20%'}"
                  />
                </div>
              </div>
            </Fade>

            <div className="row">
              <div className="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center">
                  <div className="text text-white">
                    <strong className="number">
                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <ReactOdometer
                            value={isVisible ? requested : "000"}
                            format="d"
                          />
                        )}
                      </VisibilitySensor>
                    </strong>
                    <span>{t("Odometer Requested")}</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center">
                  <div className="text text-white">
                    <strong className="number">
                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <ReactOdometer
                            value={isVisible ? choosed : "000"}
                            format="d"
                          />
                        )}
                      </VisibilitySensor>
                    </strong>
                    <span>{t("Odometer Choosed")}</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center">
                  <div className="text text-white">
                    <strong className="number">
                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <ReactOdometer
                            value={isVisible ? graduated : "000"}
                            format="d"
                          />
                        )}
                      </VisibilitySensor>
                    </strong>
                    <span>{t("Odometer Graduated")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>
    );
  }
}
export default withTranslation()(CourseMembers);
