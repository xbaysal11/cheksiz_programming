import React, { Component } from "react";

import Fade from "react-reveal/Fade";
import { withTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fab, fas);

const Item = ({ title, description, icon, color }) => (
  <div className="col-md-8 col-lg-4 d-flex align-self-stretch ftco-animate">
    <div className="media block-6 services d-block text-center">
      <div className="d-flex justify-content-center">
        <div
          className={`icon color-${color} d-flex justify-content-center mb-3`}
        >
          <span>
            <FontAwesomeIcon
              icon={icon}
              className="align-self-center"
              size="3x"
            />
          </span>
        </div>
      </div>
      <div className="media-body p-2 mt-3">
        <h3 className="heading">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  </div>
);
class Goals extends Component {
  render() {
    const { t } = this.props;

    return (
      <Fade>
        <section id="goals" className="ftco-section">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-5">
              <div className="col-md-8 text-center heading-section ftco-animate">
                <span className="subheading">{t("Goals Subheading")} </span>
                <h2 className="mb-4">{t("Goals Title")}</h2>
                <p>{t("Goals Description")}</p>
              </div>
            </div>
            <div className="row">
              <Item
                title={t("Goals Start")}
                description={t("Goals Start Description")}
                icon={["fas", "lightbulb"]}
                color="1"
              />
              <Item
                title={t("Goals Short")}
                description={t("Goals Short Description")}
                icon={["fas", "laptop"]}
                color="2"
              />
              <Item
                title={t("Goals Long")}
                description={t("Goals Long Description")}
                icon={["fas", "cog"]}
                color="3"
              />
            </div>
          </div>
        </section>
      </Fade>
    );
  }
}
export default withTranslation()(Goals);
