"use strict";

var React = require('react');
var Link = require('react-router').Link;
var employees = require('../../data.json');
var toastr = require('toastr');

var DepartmentsPage = React.createClass({
  // propTypes: {
  //   authors: React.PropTypes.array.isRequired
  // },

  render: function () {


    // var createAuthorRow = function(author) {
    //   return (
    //     <tr key={author.id}>
    //       <td><Link to={"author/" + author.id}>{author.id}</Link></td>
    //       <td>{author.firstName} {author.lastName}</td>
    //     </tr>
    //   );
    // };

    return (
      <div>
        <table className="table">
          <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Name</th>
          </tr>
          </thead>
          <tbody>
          {this.props.appName}
          {/*{this.props.authors.map(createAuthorRow, this)}*/}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = DepartmentsPage;