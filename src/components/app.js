var React = require('react');
var Header = require('./common/header');
var catalog = require('../data.json');
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
      catalog: JSON.parse(retrievedObject)
    }, function () {
      console.log('state', this.state.catalog);
    });

  },

  componentWillMount: function () {
    this.loadJSONToLocalStorage('catalog', catalog);
  },

  render: function () {
    return (
      <div>
        <Header/>
        <div className="container-fluid">
          {React.cloneElement(this.props.children, {catalog: this.state.catalog})}
        </div>
      </div>
    );
  }
});

module.exports = App;