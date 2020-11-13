import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { useSession } from '../../hooks/session'
import { ROUTES } from '../../constants/routes'

const PrivateRoute = (props: any) => {
  const { component: Component, auth, ...rest } = props
  const session = useSession()
  const render = (renderProps: any) =>
    !session ? <Redirect to={ROUTES.LOGIN} /> : <Component {...renderProps} />
  return <Route {...rest} render={render} />
}

export default PrivateRoute
