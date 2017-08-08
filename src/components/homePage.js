"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
  render: function () {
    var createEmployeeRow = function (employee) {
      return (
        <tr key={employee.id}>
          <td><Link to={"/employees/" + employee.id}>{employee.id}</Link></td>
          <td><Link to={"/employees/" + employee.id}>{employee.name}</Link></td>
        </tr>
      );
    };

    return (
      <div className="container">
        <div className="row">
          <table className="table col-xs-12 col-sm-6 col-md-6">
            <thead>
            <tr>
              <th>ID</th>
              <th>ФИО</th>
            </tr>
            </thead>
            <tbody>
            {JSON.parse(localStorage.getItem('catalog')).employees.map(createEmployeeRow, this)}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
});

module.exports = Home;