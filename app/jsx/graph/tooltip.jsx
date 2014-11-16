"use strict";

var React    = require('react');

var Tooltip = React.createClass({
  render: function() {  
    return (
      <div 
        className = "tooltip">
        <h2
          className = "dot-name">
          {this.props.data.name}
        </h2>
        <p
          className = "component">
          {this.props.componentName}
        </p>
        <p
          className = "part">
          {this.props.partName}
        </p>
      </div>
    );
  }
});

module.exports = Tooltip;