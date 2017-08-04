var React = require('react');
var Header = require('./common/header');
var employees = require('../data.json');
$ = jQuery = require('jquery');

var App = React.createClass({

  loadJSONToLocalStorage: function (toLocalStorage, fromObject) {
    if (localStorage[toLocalStorage]) {
      // Data already loaded locally
    }
    else {
      // Data not yet loaded locally! Loading it!
      localStorage[toLocalStorage] = JSON.stringify(fromObject);
    }

    var retrievedObject = localStorage.getItem(toLocalStorage);

    this.setState({
      employees: JSON.parse(retrievedObject)
    }, function () {
      console.log('state', this.state.employees);
    });

  },

  componentWillMount: function () {
    this.loadJSONToLocalStorage('employees', employees);
  },

  render: function () {
    return (
      <div>
        <Header/>
        <div className="container-fluid">
          {React.cloneElement(this.props.children, {appName: 'Foo'})}
        </div>
      </div>
    );
  }
});

module.exports = App;