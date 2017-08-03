var React = require('react');
// var Header = require('./common/header');
$ = jQuery = require('jquery');

var App = React.createClass({

  componentWillMount: function() {
    console.log('will mount');
  },

  render: function() {
    return (
      <div>
        <p>123</p>
        {/*<Header/>*/}
        {/*<div className="container-fluid">*/}
          {/*{this.props.children}*/}
        {/*</div>*/}
      </div>
    );
  }
});

module.exports = App;