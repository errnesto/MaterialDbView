"use strict";

var React    = require('react');
var helpers  = require('../helpers.jsx');
var Tooltip  = require('./tooltip.jsx');


var PartGraph = React.createClass({
  mixins: [helpers],

  buildMatrialRepresentation: function () {
    var materialList = [];

    var numberOfDots   = this.props.numberOfDots;
    var partWeight     = this.props.part.mg;
    var materials      = this.props.part.materials;
    var dotsUsed       = 0;
    var knownMatWeight = 0;

    if (materials) {
      materials.forEach(function (material) {
        var type  = this.makeCssString(material.name);
        var dots  = Math.ceil(numberOfDots * material.mg / partWeight);
        dotsUsed += dots;

        var graphRepresentation = {
          type:        type,
          name:        material.name,
          ammount:     dots,
          description: material.description,
          mg:          material.mg
        };

        materialList.push(graphRepresentation);
      }.bind(this));
    }

    // add unkown materials
    materialList.push({
      type:    'unkown',
      name:    'Fill In',
      ammount: numberOfDots - dotsUsed
    });

    return materialList;
  },

  handleClick: function (dotKey, e) {
    e.stopPropagation();
    this.props.selectDot(dotKey)
  },

  render: function() {
    var materialList = this.buildMatrialRepresentation();

    var dotList = [];
    materialList.forEach(function (material, index) {
      for (var i = 0; i < material.ammount; i++) {
        var dotKey = this.props.component.name + this.props.part.name + material.type + index + i;
        var isSelected = (this.props.selectedDot == dotKey);

        dotList.push(
          <li 
            className = {'dot ' + material.type}
            key       = {dotKey}
            onClick   = {this.handleClick.bind(null, dotKey)} >

            {isSelected ? <Tooltip 
                            data         = {material}
                            component    = {this.props.component}
                            part         = {this.props.part}
                            deviceWieght = {this.props.deviceWeight}/> : ''}
          </li>
        );
      }
    }.bind(this));
    
    return (
      <ul 
        className = "material-list">
        {dotList}
      </ul>
    );
  }
});

module.exports = PartGraph;