import React, { Component } from "react";

import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

class Finance extends Component {
  render() {
    const { t } = this.props;
    return (
      <Fade>
        <section className="ftco-section-parallax">
          <div className="parallax-img d-flex align-items-center">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-md-10 text-center heading-section heading-section-white ">
                  <h2>{t("Finance Title")}</h2>
                  <p>{t("Finance Description")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>
    );
  }
}
export default withTranslation()(Finance);
