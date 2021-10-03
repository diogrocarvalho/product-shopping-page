import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Shop} from "./views/shop/Shop";
import {EmptyView} from './views/EmptyView';
import {Header} from './components/header/Header';

export const AppRouter = () => {
  return (
      <Router>
        <Header/>
        <div className={"app-holder"}>
          <Switch>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route component={EmptyView}/>
          </Switch>
        </div>
      </Router>
  );
}