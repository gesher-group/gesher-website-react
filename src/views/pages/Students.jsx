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
    Col
} from "reactstrap";

// core components
import CardsFooter from "components/Footers/CardsFooter.jsx";

// index page sections
import Download from "../IndexSections/Download.jsx";
import DefaultNavbar from "views/IndexSections/DefaultNavbar.jsx";
import StudentHero from "components/StudentHero.jsx";
import Footer from "../IndexSections/Footer.jsx";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import Typeform from 'components/Typeform.jsx';


class Students extends React.Component {
    state = {};
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
    }
    render() {
        return (
            <>
                <DefaultNavbar />
                <StudentHero />
                <section className="section section-shaped">
                    <Container>
                        <Row>
                            <Col className="col-sm">
                                <h1 className="h1">
                                    Interested in joining Gesher?
                                </h1>
                                <p>
                                    Check out our timeline below to see when we're recruiting. We recruit mainly in Fall and Spring quarters, so check back at the beginning of either quarter to apply.
                                </p>
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
                                            <CardImg top width="100%" src="https://upload.wikimedia.org/wikipedia/commons/6/61/Trappista_cheese_original.jpg" alt="Card image cap" />
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
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    Learn more
                        </Button>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col lg="4">
                                        <Card className="card-lift--hover shadow border-0">
                                            <CardImg top width="100%" src="https://upload.wikimedia.org/wikipedia/commons/6/61/Trappista_cheese_original.jpg" alt="Card image cap" />
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
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    Learn more
                                                </Button>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col lg="4">
                                        <Card className="card-lift--hover shadow border-0">
                                            <CardImg top width="100%" src="https://upload.wikimedia.org/wikipedia/commons/6/61/Trappista_cheese_original.jpg" alt="Card image cap" />
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
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    Learn more
                                                </Button>
                                            </CardBody>
                                        </Card>
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
                            date="3/08/2020"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={''}
                        >
                            <h3 className="vertical-timeline-element-title">Applications Open</h3>
                            <p>
                                Use the form on this page to apply. Or click <a href="#">here!</a>
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
                                Last day to submit applications for our Spring 2020 recruitment season
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
                                <b>Invite Only</b> Applicants who have been invited for an Interview should recieve an Email allowing them to schedule a time with the Gesher Group Board
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