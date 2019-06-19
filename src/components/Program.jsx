import React, { Component } from "react";
import Modal from "react-responsive-modal";

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
      <div>
        <section id="program" className="ftco-section-program">
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
                      className="btn btn-primary mt-3 py-3 px-5"
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
          <h5>
            Front-end web development
            <br />
            <br />
            1 Introduction
            <br />
            1.1 Web development
            <br />
            1.2 Front-end development
            <br />
            1.3 Back-end development
            <br />
            <br />
            2 HTML
            <br />
            2.1 Introduction
            <br />
            2.1.1 Internet and the Web
            <br />
            2.1.2 Internet protocols
            <br />
            2.1.3 History of Internet <br />
            2.1.4 History of the Web
            <br />
            2.1.5 History of web browsers
            <br />
            2.2 How the Web works
            <br />
            2.2.1 Hypertext and hypermedia
            <br />
            2.2.2 URLs
            <br />
            2.2.3 Domain name
            <br />
            2.2.4 IP address and Domain Name System
            <br />
            2.2.5 How we connect to the Internet
            <br />
            2.3 Creation of web pages
            <br />
            2.3.1 Web standards
            <br />
            2.3.2 Web development
            <br />
            2.3.3 Content management system
            <br />
            2.3.4 Blogger
            <br />
            2.4 HTML: Basics
            <br />
            2.4.1 History of HTML
            <br />
            2.4.2 Structure of a web page
            <br />
            2.4.3 Structure of a web page in HTML5: <br />
            2.4.4 Basic tags and attributes
            <br />
            2.4.5 Encoding and charset
            <br />
            2.4.6 Headings
            <br />
            2.4.7 Defining text <br />
            2.4.8 Lists <br />
            2.4.9 Hyperlinks
            <br />
            2.5 HTML: Multimedia
            <br />
            2.5.1 Images
            <br />
            2.5.2 Image map
            <br />
            2.5.3 Audio and video
            <br />
            2.6 Publication of a website
            <br />
            2.6.1 How to buy a domain name
            <br />
            2.6.2 Hosting
            <br />
            2.6.3 FTP
            <br />
            2.6.4 How to publish a website
            <br />
            2.7 HTML: Forms
            <br />
            2.7.1 Basic controls: input (text, checkbox, radio, file, password,
            hidden, button, submit, image, reset), button
            <br />
            2.7.2 Advanced controls: select (option, optgroup), textarea, label,
            fieldset, legend
            <br />
            2.7.3 Form controls in HTML5
            <br />
            2.7.4 Attributes
            <br />
            2.7.5 Sending a form: GET and POST
            <br />
            2.8 HTML: Tables
            <br />
            2.8.1 Basic tags: table, tr, th, td
            <br />
            2.8.2 Advanced tags: thead, tbody, tfoot, caption, colgroup, col
            <br />
            2.9 Writing correct HTML
            <br />
            2.9.1 Validation
            <br />
            2.9.2 Typical errors
            <br />
            <br />
            3 CSS
            <br />
            3.1 Basics
            <br />
            3.1.1 History of CSS
            <br />
            3.1.2 Structure of a stylesheet
            <br />
            3.1.3 Linking CSS with HTML
            <br />
            3.1.4 Basic properties and attributes
            <br />
            3.1.5 Basic selectors
            <br />
            3.1.6 Advanced selectors
            <br />
            3.1.7 Colours
            <br />
            3.1.8 Encoding and charset
            <br />
            3.1.9 CSS3 new properties
            <br />
            3.2 Formatting text
            <br />
            3.2.1 Font properties
            <br />
            3.2.2 Text properties
            <br />
            3.2.3 Other properties: letter-spacing, word-spacing, line-height,
            white-space
            <br />
            3.3 Formatting lists
            <br />
            3.4 Cascade and Inheritance
            <br />
            3.4.1 Cascade
            <br />
            3.4.2 Specificity
            <br />
            3.4.3 Inheritance
            <br />
            3.4.4 Declared values, cascaded value, computed value, actual value
            <br />
            3.5 Box model
            <br />
            3.5.1 Box properties: width and height
            <br />
            3.5.2 Types of boxes: display
            <br />
            3.5.3 Border properties
            <br />
            3.5.4 Padding properties
            <br />
            3.5.5 Margin properties
            <br />
            3.5.6 Other properties: overflow, outline
            <br />
            3.6 Layout of a web page
            <br />
            3.6.1 Fix design
            <br />
            3.6.2 Elastic design
            <br />
            3.6.3 Liquid design
            <br />
            3.6.4 Responsive design
            <br />
            3.6.5 Grid design
            <br />
            3.6.6 Layout of a form
            <br />
            3.7 Responsive Web Design
            <br />
            3.7.1 One Web
            <br />
            3.7.2 Flexbox
            <br />
            3.7.3 Media query
            <br />
            3.8 Frameworks
            <br />
            3.8.1 What is a framework?
            <br />
            3.8.2 Grid design
            <br />
            3.8.3 Bootstrap 3<br />
            3.8.4 Bootstrap 4 new features
            <br />
            3.8.5 Templates
            <br />
            3.9 Pre-processors
            <br />
            3.9.1 Less/Sass
            <br />
            3.9.2 Variables
            <br />
            3.9.3 Loops
            <br />
            3.10 Writing correct CSS
            <br />
            3.10.1 Validation
            <br />
            3.10.2 Sorting a CSS
            <br />
            3.10.3 Typical errors
            <br />
            <br />
            4 Web design
            <br />
            4.1 Prototypes
            <br />
            4.2 Wireframes
            <br />
            4.3 Mockups
            <br />
            4.4 Typography
            <br />
            4.5 Colour
            <br />
            <br />
            5 JavaScript
            <br />
            5.1 Basics
            <br />
            5.1.1 History of JavaScript
            <br />
            5.1.2 Linking JavaScript with HTML and CSS
            <br />
            5.1.3 Syntax
            <br />
            5.1.3.1 Variables
            <br />
            5.1.3.2 Data types
            <br />
            5.1.3.3 Expressions
            <br />
            5.1.3.4 Operators
            <br />
            5.1.3.5 Blocks of code
            <br />
            5.1.3.6 Control flow statements
            <br />
            5.1.3.6.1 Conditional
            <br />
            5.1.3.6.2 Loops
            <br />
            5.2 Functions
            <br />
            5.2.1 Declaration
            <br />
            5.2.2 Parameters
            <br />
            5.2.3 Return statement
            <br />
            5.2.4 Default parameters
            <br />
            5.2.5 Rest parameters
            <br />
            5.2.6 Arrow functions
            <br />
            5.2.7 Anonymous function
            <br />
            5.2.8 Closures
            <br />
            5.2.9 The arguments object
            <br />
            5.2.10 Predefined functions: decodeURI(), encodeURI(), escape(),
            eval(), parseFloat(), parseInt(), unescape()
            <br />
            5.3 Document Object Model
            <br />
            5.3.1 Hierarchy of objects
            <br />
            5.3.2 Important objects: window, document
            <br />
            5.4 Browser Object Model
            <br />
            5.4.1 Important objects: cookies, history, location, navigator
            <br />
            5.5 Object oriented programming
            <br />
            5.5.1 Reference this
            <br />
            5.5.2 Properties and methods
            <br />
            5.5.3 Inheritance
            <br />
            5.5.4 Namespace
            <br />
            5.6 Changing the content and style of a web page
            <br />
            5.6.1 Functions for traversing a DOM
            <br />
            5.6.2 Property style
            <br />
            5.7 Events
            <br />
            5.7.1 Types of events
            <br />
            5.7.2 Add event
            <br />
            5.8 Frameworks
            <br />
            5.8.1 What is a framework?
            <br />
            5.8.2 JQuery
            <br />
            5.8.2.1 Selectors
            <br />
            5.8.2.2 Events
            <br />
            5.8.2.3 Append and prepend functions
            <br />
            <br />
            6 Search Engine Optimization
            <br />
            6.1 How search engines work
            <br />
            6.2 Basic techniques
            <br />
            6.3 Advanced techniques
            <br />
            <br />
            7 Web accessibility
            <br />
            7.1 What is web accessibility?
            <br />
            7.1.1 Definition
            <br />
            7.1.2 Examples of web accessibility problems
            <br />
            7.1.3 How the Web can improve the life of people with disability
            <br />
            7.1.4 Myths
            <br />
            7.1.5 Benefits
            <br />
            7.1.6 Examples of accessible websites
            <br />
            7.2 People with disability and the Web
            <br />
            7.2.1 People with disability
            <br />
            7.2.2 Different disabilities that can affect web accessibility
            <br />
            7.2.2.1 People with visual impairment
            <br />
            7.2.2.2 People with hearing impairment
            <br />
            7.2.2.3 People with motor impairment
            <br />
            7.2.2.4 People with cognitive impairment
            <br />
            7.2.2.5 People with speech and language disorder
            <br />
            7.2.2.6 People with multiple impairments
            <br />
            7.2.2.7 Elderly people
            <br />
            7.2.3 Assistive technology
            <br />
            7.3 Guidelines and laws
            <br />
            7.3.1 WCAG 1.0
            <br />
            7.3.2 WCAG 2.0
            <br />
            7.3.3 New features of WCAG 2.1
            <br />
            7.3.4 Laws
            <br />
            7.3.4.1 Examples
            <br />
            7.3.4.2 Kyrgyzstan
            <br />
            7.4 Accessible content
            <br />
            7.4.1 Four most problematic items
            <br />
            7.4.2 Images
            <br />
            7.4.3 Audio and video
            <br />
            7.4.4 Subtitles
            <br />
            7.4.5 Headings
            <br />
            7.4.6 Paragraphs and quotes
            <br />
            7.4.7 Language
            <br />
            7.4.8 Tables
            <br />
            7.4.9 Forms
            <br />
            7.4.10 Captchas
            <br />
            7.4.11 Electronic documents: Word and PDF
            <br />
            7.5 Accessible navigation
            <br />
            7.5.1 Title
            <br />
            7.5.2 Links
            <br />
            7.5.3 &ldquo;Skip to&rdquo; link
            <br />
            7.5.4 Keyboard navigation
            <br />
            7.5.5 Multiple ways and location
            <br />
            7.6 Accessible design
            <br />
            7.6.1 Contrast
            <br />
            7.6.2 Colour
            <br />
            7.6.3 Typography and dyslexia
            <br />
            7.6.4 Responsive web design
            <br />
            7.7 Accessible interaction
            <br />
            7.7.1 JavaScript
            <br />
            7.7.2 WAI-ARIA
            <br />
            7.8 Accessibility and Search Engine Optimization (SEO)
            <br />
            7.8.1 Introduction to Search Engine Optimization
            <br />
            7.8.2 Accessibility and Search Engine Optimization
            <br />
            7.9 Evaluation of web accessibility
            <br />
            7.9.1 Website Accessibility Conformance Evaluation Methodology
            (WCAG-EM)
            <br />
            7.9.2 Automatic evaluation tools
            <br />
            7.9.2.1 AChecker
            <br />
            7.9.2.2 TAW
            <br />
            7.9.2.3 WAVE
          </h5>
        </Modal>
      </div>
    );
  }
}
export default Program;
