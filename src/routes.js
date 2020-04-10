import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '~/pages/Main';
import Whats from '~/pages/Whats';

export default function Routes() {
  return (
    <Switch>
      <Route path="/whats" component={Whats} />
      <Route path="/" component={Main} />
    </Switch>
  );
}
