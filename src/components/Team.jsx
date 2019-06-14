import React, { Component } from "react";

import person_4 from "../assets/img/person_4.jpg";

export default class Team extends Component {
  render() {
    return (
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-md-7 text-center heading-section ftco-animate">
              <span className="subheading">КОМАНДА ПРОЕКТА</span>
              <h2>Команда проекта</h2>
              <p>Исполнители проекта - КАРПОУ</p>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-md-4 text-center   ftco-animate">
              <div className="blog-entry">
                <a
                  href="blog-single.html"
                  className="block-20"
                  style={{ backgroundImage: `url(${person_4})` }}
                />
                <div className="text p-4 d-block">
                  <h3 className="heading">
                    <a href="#">Серхио Лухан Мора</a>
                  </h3>
                  <div className="meta mb-3">
                    <div>
                      <a href="#">международный эксперт</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center ftco-animate">
              <div className="blog-entry">
                <a
                  href="blog-single.html"
                  className="block-20"
                  style={{ backgroundImage: `url(${person_4})` }}
                />
                <div className="text p-4 d-block">
                  <h3 className="heading">
                    <a href="#">Максат Абдыкапаров</a>
                  </h3>
                  <div className="meta mb-3">
                    <div>
                      <a href="#">национальный эксперт</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-md-3 text-center   ftco-animate">
              <div className="blog-entry">
                <a
                  href="blog-single.html"
                  className="block-20"
                  style={{ backgroundImage: `url(${person_4})` }}
                />
                <div className="text p-4 d-block">
                  <h3 className="heading">
                    <a href="#">Тимур Аманов </a>
                  </h3>
                  <div className="meta mb-3">
                    <div>
                      <a href="#">Тренер</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center   ftco-animate">
              <div className="blog-entry">
                <a
                  href="blog-single.html"
                  className="block-20"
                  style={{ backgroundImage: `url(${person_4})` }}
                />
                <div className="text p-4 d-block">
                  <h3 className="heading">
                    <a href="#">Кожоназар Рысбаев </a>
                  </h3>
                  <div className="meta mb-3">
                    <div>
                      <a href="#">Тренер</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center   ftco-animate">
              <div className="blog-entry">
                <a
                  href="blog-single.html"
                  className="block-20"
                  style={{ backgroundImage: `url(${person_4})` }}
                />
                <div className="text p-4 d-block">
                  <h3 className="heading">
                    <a href="#">Элис Матиев</a>
                  </h3>
                  <div className="meta mb-3">
                    <div>
                      <a href="#">Тренер</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center   ftco-animate">
              <div className="blog-entry">
                <a
                  href="blog-single.html"
                  className="block-20"
                  style={{ backgroundImage: `url(${person_4})` }}
                />
                <div className="text p-4 d-block">
                  <h3 className="heading">
                    <a href="#">Алмаз Жолдошбеков</a>
                  </h3>
                  <div className="meta mb-3">
                    <div>
                      <a href="#">Тренер</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-7 text-center heading-section ftco-animate">
              <p style={{ margin: "1em 0 1em 0" }}>
                Также, большой вклад внесли волонтеры проекта с различных ВУЗов
                КР.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
