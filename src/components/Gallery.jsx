import React, { Component, createRef } from "react";

import { withTranslation } from "react-i18next";
import Pulse from "react-reveal/Pulse";
import Masonry from "react-masonry-component";
import { LightgalleryItem } from "react-lightgallery";

const PhotoItem = ({ category, gallery_category, order, img, text }) => (
  <div className={`mix ${category}`} data-order={order}>
    <div className="responsive">
      <Masonry>
        <div className="gallery">
          <Pulse>
            <LightgalleryItem group={gallery_category} src={img}>
              <img src={img} alt="" />
            </LightgalleryItem>
          </Pulse>
        </div>
      </Masonry>
    </div>
  </div>
);
const Button = ({ categoryName, dataFilter, ...props }) => (
  <button
    {...props}
    type="button"
    data-filter={`${dataFilter}`}
    style={{ width: "180px", margin: "15px", padding: "8px 15px" }}
    className="btn btn-outline-white"
  >
    {categoryName}
  </button>
);
class Gallery extends Component {
  state = {
    photos: [],
    categories: [],
    assets: [],
    currentCategory: null
  };
  componentDidMount() {
    this.fetchImages();
  }
  fetchImages = async () => {
    const response = await fetch(
      "https://cdn.contentful.com/spaces/9odcsb42457k/environments/master/entries?access_token=9O1ReKZAMMbZMz0BUBoLTRC_EIj5WZySKpRrEQs3T6k"
    );
    const data = await response.json();
    this.setState({
      photos: data.items.filter(i => i.sys.contentType.sys.id === "group"),
      categories: data.items.filter(
        i => i.sys.contentType.sys.id === "galleryCategory"
      ),
      assets: data.includes.Asset.reduce((acc, currentItem) => {
        return { ...acc, [currentItem.sys.id]: currentItem.fields.file.url };
      }, {})
    });
  };
  mix_container = createRef();
  render() {
    const m_state = this.mixer ? this.mixer.getState() : undefined;
    const { t } = this.props;
    return (
      <section id="gallery" className="ftco-section-parallax">
        <div className="parallax-img d-flex align-items-center">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-md-12 text-center heading-section heading-section-white ">
                <h2>{t("Gallery Title")}</h2>
                <p>{t("Gallery Description")}</p>
                <div
                  className=" text-center"
                  style={{
                    width: "100%",
                    textAlign: "center"
                  }}
                >
                  <Button
                    categoryName={t("Gallery Tab all")}
                    onClick={() => {
                      this.setState({ currentCategory: null });
                    }}
                  />
                  {this.state.categories.map((category, idx) => (
                    <Button
                      key={idx}
                      categoryName={
                        category.fields.title === "Bishkek"
                          ? t("Gallery Tab 1")
                          : t("Gallery Tab 2")
                      }
                      onClick={() => {
                        this.setState({ currentCategory: category.sys.id });
                      }}
                    />
                  ))}
                  <div ref={this.mix_container} className="container-gallery">
                    {this.state.photos
                      .filter(photo =>
                        !this.state.currentCategory
                          ? true
                          : photo.fields.reference.sys.id ===
                            this.state.currentCategory
                      )
                      .map((po, idx) => (
                        <PhotoItem
                          key={idx}
                          img={this.state.assets[po.fields.image.sys.id]}
                          category={po.fields.reference.sys.id}
                          gallery_category={
                            m_state && m_state.activeFilter.selector === ".mix"
                              ? "alls"
                              : po.fields.reference.sys.id
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
                  width: "100%",
                  textAlign: "center"
                }}
              >
                <div className="iframe-container">
                  <iframe
                    title="video"
                    className="video"
                    src="https://www.youtube-nocookie.com/embed/fnNh66l7GRI"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default withTranslation()(Gallery);
