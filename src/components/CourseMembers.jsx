import React, { Component } from "react";

import work_1 from "../assets/img/work-1.jpg";

export default class CourseMembers extends Component {
  render() {
    return (
      <section className="ftco-section ftco-section-members">
        <div className="container">
          <div className="row no-gutters justify-content-center mb-5 pb-5">
            <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
              <span className="subheading">УЧАСТНИКИ КУРСА</span>
              <h2 className="mb-4">
                В рамках Проекта 20 молодых лиц с особыми потребностями получили
                навыки.
              </h2>
              <p>
                В рамках Проекта 20 молодых лиц с особыми потребностями получили
                навыки, востребованные на рынке труда через краткосрочные курсы
                по разработке программного обеспечения.
              </p>
            </div>
          </div>
          <div className="row justify-content-start">
            <div
              className="block-3 d-flex  ftco-animate"
              data-scrollax-parent="true"
            >
              <a
                href="portfolio.html"
                className="image"
                style={{ backgroundImage: `url(${work_1})` }}
                data-scrollax=" properties: { translateY: '-20%'}"
              />
              <div className="text">
                <h4 className="subheading">Требования</h4>
                <h2 className="heading">
                  <a href="portfolio.html">Требования</a>
                </h2>
                <p>
                  Лица с особыми потребностями в возрасте от 15 до 30 лет.
                  Жители всех регионов КР.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-end">
            <div
              className="block-3 d-flex  ftco-animate"
              data-scrollax-parent="true"
            >
              <div className="text">
                <h4 className="subheading">Этапы</h4>
                <h2 className="heading">
                  <a href="portfolio.html">
                    Все кандидаты прошли через 3 этапа отбора:
                  </a>
                </h2>
                <p>
                  онлайн-заявка <br />
                  подача документов <br />
                  интервью
                </p>
              </div>
              <a
                href="portfolio.html"
                className="image"
                style={{ backgroundImage: `url(${work_1})` }}
                data-scrollax=" properties: { translateY: '-20%'}"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 text-center">
                <div className="text text-white">
                  <strong className="number" data-number="400">
                    116
                  </strong>
                  <span>Заявок</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 text-center">
                <div className="text text-white">
                  <strong className="number" data-number="1000">
                    35
                  </strong>
                  <span>Отобранных участников</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 text-center">
                <div className="text text-white">
                  <strong className="number" data-number="8000">
                    20
                  </strong>
                  <span>Выпускников проекта</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
