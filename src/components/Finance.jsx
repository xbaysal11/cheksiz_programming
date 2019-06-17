import React, { Component } from "react";

import Fade from "react-reveal/Fade";

export default class Finance extends Component {
  render() {
    return (
      <Fade>
        <section className="ftco-section-parallax">
          <div className="parallax-img d-flex align-items-center">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
                  <h2>ФИНАНСИРОВАНИЕ СТУДЕНТОВ</h2>
                  <p>
                    Следующие расходы на участие в проекте были покрыты за счет
                    организаторов: выезд из г. Бишкек до мест проведения учебы,
                    а также питание и проживание в местах обучения. Участники
                    должны были сами покрыть транспортные расходы до г. Бишкек и
                    расходы на подключение к интернету дома. <br />
                    Учебные материалы предоставлялись бесплатно в распоряжение
                    участников тренинга в период обучения. Участникам также
                    предоставили оборудование для обучения на весь период
                    обучения.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>
    );
  }
}
