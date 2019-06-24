import React, { Component } from "react";
import { css } from "@emotion/core";
import { LightgalleryProvider } from "react-lightgallery";
import { PulseLoader } from "react-spinners";

import {
  Header,
  Footer,
  Home,
  AboutUs,
  Goals,
  CourseMembers,
  Methodic,
  Finance,
  Team,
  Testimonial,
  Program,
  Gallery,
  Education
} from "./components";

import "./App.scss";

const override = css`
  z-index: 100;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;
class App extends Component {
  state = {
    isLoading: false
  };
  onLoading = () => {
    this.setState({ isLoading: true });
  };
  render() {
    return (
      <div className="App" onLoad={this.onLoading}>
        <LightgalleryProvider>
          <Header />
          <Home />
          <AboutUs />
          <Goals />
          <CourseMembers />
          <Education />
          <Methodic />
          <Program />
          <Finance />
          <Team />
          <Gallery />
          <Testimonial />
          <Footer />
        </LightgalleryProvider>
        {!this.state.isLoading && (
          <PulseLoader
            css={override}
            sizeUnit={"px"}
            size={10}
            color={"#0312cf"}
          />
        )}
      </div>
    );
  }
}

export default App;
