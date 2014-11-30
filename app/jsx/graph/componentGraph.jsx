"use strict";

var React         = require('react');
var graph_helpers = require('./graph_helpers.jsx');

var PartGraph = require('./partGraph.jsx');

var ComponentGraph = React.createClass({
  mixins: [graph_helpers],

  render: function() { 
    var partList = this.buildComponentRepresentation(this.props.numberOfDots, 
                                                     this.props.component.mg, 
                                                     this.props.component.parts);

    var partGraphList = partList.map(function (partRep) {
      var part = partRep.part || partRep.component;

      return (
        <PartGraph 
         {...this.props} 
         key          = {part.name}
         part         = {part}
         numberOfDots = {partRep.numberOfDots}/>
      );
    }.bind(this));

    return (
      <div 
        className = "parts">
        {partGraphList}
      </div>
    );
  }
});

module.exports = ComponentGraph;