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
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

import Scroll from 'react-scroll'
import Typeform from "../Typeform.jsx";
const ScrollLink = Scroll.ScrollLink;
class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  src={require("assets/img/brand/GesherStack1.svg")}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbar_global">
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/brand/geshblue.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
               
                <Nav className="navbar-nav-hover align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      href="/join"
                    >
                      Join
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="/services"
                    >
                      Services
                    </NavLink>
                  </NavItem>
                  
                  {/* <NavItem>
                    <UncontrolledDropdown nav>
                      <DropdownToggle nav>
                    <NavLink
                      href="/services"
                    >
                      Services
                    </NavLink>
                      </DropdownToggle>
                      <DropdownMenu>
                      <DropdownItem>
                        <ScrollLink to="/services#data_analytics">
                          Data Analytics
                        </ScrollLink>

                      </DropdownItem>
                      <DropdownItem to="/services#marketing" tag={Link}>
                        Digital Marketing
                      </DropdownItem>
                      <DropdownItem to="/services#biz_dev" tag={Link}>
                        Business Development
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem to="/services" tag={Link}>
                        Work with us
                      </DropdownItem>
                    </DropdownMenu>
                    </UncontrolledDropdown>
                  </NavItem> */}
                  <NavItem>
                    <NavLink
                      href="/teams"
                    >
                      About Us
                    </NavLink>

                  </NavItem>

                  <NavItem>
                    <NavLink
                      href="/faq"
                    >
                      FAQ
                    </NavLink>

                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="mailto:team@geshergroup.org"
                    >
                      Work With Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink style={{backgroundColor: "gray"}} target="_blank">
                      <strong>Applications Closed</strong>
                    </NavLink>
                    
                  </NavItem>
                </Nav>

              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
