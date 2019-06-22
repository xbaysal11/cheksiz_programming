import React, { Component } from "react";

import Fade from "react-reveal/Fade";
import { withTranslation } from "react-i18next";

class Methodic extends Component {
  render() {
    const { t } = this.props;
    return (
      <Fade>
        <section className="ftco-section-parallax">
          <div className="parallax-img d-flex align-items-center">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-md-7 text-center heading-section heading-section-white ">
                  <h2>{t("Methodic Title")}</h2>
                  <p>
                    {t("Methodic Descrription1")}
                    <br />
                    {t("Methodic Descrription2")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>
    );
  }
}
export default withTranslation()(Methodic);
