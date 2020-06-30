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
                <Col lg="8">
                  <h2 className="display-3">Take a look at our previous projects</h2>
                  <p className="lead text-muted">
                    Lorem Ipsum yadda yadda put content here.
                  </p>
                </Col>
              </Row>
              <Row className="pb-sm">
                <Card className="w-100 border-primary" >
                    <CardHeader>
                    <h2 className="display-4">Data Analytics</h2>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col className="justify-content-right text-center">
                            <h2 className="pb-sm">IP Society</h2>
                                <img
                              alt="..."
                              className="roundedimg-center img-fluid shadow shadow-lg--hover"
                              src={require("assets/img/ip-logo4.png")}
                              style={{ width: "200px" }}
                            />


                            </Col>
                            <Col>
                            <Row className="pr-md pb-sm">
                            <div className="justify-content-center text-center pt-sm p-sm">
                              <h5 className="font-weight-bold font-italic">"Gesher Group helped our business grow beyond what we thought was possible!"</h5>
                              <h6>Patrick O'Reilly, Founder</h6>
                            </div>
                            </Row>
                            <Row className="pr-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel luctus arcu, nec sollicitudin dui. Donec quis sagittis justo. Etiam nec blandit velit.
                            </Row>
                            <Row className="pr-sm pt-sm">
                            <a href="https://www.google.com">Our case study and more info can be found here </a>
                            </Row>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
              </Row>
              <Row id="marketing">
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
              </Row>
            </Container>
          </section>
          
            <Footer />
            </>
        )
    }
}

export default Services;