import React, { Suspense, useCallback } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { PrivateTemplate } from "templates";
import { Routers } from 'utils';
import lazyWithRetry from "./lazyWithRetry";

const AnimalPage = lazyWithRetry(() => import('pages/Animals'))

const Routes = (isLoggedIn, { ...rest }) => {
  const location = useLocation()
  const _renderPrivateTemplate = useCallback(() => {
    return (
      <PrivateTemplate>
        <Route
          {...rest}
          exact
          path='/'
          render={props => {
            return <AnimalPage {...rest} {...props} />
          }}
        />
        <Route
          {...rest}
          exact
          path={Routers.ANIMALS.URL}
          render={props => {
            return <AnimalPage {...rest} {...props} />
          }}
        />

      </PrivateTemplate>
    )
  }, [location.pathname])
  const route = useCallback(() => {
    if (isLoggedIn !== null)
      return isLoggedIn ? _renderPrivateTemplate() : console.log('con cac chua login')
  }, [isLoggedIn, location.pathname])
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {route()}
      </Switch>
    </Suspense>


  )
}

export default Routes;