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
import StudentHero from "components/StudentHero.jsx";
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
                <StudentHero />
                <section className="section section-shaped">
                    <Container>
                        <Row>
                            <Col className="col-sm">
                                <h1 className="h1">
                                    Interested in joining Gesher?
                                </h1>
                                <p>
                                    Check out our timeline below to see when we're recruiting. We recruit mainly in Fall and Spring quarters, so check back before either quarter to apply.
                                </p>
                                <div style={{textAlign:'center'}}>
                                <Typeform color="success"/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="section section-shaped">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="12">
                                <Row className="row-grid">
                                    <Col lg="4">
                                        <Card className="card-lift--hover shadow border-0">
                                            <CardImg top height="40%" src="https://lh3.googleusercontent.com/zIkFGaYxBlZrAZjznaixn3Haf8LWSn9rK04LjZczX9PojsB0O0BDVYQxzu_m49bjNGbeLi5x1MLc4IX4QXL4IF8C0T8ianGfvyo4OdITpKf5f2717km60Gdk4sindx34lc1_kqZIkw=w2400" alt="Our work image" />
                                            <CardBody className="py-5">
                                                <h2 className="text-primary text-uppercase">
                                                    Our Work
                        </h2>
                                                <p className="description mt-3">
                                                    Gesher Group consultants work directly with businesses from the Bay Area in Marketing, Business Development, or Data Analytics.
                        </p>
                                                <Button
                                                    className="mt-4"
                                                    color="primary"
                                                    href="#pablo"
                                                    onClick={() => this.toggleModal("workModal")}
                                                >
                                                    Learn more
                        </Button>
                                            </CardBody>
                                        </Card>
                                                                                <Modal
              className="modal-dialog-centered"
              isOpen={this.state.workModal}
              toggle={() => this.toggleModal("workModal")}
            >
              <div className="modal-header">
                <h6 className="modal-title" id="modal-title-default">
                  Our Work
                </h6>
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("workModal")}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <div className="modal-body">
                <p>
                    Each quarter Gesher Group works with 4-5 companies to consult them in Business Development, Marketing, and Data Analytics. We mainly work
                    with bay area companies but historically we've opened up our services to companies across California.
                </p>
                <p>
                    For each company, we have a team of 3-5 people working on a project that quarter for their specific client. Each client has different needs 
                    and Gesher steps in to fill those needs. Most teams are built around what the client needs, but we try to give every member experience on different types of projects each quarter.
                </p>
              </div>
              <div className="modal-footer">
                <Button
                  className="ml-auto"
                  color="link"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("workModal")}
                >
                  Close
                </Button>
              </div>
            </Modal>
                                    </Col>
                                    <Col lg="4">
                                        <Card className="card-lift--hover shadow border-0">
                                            <CardImg top width="100%" src={training} alt="Training image" />
                                            <CardBody className="py-5">
                                                <h2 className="text-primary text-uppercase">
                                                    Training
                        </h2>
                                                <p className="description mt-3">
                                                    At Gesher Group we strive to keep our consultants well trained through workshops and seminars
                        </p>
                                                <Button
                                                    className="mt-4"
                                                    color="primary"
                                                    href="#pablo"
                                                    onClick={() => this.toggleModal("trainingModal")}
                                                >
                                                    Learn more
                                                </Button>
                                            </CardBody>
                                        </Card>
                                        <Modal
              className="modal-dialog-centered"
              isOpen={this.state.trainingModal}
              toggle={() => this.toggleModal("trainingModal")}
            >
              <div className="modal-header">
                <h6 className="modal-title" id="modal-title-default">
                  Training
                </h6>
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("trainingModal")}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <div className="modal-body">
                <p>
                    We at Gesher Group do our best to provide our members with relavant workshops and speakers
                    to help develop professional skills for the real world. We've had speakers from local companies such as
                    Looker, SpringML, and Santa Cruz Works come in to speak about their experiences and help build real world skills.
                </p>
                <p>
                    Every quarter we host multiple workshops helping students learn more about Marketing, Business Development, and Data Analytics.
                    Our workshops are designed to help our members go from zero to hero in terms of skill in their field.
                </p>
              </div>
              <div className="modal-footer">
                <Button
                  className="ml-auto"
                  color="link"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("trainingModal")}
                >
                  Close
                </Button>
              </div>
            </Modal>
                                    </Col>
                                    <Col lg="4">
                                        <Card className="card-lift--hover shadow border-0">
                                            <CardImg top width="100%" src="https://lh3.googleusercontent.com/2ztnrrwFeTS8GE1YocsTZoyojijCeMt4MsqSN9YpBQmS4wWyT0bhC7rkKwFfg2EAgf8SXwVyVU4rScLCw9saxYL8i5mFewj-4R4BI6SVccaYAa7XeY5_xmzoAIUE-qZqv1Uc6McaEg=w2400" alt="Networking Image" />
                                            <CardBody className="py-5">
                                                <h2 className="text-primary text-uppercase">
                                                    Networking
                                                </h2>
                                                <p className="description mt-3">
                                                    Consultants have the opportunity to network through guest speakers, alumni and company tours.
                                                </p>
                                                <Button
                                                    className="mt-4"
                                                    color="primary"
                                                    href="#pablo"
                                                    onClick={() => this.toggleModal("networkModal")}
                                                >
                                                    Learn more
                                                </Button>
                                            </CardBody>
                                        </Card>
                                                                                                                        <Modal
              className="modal-dialog-centered"
              isOpen={this.state.networkModal}
              toggle={() => this.toggleModal("networkModal")}
            >
              <div className="modal-header">
                <h6 className="modal-title" id="modal-title-default">
                    Networking
                </h6>
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("networkModal")}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <div className="modal-body">
                <p>
                    At Gesher Group, we pride ourselves on building a robust network of connections across different industries. Our alumni have gone on to work at companies such as Looker, RedHat, Google, and Microsoft
                </p>
                <p>
                    Each quarter we offer professional networking events along with company tours. We've toured at Google Cloud, Tesla, and LinkedIn, to name a few. These events have helped Gesher members find job opportunities and fostered lifelong company connections.
                </p>
              </div>
              <div className="modal-footer">
                <Button
                  className="ml-auto"
                  color="link"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("networkModal")}
                >
                  Close
                </Button>
              </div>
            </Modal>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="py-5" />
                    </Container>
                </section>
                <section className="section section-shaped" style={{ background: " #f7f8fa  " }}>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date="3/02/2020"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={''}
                        >
                            <h3 className="vertical-timeline-element-title">Applications Open</h3>
                            <p>
                                Use the apply buttons on this page to apply.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="03/31/2020"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        >
                            <h3 className="vertical-timeline-element-title">Info Night</h3>
                            <p>
                                Come on by to learn more about Gesher and meet some of our current members! Dress Code: Business Casual
    </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="04/02/2020"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            icon={''}
                        >
                            <h3 className="vertical-timeline-element-title">Applications Closed</h3>
                            <p>
                                Last day to submit applications for our Spring 2020 recruitment season. Applications due by 11:59pm on 04/02/2020.
    </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="04/03 - 04/06/2020"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        >
                            <h3 className="vertical-timeline-element-title">Interviews Begin</h3>
                            <p>
                                <b>Invite Only</b> Applicants who have been invited for an Interview should recieve an Email allowing them to schedule a time with the Gesher Group Board.
    </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="04/07/2020"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        >
                            <h3 className="vertical-timeline-element-title">Decisions released</h3>
                            <p>
                                Applicants will receive an email from Gesher Group informing them of their application status
    </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="04/08/2020"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        >
                            <h3 className="vertical-timeline-element-title">First meeting</h3>
                            <p>
                                This will be our first meeting with new members that have been selected from the application period
    </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </section>
                <section className="section section-shaped" style={{textAlign: "center",  background: "rgb(247,248,250)", background: "linear-gradient(180deg, rgba(247,248,250,1) 7%, rgba(82,95,127,1) 100%)"}}>
                    <Typeform/>
                </section>
                <Footer />
            </>
        )
    }
}

export default Students;