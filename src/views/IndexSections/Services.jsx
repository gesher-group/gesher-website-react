import React from "react";

// reactstrap components
import { Button, Container, Row, Col, Card, CardBody, Badge } from "reactstrap";

class Services extends React.Component {
  render() {
    return (
      <>
        <div className="bg-white">
          <Container>
            <Row className="py-5 justify-content-center">
              <Col className="text-justify" lg="12">
                <h2 className="text-center">Services</h2>
                <p className="lead">
                We help businesses stay competitive even in rapidly changing markets. We will work with 4-5 clients every quarter applying the newest tools in our repertoire, continuously updating our technique. Our biggest strength is in our consultants, top talent sourced from the best at UC Santa Cruz, each with bright and innovative ideas not yet constrained by traditional thinking.
                </p>
                {/* <div className="btn-wrapper">
                  <Button
                    color="primary"
                    href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/icons?ref=adsr-landing-page"
                  >
                    View demo icons
                  </Button>
                  <Button
                    className="mt-3 mt-md-0"
                    color="default"
                    href="https://nucleoapp.com/?ref=1712"
                    target="_blank"
                  >
                    View all icons
                  </Button>
                </div> */}
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <Row className="row-grid">
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                          <i className="ni ni-briefcase-24" />
                        </div>
                        <h6 className="text-primary text-uppercase">
                          Business Development
                        </h6>
                        <p className="description mt-3">
                          Create market strategies, conduct extensive overviews and analyze growth opportunities.
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
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                          <i className="ni ni-laptop" />
                        </div>
                        <h6 className="text-warning text-uppercase">
                          Digital Marketing
                        </h6>
                        <p className="description mt-3">
                          Market products and services using digital channels to reach customers and promotion through social media.
                        </p>
                        <Button
                          className="mt-4"
                          color="warning"
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
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                          <i className="ni ni-chart-bar-32" />
                        </div>
                        <h6 className="text-success text-uppercase">
                          Data Analytics
                        </h6>
                        <p className="description mt-3">
                          Analyzing business data and metrics to help businesses make the most informed decisions.
                        </p>
                        <Button
                          className="mt-4"
                          color="success"
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
        </div>
      </>
    );
  }
}

export default Services;
