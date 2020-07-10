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
import IPCaseStudy from "../../assets/ip_case_study.pdf";
import SBDCCaseStudy from "../../assets/sbdc_case_study.pdf";
import ReactGA from 'react-ga';
ReactGA.initialize('UA-107298827-2');
ReactGA.pageview(window.location.pathname + window.location.search);

const imageLinks = [require("assets/img/ip-logo4.png"), "https://media-exp1.licdn.com/dms/image/C4D0BAQH9ZrotZ6FyXA/company-logo_200_200/0?e=2159024400&v=beta&t=ywq28i4sQQCSCuJ6DvqP7UYo_zXClt-wA63H1hNQCwM", "data:image/jpeg;base64,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"
, "https://static.wixstatic.com/media/f6e756_06a680b3244648e2b579ee3ad1c7ff3b~mv2.png/v1/fill/w_222,h_128,al_c,lg_1,q_85/SandboxLogoNoTag.webp"
, "https://static1.squarespace.com/static/5aa96f525b409ba86e0eb8f6/t/5d6ad2ab1c83ed0001dc4c04/1592807764993/?format=1500w"
, "https://lumiere-a.akamaihd.net/v1/images/og_disney_4a3148aa.jpeg?region=0%2C0%2C1200%2C630"
, "https://d3k2f0s3vqqs9o.cloudfront.net/media/0E8AE10E-F3D4-4C45-A79871198CCA3241/0/7E2A71C9-EB70-441A-9F2F9EAB51939A53/32904BA8-FEC9-4D7A-8E4149E2D638EBDE/thul-5AD9E49A-E1A8-46F0-AF36BC5752D9169D.jpg"
, "https://1000logos.net/wp-content/uploads/2018/09/GoPro-Logo.png"
, "https://www.national-law.com/wp-content/uploads/2014/05/target-logo-reverse-wide.png"
, "https://www.rivafishhouse.com/assets/RivaCombo-Logo-logo.jpg"
, "data:image/png;base64,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"
, "https://www.hrkatha.com/wp-content/uploads/2020/05/hexaware.png",
, "https://cdn.boulevards.com/imgs/business_imgs/20170426023526-Screen_Shot_2017-04-25_at_19.34_.19__180x120r.png"
, "https://www.sellhound.com/wp-content/uploads/2018/04/Final-Logo-white-Teal-Background@2x.png"
, "https://images.squarespace-cdn.com/content/v1/5c96943c840b16870d5c01fe/1579222451192-UYR5JW051GVSML477ID1/ke17ZwdGBToddI8pDm48kPwbyWLa-vghN6RVbx3wX31Zw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7TihGlwkm68e6AHF0OmxFoIZjQTU0EhHigBV4Ze3SyqBQ1dArWeCg63rSFblVGuVIw/SCW+logo+small.png?format=1500w"];

const images = imageLinks.map(link => 
  <img
  alt="..."
  className="roundedimg-center img-fluid shadow shadow-lg--hover"
  src={link}
  style={{ width: "200px", height: "125px",  padding:"20px" }}
  />
);
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
                            <Button color="primary" type="button" href={IPCaseStudy} target="_blank">
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
                            In order to help SBDC grow as a business we helped design a content strategy around their brand that aimed to increase their social media following and engagement with the local Santa Cruz business commmunity. We provided metrics to track user engagement and developed social media templates centered around wellness.
                            </Row>
                            <Row className="pl-sm pt-sm">
                            <Button color="primary" type="button" href={SBDCCaseStudy} target="_blank">
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
            <Row className="pb-md">
                <div className="justify-content-left text-left">
                  <h1>
                    <strong>Here are some of the past clients we've worked with.</strong>
                  </h1>
                </div>
                <div>
                  {images}                       
                </div>
              </Row>
            </Container>
          </section>
          
            <Footer />
            </>
        )
    }
}

export default Services;