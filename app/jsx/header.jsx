 "use strict";

var React = require('react');

var Header = React.createClass({

  render: function() {
    return (
      <div 
        className = "header">
        <span className = "circle"/><span className = "square"/><h1 className = "title">MaterialDbView</h1>
      </div>
    );
  }
});

module.exports = Header;