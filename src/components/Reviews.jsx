import React, { Component } from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import person_1 from "../assets/img/person_1.jpg";
import person_2 from "../assets/img/person_2.jpg";

library.add(fab, fas);

export default class Reviews extends Component {
  render() {
    return (
      <section className="ftco-section testimony-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-md-7 text-center heading-section ftco-animate">
              <span className="subheading">ОТЗЫВЫ</span>
              <h2 className="mb-4">ОТЗЫВЫ ВЫПУСКНИКОВ</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in
              </p>
            </div>
          </div>
          <div className="row ftco-animate">
            <div className="col-md-12">
              <OwlCarousel className="owl-theme" loop margin={10} nav>
                <div className="item text-center">
                  <div className="testimony-wrap p-4 pb-5">
                    <div
                      className="user-img mb-4"
                      style={{
                        backgroundImage: `url(${person_2})`
                      }}
                    >
                      <span className="quote d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon
                          className="icon-quote-left"
                          icon={["fas", "quote-left"]}
                        />
                      </span>
                    </div>
                    <div className="text">
                      <p className="mb-5">
                        “До участия в проекте я работал учителем английского
                        языка и не имел представления о программировании. Весной
                        2018 в инстаграме я прочитал объявление о запуске
                        проекта и подал заявку. Пройдя успешно 3 этапа отбора я
                        стал одним из участников проекта. Это было сложно, но,
                        когда вы видите результаты вашего собственного творения,
                        это мотивирует вас стараться и не сдаваться. Я рад, что
                        освоил навыки программирования и открыл для себя новые
                        возможности. В будущем я планирую реализовать свои цели
                        с помощью программирования и работать со всем миром без
                        барьеров. В свою очередь хочу искренне поблагодарить
                        Евросоюз за оказанную нам такую замечательную
                        поддержку.”
                      </p>
                      <p className="name">Омурбек Байышбеков</p>
                      <span className="position">27 лет</span>
                    </div>
                  </div>
                </div>
                <div className="item text-center">
                  <div className="testimony-wrap p-4 pb-5">
                    <div
                      className="user-img mb-4"
                      style={{
                        backgroundImage: `url(${person_1})`
                      }}
                    >
                      <span className="quote d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon
                          className="icon-quote-left"
                          icon={["fas", "quote-left"]}
                        />
                      </span>
                    </div>
                    <div className="text">
                      <p className="mb-3">
                        “Я с детства увлекалась компьютерами и после школы
                        хотела поступить на факультет компьютерной инженерии, но
                        родители были против, и в итоге я поступила в отделение
                        Международных отношений. Позже, по причине инвалидности
                        я часто сталкивались с дискриминацией в области
                        занятости. Несмотря на трудности в поиске работы, в
                        данный момент я работаю в двух местах - учителем
                        начальной школы и секретарем в своем родном селе. О
                        проекте Чексиз Programming я узнала в фейсбук, и подав
                        заявку, прошла в финал. Участие в проекте дало мне
                        возможность начать новую, более успешную жизнь. Я думаю,
                        IT - это самая подходящая профессия для ЛОВЗ, которой
                        можно заниматься, не выходя из дома. Также, оно дает
                        возможность создать что-то своими руками. Девушки также
                        могут успешно работать в этой сфере.”
                      </p>
                      <p className="name">Жумагуль Шайдуллаева</p>
                      <span className="position">24 года</span>
                    </div>
                  </div>
                </div>
                <div className="item text-center">
                  <div className="testimony-wrap p-4 pb-5">
                    <div
                      className="user-img mb-4"
                      style={{
                        backgroundImage: `url(${person_1})`
                      }}
                    >
                      <span className="quote d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon
                          className="icon-quote-left"
                          icon={["fas", "quote-left"]}
                        />
                      </span>
                    </div>
                    <div className="text">
                      <p className="mb-5">
                        "Программирование не требует постоянного присутствия на
                        рабочем месте, это мне подходит. Также оно расширяет мой
                        кругозор — с каждым днем я получаю новые знания. При
                        поступлении в Академию мы сдавали тест. Это был мой
                        первый опыт сдачи экзаменов. Я очень боялась, что не
                        пройду, потому мало обладаю теоретическими знаниями, на
                        практике все довольно быстро схватываю. С началом
                        обучения я стала более ответственной. Раньше не было
                        ничего, что я была обязана делать. Даже для себя. В
                        Академии сначала было трудно. Где-то в середине обучения
                        у меня были даже мысли оставить учебу. Потом я подумала:
                        "Родители верят в меня. Столько всего уже пройдено", — и
                        осталась. Сейчас я рада, что не поддалась трудностям в
                        начале пути.”
                      </p>
                      <p className="name">Мирбек кызы Айзат</p>
                      <span className="position">27 лет</span>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
