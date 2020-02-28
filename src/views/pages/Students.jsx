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
                <section className="section section-shaped" style={{background:" #f7f8fa  "}}>
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
                <Footer/>
            </>
        )
    }
}

export default Students;