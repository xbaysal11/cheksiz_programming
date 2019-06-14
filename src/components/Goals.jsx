import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fab, fas);

export default class Goals extends Component {
  render() {
    return (
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-md-6 text-center heading-section ftco-animate">
              <span className="subheading">ЦЕЛИ И ЗАДАЧИ ПРОЕКТА</span>
              <h2 className="mb-4">
                “Продвижение обучения в области IT для людей с особыми
                потребностями”
              </h2>
              <p>
                Проект “Продвижение обучения в области IT для людей с особыми
                потребностями” реализуется Кыргызской ассоциацией разработчиков
                программного обеспечения и услуг (КАРПОУ) и IT Академией при
                поддержке Европейского Союза.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-lg-4 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services d-block text-center">
                <div className="d-flex justify-content-center">
                  <div className="icon color-3 d-flex justify-content-center mb-3">
                    <span>
                      <FontAwesomeIcon
                        icon={["fas", "lightbulb"]}
                        className="align-self-center"
                        size="3x"
                      />
                    </span>
                  </div>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Старт проекта</h3>
                  <p>
                    Проект начал свою работу с января 2018 года, охватывает все
                    регионы Кыргызстана и направлен на обучение навыков,
                    востребованных на рынке труда для молодежи с особыми
                    потребностями.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-lg-4 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services d-block text-center">
                <div className="d-flex justify-content-center">
                  <div className="icon color-1 d-flex justify-content-center mb-3">
                    <span>
                      <FontAwesomeIcon
                        icon={["fas", "laptop"]}
                        className="align-self-center"
                        size="3x"
                      />
                    </span>
                  </div>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Долгосрочная цель</h3>
                  <p>
                    Внесение вклада в сокращение уровня безработицы, особенно
                    среди таких социальных групп, как люди с особыми
                    потребностями, и подготовка профессиональных работников,
                    которые будут способствовать социально-экономическому
                    развитию Кыргызской Республики.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-lg-4 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services d-block text-center">
                <div className="d-flex justify-content-center">
                  <div className="icon color-2 d-flex justify-content-center mb-3">
                    <span>
                      <FontAwesomeIcon
                        icon={["fas", "cog"]}
                        className="align-self-center"
                        size="3x"
                      />
                    </span>
                  </div>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Краткосрочная цель</h3>
                  <p>
                    Продвижение обучения в сфере IT для людей с особыми
                    потребностями и повышение их навыков для трудоустройства.
                    Данный проект является первым в КР по обучению ЛОВЗ
                    программированию.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
