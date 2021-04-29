import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Index from '../pages/index/Index';
import List from '../pages/list/List';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Index} />
    <Route path="/list" component={List} />
  </Switch>
);

export default Routes;
