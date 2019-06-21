import React, { Component } from "react";

import Fade from "react-reveal/Fade";
import { withTranslation } from "react-i18next";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fab, fas);
const TableItem = ({ title, subtitle, date, location, scale }) => (
  <div className={` promo ${scale}`}>
    <div className="deal">
      <span>{title}</span>
      <span>{date}</span>
    </div>
    <span className="price">{subtitle}</span>
    <ul className="features">
      <li>
        <FontAwesomeIcon icon={["fas", "map-marker-alt"]} size="1x" />{" "}
        {location}
      </li>
    </ul>
  </div>
);
const StepItem = ({ date, title, subtitle, icon, text }) => (
  <VerticalTimelineElement
    className="vertical-timeline-element"
    date={date}
    // icon={<FontAwesomeIcon icon={icon} size="5x" />}
    icon={icon}
  >
    <h3 className="vertical-timeline-element-title">{title}</h3>
    <h2 className="vertical-timeline-element-subtitle">{subtitle}</h2>
    <p className="vertical-timeline-element-text">{text}</p>
  </VerticalTimelineElement>
);

class Education extends Component {
  render() {
    const { t } = this.props;

    return (
      <Fade>
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-5">
              <div className="col-md-10 text-center heading-section ftco-animate">
                <span className="subheading">{t("Education Subheading")}</span>
                <h2 className="mb-4">{t("Education Title")}</h2>
                <p>{t("Education Description")}</p>
              </div>
            </div>
            {/* {t("")} */}
            <div className="row">
              <div className="promos col-md-12">
                <TableItem
                  title={t("Education Stage1 Title")}
                  date={t("Education Stage1 Date")}
                  subtitle={t("Education Stage1 Subtitle")}
                  location={t("Education Stage1 location")}
                />
                <TableItem
                  title={t("Education Stage2 Title")}
                  date={t("Education Stage2 Date")}
                  subtitle={t("Education Stage2 Subtitle")}
                  location={t("Education Stage2 location")}
                />
                <TableItem
                  title={t("Education Stage3 Title")}
                  date={t("Education Stage3 Date")}
                  subtitle={t("Education Stage3 Subtitle")}
                  location={t("Education Stage3 location")}
                />
                <TableItem
                  title={t("Education Stage4 Title")}
                  date={t("Education Stage4 Date")}
                  subtitle={t("Education Stage4 Subtitle")}
                  location={t("Education Stage4 location")}
                />
                <TableItem
                  title={t("Education Stage5 Title")}
                  date={t("Education Stage5 Date")}
                  subtitle={t("Education Stage5 Subtitle")}
                  location={t("Education Stage5 location")}
                />
              </div>
            </div>
            <div className="row">
              <VerticalTimeline>
                <StepItem
                  title={t("Education Line Stage1 Title")}
                  subtitle={t("Education Line Stage1 Date")}
                  icon="➀"
                  text={t("Education Line Stage1 Subtitle")}
                  // icon={["fas", "cat"]}
                />
                <StepItem
                  title={t("Education Line Stage2 Title")}
                  subtitle={t("Education Line Stage2 Date")}
                  text={t("Education Line Stage2 Subtitle")}
                  icon="➁"
                  // icon={["fas", "horse"]}
                />
                <StepItem
                  title={t("Education Line Stage3 Title")}
                  subtitle={t("Education Line Stage3 Date")}
                  text={t("Education Line Stage3 Subtitle")}
                  icon="➂"
                  // icon={["fas", "dove"]}
                />
                <StepItem
                  title={t("Education Line Stage4 Title")}
                  subtitle={t("Education Line Stage4 Date")}
                  text={t("Education Line Stage4 Subtitle")}
                  icon="➃"
                  // icon={["fas", "dog"]}
                />
                <StepItem
                  title={t("Education Line Stage5 Title")}
                  subtitle={t("Education Line Stage5 Date")}
                  text={t("Education Line Stage5 Subtitle")}
                  icon="➄"
                  // icon={["fas", "kiwi-bird"]}
                />
              </VerticalTimeline>
            </div>
          </div>
        </section>
      </Fade>
    );
  }
}
export default withTranslation()(Education);
