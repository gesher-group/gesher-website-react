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
    Media,
    CardImg,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
    Modal,
    CardHeader,
    CardTitle
} from "reactstrap";

// core components
import CardsFooter from "components/Footers/CardsFooter.jsx";

// index page sections
import Download from "../IndexSections/Download.jsx";
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import ServicesHero from "components/ServicesHero.jsx";
import Footer from "../IndexSections/Footer.jsx";
import 'react-vertical-timeline-component/style.min.css';

import training from "../../assets/img/theme/training.jpg";
import ReactGA from 'react-ga';
ReactGA.initialize('UA-107298827-2');
ReactGA.pageview(window.location.pathname + window.location.search);


class Services extends React.Component {
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
                <ServicesHero />
                <section className="section section-lg">
            <Container>
              <Row className="justify-content-left text-left mb-lg">
                <Col lg="4">
                  <Card className="w-100 card-lift h-100 shadow border-5">
                    <CardBody className="py-5">
                      <h2 className="display-3">Digital Marketing</h2>
                      <p className="lead text-muted">
                      We will explore key growth areas, responding to the rapidly evolving market and customer expectations.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4">
                <Card className="w-100 h-100 card-lift shadow border-5">
                    <CardBody className="py-5">
                      <h2 className="display-3">Data Analytics</h2>
                      <p className="lead text-muted">
                      We will guide your analytics initiatives to produce quantifiable outcomes, assisting in the discovery, management and application of the data.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4">
                <Card className="w-100 card-lift h-100 shadow border-5">
                    <CardBody className="py-5">
                      <h2 className="display-3">Business Development</h2>
                      <p className="lead text-muted">
                      Our team will discover and evaluate new sales opportunities. Rather than employing best practices, we find development gaps through innovative strategies and analyses specific to your business.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              </Container>
              </section>
              <section className="section section-lg" style={{'background':'#d9d9d9'}}>
              <Container>
              <Row className="pb-md">
                <div className="justify-content-left text-left">
                  <h1>
                    <strong>Take a look at some of what some of our clients have said about our work</strong>
                  </h1>
                </div>
              </Row>
              <Row className="pb-sm" style={{}}>
                <Card className="w-100 card-lift h-100 shadow border-5" style={{}}>
                    {/* <CardHeader style={{backgroundColor:"red"}}>
                    <h2 className="display-4" style={{color:"white"}}>Data Analytics</h2>
                    </CardHeader> */}
                    <CardBody>
                        <Row>
                            <Col>
                            <Row className="pl-sm" >
                              <h2 ><strong>IP Society</strong></h2>
                            </Row>
                            <Row className="pl-sm">
                            Coming into this project it was imperative we gained clarity on IPSociety’s mission so we could create meaningful, impactful solutions. At the end of our partnership we presented IPsociety with a full revamp of their digital landing page, a strategic deck with actionable insights and solutions, and unique code to track patent trends and anomalies across industries. 
                            </Row>
                            <Row className="pl-sm pt-sm">
                            <Button color="primary" type="button">
                              <span>Case Study</span>
                            </Button>
                            </Row>
                            </Col>
                            <Col className="justify-content-right text-center">

                                <img
                              alt="..."
                              className="roundedimg-center img-fluid shadow shadow-lg--hover"
                              src={require("assets/img/ip-logo4.png")}
                              style={{ width: "200px", backgroundColor:"white" }}
                            />
                            <div className="justify-content-center text-center pt-sm">
                              <h5 className="font-weight-bold font-italic">"Gesher Group were professional, easy to work with, and had good ideas for improving our online presence and contributing to our business."</h5>
                              <h6>Patrick O'Reilly, Founder</h6>
                            </div>

                            </Col>
                        </Row>
                    </CardBody>
                </Card>
              </Row>

              <Row className="pb-sm" style={{}}>
                <Card className="w-100 card-lift h-100 shadow border-5" style={{backgroundColor:"#172b4d", color:"white"}}>
                    {/* <CardHeader style={{backgroundColor:"red"}}>
                    <h2 className="display-4" style={{color:"white"}}>Data Analytics</h2>
                    </CardHeader> */}
                    <CardBody>
                        <Row>
                            <Col>
                            <Row className="pl-sm" >
                              <h2 style={{color:"white"}}><strong>Small Business Development Center of Santa Cruz</strong></h2>
                            </Row>
                            <Row className="pl-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel luctus arcu, nec sollicitudin dui. Donec quis sagittis justo. Etiam nec blandit velit. Sed venenatis sapien vel erat maximus, id feugiat dui semper. Phasellus at quam vestibulum, placerat tortor eget, euismod elit. Nam posuere eleifend convallis. Nam ante metus, tristique sed mauris at, semper semper leo. 
                            </Row>
                            <Row className="pl-sm pt-sm">
                            <Button color="primary" type="button">
                              <span>Case Study</span>
                            </Button>
                            </Row>
                            </Col>
                            <Col className="justify-content-right text-center">
                                <img
                              alt="..."
                              className="roundedimg-center img-fluid shadow shadow-lg--hover"
                              src={require("assets/img/theme/america-sbdc.jpg")}
                              style={{ width: "200px", backgroundColor:"white" }}
                            />

                            <div className="justify-content-center text-center pt-sm p-sm" style={{color:"white"}}>
                              <h5 className="font-weight-bold font-italic" style={{color:"white"}}>"Gesher gave us the courage and vision to implement a new social media strategy. Their work will continue to create impact after their engagement is over."</h5>
                              <h6 style={{color:"white"}}>Brandon Napoli, Founder</h6>
                            </div>

                            </Col>
                        </Row>
                    </CardBody>
                </Card>
              </Row>
              
              {/* <Row>
                <Card className="w-100 border-primary">
                    <CardHeader>
                    <h2 className="display-4">Marketing</h2>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col>
                            Test
                            </Col>
                            <Col className="justify-content-right text-right">
                            Test
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
              </Row> */}
            </Container>
          </section>
          <section>
            <Container>
              This is where the company search will go
            </Container>
          </section>
          
            <Footer />
            </>
        )
    }
}

export default Services;