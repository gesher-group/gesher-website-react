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
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardImg,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
    Modal
} from "reactstrap";

// core components
import CardsFooter from "components/Footers/CardsFooter.jsx";

// index page sections
import Download from "../IndexSections/Download.jsx";
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import TeamsHero from "components/TeamsHero.jsx";
import Footer from "../IndexSections/Footer.jsx";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import Typeform from 'components/Typeform.jsx';

import training from "../../assets/img/theme/training.jpg";
import ReactGA from 'react-ga';
ReactGA.initialize('UA-107298827-2');
ReactGA.pageview(window.location.pathname + window.location.search);


class Students extends React.Component {
    state = {
        trainingModal: false,
        workModal: false,
        networkModal: false
    };
    toggleModal = state => {
        this.setState({
            [state] : !this.state[state]
        });
    };
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
    }
    render() {
        return (
            <>
                <DemoNavbar color="success"/>
                <TeamsHero />
                <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">Meet Our Members</h2>
                  <p className="lead text-muted">

                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-1-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Zach Zulanas</span>
                        <small className="h6 text-muted">President<br></br>CS Class of 2021</small>
                      </h5>
                      <div className="mt-3">
                      <Button
                        className="btn-icon-only rounded-circle"
                        color="primary"
                        href="https://www.linkedin.com/in/zzulanas/"

                      >
                        <i className="fa fa-linkedin" />
                      </Button>

                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-2-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Jack Peabody</span>
                        <small className="h6 text-muted">
                          Vice President<br></br>IT Class of 2021
                        </small>
                      </h5>
                      <div className="mt-3">
                      <Button
                        className="btn-icon-only rounded-circle"
                        color="primary"
                        href="https://www.linkedin.com/in/zzulanas/"

                      >
                        <i className="fa fa-linkedin" />
                      </Button>

                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-3-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Matthew Lee</span>
                        <small className="h6 text-muted">Project Manager<br></br>BME Class of 2021</small>
                      </h5>
                      <div className="mt-3">
                      <Button
                        className="btn-icon-only rounded-circle"
                        color="primary"
                        href="https://www.linkedin.com/in/zzulanas/"

                      >
                        <i className="fa fa-linkedin" />
                      </Button>

                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-4-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Yuji Tanaka</span>
                        <small className="h6 text-muted">Director of Marketing<br></br>BME Class of 2022</small>
                      </h5>
                      <div className="mt-3">
                      <Button
                        className="btn-icon-only rounded-circle"
                        color="primary"
                        href="https://www.linkedin.com/in/zzulanas/"

                      >
                        <i className="fa fa-linkedin" />
                      </Button>
                      
                      </div>
                    </div>
                  </div>

                </Col>
              </Row>
              <h1 className="h1">
                <br></br>
                  <center>Our Purpose</center><br></br>
              </h1>
              <Row>
              <Col className="mb-5 mb-lg-0" lg="3" md="6">
                <div className="px-4">
                <center>  <img


                    src={require("assets/img/theme/rocket.png")}


                  /></center>
                  <div className="pt-4 text-center">
                    <h5 className="title">
                      <span className="d-block mb-1">We exceed Expectations</span>

                    </h5>
                    <div className="mt-3">

                    </div>
                  </div>
                </div>
              </Col>
              <Col className="mb-5 mb-lg-0" lg="3" md="6">
                <div className="px-4">
                <center>  <img


                    src={require("assets/img/theme/gear.png")}


                  /></center>
                  <div className="pt-4 text-center">
                    <h5 className="title">
                      <span className="d-block mb-1">We Support Our Clients</span>

                    </h5>
                    <div className="mt-3">

                    </div>
                  </div>
                </div>
              </Col>
              <Col className="mb-5 mb-lg-0" lg="3" md="6">
                <div className="px-4">
                <center>  <img


                    src={require("assets/img/theme/magglass.png")}


                  /></center>
                  <div className="pt-4 text-center">
                    <h5 className="title">
                      <span className="d-block mb-1">We Solve the Problem</span>

                    </h5>
                    <div className="mt-3">

                    </div>
                  </div>
                </div>
              </Col>
              <Col className="mb-5 mb-lg-0" lg="3" md="6">
                <div className="px-4">
                <center>  <img


                    src={require("assets/img/theme/smiley.png")}


                  /></center>
                  <div className="pt-4 text-center">
                    <h5 className="title">
                      <span className="d-block mb-1">We Get the Job Done</span>

                    </h5>
                    <div className="mt-3">

                    </div>
                  </div>
                </div>
              </Col>
              </Row>
              <p>
              <br></br>
              Gesher Group Consulting seeks to exceed expectations and support our clients in creating a competitive advantage.
              We work with 4-5 clients every quarter applying
              the newest tools in our repertoire, continuously updating our
              technique. Our biggest strength is in our consultants, top
              talent sourced from the best at UC Santa Cruz, each with bright
              and innovative ideas not yet constrained by traditional thinking.
              </p>

            </Container>
          </section>


            <Footer />
            </>
        )
    }
}

export default Students;
