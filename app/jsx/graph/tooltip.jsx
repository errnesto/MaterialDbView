/**
 * @jsx React.DOM
 */

 "use strict";

var React    = require('react');

var Tooltip = React.createClass({
  render: function() {  
    return (
      <div 
        className = "tooltip">
        <h2
          className = "dot-name">
          {this.props.name}
        </h2>
      </div>
    );
  }
});

module.exports = Tooltip;