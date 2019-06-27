import React, { Component } from "react";

import { withTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import image_1 from "../assets/img/DSC_0019-min.JPG";
import image_2 from "../assets/img/DSC_0878-min.JPG";
import image_3 from "../assets/img/DSC_0041-min.JPG";
import image_4 from "../assets/img/DSC_0018-min.JPG";
import image_5 from "../assets/img/DSC_0690-min.JPG";
import image_6 from "../assets/img/DSC_0057-min.JPG";
library.add(fab, fas);

const PhotoItem = ({ img, size }) => (
  <div className={`col-md-${size}`}>
    <div className="featured-img">
      <img src={img} className="img-fluid" alt="" />
    </div>
  </div>
);

class AboutUs extends Component {
  render() {
    const { t } = this.props;
    return (
      <div id="about-us" className="bg-light">
        <section className="ftco-section-featured ">
          <div className="container-fluid" data-scrollax-parent="true">
            <div
              className="row no-gutters d-flex align-items-center"
              data-scrollax=" properties: { translateY: '-30%'}"
            >
              <PhotoItem img={image_1} size="3 mb-3" />
              <div className="col-md-6">
                <div className="row no-gutters">
                  <div className="col-md-12">
                    <div className="row no-gutters d-flex align-items-end">
                      <PhotoItem img={image_5} size={8} />
                      <PhotoItem img={image_4} size={4} />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="row no-gutters d-flex align-items-start">
                      <PhotoItem img={image_6} size={8} />
                      <PhotoItem img={image_3} size={4} />
                    </div>
                  </div>
                </div>
              </div>
              <PhotoItem img={image_2} size={3} />
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-md-10 text-center heading-section ">
                <h1>
                  <div className="row-block3">
                    <FontAwesomeIcon
                      className="bg-quote bg-quote-left"
                      icon={["fas", "quote-left"]}
                      size="2x"
                    />
                    <span className="about-us-text">{t("About Us Text")}</span>
                    <FontAwesomeIcon
                      className="bg-quote bg-quote-right"
                      icon={["fas", "quote-right"]}
                      size="2x"
                    />
                  </div>
                  <br />
                  <br />
                </h1>
                <span style={{ color: "#7B7B7B" }}>{t("About Us Autor")}</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default withTranslation()(AboutUs);
