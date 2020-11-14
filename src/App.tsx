import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import { ROUTES } from './constants/routes'
import { withSession } from './hooks/session'

import PrivateRoute from './components/PrivateRoute'
import NotFound from './containers/NotFound'
import Login from './containers/Login'
import Register from './containers/Register'
import Task from './containers/Task'
import Tasks from './containers/Tasks'

function App() {
  const redirectTo = (to: string) => () => <Redirect to={to} />
  return (
    <Router>
      <Switch>
        <PrivateRoute exact={true} path={ROUTES.HOME} component={redirectTo(ROUTES.TASKS)} />
        <PrivateRoute exact={true} path={ROUTES.TASK} component={Task} />
        <PrivateRoute exact={true} path={ROUTES.TASKS} component={Tasks} />
        <Route exact={true} path={ROUTES.LOGIN} component={Login} />
        <Route exact={true} path={ROUTES.REGISTER} component={Register} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default withSession(App)
