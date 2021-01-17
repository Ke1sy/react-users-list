import React from 'react';
import {Header, Main} from './components/Layout';
import RM from './RouterManager';
import {Switch, Route, Redirect} from "react-router-dom";
import withSuspense from "./components/Suspense/Suspense";

const App = () => {
  return (
      <>
        <Header/>
        <Main>
            <Switch>
                {Object.entries(RM).map(([key, route]) => {
                    const {path, exact = false, redirect = null, component: Cmp} = route;
                    const redirectPath = redirect ? redirect(true) : '';
                    const RouteComponent = redirect ? <Redirect to={redirectPath}/> : withSuspense(Cmp);

                    return (
                        <Route
                            key={key}
                            path={path}
                            exact={exact}
                        >
                            {RouteComponent}
                        </Route>
                    )
                })}
            </Switch>
        </Main>
      </>
  );
};

export default App;
