import React, { Component } from "react";

import Fade from "react-reveal/Fade";
import ReactOdometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";

import work_1 from "../assets/img/37367146_407467006408206_4380283471260549120_n.jpg";
import work_2 from "../assets/img/38284453_421666701654903_3074187438420131840_n.jpg";

export default class CourseMembers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requested: 0,
      graduated: 0,
      choosed: 0
    };
  }
  componentDidMount() {
    this.setState({ graduated: 20 });
    this.setState({ choosed: 35 });
    this.setState({ requested: 116 });
  }

  render() {
    const { requested, graduated, choosed } = this.state;
    return (
      <Fade>
        <section className="ftco-section ftco-section-members">
          <div className="container">
            <div className="row no-gutters justify-content-center mb-5 pb-5">
              <div className="col-md-9 text-center heading-section heading-section-white ftco-animate">
                <span className="subheading">УЧАСТНИКИ КУРСА</span>
                <h2 className="mb-4">
                  В рамках Проекта 20 молодых лиц с особыми потребностями
                  получили навыки.
                </h2>
                <p>
                  В рамках Проекта 20 молодых лиц с особыми потребностями
                  получили навыки, востребованные на рынке труда через
                  краткосрочные курсы по разработке программного обеспечения.
                </p>
              </div>
            </div>
            <Fade left>
              <div className="row justify-content-start">
                <div
                  className="block-3 d-flex  ftco-animate"
                  data-scrollax-parent="true"
                >
                  <a
                    href="#"
                    className="image"
                    style={{ backgroundImage: `url(${work_1})` }}
                    // data-scrollax=" properties: { translateY: '-20%'}"
                  />
                  <div className="text">
                    <h4 className="subheading">Требования</h4>
                    <h2 className="heading">
                      <a href="#">Требования</a>
                    </h2>
                    <p>
                      ⚫ Лица с особыми потребностями в возрасте от 15 до 30
                      лет.
                      <br />⚫ Жители всех регионов КР.
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="row justify-content-end">
                <div
                  className="block-3 d-flex  ftco-animate"
                  data-scrollax-parent="true"
                >
                  <div className="text">
                    <h4 className="subheading">Этапы</h4>
                    <h2 className="heading">
                      <a href="#">3 этапа отбора:</a>
                    </h2>
                    <p>
                      ⚫ Онлайн-заявка <br />
                      ⚫ Подача документов <br />⚫ Интервью
                    </p>
                  </div>
                  <a
                    href="#"
                    className="image"
                    style={{ backgroundImage: `url(${work_2})` }}
                    // data-scrollax=" properties: { translateY: '-20%'}"
                  />
                </div>
              </div>
            </Fade>

            <div className="row">
              <div className="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center">
                  <div className="text text-white">
                    <strong className="number" data-number="400">
                      <ReactOdometer value={requested} format="d" />
                    </strong>
                    <span>Заявок</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center">
                  <div className="text text-white">
                    <strong className="number" data-number="1000">
                      <ReactOdometer value={choosed} format="d" />
                    </strong>
                    <span>Отобранных участников</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center">
                  <div className="text text-white">
                    <strong className="number" data-number="8000">
                      <ReactOdometer value={graduated} format="d" />
                    </strong>
                    <span>Выпускников проекта</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>
    );
  }
}
