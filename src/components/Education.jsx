import React, { Component } from "react";

import Fade from "react-reveal/Fade";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fab, fas);

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
              <div className="col-md-8 col-lg-4 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services d-block text-center">
                  <div className="d-flex justify-content-center">
                    <div className="icon color-3 d-flex justify-content-center mb-3">
                      <span className="num">1</span>
                    </div>
                  </div>
                  <div className="media-body p-2 mt-3">
                    <h3 className="heading">Первый этап (июль 2018)</h3>
                    <p>
                      тренинг в г. Бишкек с использованием 17 адаптированных
                      уроков, которые предусматривали подготовку в течение 2-х
                      недель. Занятия проходили по 4-6 часов каждый день, кроме
                      воскресенья. В конце каждой недели участники проходили
                      предварительный тест на основе заданий тренеров;
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-lg-4 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services d-block text-center">
                  <div className="d-flex justify-content-center">
                    <div className="icon color-1 d-flex justify-content-center mb-3">
                      <span className="num">2</span>
                    </div>
                  </div>
                  <div className="media-body p-2 mt-3">
                    <h3 className="heading">Второй этап (июль-сентябрь)</h3>
                    <p>
                      был предназначен для дистанционного обучения на дому
                      участников или их рабочих местах в течение периода до
                      сентября. За этот период участникам необходимо было начать
                      работу над выпускным проектом. В течение этого периода все
                      студенты работали онлайн с тренерами и командой
                      IT-Академии;
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-lg-4 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services d-block text-center">
                  <div className="d-flex justify-content-center">
                    <div className="icon color-2 d-flex justify-content-center mb-3">
                      <span className="num">3</span>
                    </div>
                  </div>
                  <div className="media-body p-2 mt-3">
                    <h3 className="heading">Третий этап (сентябрь) </h3>
                    <p>
                      Oбучение в течение 2-х недель на базе лагеря Жетиген на
                      Иссык-Куле с использованием 21 адаптированного урока;
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-6 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services d-block text-center">
                  <div className="d-flex justify-content-center">
                    <div className="icon color-3 d-flex justify-content-center mb-3">
                      <span className="num">4</span>
                    </div>
                  </div>
                  <div className="media-body p-2 mt-3">
                    <h3 className="heading">
                      Четвертый этап (октябрь-декабрь 2018)
                    </h3>
                    <p>
                      был посвящен дистанционному обучению в течение периода до
                      декабря;
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services d-block text-center">
                  <div className="d-flex justify-content-center">
                    <div className="icon color-1 d-flex justify-content-center mb-3">
                      <span className="num">5</span>
                    </div>
                  </div>
                  <div className="media-body p-2 mt-3">
                    <h3 className="heading">Пятый этап (январь 2019)</h3>
                    <p>
                      сессия и выпускные экзамены. Лекции и семинары по
                      социальным навыкам от партнеров КАРПОУ. Выпускники,
                      успешно сдавшие экзамены, получили сертификаты от IT
                      отрасли.
                    </p>
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
