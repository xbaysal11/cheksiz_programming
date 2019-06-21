import React, { Component } from "react";

import Fade from "react-reveal/Fade";
import { withTranslation } from "react-i18next";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import person_1 from "../assets/img/person_1.jpg";
import person_2 from "../assets/img/person_2.jpg";
import person_3 from "../assets/img/person_3.jpg";

library.add(fab, fas);

const Item = ({ img, text, autor, age }) => (
  <div className="item text-center">
    <div className="testimony-wrap p-4 pb-5">
      <div
        className="user-img mb-4"
        style={{
          backgroundImage: `url(${img})`
        }}
      >
        <span className="quote d-flex align-items-center justify-content-center">
          <FontAwesomeIcon
            className="icon-quote-left"
            icon={["fas", "quote-left"]}
          />
        </span>
      </div>
      <div className="text">
        <p className="mb-5">{text}</p>
        <p className="name">{autor}</p>
        <span className="position">{age}</span>
      </div>
    </div>
  </div>
);
class Reviews extends Component {
  render() {
    const { t } = this.props;
    return (
      <Fade>
        <section
          id="reviews"
          className="ftco-section testimony-section bg-light"
        >
          <div className="container">
            <div className="row justify-content-center mb-5 pb-5">
              <div className="col-md-7 text-center heading-section ftco-animate">
                <span className="subheading">{t("Testimonial Title")}</span>
                <h2 className="mb-4">{t("Testimonial Subtitle")}</h2>
                <p>{t("Testimonial Description")}</p>
              </div>
            </div>
            <div className="row ftco-animate">
              <div className="col-md-12">
                <OwlCarousel className="owl-theme" loop margin={10} nav>
                  <Item
                    autor={t("Testimonial Autor1")}
                    age={t("Testimonial Age1")}
                    img={person_1}
                    text={t("Testimonial Text1")}
                  />
                  <Item
                    autor={t("Testimonial Autor2")}
                    age={t("Testimonial Age2")}
                    img={person_2}
                    text={t("Testimonial Text2")}
                  />
                  <Item
                    autor={t("Testimonial Autor3")}
                    age={t("Testimonial Age3")}
                    img={person_3}
                    text={t("Testimonial Text3")}
                  />
                </OwlCarousel>
              </div>
            </div>
          </div>
        </section>
      </Fade>
    );
  }
}
export default withTranslation()(Reviews);
