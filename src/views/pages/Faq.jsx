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
import QuestionsHero from "components/QuestionsHero.jsx";
import Footer from "../IndexSections/Footer.jsx";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import Typeform from 'components/Typeform.jsx';

import training from "../../assets/img/theme/training.jpg";
import ReactGA from 'react-ga';
ReactGA.initialize('UA-107298827-2');
ReactGA.pageview(window.location.pathname + window.location.search);


class Questions extends React.Component {
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
                <QuestionsHero />
                <section className="section section-lg">
            <Container>
                    <br />
                      <p className="display-3"><strong>What does Gesher look for in applicants?</strong></p>
                      <p class="lead text-muted">More than anything, Gesher has focused on a culture fit for the past few recruitment cycles. We encourage applicants to think about their <a href='http://geshergroup.org/teams'>values. </a></p>

                      <br />
                      <p className="display-3"><strong>How should I approach the Gesher Application: Resumes and Case Studies?</strong></p>
                      <p class="lead text-muted">We understand that Gesher will likely be your first experience in preparing for an interview. Regardless of if you are accepted, it will be worthwhile to learn about resumes and applications! We recommend that you follow conventional guidelines of cleaning up your resume and linkedin.</p>

                      <br />
                      <p className="display-3"><strong>How do I prepare for a case interview?</strong></p>
                      <p class="lead text-muted">We don’t expect you to solve any case questions perfectly. Just have an idea of what a case study looks like.</p>

                      {/*<br />
                      <p className="display-3"><strong>What does integration into Gesher, professionally, and socially, look like?</strong></p>
                      <p class="lead text-muted">Lorem ipsum dolor</p>*/}

                      <br />
                      <p className="display-3"><strong>I’m not professionally interested in consulting, is Gesher still a good fit for me?</strong></p>
                      <p class="lead text-muted">Yes, Gesher Group employs management consulting as a means of developing our professional skills rather than the end itself. Many of the benefits our members see is in their own personal growth around soft-skills, as well as team management and leadership. We are not a fast track to getting you into a consulting firm.</p>

                      <br />
                      <p class="display-3"><strong>What type of majors do you typically recruit? </strong></p>
                      <p class="lead text-muted">Since we are a business consulting group, we mostly look for business focused candidates, however, we do have wide variety of engineering, earth science, and pre-med members.</p>


                      <p class="display-3"><strong>What happens if I cannot make the meetings? </strong></p>
                      <p class="lead text-muted">Please email us with the reason why you cannot make the meeting. If you miss more than two meetings a quarter then we will have to sit down for a chat.</p>


                      <p class="display-3"><strong>What sets Gesher apart from other student organizations such as fraternities/sororities? </strong></p>
                      <p class="lead text-muted">Unlike other student organizations, Gesher group gives members the opportunity to work with real companies that no one else could otherwise gain in the classroom. </p>


                      <p class="display-3"><strong>I'm a senior&mdash;can I still apply? </strong></p>
                      <p class="lead text-muted">As long as you’re a UCSC student, you’re welcome to apply. For 3rd year and on students, we typically like to see more work experience than earlier years.</p>


                      <p class="display-3"><strong>What's the workload like? </strong></p>
                      <p class="lead text-muted">You get out what you put in—but usually members spend 6-8 hours per week on client projects, and 2 hours in meetings.</p>

                      <p class="display-3"><strong>How large is the team? </strong></p>
                      <p class="lead text-muted">The team fluctuates in member size throughout the years. We try to keep Gesher at approximately 40 members each year. This increases the odds of each member becoming closer with one another.</p>


                      <p class="display-3"><strong>How long does the application process take? </strong></p>
                      <p class="lead text-muted">The application process ususally takes about 2 weeks. Each candidate that is accepted must make it past the application and interview process to become a full-time member.</p>

                      <p class="display-3"><strong>Was your question not answered? Email us! </strong></p>
                      <p class="lead text-muted">Email<a href='mailto:team@geshergroup.org' title='Email the team'> team@geshergroup.org </a>, and we’ll get back to you within 24 hours.</p>



            </Container>
          </section>


            <Footer />
            </>
        )
    }
}

export default Questions;
