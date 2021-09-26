import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Shop} from "./components/shop/Shop";
import {NoMatch} from './components/NoMatch';
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
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </Router>
  );
}