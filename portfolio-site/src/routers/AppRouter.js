import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import HomePage from '../components/HomePage';
import ContactPage from '../components/ContactPage';
import PortfolioPage from '../components/PortfolioPage';
import PortfolioEntryPage from '../components/PortfolioEntryPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={HomePage} exact={true}/>
        <Route path="/portfolio" component={PortfolioPage} exact={true}/>
        <Route path="/portfolio/:id" component={PortfolioEntryPage}/>
        <Route path="/contact" component={ContactPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;