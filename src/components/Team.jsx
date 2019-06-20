import React, { Component } from "react";

import Fade from "react-reveal/Fade";
import { withTranslation } from "react-i18next";

import person_1 from "../assets/img/person_1.jpg";
import person_2 from "../assets/img/person_2.jpg";
import person_3 from "../assets/img/person_3.jpg";
import person_4 from "../assets/img/person_4.jpg";
import person_5 from "../assets/img/person_1.jpg";
import person_6 from "../assets/img/person_2.jpg";

const Item = ({ name, img, prof, size }) => (
  <div className={`col-md-${size} text-center   ftco-animate`}>
    <div className="blog-entry">
      <div className="block-20" style={{ backgroundImage: `url(${img})` }} />
      <div className="text p-4 d-block">
        <h3 className="heading">
          <div href="#">{name}</div>
        </h3>
        <div className="meta mb-3">
          <div>
            <div href="#">{prof}</div>
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
              <div className="col-md-7 text-center heading-section ftco-animate">
                <span className="subheading">{t("Team Title")}</span>
                <h2>{t("Team Subtitle")}</h2>
                <p>{t("Team Description1")}</p>
              </div>
            </div>
            <div className="row justify-content-md-center">
              <Item
                name={t("Person1 name")}
                img={person_1}
                prof={t("Person1 prof")}
                size="3"
              />
              <Item
                name={t("Person2 name")}
                img={person_2}
                prof={t("Person2 prof")}
                size="3"
              />
            </div>
            <div className="row justify-content-md-center">
              <Item
                name={t("Person3 name")}
                img={person_3}
                prof={t("Person3456 prof")}
                size="3"
              />
              <Item
                name={t("Person4 name")}
                img={person_4}
                prof={t("Person3456 prof")}
                size="3"
              />
              <Item
                name={t("Person5 name")}
                img={person_5}
                prof={t("Person3456 prof")}
                size="3"
              />
              <Item
                name={t("Person6 name")}
                img={person_6}
                prof={t("Person3456 prof")}
                size="3"
              />
            </div>
            <div className="row justify-content-center">
              <div className="col-md-7 text-center heading-section ftco-animate">
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
