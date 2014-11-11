"use strict";

var React   = require('react');

var ComponentGraph = require('./componentGraph.jsx');

var DeviceGraph = React.createClass({
  getInitialState: function () {
    return {
      selectedDot: null
    }
  },

  selectDot: function (group) {
    this.setState({
      selectedDot: group
    });
  },

  render: function() {  
    return (
      <ComponentGraph
        componentName = "componentName"
        selectedDot   = {this.state.selectedDot}
        selectDot     = {this.selectDot} />
    );
  }
});

module.exports = DeviceGraph;