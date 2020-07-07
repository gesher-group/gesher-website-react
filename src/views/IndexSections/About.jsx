/*!

=========================================================
* Argon Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: require("assets/img/theme/gesher-presentation.png"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/index-header.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  // {
  //   src: require("assets/img/theme/img-1-1200x1000.jpg"),
  //   altText: "",
  //   caption: "",
  //   header: ""
  // },
  // {
  //   src: require("assets/img/theme/img-2-1200x1000.jpg"),
  //   altText: "",
  //   caption: "",
  //   header: ""
  // }
];

class About extends React.Component {
  render() {
    return (
      <>
        <section className="bg-secondary section section-shaped">
          <polygon className="fill-white" points="2560 0 2560 100 0 500" />
          <div className="shape shape-style-1 shape-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-md">
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="font-weight-light">
                  Who We Are
                </h1>
                <p className="lead mt-4">
                  Gesher Group Consulting is a student-led organization that
                  helps businesses stay competitive even in rapidly changing
                  markets. We will work with 4-5 clients every quarter applying
                  the newest tools in our repertoire, continuously updating our
                  technique. Our biggest strength is in our consultants, top
                  talent sourced from the best at UC Santa Cruz, each with bright
                  and innovative ideas not yet constrained by traditional thinking.
                </p>
                <Button
                  className="btn mt-4"
                  color="default"
                  href="/students"
                >
                  Learn more
                </Button>
              </Col>
              <Col className="mb-lg-auto" lg="6">
                <div className="rounded overflow-hidden transform-perspective-right">
                  <UncontrolledCarousel items={items} />
                </div>
              </Col>
            </Row>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </>
      // <>
      //   <div className="bg-white">
      //     <Container>
      //       <Row className="py-5 justify-content-center">
      //         <Col className="text-justify" lg="12">
      //           <h2 className="text-center">About</h2>
      //           <p className="lead">
      //           Gesher Group Consulting is a student-led organization that helps businesses stay competitive even in rapidly changing markets. We will work with 4-5 clients every quarter applying the newest tools in our repertoire, continuously updating our technique. Our biggest strength is in our consultants, top talent sourced from the best at UC Santa Cruz, each with bright and innovative ideas not yet constrained by traditional thinking.
      //           </p>
      //           {/* <div className="btn-wrapper">
      //             <Button
      //               color="primary"
      //               href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/icons?ref=adsr-landing-page"
      //             >
      //               View demo icons
      //             </Button>
      //             <Button
      //               className="mt-3 mt-md-0"
      //               color="default"
      //               href="https://nucleoapp.com/?ref=1712"
      //               target="_blank"
      //             >
      //               View all icons
      //             </Button>
      //           </div> */}
      //         </Col>
      //       </Row>
      //     </Container>
      //   </div>
      // </>
    );
  }
}

export default About;
