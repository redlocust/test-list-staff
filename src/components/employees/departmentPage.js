"use strict";

var React = require('react');
var Link = require('react-router').Link;
var toastr = require('toastr');

var DepartmentsPage = React.createClass({
    // propTypes: {
    //   authors: React.PropTypes.array.isRequired
    // },

    render: function () {
        var createEmployeeRow = function (employee) {
            return (
                <tr key={employee.id}>
                    <td></td>
                    <td><Link to={"employees/" + employee.id}>{employee.id}</Link></td>
                    <td><Link to={"employees/" + employee.id}>{employee.name}</Link></td>
                </tr>
            );
        };


        var loadEmployeeList = function (departmentID) {
            var catalog = JSON.parse(localStorage.getItem('catalog'));
            return catalog.employees.filter(function (employee) {
                return employee.department === departmentID;
            });
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
                    {loadEmployeeList(this.props.params.id).map(createEmployeeRow, this)}
                    <tr>
                        <td></td>
                        <td><b>Всего сотрудников в отделе</b></td>
                        <td><b>{loadEmployeeList(this.props.params.id).length}</b></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = DepartmentsPage;