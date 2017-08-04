"use strict";

var React = require('react');
var Link = require('react-router').Link;
var toastr = require('toastr');

var EmployeePage = React.createClass({
  // propTypes: {
  //   authors: React.PropTypes.array.isRequired
  // },

  render: function () {
    const ID = this.props.params.id;

    var searchEmployee = function (employee) {
      return employee.id === ID;
    };

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6">
            <div className="well well-sm">
              <div className="row">
                <div className="col-sm-6 col-md-4">
                  <img src={this.props.catalog.employees.filter(searchEmployee, this)[0].data}
                       alt=""
                       className="img-rounded img-responsive"/>
                </div>
                <div className="col-sm-6 col-md-8">
                  <h4>{this.props.catalog.employees.filter(searchEmployee, this)[0].name}</h4>
                  <small>{this.props.catalog.employees.filter(searchEmployee, this)[0].phone}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = EmployeePage;