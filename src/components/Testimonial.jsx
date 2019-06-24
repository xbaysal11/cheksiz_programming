import React, { Component } from "react";

import Fade from "react-reveal/Fade";
import { withTranslation } from "react-i18next";

import Slider from "react-slick";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import person_1 from "../assets/img/person_1.jpg";

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
class Testimonial extends Component {
  render() {
    const slickSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: true,
            arrows: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: true,
            arrows: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: true,
            arrows: false
          }
        }
      ]
    };
    const { t } = this.props;
    return (
      <Fade>
        <section
          id="reviews"
          className="ftco-section testimony-section bg-light"
        >
          <div className="container">
            <div className="row justify-content-center mb-5 ">
              <div className="col-md-7 text-center heading-section ">
                <span className="subheading">{t("Testimonial Title")}</span>
                <h2 className="mb-4">{t("Testimonial Subtitle")}</h2>
                <p>{t("Testimonial Description")}</p>
              </div>
            </div>
            <div className="row justify-content-center ">
              <div className="col-md-10 ">
                <Slider {...slickSettings}>
                  <Item
                    autor={t("Testimonial Autor1")}
                    age={t("Testimonial Age1")}
                    img={person_1}
                    text={t("Testimonial Text1")}
                  />
                  <Item
                    autor={t("Testimonial Autor2")}
                    age={t("Testimonial Age2")}
                    img={person_1}
                    text={t("Testimonial Text2")}
                  />
                  <Item
                    autor={t("Testimonial Autor3")}
                    age={t("Testimonial Age3")}
                    img={person_1}
                    text={t("Testimonial Text3")}
                  />
                </Slider>
              </div>
            </div>
          </div>
        </section>
      </Fade>
    );
  }
}
export default withTranslation()(Testimonial);
