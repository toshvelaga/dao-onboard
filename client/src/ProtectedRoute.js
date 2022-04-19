import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import getCookie from './utils/getCookie'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const onboarded = getCookie('onboarding')
  return (
    <Route
      {...rest}
      render={(props) => {
        if (onboarded === 'completed') {
          return <Component {...props} />
        } else {
          return (
            <Navigate
              to={{ pathname: '/members', state: { from: props.location } }}
            />
          )
        }
      }}
    />
  )
}

export default ProtectedRoute
