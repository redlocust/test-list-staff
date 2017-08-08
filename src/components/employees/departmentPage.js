"use strict";

var React = require('react');
var Link = require('react-router').Link;

var DepartmentsPage = React.createClass({

  componentWillMount: function () {
    var departmentID = this.props.params.id;
    var employees = JSON.parse(localStorage.getItem('catalog')).employees.filter(function (employee) {
      return employee.department === departmentID;
    });

    this.setState({
      employees: employees
    });

  },


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
        <table className="table col-xs-12 col-sm-6 col-md-6">
          <thead>
          <tr>
            <th>ID</th>
            <th>ФИО</th>
          </tr>
          </thead>
          <tbody>
          {this.state.employees.map(createEmployeeRow, this)}
          <tr>
            <td><b>Всего сотрудников в отделе</b></td>
            <td><b>{this.state.employees.length}</b></td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = DepartmentsPage;