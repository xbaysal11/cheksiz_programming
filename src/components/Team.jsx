import React, { Component } from "react";

import Fade from "react-reveal/Fade";

import person_4 from "../assets/img/person_4.jpg";

const Item = ({ name, img, prof, size }) => (
  <div className={`col-md-${size} text-center   ftco-animate`}>
    <div className="blog-entry">
      <a
        href="blog-single.html"
        className="block-20"
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className="text p-4 d-block">
        <h3 className="heading">
          <a href="#">{name}</a>
        </h3>
        <div className="meta mb-3">
          <div>
            <a href="#">{prof}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default class Team extends Component {
  render() {
    return (
      <Fade>
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
              <Item
                name="Серхио Лухан Мора"
                img={person_4}
                prof="Международный эксперт"
                size="3"
              />
              <Item
                name="Максат Абдыкапаров"
                img={person_4}
                prof="Национальный эксперт"
                size="3"
              />
            </div>
            <div className="row justify-content-md-center">
              <Item
                name="Тимур Аманов "
                img={person_4}
                prof="Тренер"
                size="3"
              />
              <Item
                name="Кожоназар Рысбаев "
                img={person_4}
                prof="Тренер"
                size="3"
              />
              <Item name="Элис Матиев" img={person_4} prof="Тренер" size="3" />
              <Item
                name="Алмаз Жолдошбеков"
                img={person_4}
                prof="Тренер"
                size="3"
              />
            </div>
            <div className="row justify-content-center">
              <div className="col-md-7 text-center heading-section ftco-animate">
                <p style={{ margin: "1em 0 1em 0" }}>
                  Также, большой вклад внесли волонтеры проекта с различных
                  ВУЗов КР.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Fade>
    );
  }
}
