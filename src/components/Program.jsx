import React, { Component } from "react";
import Modal from "react-responsive-modal";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class Program extends Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div style={styles}>
        <section className="ftco-section-program">
          <div className="parallax-img d-flex align-items-center">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-md-7 text-center heading-section  heading-section-black ftco-animate">
                  <h2>ПРОГРАММА КУРСА</h2>
                  <p>
                    Методика обучения: лекции и презентации, практические
                    занятия, разработка проектов.
                  </p>
                  <p>
                    <a
                      href="#"
                      onClick={this.onOpenModal}
                      class="btn btn-primary mt-3 py-3 px-5"
                    >
                      ПРОГРАММА КУРСА
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Modal open={this.state.open} onClose={this.onCloseModal}>
          <h2>Simple centered modal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </p>
        </Modal>
      </div>
    );
  }
}
export default Program;
