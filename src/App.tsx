import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { ROUTES } from './constants/routes'
import { withSession } from './hooks/session'

import PrivateRoute from './components/PrivateRoute'
import NotFound from './containers/NotFound'
import Home from './containers/Home'
import Login from './containers/Login'

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact={true} path={ROUTES.HOME} component={Home} />
        <Route exact={true} path={ROUTES.LOGIN} component={Login} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default withSession(App)
