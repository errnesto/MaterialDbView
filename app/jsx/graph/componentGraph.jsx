/**
 * @jsx React.DOM
 */

 "use strict";

var React   = require('react');

var PartGraph = require('./partGraph.jsx');

var ComponentGraph = React.createClass({

  render: function() {  
    return (
      <PartGraph
        partName    = "partName"
        selectedDot = {this.props.selectedDot}
        selectDot   = {this.props.selectDot} />
    );
  }
});

module.exports = ComponentGraph;