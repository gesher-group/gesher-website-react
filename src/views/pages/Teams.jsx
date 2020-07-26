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
workModal2: false,
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
    <DemoNavbar color="success" />
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
                    <img alt="..." className="rounded-circle img-center img-fluid shadow shadow-lg--hover" src={require("assets/img/theme/team-1-800x800.jpg")} style={{ width: "200px" }} />
                    <div className="pt-4 text-center">
                        <h5 className="title">
                            <span className="d-block mb-1">Zach Zulanas</span>
                            <small className="h6 text-muted">President<br></br>CS Class of 2021</small>
                        </h5>
                        <div className="mt-3">
                            <Button className="btn-icon-only rounded-circle" color="primary" href="https://www.linkedin.com/in/zzulanas/">
                                <i className="fa fa-linkedin" />
                            </Button>

                        </div>
                    </div>
                </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                <div className="px-4">
                    <img alt="..." className="rounded-circle img-center img-fluid shadow shadow-lg--hover" src={require("assets/img/theme/team-2-800x800.jpg")} style={{ width: "200px" }} />
                    <div className="pt-4 text-center">
                        <h5 className="title">
                            <span className="d-block mb-1">Jack Peabody</span>
                            <small className="h6 text-muted">
                                Vice President<br></br>IT Class of 2021
                            </small>
                        </h5>
                        <div className="mt-3">
                            <Button className="btn-icon-only rounded-circle" color="primary" href="https://www.linkedin.com/in/jack-peabody/">
                                <i className="fa fa-linkedin" />
                            </Button>

                        </div>
                    </div>
                </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                <div className="px-4">
                    <img alt="..." className="rounded-circle img-center img-fluid shadow shadow-lg--hover" src={require("assets/img/theme/team-3-800x800.jpg")} style={{ width: "200px" }} />
                    <div className="pt-4 text-center">
                        <h5 className="title">
                            <span className="d-block mb-1">Matthew Lee</span>
                            <small className="h6 text-muted">Project Manager<br></br>BME Class of 2021</small>
                        </h5>
                        <div className="mt-3">
                            <Button className="btn-icon-only rounded-circle" color="primary" href="https://www.linkedin.com/in/matthew-lee-ucsc/">
                                <i className="fa fa-linkedin" />
                            </Button>

                        </div>
                    </div>
                </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                <div className="px-4">
                    <img alt="..." className="rounded-circle img-center img-fluid shadow shadow-lg--hover" src={require("assets/img/theme/team-4-800x800.jpg")} style={{ width: "200px" }} />
                    <div className="pt-4 text-center">
                        <h5 className="title">
                            <span className="d-block mb-1">Yuji Tanaka</span>
                            <small className="h6 text-muted">Director of Marketing<br></br>BME Class of 2022</small>
                        </h5>
                        <div className="mt-3">
                            <Button className="btn-icon-only rounded-circle" color="primary" href="https://www.linkedin.com/in/yuji-tanaka/">
                                <i className="fa fa-linkedin" />
                            </Button>

                        </div>
                    </div>
                </div>

                </Col>
            </Row>
            <br />
            <Row>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                <div className="px-4">
                    <img alt="..." className="rounded-circle img-center img-fluid shadow shadow-lg--hover" src={require("assets/img/theme/team-5-800x800.jpg")} style={{ width: "200px" }} />
                    <div className="pt-4 text-center">
                        <h5 className="title">
                            <span className="d-block mb-1">Cher Wei</span>
                            <small className="h6 text-muted">Marketing Consultant<br></br>BME Class of 2022</small>
                        </h5>
                        <div className="mt-3">
                            <Button className="btn-icon-only rounded-circle" color="primary" href="https://www.linkedin.com/in/cher-wei/">
                                <i className="fa fa-linkedin" />
                            </Button>

                        </div>
                    </div>
                </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                <div className="px-4">
                    <img alt="..." className="rounded-circle img-center img-fluid shadow shadow-lg--hover" src={require("assets/img/theme/team-6-800x800.jpg")} style={{ width: "200px" }} />
                    <div className="pt-4 text-center">
                        <h5 className="title">
                            <span className="d-block mb-1">Sanjana Raman</span>
                            <small className="h6 text-muted">
                                Business Consultant<br></br>BME Class of 2021
                            </small>
                        </h5>
                        <div className="mt-3">
                            <Button className="btn-icon-only rounded-circle" color="primary" href="https://www.linkedin.com/in/sanjana-raman-5b0998122/">
                                <i className="fa fa-linkedin" />
                            </Button>

                        </div>
                    </div>
                </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                <div className="px-4">
                    <img alt="..." className="rounded-circle img-center img-fluid shadow shadow-lg--hover" src={require("assets/img/theme/team-7-800x800.jpg")} style={{ width: "200px" }} />
                    <div className="pt-4 text-center">
                        <h5 className="title">
                            <span className="d-block mb-1">Aaron Phan</span>
                            <small className="h6 text-muted">Project Manager<br></br>BME Class of 2021</small>
                        </h5>
                        <div className="mt-3">
                            <Button className="btn-icon-only rounded-circle" color="primary" href="https://www.linkedin.com/in/aaron-phan4/">
                                <i className="fa fa-linkedin" />
                            </Button>

                        </div>
                    </div>
                </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                <div className="px-4">
                    <img alt="..." className="rounded-circle img-center img-fluid shadow shadow-lg--hover" src={require("assets/img/theme/team-8-800x800.jpg")} style={{ width: "200px" }} />
                    <div className="pt-4 text-center">
                        <h5 className="title">
                            <span className="d-block mb-1">Rajvir Birk</span>
                            <small className="h6 text-muted">Marketing Consultant<br></br>BME Class of 2022</small>
                        </h5>
                        <div className="mt-3">
                            <Button className="btn-icon-only rounded-circle" color="primary" href="https://www.linkedin.com/in/rajvir-birk/">
                                <i className="fa fa-linkedin" />
                            </Button>

                        </div>
                    </div>
                </div>

                </Col>
            </Row>
            <br />
            <Row>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                <div className="px-4">
                    <img alt="..." className="rounded-circle img-center img-fluid shadow shadow-lg--hover" src={require("assets/img/theme/team-9-800x800.jpg")} style={{ width: "200px" }} />
                    <div className="pt-4 text-center">
                        <h5 className="title">
                            <span className="d-block mb-1">Oliver Calhoun</span>
                            <small className="h6 text-muted">Director of Projects<br></br>Econ Class of 2021</small>
                        </h5>
                        <div className="mt-3">
                            <Button className="btn-icon-only rounded-circle" color="primary" href="https://www.linkedin.com/in/oliver-calhoun-6086451a7/">
                                <i className="fa fa-linkedin" />
                            </Button>

                        </div>
                    </div>
                </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                <div className="px-4">
                    <img alt="..." className="rounded-circle img-center img-fluid shadow shadow-lg--hover" src={require("assets/img/theme/team-10-800x800.jpg")} style={{ width: "200px" }} />
                    <div className="pt-4 text-center">
                        <h5 className="title">
                            <span className="d-block mb-1">Sam Duman</span>
                            <small className="h6 text-muted">
                                Director of Affairs<br></br>BME Class of 2022
                            </small>
                        </h5>
                        <div className="mt-3">
                            <Button className="btn-icon-only rounded-circle" color="primary" href="https://www.linkedin.com/in/sam-duman/">
                                <i className="fa fa-linkedin" />
                            </Button>

                        </div>
                    </div>
                </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                <div className="px-4">
                    <img alt="..." className="rounded-circle img-center img-fluid shadow shadow-lg--hover" src={require("assets/img/theme/team-11-800x800.jpg")} style={{ width: "200px" }} />
                    <div className="pt-4 text-center">
                        <h5 className="title">
                            <span className="d-block mb-1">Aditya Kuppili</span>
                            <small className="h6 text-muted">Director of Labs<br></br>CS Class of 2021</small>
                        </h5>
                        <div className="mt-3">
                            <Button className="btn-icon-only rounded-circle" color="primary" href="https://www.linkedin.com/in/aditya-kuppili-09469895/">
                                <i className="fa fa-linkedin" />
                            </Button>

                        </div>
                    </div>
                </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                <div className="px-4">
                    <img alt="..." className="rounded-circle img-center img-fluid shadow shadow-lg--hover" src={require("assets/img/theme/team-12-800x800.jpg")} style={{ width: "200px" }} />
                    <div className="pt-4 text-center">
                        <h5 className="title">
                            <span className="d-block mb-1">Conrad Pereira</span>
                            <small className="h6 text-muted">Consultant<br></br>CS/TIM of 2021</small>
                        </h5>
                        <div className="mt-3">
                            <Button className="btn-icon-only rounded-circle" color="primary" href="https://www.linkedin.com/in/conrad-pereira/">
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
                    <center> <img src={require("assets/img/theme/rocket.png")} /></center>
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
                    <center> <img src={require("assets/img/theme/gear.png")} /></center>
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
                    <center> <img src={require("assets/img/theme/magglass.png")} /></center>
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
                    <center> <img src={require("assets/img/theme/smiley.png")} /></center>
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

            <h1 className="h1">
                <br></br>
                <center>Our Values</center><br></br>
            </h1>
            <Row className="justify-content-center">
                <Col lg="12">
                <Row className="row-grid">
                    <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                            <h2 className="text-primary text-uppercase">
                                Impact
                            </h2>
                            <p className="description mt-3">

                            </p>
                            <Button className="mt-4" color="primary" href="" onClick={()=> this.toggleModal("workModal")}
                                >
                                Learn more
                            </Button>
                        </CardBody>
                    </Card>
                    <Modal className="modal-dialog-centered" isOpen={this.state.workModal} toggle={()=> this.toggleModal("workModal")}
                        >
                        <div className="modal-header">
                            <h6 className="modal-title" id="modal-title-default">
                                Impact
                            </h6>
                            <button aria-label="Close" className="close" data-dismiss="modal" type="button" onClick={()=> this.toggleModal("workModal")}
                                >
                                <span aria-hidden={true}>×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>
                            <ul>
                                <li>You accomplish amazing amounts of important work</li>
                                <li>You demonstrate consistently strong performance so colleagues can rely upon you</li>
                                <li>You focus on great results rather than on process</li>
                                <li>You exhibit bias‐to‐action, and avoid analysis‐paralysis</li>
                            </ul>
                            </p>
                        </div>
                        <div className="modal-footer">
                            <Button className="ml-auto" color="link" data-dismiss="modal" type="button" onClick={()=> this.toggleModal("workModal")}
                                >
                                Close
                            </Button>
                        </div>
                    </Modal>
                    </Col>
                    <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                            <h2 className="text-primary text-uppercase">
                                Curiosity
                            </h2>
                            <p className="description mt-3">
                            </p>
                            <Button className="mt-4" color="primary" href="" onClick={()=> this.toggleModal("trainingModal")}
                                >
                                Learn more
                            </Button>
                        </CardBody>
                    </Card>
                    <Modal className="modal-dialog-centered" isOpen={this.state.trainingModal} toggle={()=> this.toggleModal("trainingModal")}
                        >
                        <div className="modal-header">
                            <h6 className="modal-title" id="modal-title-default">
                                Curiosity
                            </h6>
                            <button aria-label="Close" className="close" data-dismiss="modal" type="button" onClick={()=> this.toggleModal("trainingModal")}
                                >
                                <span aria-hidden={true}>×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>
                            <ul>
                                <li>You learn rapidly and eagerly</li>
                                <li>You seek to understand our strategy, market, subscribers, and suppliers</li>
                                <li>You are broadly knowledgeable about business, technology and entertainment</li>
                                <li>You contribute effectively outside of your specialty</li>



                            </ul>
                            </p>
                        </div>
                        <div className="modal-footer">
                            <Button className="ml-auto" color="link" data-dismiss="modal" type="button" onClick={()=> this.toggleModal("trainingModal")}
                                >
                                Close
                            </Button>
                        </div>
                    </Modal>
                    </Col>
                    <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                            <h2 className="text-primary text-uppercase">
                                Honesty
                            </h2>
                            <p className="description mt-3">

                            </p>
                            <Button className="mt-4" color="primary" href="" onClick={()=> this.toggleModal("networkModal")}
                                >
                                Learn more
                            </Button>
                        </CardBody>
                    </Card>
                    <Modal className="modal-dialog-centered" isOpen={this.state.networkModal} toggle={()=> this.toggleModal("networkModal")}
                        >
                        <div className="modal-header">
                            <h6 className="modal-title" id="modal-title-default">
                                Honesty
                            </h6>
                            <button aria-label="Close" className="close" data-dismiss="modal" type="button" onClick={()=> this.toggleModal("networkModal")}
                                >
                                <span aria-hidden={true}>×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>
                            <ul>
                                <li>You are known for candor and directness</li>
                                <li>You are non‐political when you disagree with others</li>
                                <li>You only say things about fellow employees you will say to their face</li>
                                <li>You are quick to admit mistakes</li>
                            </ul>
                            </p>
                        </div>
                        <div className="modal-footer">
                            <Button className="ml-auto" color="link" data-dismiss="modal" type="button" onClick={()=> this.toggleModal("networkModal")}
                                >
                                Close
                            </Button>
                        </div>
                    </Modal>
                    </Col>
                </Row>
                </Col>
            </Row>
            <br />
            <br />

            <Row className="justify-content-center">
                <Col lg="12">
                <Row className="row-grid">
                    <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                            <h2 className="text-primary text-uppercase">
                                Selflessness
                            </h2>
                            <p className="description mt-3">

                            </p>
                            <Button className="mt-4" color="primary" href="" onClick={()=> this.toggleModal("workModal2")}
                                >
                                Learn more
                            </Button>
                        </CardBody>
                    </Card>
                    <Modal className="modal-dialog-centered" isOpen={this.state.workModal2} toggle={()=> this.toggleModal("workModal2")}
                        >
                        <div className="modal-header">
                            <h6 className="modal-title" id="modal-title-default">
                                Selflessness
                            </h6>
                            <button aria-label="Close" className="close" data-dismiss="modal" type="button" onClick={()=> this.toggleModal("workModal2")}
                                >
                                <span aria-hidden={true}>×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>
                            <ul>
                                <li>You seek what is best, rather than best for yourself or your group
                                </li>
                                <li>You are ego‐less when searching for the best ideas</li>
                                <li>You make time to help colleagues</li>
                                <li>You share information openly and proactively</li>
                            </ul>
                            </p>
                        </div>
                        <div className="modal-footer">
                            <Button className="ml-auto" color="link" data-dismiss="modal" type="button" onClick={()=> this.toggleModal("workModal2")}
                                >
                                Close
                            </Button>
                        </div>
                    </Modal>
                    </Col>
                    <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                            <h2 className="text-primary text-uppercase">
                                Innovation
                            </h2>
                            <p className="description mt-3">
                            </p>
                            <Button className="mt-4" color="primary" href="" onClick={()=> this.toggleModal("trainingModal")}
                                >
                                Learn more
                            </Button>
                        </CardBody>
                    </Card>
                    <Modal className="modal-dialog-centered" isOpen={this.state.trainingModal} toggle={()=> this.toggleModal("trainingModal")}
                        >
                        <div className="modal-header">
                            <h6 className="modal-title" id="modal-title-default">
                                Innovation
                            </h6>
                            <button aria-label="Close" className="close" data-dismiss="modal" type="button" onClick={()=> this.toggleModal("trainingModal")}
                                >
                                <span aria-hidden={true}>×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>
                            <ul>
                                <li>You re‐conceptualize issues to discover practical solutions to hard problems</li>
                                <li>You challenge prevailing assumptions when warranted, and suggest better approaches</li>
                                <li>You create new ideas that prove useful</li>
                                <li>You keep us nimble by minimizing complexity and finding time to simplify</li>



                            </ul>
                            </p>
                        </div>
                        <div className="modal-footer">
                            <Button className="ml-auto" color="link" data-dismiss="modal" type="button" onClick={()=> this.toggleModal("trainingModal")}
                                >
                                Close
                            </Button>
                        </div>
                    </Modal>
                    </Col>
                    <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                            <h2 className="text-primary text-uppercase">
                                Passion
                            </h2>
                            <p className="description mt-3">

                            </p>
                            <Button className="mt-4" color="primary" href="" onClick={()=> this.toggleModal("networkModal2")}
                                >
                                Learn more
                            </Button>
                        </CardBody>
                    </Card>
                    <Modal className="modal-dialog-centered" isOpen={this.state.networkModal2} toggle={()=> this.toggleModal("networkModal2")}
                        >
                        <div className="modal-header">
                            <h6 className="modal-title" id="modal-title-default">
                                Passion
                            </h6>
                            <button aria-label="Close" className="close" data-dismiss="modal" type="button" onClick={()=> this.toggleModal("networkModal2")}
                                >
                                <span aria-hidden={true}>×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>
                            <ul>
                                <li>You inspire others with your thirst for excellence</li>
                                <li>You care intensely about success</li>
                                <li>You celebrate wins</li>
                                <li>You are tenacious</li>
                            </ul>
                            </p>
                        </div>
                        <div className="modal-footer">
                            <Button className="ml-auto" color="link" data-dismiss="modal" type="button" onClick={()=> this.toggleModal("networkModal")}
                                >
                                Close
                            </Button>
                        </div>
                    </Modal>
                    </Col>
                </Row>
                </Col>
            </Row>
        </Container>
    </section>


    <Footer />
</>
)
}
}


export default Students;
