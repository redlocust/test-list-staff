"use strict";

var React = require('react');
var Link = require('react-router').Link;

var EmployeePage = React.createClass({

  componentWillMount: function () {
    const ID = this.props.params.id;

    var employee = this.props.catalog.employees.filter(function (employee) {
      return employee.id === ID;
    })[0];

    var photo = this.props.catalog.photos.filter(function (photo) {
      return employee.photo === photo.id;
    })[0];

    this.setState({
      employee: employee,
      photo: photo
    });
  },


  render: function () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6">
            <div className="well well-sm">
              <div className="row">
                <div className="col-sm-6 col-md-4">
                  <img src={this.state.photo.data}
                       alt=""
                       className="img-rounded img-responsive"/>
                </div>
                <div className="col-sm-6 col-md-8">
                  <h4>{this.state.employee.name}</h4>
                  <small>{this.state.employee.phone}</small>
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