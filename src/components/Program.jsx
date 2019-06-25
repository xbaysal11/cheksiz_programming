import React, { Component } from "react";

import Modal from "react-responsive-modal";
import { withTranslation } from "react-i18next";

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
    const { t } = this.props;
    return (
      <div>
        <section id="program" className="ftco-section-program">
          <div className="parallax-img d-flex align-items-center">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-md-7 text-center heading-section ">
                  <h2>{t("Program Title")}</h2>
                  <p>{t("Program Description")}</p>
                  <p>
                    <button
                      onClick={this.onOpenModal}
                      className="btn btn-primary mt-3 py-3 px-5"
                    >
                      {t("Program Title")}
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Modal
          open={this.state.open}
          onClose={this.onCloseModal}
          className="container modalText"
        >
            <h1 className="text-center">Front-end web development</h1>
            <ul>
              <li>
                <h1>Introduction</h1>
                <ul>
                  <li>
                    <h2>Web development</h2>
                  </li>
                  <li>
                    <h2>Front-end development</h2>
                  </li>
                  <li>
                    <h2>Back-end development</h2>
                  </li>
                </ul>
              </li>
            </ul>
            <ul start="2">
              <li>
                <h1>HTML</h1>
                <ul>
                  <li>
                    <h2>Introduction</h2>
                    <ul>
                      <li>
                        <h3>Internet and the Web</h3>
                      </li>
                      <li>
                        <h3>Internet protocols</h3>
                      </li>
                      <li>
                        <h3>History of Internet</h3>
                      </li>
                      <li>
                        <h3>History of the Web</h3>
                      </li>
                      <li>
                        <h3>History of web browsers</h3>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>How the Web works</h2>
                    <ul>
                      <li>
                        <h3>Hypertext and hypermedia</h3>
                      </li>
                      <li>
                        <h3>URLs</h3>
                      </li>
                      <li>
                        <h3>Domain name</h3>
                      </li>
                      <li>
                        <h3>IP address and Domain Name System</h3>
                      </li>
                      <li>
                        <h3>How we connect to the Internet</h3>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>Creation of web pages</h2>
                    <ul>
                      <li>
                        <h3>Web standards</h3>
                      </li>
                      <li>
                        <h3>Web development</h3>
                      </li>
                      <li>
                        <h3>Content management system</h3>
                      </li>
                      <li>
                        <h3>Blogger</h3>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>HTML: Basics</h2>
                    <ul>
                      <li>
                        <h3>History of HTML</h3>
                      </li>
                      <li>
                        <h3>Structure of a web page</h3>
                      </li>
                      <li>
                        <h3>Structure of a web page in HTML5:</h3>
                      </li>
                      <li>
                        <h3>Basic tags and attributes</h3>
                      </li>
                      <li>
                        <h3>Encoding and charset</h3>
                      </li>
                      <li>
                        <h3>Headings</h3>
                      </li>
                      <li>
                        <h3>Defining text</h3>
                      </li>
                      <li>
                        <h3>Lists</h3>
                      </li>
                      <li>
                        <h3>Hyperlinks</h3>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>HTML: Multimedia</h2>
                    <ul>
                      <li>
                        <h3>Images</h3>
                      </li>
                      <li>
                        <h3>Image map</h3>
                      </li>
                      <li>
                        <h3>Audio and video</h3>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>Publication of a website</h2>
                    <ul>
                      <li>
                        <h3>How to buy a domain name</h3>
                      </li>
                      <li>
                        <h3>Hosting</h3>
                      </li>
                      <li>
                        <h3>FTP</h3>
                      </li>
                      <li>
                        <h3>How to publish a website</h3>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>HTML: Forms</h2>
                    <ul>
                      <li>
                        <h3>
                          Basic controls: input (text, checkbox, radio, file,
                          password, hidden, button, submit, image, reset),
                          button
                        </h3>
                      </li>
                      <li>
                        <h3>
                          Advanced controls: select (option, optgroup),
                          textarea, label, fieldset, legend
                        </h3>
                      </li>
                      <li>
                        <h3>Form controls in HTML5</h3>
                      </li>
                      <li>
                        <h3>Attributes</h3>
                      </li>
                      <li>
                        <h3>Sending a form: GET and POST</h3>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>HTML: Tables</h2>
                    <ul>
                      <li>
                        <h3>Basic tags: table, tr, th, td</h3>
                      </li>
                      <li>
                        <h3>
                          Advanced tags: thead, tbody, tfoot, caption, colgroup,
                          col
                        </h3>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>Writing correct HTML</h2>
                    <ul>
                      <li>
                        <h3>Validation</h3>
                      </li>
                      <li>
                        <h3>Typical errors</h3>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <ul start="3">
              <li>
                <h1>CSS</h1>
                <ul>
                  <li>
                    <h2>Basics</h2>
                    <ul>
                      <li>
                        <h3>History of CSS</h3>
                      </li>
                      <li>
                        <h3>Structure of a stylesheet</h3>
                      </li>
                      <li>
                        <h3>Linking CSS with HTML</h3>
                      </li>
                      <li>
                        <h3>Basic properties and attributes</h3>
                      </li>
                      <li>
                        <h3>Basic selectors</h3>
                      </li>
                      <li>
                        <h3>Advanced selectors</h3>
                      </li>
                      <li>
                        <h3>Colours</h3>
                      </li>
                      <li>
                        <h3>Encoding and charset</h3>
                      </li>
                      <li>
                        <h3>CSS3 new properties</h3>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>Formatting text</h2>
                    <ul>
                      <li>
                        <h3>Font properties</h3>
                      </li>
                      <li>
                        <h3>Text properties</h3>
                      </li>
                      <li>
                        <h3>
                          Other properties: letter-spacing, word-spacing,
                          line-height, white-space
                        </h3>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>Formatting lists</h2>
                  </li>
                  <li>
                    <h2>Cascade and Inheritance</h2>
                    <ul>
                      <li>
                        <h3>Cascade</h3>
                      </li>
                      <li>
                        <h3>Specificity</h3>
                      </li>
                      <li>
                        <h3>Inheritance</h3>
                      </li>
                      <li>
                        <h3>
                          Declared values, cascaded value, computed value,
                          actual value
                        </h3>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>Box model</h2>
                    <ul>
                      <li>
                        <h3>Box properties: width and height</h3>
                      </li>
                      <li>
                        <h3>Types of boxes: display</h3>
                      </li>
                      <li>
                        <h3>Border properties</h3>
                      </li>
                      <li>
                        <h3>Padding properties</h3>
                      </li>
                      <li>
                        <h3>Margin properties</h3>
                      </li>
                      <li>
                        <h3>Other properties: overflow, outline</h3>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>Layout of a web page</h2>
                    <ul>
                      <li>
                        <h3>Fix design</h3>
                      </li>
                      <li>
                        <h3>Elastic design</h3>
                      </li>
                      <li>
                        <h3>Liquid design</h3>
                      </li>
                      <li>
                        <h3>Responsive design</h3>
                      </li>
                      <li>
                        <h3>Grid design</h3>
                      </li>
                      <li>
                        <h3>Layout of a form</h3>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>Responsive Web Design</h2>
                    <ul>
                      <li>
                        <h3>One Web</h3>
                      </li>
                      <li>
                        <h3>Flexbox</h3>
                      </li>
                      <li>
                        <h3>Media query</h3>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>Frameworks</h2>
                    <ul>
                      <li>
                        <h3>What is a framework?</h3>
                      </li>
                      <li>
                        <h3>Grid design</h3>
                      </li>
                      <li>
                        <h3>Bootstrap 3</h3>
                      </li>
                      <li>
                        <h3>Bootstrap 4 new features</h3>
                      </li>
                      <li>
                        <h3>Templates</h3>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>Pre-processors</h2>
                    <ul>
                      <li>
                        <h3>Less/Sass</h3>
                      </li>
                      <li>
                        <h3>Variables</h3>
                      </li>
                      <li>
                        <h3>Loops</h3>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>Writing correct CSS</h2>
                    <ul>
                      <li>
                        <h3>Validation</h3>
                      </li>
                      <li>
                        <h3>Sorting a CSS</h3>
                      </li>
                      <li>
                        <h3>Typical errors</h3>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <ul start="4">
              <li>
                <h1>Web design</h1>
                <ul>
                  <li>
                    <h2>Prototypes</h2>
                  </li>
                  <li>
                    <h2>Wireframes</h2>
                  </li>
                  <li>
                    <h2>Mockups</h2>
                  </li>
                  <li>
                    <h2>Typography</h2>
                  </li>
                  <li>
                    <h2>Colour</h2>
                  </li>
                </ul>
              </li>
            </ul>
            <ul start="5">
              <li>
                <h1>JavaScript</h1>
                <ul>
                  <li>
                    <h2>Basics</h2>
                    <ul>
                      <li>
                        <h3>History of JavaScript</h3>
                      </li>
                      <li>
                        <h3>Linking JavaScript with HTML and CSS</h3>
                      </li>
                      <li>
                        <h3>Syntax</h3>
                        <ul>
                          <li>
                            <h4>Variables</h4>
                          </li>
                          <li>
                            <h4>Data types</h4>
                          </li>
                          <li>
                            <h4>Expressions</h4>
                          </li>
                          <li>
                            <h4>Operators</h4>
                          </li>
                          <li>
                            <h4>Blocks of code</h4>
                          </li>
                          <li>
                            <h4>Control flow statements</h4>
                            <ul>
                              <li>
                                <h5>Conditional</h5>
                              </li>
                              <li>
                                <h5>Loops</h5>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>Functions</h2>
                    <ul>
                      <li>
                        <h3>Declaration</h3>
                      </li>
                      <li>
                        <h3>Parameters</h3>
                      </li>
                      <li>
                        <h3>Return statement</h3>
                      </li>
                      <li>
                        <h3>Default parameters</h3>
                      </li>
                      <li>
                        <h3>Rest parameters</h3>
                      </li>
                      <li>
                        <h3>Arrow functions</h3>
                      </li>
                      <li>
                        <h3>Anonymous function</h3>
                      </li>
                      <li>
                        <h3>Closures</h3>
                      </li>
                      <li>
                        <h3>The arguments object</h3>
                      </li>
                      <li>
                        <h3>
                          Predefined functions: decodeURI(), encodeURI(),
                          escape(), eval(), parseFloat(), parseInt(), unescape()
                        </h3>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>Document Object Model</h2>
                    <ul>
                      <li>
                        <h3>Hierarchy of objects</h3>
                      </li>
                      <li>
                        <h3>Important objects: window, document</h3>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>Browser Object Model</h2>
                    <ul>
                      <li>
                        <h3>
                          Important objects: cookies, history, location,
                          navigator
                        </h3>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>Object oriented programming</h2>
                    <ul>
                      <li>
                        <h3>Reference this</h3>
                      </li>
                      <li>
                        <h3>Properties and methods</h3>
                      </li>
                      <li>
                        <h3>Inheritance</h3>
                      </li>
                      <li>
                        <h3>Namespace</h3>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>Changing the content and style of a web page</h2>
                    <ul>
                      <li>
                        <h3>Functions for traversing a DOM</h3>
                      </li>
                      <li>
                        <h3>Property style</h3>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>Events</h2>
                    <ul>
                      <li>
                        <h3>Types of events</h3>
                      </li>
                      <li>
                        <h3>Add event</h3>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>Frameworks</h2>
                    <ul>
                      <li>
                        <h3>What is a framework?</h3>
                      </li>
                      <li>
                        <h3>JQuery</h3>
                        <ul>
                          <li>
                            <h4>Selectors</h4>
                          </li>
                          <li>
                            <h4>Events</h4>
                          </li>
                          <li>
                            <h4>Append and prepend functions</h4>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <ul start="6">
              <li>
                <h1>Search Engine Optimization</h1>
                <ul>
                  <li>
                    <h2>How search engines work</h2>
                  </li>
                  <li>
                    <h2>Basic techniques</h2>
                  </li>
                  <li>
                    <h2>Advanced techniques</h2>
                  </li>
                </ul>
              </li>
            </ul>
            <ul start="7">
              <li>
                <h1>Web accessibility</h1>
                <ul>
                  <li>
                    <h2>What is web accessibility?</h2>
                    <ul>
                      <li>
                        <h3>Definition</h3>
                      </li>
                      <li>
                        <h3>Examples of web accessibility problems</h3>
                      </li>
                      <li>
                        <h3>
                          How the Web can improve the life of people with
                          disability
                        </h3>
                      </li>
                      <li>
                        <h3>Myths</h3>
                      </li>
                      <li>
                        <h3>Benefits</h3>
                      </li>
                      <li>
                        <h3>Examples of accessible websites</h3>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>People with disability and the Web</h2>
                    <ul>
                      <li>
                        <h3>People with disability</h3>
                      </li>
                      <li>
                        <h3>
                          Different disabilities that can affect web
                          accessibility
                        </h3>
                        <ul>
                          <li>
                            <h4>People with visual impairment</h4>
                          </li>
                          <li>
                            <h4>People with hearing impairment</h4>
                          </li>
                          <li>
                            <h4>People with motor impairment</h4>
                          </li>
                          <li>
                            <h4>People with cognitive impairment</h4>
                          </li>
                          <li>
                            <h4>People with speech and language disorder</h4>
                          </li>
                          <li>
                            <h4>People with multiple impairments</h4>
                          </li>
                          <li>
                            <h4>Elderly people</h4>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h3>Assistive technology</h3>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>Guidelines and laws</h2>
                    <ul>
                      <li>
                        <h3>WCAG 1.0</h3>
                      </li>
                      <li>
                        <h3>WCAG 2.0</h3>
                      </li>
                      <li>
                        <h3>New features of WCAG 2.1</h3>
                      </li>
                      <li>
                        <h3>Laws</h3>
                        <ul>
                          <li>
                            <h4>Examples</h4>
                          </li>
                          <li>
                            <h4>Kyrgyzstan</h4>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>Accessible content</h2>
                    <ul>
                      <li>
                        <h3>Four most problematic items</h3>
                      </li>
                      <li>
                        <h3>Images</h3>
                      </li>
                      <li>
                        <h3>Audio and video</h3>
                      </li>
                      <li>
                        <h3>Subtitles</h3>
                      </li>
                      <li>
                        <h3>Headings</h3>
                      </li>
                      <li>
                        <h3>Paragraphs and quotes</h3>
                      </li>
                      <li>
                        <h3>Language</h3>
                      </li>
                      <li>
                        <h3>Tables</h3>
                      </li>
                      <li>
                        <h3>Forms</h3>
                      </li>
                      <li>
                        <h3>Captchas</h3>
                      </li>
                      <li>
                        <h3>Electronic documents: Word and PDF</h3>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>Accessible navigation</h2>
                    <ul>
                      <li>
                        <h3>Title</h3>
                      </li>
                      <li>
                        <h3>Links</h3>
                      </li>
                      <li>
                        <h3>“Skip to” link</h3>
                      </li>
                      <li>
                        <h3>Keyboard navigation</h3>
                      </li>
                      <li>
                        <h3>Multiple ways and location</h3>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>Accessible design</h2>
                    <ul>
                      <li>
                        <h3>Contrast</h3>
                      </li>
                      <li>
                        <h3>Colour</h3>
                      </li>
                      <li>
                        <h3>Typography and dyslexia</h3>
                      </li>
                      <li>
                        <h3>Responsive web design</h3>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>Accessible interaction</h2>
                    <ul>
                      <li>
                        <h3>JavaScript</h3>
                      </li>
                      <li>
                        <h3>WAI-ARIA</h3>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>Accessibility and Search Engine Optimization (SEO)</h2>
                    <ul>
                      <li>
                        <h3>Introduction to Search Engine Optimization</h3>
                      </li>
                      <li>
                        <h3>Accessibility and Search Engine Optimization</h3>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2>Evaluation of web accessibility</h2>
                    <ul>
                      <li>
                        <h3>
                          Website Accessibility Conformance Evaluation
                          Methodology (WCAG-EM)
                        </h3>
                      </li>
                      <li>
                        <h3>Automatic evaluation tools</h3>
                        <ul>
                          <li>
                            <h4>AChecker</h4>
                          </li>
                          <li>
                            <h4>TAW</h4>
                          </li>
                          <li>
                            <h4>WAVE</h4>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
        </Modal>
      </div>
    );
  }
}
export default withTranslation()(Program);
