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
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

import Index from "views/Index.jsx";
import Landing from "views/examples/Landing.jsx";
import Services from "views/pages/Services.jsx";
import Login from "views/examples/Login.jsx";
import Profile from "views/examples/Profile.jsx";
import Register from "views/examples/Register.jsx";
import Join from "views/pages/Join.jsx";
import Teams from "views/pages/Teams.jsx";
import {Helmet} from "react-helmet";

ReactDOM.render(
  <BrowserRouter>
    <Helmet>
      <title>Gesher Group</title>
      <meta name="description" content={"UCSC's Premier Consulting Group"} />
      <meta name="og:image" content={"assets/img/brand/geshblue.png"} />
    </Helmet>
    <Switch>
      <Route path="/" exact render={props => <Index {...props} />} />
      <Route
        path="/landing-page"
        exact
        render={props => <Landing {...props} />}
      />
      <Route path="/join" exact render={props => <Join {...props} />} />
      <Route path="/services" exact render={props => <Services {...props} />} />
      <Route path="/teams" exact render={props => <Teams {...props} />} />
    </Switch>
    {/*



      <Route
        path="/profile-page"
        exact
        render={props => <Profile {...props} />}
      />
      <Route
        path="/register-page"
        exact
        render={props => <Register {...props} />}
      />
      <Redirect to="/" />
     */}
  </BrowserRouter>,
  document.getElementById("root")
);
