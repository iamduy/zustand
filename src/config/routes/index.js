import React, { Suspense, useCallback } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { PrivateTemplate, PublicTemplate } from "templates";
import { Routers } from "utils";
import lazyWithRetry from "./lazyWithRetry";

const AnimalPage = lazyWithRetry(() => import("pages/Animals"));
const HumansPage = lazyWithRetry(() => import("pages/Humans"));
const LoginPage = lazyWithRetry(() => import("pages/Login"));
const RegisterPage = lazyWithRetry(() => import("pages/Register"));

const Routes = (isLoggedIn, { ...rest }) => {
  const location = useLocation();
  const ConvertRouters = (element) => `/${element}`;

  const _renderPrivateTemplate = useCallback(() => {
    return (
      <PrivateTemplate>
        <Route
          {...rest}
          exact
          path="/"
          render={(props) => {
            return <HumansPage {...rest} {...props} />;
          }}
        />
        <Route
          {...rest}
          exact
          path={ConvertRouters(Routers.ANIMALS.URL)}
          render={(props) => {
            return <AnimalPage {...rest} {...props} />;
          }}
        />
        <Route
          {...rest}
          exact
          path={ConvertRouters(Routers.HUMAN.URL)}
          render={(props) => {
            return <HumansPage {...rest} {...props} />;
          }}
        />
      </PrivateTemplate>
    );
  }, [isLoggedIn, location.pathname]);

  const _renderPublicTemplate = useCallback(() => {
    return (
      <PublicTemplate>
        <Route
          {...rest}
          exact
          path={ConvertRouters(Routers.LOGIN)}
          render={(props) => {
            return <LoginPage {...rest} {...props} />;
          }}
        />
        <Route
          {...rest}
          exact
          path={ConvertRouters(Routers.REGISTER)}
          render={(props) => {
            return <RegisterPage {...rest} {...props} />;
          }}
        />
      </PublicTemplate>
    );
  }, [isLoggedIn, location.pathname]);

  const route = useCallback(() => {
    if (isLoggedIn !== null)
      return !isLoggedIn ? _renderPrivateTemplate() : _renderPublicTemplate();
  }, [isLoggedIn, location.pathname]);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>{route()}</Switch>
    </Suspense>
  );
};

export default Routes;
