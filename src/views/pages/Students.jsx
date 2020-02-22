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

class Students extends React.Component{
    state = {};
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
      }
    render(){
        return(
            <>
                <DefaultNavbar/>
                <StudentHero/>
            </>
        )
    }
}

export default Students;