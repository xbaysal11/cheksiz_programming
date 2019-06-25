import React, { Component } from "react";

import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import VisibilitySensor from "react-visibility-sensor";
import ReactOdometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import work_1 from "../assets/img/DSC_0019-min.JPG";
import work_2 from "../assets/img/DSC_0057-min.JPG";

library.add(fab, fas);

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
  render() {
    const { t } = this.props;
    const { requested, graduated, choosed } = this.state;
    return (
      <Fade>
        <section className="ftco-section ftco-section-members">
          <div className="container">
            <div className="row no-gutters justify-content-center pb-5">
              <div className="col-md-9 text-center heading-section heading-section-white ">
                <span className="subheading">{t("Member Subheading")} </span>
                <h2 className="mb-4">{t("Member Title")}</h2>
                <p>{t("Member Description")}</p>
              </div>
            </div>
            <Fade left>
              <div className="row justify-content-start">
                <div className="block-3 d-flex  " data-scrollax-parent="true">
                  <div
                    className="image"
                    style={{ backgroundImage: `url(${work_1})` }}
                  />
                  <div className="text">
                    <h4 className="subheading">{t("Member Subheading1")}</h4>
                    <h2 className="heading">
                      <div>{t("Member Title1")}</div>
                    </h2>
                    <ul>
                      <li>
                        {" "}
                        <FontAwesomeIcon
                          icon={["fas", "angle-right"]}
                          size="1x"
                        />{" "}
                        {t("Member Description1-1")}
                      </li>
                      <li>
                        {" "}
                        <FontAwesomeIcon
                          icon={["fas", "angle-right"]}
                          size="1x"
                        />{" "}
                        {t("Member Description1-2")}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="row justify-content-end">
                <div className="block-3 d-flex  " data-scrollax-parent="true">
                  <div className="text">
                    <h4 className="subheading">{t("Member Subheading2")}</h4>
                    <h2 className="heading">
                      <div>{t("Member Title2")}</div>
                    </h2>
                    <ul>
                      <li>
                        <FontAwesomeIcon
                          icon={["fas", "angle-right"]}
                          size="1x"
                        />{" "}
                        {t("Member Description2-1")}
                      </li>
                      <li>
                        {" "}
                        <FontAwesomeIcon
                          icon={["fas", "angle-right"]}
                          size="1x"
                        />{" "}
                        {t("Member Description2-2")}
                      </li>
                      <li>
                        {" "}
                        <FontAwesomeIcon
                          icon={["fas", "angle-right"]}
                          size="1x"
                        />{" "}
                        {t("Member Description2-3")}
                      </li>
                    </ul>
                  </div>
                  <div
                    className="image"
                    style={{ backgroundImage: `url(${work_2})` }}
                  />
                </div>
              </div>
            </Fade>
            <div className="row">
              <div className="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap ">
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
              <div className="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap ">
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
              <div className="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap ">
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
