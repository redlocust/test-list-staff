"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1>List of all employees</h1>
        <p>1</p>
        <p>2</p>
      </div>
    );
  }
});

module.exports = Home;