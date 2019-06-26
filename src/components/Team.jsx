import React, { Component } from "react";

import Fade from "react-reveal/Fade";
import { withTranslation } from "react-i18next";

import sergio from "../assets/img/sergio_lujan_mora.jpg";
import timur from "../assets/img/timur_amanov.jpg";
import kozhonazar from "../assets/img/kozhonazar_rysbaev.jpg";
import almaz from "../assets/img/almaz_zholdoshbekov.jpg";
import maksat from "../assets/img/maksat_abdykaparov.jpg";
import elis from "../assets/img/elis_matiev.png";
import gulzada from "../assets/img/gulzada_urgunalieva.jpg";
import shirin from "../assets/img/shirin_mukanbetova.jpg";

const Item = ({ name, img, prof, size }) => (
  <div className={`col-lg-${size} text-center   `}>
    <div className="blog-entry">
      <div className="block-20" style={{ backgroundImage: `url(${img})` }} />
      <div className="text p-4 d-block">
        <h3 className="heading">
          <div>{name}</div>
        </h3>
        <div className="meta mb-3">
          <div>
            <div>{prof}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
class Team extends Component {
  render() {
    const { t } = this.props;
    return (
      <Fade>
        <section className="ftco-section bg-light">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-5">
              <div className="col-md-7 text-center heading-section ">
                <span className="subheading">{t("Team Title")}</span>
                <h2>{t("Team Subtitle")}</h2>
                <p>{t("Team Description1")}</p>
              </div>
            </div>
            <div className="row justify-content-center">
              <Item
                name={t("Person7 name")}
                img={shirin}
                prof={t("Person7 prof")}
                size="3"
              />
              <Item
                name={t("Person8 name")}
                img={gulzada}
                prof={t("Person8 prof")}
                size="3 "
              />
              <Item
                name={t("Person1 name")}
                img={sergio}
                prof={t("Person1 prof")}
                size="3"
              />
              <Item
                name={t("Person2 name")}
                img={maksat}
                prof={t("Person2 prof")}
                size="3 "
              />
            </div>
            <div className="row justify-content-md-center">
              <Item
                name={t("Person3 name")}
                img={timur}
                prof={t("Person3456 prof")}
                size="3"
              />
              <Item
                name={t("Person4 name")}
                img={kozhonazar}
                prof={t("Person3456 prof")}
                size="3"
              />
              <Item
                name={t("Person5 name")}
                img={elis}
                prof={t("Person3456 prof")}
                size="3"
              />
              <Item
                name={t("Person6 name")}
                img={almaz}
                prof={t("Person3456 prof")}
                size="3"
              />
            </div>
            <div className="row justify-content-center">
              <div className="col-md-7 text-center heading-section ">
                <p style={{ margin: "1em 0 1em 0" }}>
                  {t("Team Description2")}
                </p>
              </div>
            </div>
          </div>
        </section>
      </Fade>
    );
  }
}
export default withTranslation()(Team);
