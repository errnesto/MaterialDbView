 "use strict";

var React = require('react');

var Header = React.createClass({

  render: function() {
    return (
      <div 
        className = "header">
        <span className = "circle"/><span className = "square"/>MaterialDbView
      </div>
    );
  }
});

module.exports = Header;