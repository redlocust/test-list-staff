"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var browserHistory = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Route = ReactRouter.Route;
var Redirect = ReactRouter.Redirect;

// Components
var App = require('./components/app');
var HomePage = require('./components/homePage');
var Departments = require('./components/employees/departmentsPage');
var EmployeePage = require('./components/employees/employeePage');
// var AboutPage = require('./components/about/aboutPage');
// var NotFoundPage = require('./components/notFoundPage');

var routes = (
  <Router history={browserHistory}>
  <Route path="/" component={App}>
  <IndexRoute component={HomePage} />
  <Route path="departments" component={Departments} />
  {/*<Route path="author" component={ManageAuthorPage} />*/}
  <Route path="employees/:id" component={EmployeePage} />
  {/*<Route path="about" component={AboutPage} />*/}
  {/*<Redirect from="about-us" to="about" />*/}
  {/*<Redirect from="awthurs" to="authors" />*/}
  {/*<Redirect from="about/*" to="about" />*/}
  {/*<Route path="*" component={NotFoundPage} />*/}
  </Route>
  </Router>
);

module.exports = routes;