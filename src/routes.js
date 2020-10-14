import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Main from '~/pages/Main'
import Whats from '~/pages/Whats'
import Biblia from '~/pages/Biblia'

export default function Routes () {
  return (
    <Switch>
      <Route path="/bibliapp" component={Biblia} />
      <Route path="/whats" component={Whats} />
      <Route exact path="/" component={Main} />
    </Switch>
  )
}
