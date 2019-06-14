import React, { Component } from "react";

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
  Reviews,
  Program,
  Education
} from "./components";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
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
        <Reviews />
        <Footer />

        {/* loader */}
        {/* <div id="ftco-loader" className="show fullscreen">
          <svg className="circular" width="48px" height="48px">
            <circle
              className="path-bg"
              cx="24"
              cy="24"
              r="22"
              fill="none"
              strokeWidth="4"
              stroke="#eeeeee"
            />
            <circle
              className="path"
              cx="24"
              cy="24"
              r="22"
              fill="none"
              strokeWidth="4"
              stroke-miterlimit="10"
              stroke="#F96D00"
            />
          </svg>
        </div> */}
      </div>
    );
  }
}

export default App;
