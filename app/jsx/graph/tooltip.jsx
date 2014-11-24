"use strict";

var React    = require('react');

var Tooltip = React.createClass({
  render: function() {  
    if (this.props.data.type == 'unkown') {
      return (
        <div 
          className = "tooltip">
          <h2
            className = "dot-name">
            {this.props.data.name}
          </h2>
          <a href="">insert new data</a>
        </div>
      );
    }
    
    return (
      <div 
        className = "tooltip">
        <h2
          className = "dot-name">
          {this.props.data.name} – {this.props.data.mg}mg ({this.props.data.mg / this.props.deviceWieght * 100}%)
        </h2>
        <p
          className = "component">
          <b>Component:</b> {this.props.component.name} ({this.props.data.mg / this.props.component.mg * 100}%)
        </p>
        <p
          className = "part">
          <b>Part:</b> {this.props.part.name}  ({this.props.data.mg / this.props.part.mg * 100}%)
        </p>
        <p
          className = "description">
          {this.props.data.description}
        </p>
      </div>
    );
  }
});

module.exports = Tooltip;