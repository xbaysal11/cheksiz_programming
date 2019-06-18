import React, { Component, createRef } from "react";

import Fade from "react-reveal/Fade";
import mixitup from "mixitup";
import { LightgalleryItem } from "react-lightgallery";

// import "../../node_modules/lightgallery.js/dist/css/lightgallery.min.css";

// import image_1 from "../assets/img/50605809_516659252155647_7538535789169213440_n.jpg";
// import image_2 from "../assets/img/38878078_429647717523468_2305239364445143040_o.jpg";
// import image_3 from "../assets/img/DSC_0040.JPG";

const GROUP1 = [
  "https://images.unsplash.com/flagged/photo-1551706646-9c816bfbff8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
  "https://images.unsplash.com/photo-1551633550-64761da5342b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80"
];

const GROUP2 = [
  "https://images.unsplash.com/photo-1551833726-deb5e781c68f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1551803021-92431219e83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1551852284-ce16dd4d63d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
];

const PhotoItem = ({ category, gallery_category, order, img, text }) => (
  <div className={`mix ${category}`} data-order={order}>
    <div className="responsive">
      <div className="gallery">
        <a>
          <LightgalleryItem group={gallery_category} src={img}>
            <img src={img} style={{ width: "100%" }} />
          </LightgalleryItem>
        </a>
        {/* <div className="desc">{text}</div> */}
      </div>
    </div>
  </div>
);

const Button = ({ categoryName, dataFilter }) => (
  <button
    type="button"
    data-filter={`${dataFilter}`}
    style={{ width: "180px", margin: "15px", padding: "8px 15px" }}
    className="btn btn-outline-white"
  >
    {categoryName}
  </button>
);

export default class Gallery extends Component {
  componentDidMount() {
    this.mixer = mixitup(".container-gallery", {
      selectors: {
        target: ".mix"
      },
      animation: {
        effects: "fade rotateZ(-180deg)" /* fade scale */,
        duration: 700 /* 600 */
      }
    });
    this.mix_container.current.addEventListener("mixEnd", () => {
      this.forceUpdate();
    });
    this.forceUpdate();
  }

  mix_container = createRef();

  render() {
    const m_state = this.mixer ? this.mixer.getState() : undefined;
    if (m_state) {
      console.log(m_state.activeFilter.selector);
    }
    return (
      <Fade>
        <section id="gallery" className="ftco-section-parallax">
          <div className="parallax-img d-flex align-items-center">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-md-12 text-center heading-section heading-section-white ftco-animate">
                  <h2>Галерея</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quam laudantium maxime labore, vitae autem ea esse, quae
                    odio nihil a quod voluptates minima porro eligendi
                    reiciendis, voluptatibus nemo! Ex, tempora?
                  </p>
                  <div
                    className=" text-center"
                    style={{
                      marginTop: "2em",
                      paddingTop: "2em",
                      borderTop: "1px solid white",
                      width: "100%",
                      textAlign: "center"
                    }}
                  >
                    <Button categoryName="All" dataFilter="all" />
                    {[GROUP1, GROUP2].map((_, idx) => (
                      <Button
                        key={idx}
                        categoryName={`Category ${idx}`}
                        dataFilter={`.group_${idx}`}
                      />
                    ))}

                    <div ref={this.mix_container} className="container-gallery">
                      {[GROUP1, GROUP2]
                        .reduce((acc, current, idx) => {
                          return [
                            ...acc,
                            ...current.map(u => ({
                              url: u,
                              group: `group_${idx}`
                            }))
                          ];
                        }, [])
                        .map((po, idx) => (
                          <PhotoItem
                            key={idx}
                            img={po.url}
                            category={po.group}
                            gallery_category={
                              m_state &&
                              m_state.activeFilter.selector === ".mix"
                                ? "alls"
                                : po.group
                            }
                            order="1"
                            text="description"
                          />
                        ))}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    marginTop: "2em",
                    paddingTop: "2em",
                    borderTop: "1px solid white",
                    width: "100%",
                    textAlign: "center"
                  }}
                >
                  <iframe
                    width="835"
                    height="470"
                    src="https://www.youtube-nocookie.com/embed/fnNh66l7GRI"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>
    );
  }
}
