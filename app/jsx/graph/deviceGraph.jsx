"use strict";

var React         = require('react');
var graph_helpers = require('./graph_helpers.jsx');

var ComponentGraph = require('./componentGraph.jsx');

var DeviceGraph = React.createClass({
  mixins: [graph_helpers],
 
  render: function() {  
    var componentList = this.buildComponentRepresentation(4000, this.props.device.mg, this.props.device.components);

    var componetGraphList = componentList.map(function (compRep) {
      return (
        <ComponentGraph 
          key                     = {compRep.component.name}
          component               = {compRep.component}
          numberOfDots            = {compRep.numberOfDots}
          deviceWeight            = {this.props.device.mg}
          guiState                = {this.props.guiState} />
      );
    }.bind(this));

    return (
      <div
        className = "device">
        {componetGraphList}
      </div>  
    );
  }
});

module.exports = DeviceGraph;