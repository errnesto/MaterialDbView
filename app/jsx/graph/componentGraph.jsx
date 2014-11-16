"use strict";

var React   = require('react');
var PartGraph = require('./partGraph.jsx');

var ComponentGraph = React.createClass({

  render: function() { 
    var partList = this.props.buildPartRepresentation(this.props.numberOfDots, 
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