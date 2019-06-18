import React, { Component } from "react";

import Fade from "react-reveal/Fade";
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

const Item = ({ date, title, subtitle, icon, text }) => (
  <VerticalTimelineElement
    className="vertical-timeline-element"
    date={date}
    iconStyle={{
      background: "rgb(33, 150, 243)",
      color: "#fff"
    }}
    icon={<FontAwesomeIcon icon={icon} size="5x" />}
  >
    <h3 className="vertical-timeline-element-title">{title}</h3>
    <h2 className="vertical-timeline-element-subtitle">{subtitle}</h2>
    <p className="vertical-timeline-element-text">{text}</p>
  </VerticalTimelineElement>
);

export default class Education extends Component {
  render() {
    return (
      <Fade>
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-5">
              <div className="col-md-6 text-center heading-section ftco-animate">
                <span className="subheading">ОБУЧЕНИЕ СТУДЕНТОВ</span>
                <h2 className="mb-4">
                  Обучение для всех участников проходило с июля 2018 по январь
                  2019 г. по следующему графику:
                </h2>
                <p>
                  Проект “Продвижение обучения в области IT для людей с особыми
                  потребностями” реализуется Кыргызской ассоциацией
                  разработчиков программного обеспечения и услуг (КАРПОУ) и IT
                  Академией при поддержке Европейского Союза.
                </p>
              </div>
            </div>
            <div className="row">
              <VerticalTimeline>
                <Item
                  title="Первый этап"
                  subtitle="июль 2018"
                  icon={["fas", "cat"]}
                  text="Тренинг в г. Бишкек с использованием 17 адаптированных уроков, которые предусматривали подготовку в течение 2-х недель. Занятия проходили по 4-6 часов каждый день, кроме воскресенья. В конце каждой недели участники проходили предварительный тест на основе заданий тренеров."
                />
                <Item
                  title="Второй этап"
                  subtitle="июль-сентябрь 2018"
                  // date="date"
                  icon={["fas", "horse"]}
                  text="Был предназначен для дистанционного обучения на дому участников или их рабочих местах в течение периода до сентября. За этот период участникам необходимо было начать работу над выпускным проектом. В течение этого периода все студенты работали онлайн с тренерами и командой IT-Академии."
                />
                <Item
                  title="Третий этап"
                  subtitle="сентябрь 2018"
                  // date="date"
                  icon={["fas", "dove"]}
                  text="Обучение в течение 2-х недель на базе лагеря Жетиген на Иссык-Куле с использованием 21 адаптированного урока."
                />
                <Item
                  title="Четвертый этап"
                  subtitle="октябрь-декабрь 2018"
                  // date="date"
                  icon={["fas", "dog"]}
                  text="Был посвящен дистанционному обучению в течение периода до декабря.
                  "
                />
                <Item
                  title="Пятый этап"
                  subtitle="январь 2019"
                  // date="date"
                  icon={["fas", "kiwi-bird"]}
                  text="Сессия и выпускные экзамены. Лекции и семинары по социальным навыкам от партнеров КАРПОУ. Выпускники, успешно сдавшие экзамены, получили сертификаты от IT отрасли."
                />
              </VerticalTimeline>
            </div>
          </div>
        </section>
      </Fade>
    );
  }
}
