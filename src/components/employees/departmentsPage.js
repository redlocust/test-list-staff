"use strict";

var React = require('react');
var Link = require('react-router').Link;
var toastr = require('toastr');

var DepartmentsPage = React.createClass({
  render: function () {

    var createDepartmentRow = function (department) {
      return (
        <tr key={department.id}>
          <td><Link to={"/departments/" + department.id + "/employees"}>{department.id}</Link></td>
          <td><Link to={"/departments/" + department.id + "/employees"}>{department.name}</Link></td>
        </tr>
      );
    };

    return (
      <div className="container">
        <table className="table col-xs-12 col-sm-6 col-md-6">
          <thead>
          <tr>
            <th>ID</th>
            <th>Наименование</th>
          </tr>
          </thead>
          <tbody>
          {JSON.parse(localStorage.getItem('catalog')).departments.map(createDepartmentRow, this)}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = DepartmentsPage;