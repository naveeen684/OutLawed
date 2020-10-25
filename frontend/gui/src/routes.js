import React from "react";
import { Route } from "react-router-dom";

import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import OutlawedSessions from "./containers/ourworks/OutlawedSessions";
import CommunityWork from "./containers/ourworks/CommunityWork";
import SchoolProgram from "./containers/ourworks/SchoolProgram";
import Collaborations from "./containers/Collaborations";
import Outreach from "./containers/Outreach";
import Developers from "./containers/Developers";
import Dynamic from "./containers/Dynamic";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/ourworks/community-work" component={CommunityWork} />
    <Route exact path="/ourworks/law" component={SchoolProgram} />
    <Route
      exact
      path="/ourworks/outloud-sessions"
      component={OutlawedSessions}
    />
    <Route exact path="/collaborations" component={Collaborations} />
    <Route exact path="/Developers" component={Developers} />
    <Route exact path="/Dynamic" component={Dynamic} />
    <Route exact path="/outreach" component={Outreach} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/logout" />
  </div>
);

export default BaseRouter;
