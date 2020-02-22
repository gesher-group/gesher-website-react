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
                <section className="section section-shaped">
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{  color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date="3/08/2020"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={''}
                        >
                            <h3 className="vertical-timeline-element-title">Applications Open</h3>
                            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                            <p>
                                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="4/02/2020"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={'src/assets/img/brand/GesherStack1.svg'}
                        >
                            <h3 className="vertical-timeline-element-title">Art Director</h3>
                            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                            <p>
                                Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2008 - 2010"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={''}
                        >
                            <h3 className="vertical-timeline-element-title">Web Designer</h3>
                            <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                            <p>
                                User Experience, Visual Design
    </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2006 - 2008"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={'src/assets/img/brand/GesherStack1.svg'}
                        >
                            <h3 className="vertical-timeline-element-title">Web Designer</h3>
                            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                            <p>
                                User Experience, Visual Design
    </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="April 2013"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            icon={'src/assets/img/brand/GesherStack1.svg'}
                        >
                            <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                            <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                            <p>
                                Strategy, Social Media
    </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="November 2012"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            icon={'src/assets/img/brand/GesherStack1.svg'}
                        >
                            <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                            <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                            <p>
                                Creative Direction, User Experience, Visual Design
    </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2002 - 2006"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            icon={'src/assets/img/brand/GesherStack1.svg'}
                        >
                            <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                            <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                            <p>
                                Creative Direction, Visual Design
    </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                            icon={'src/assets/img/brand/GesherStack1.svg'}
                        />
                    </VerticalTimeline>
                </section>
            </>
        )
    }
}

export default Students;