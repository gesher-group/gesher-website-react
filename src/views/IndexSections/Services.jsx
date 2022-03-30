import React from "react";

// reactstrap components
import { Button, Container, Row, Col, Card, CardBody, Badge, Modal } from "reactstrap";

class Services extends React.Component {
  state = {
    bizDevModal: false,
    markModal: false,
    dataModal: false,
  }
  toggleModal = state => {
    this.setState({
        [state] : !this.state[state]
    });
  };
  render() {
    return (
      <>
        <div className="bg-white">
          <Container>
            <Row className="py-5 justify-content-center">
              <Col className="text-justify" lg="12">
                <h2 className="text-center">Services</h2>
                <p className="lead">
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
                          Create market strategies, conduct extensive overviews, and analyze growth opportunities.
                        </p>
                        <Button
                          className="mt-4"
                          color="primary"
                          href="#pablo"
                          onClick={() => this.toggleModal("bizDevModal")}
                        >
                          Learn more
                        </Button>
                      </CardBody>
                    </Card>
                    <Modal
              className="modal-dialog-centered"
              isOpen={this.state.bizDevModal}
              toggle={() => this.toggleModal("bizDevModal")}
            >
              <div className="modal-header">
                <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                  <i className="ni ni-briefcase-24" />
                </div>
                <h6 className="modal-title text-primary text-uppercase" id="modal-title-default" style={{marginLeft:"10px", marginTop: "18px"}}>
                  Business Development
                </h6>
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("bizDevModal")}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <div className="modal-body">
                <p>
                    At it's heart, Gesher Group is a business-focused organization. We strive to help you achieve your goals.
                </p>
                <p>
                    A majority of our members have had real world experience working in business roles where they've been able to analyze company workflows and propose improvements to save time and money. Our members have worked with many smaller businesses and helped them grow into larger entities to accomplish their goals.
                </p>
              </div>
              <div className="modal-footer">
                <Button
                  className="ml-auto"
                  color="link"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("bizDevModal")}
                >
                  Close
                </Button>
              </div>
            </Modal>
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
                          onClick={() => this.toggleModal("markModal")}
                        >
                          Learn more
                        </Button>
                      </CardBody>
                    </Card>
            <Modal
              className="modal-dialog-centered"
              isOpen={this.state.markModal}
              toggle={() => this.toggleModal("markModal")}
            >
              <div className="modal-header">
              <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                          <i className="ni ni-laptop" />
              </div>
                <h6 className="modal-title text-warning text-uppercase" id="modal-title-default" style={{marginLeft:"10px", marginTop: "18px"}}>
                  Digital Marketing
                </h6>
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("markModal")}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <div className="modal-body">
                <p>
                    Our digital marketing division of Gesher is devoted to building massive online audiences that translate into direct sales.
                </p>
                <p>
                    Gesher Group specializes in building brands up through social media and creating original content. We have many consultants who are well versed in professional branding principles and who have track records of building audiences with thousands of followers from the ground up.
                </p>
              </div>
              <div className="modal-footer">
                <Button
                  className="ml-auto"
                  color="link"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("markModal")}
                >
                  Close
                </Button>
              </div>
            </Modal>
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
                          onClick={() => this.toggleModal("dataModal")}
                        >
                          Learn more
                        </Button>
                      </CardBody>
                    </Card>
                    <Modal
              className="modal-dialog-centered"
              isOpen={this.state.dataModal}
              toggle={() => this.toggleModal("dataModal")}
            >
              <div className="modal-header">
                <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                  <i className="ni ni-chart-bar-32" />
                </div>
                <h6 className="modal-title text-success text-uppercase" id="modal-title-default" style={{marginLeft:"10px", marginTop: "18px"}}>
                  Data Analytics
                </h6>
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("dataModal")}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <div className="modal-body">
                <p>
                    Our Data Analytics team resides under our "Labs" division. Our Labs team focuses mainly on integrating
                    technology into our workflow and our toolbelt for each consultant. We focus on learning how to build reports using real world data, and we focus on learning Data Science principles to help companies improve their business strategies.
                </p>
                <p>
                    Each quarter labs members will learn from a variety of skills including:
                    <ul>
                    <li>Python & SciPy libraries</li>
                    <li>Introductory Machine Learning</li>
                    <li>Tableau</li>
                    <li>SQL</li>
                    <li>Google Analytics</li>
                    </ul>
                </p>
              </div>
              <div className="modal-footer">
                <Button
                  className="ml-auto"
                  color="link"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("dataModal")}
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
        </div>
      </>
    );
  }
}

export default Services;
