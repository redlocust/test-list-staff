"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
  render: function() {
    var createEmployeeRow = function (employee) {
      return (
        <tr key={employee.id}>
          <td></td>
          <td><Link to={"/employees/" + employee.id}>{employee.id}</Link></td>
          <td><Link to={"/employees/" + employee.id}>{employee.name}</Link></td>
        </tr>
      );
    };

    return (
      <div>
        <table className="table">
          <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>ФИО</th>
          </tr>
          </thead>
          <tbody>
          {JSON.parse(localStorage.getItem('catalog')).employees.map(createEmployeeRow, this)}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = Home;