import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./src/components/Main.js";

const Routes = () => {
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Main}></Route>
    </Switch>
  </BrowserRouter>;
};

export default Routes;
