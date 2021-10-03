import * as React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import {Shop} from "./views/shop/Shop";
import {EmptyView} from './views/EmptyView';
import {Header} from './components/header/Header';
import {Cart} from './components/cart/Cart';

export const AppRouter = () => {
  return (
      <Router>
        <div className={'app-wrapper'}>
          <div className={'left-content'}>
            <Header/>
            <div className={"app-holder"}>
              <Switch>
                <Route exact path="/"><Redirect to={"/shop"}/></Route>
                <Route path="/shop">
                  <Shop />
                </Route>
                <Route component={EmptyView}/>
              </Switch>
            </div>
          </div>
          <div className={'right-content'}>
            <Cart/>
          </div>
        </div>
      </Router>
  );
}