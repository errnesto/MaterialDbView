"use strict";

var React   = require('react');
var helpers = require('../helpers.jsx');

var ComponentGraph = require('./componentGraph.jsx');

var DeviceGraph = React.createClass({
  mixins: [helpers],

  getDefaultProps: function () {
    return {
      materials: {}
    }
  },

  componentWillMount: function () {
    this.findMaterials(this.props.device.components);
  },

  findMaterials: function (obj) {
    var materials = {};

    for (var key in obj) {
      if (obj.hasOwnProperty(key) && typeof obj[key] == 'object') {
        this.findMaterials(obj[key]);
        if(key == 'materials') {
          obj[key].forEach(function (material) {
            if (!this.props.materials[material.name])
              this.props.materials[material.name] = 0;
            this.props.materials[material.name] += +material.mg;
          }.bind(this));
        }
      }
    }
  },
 
  render: function() {  
    var legend    = [];
    for (var material in this.props.materials) {
      legend.push(
        <li
          className = {'legend-item ' + this.makeCssString(material)}
          key       = {material}>
          {material} &nbsp;
          <span
            className = "mg">
            {this.props.materials[material]}mg
          </span>
        </li>
      );
    }

    return (
      <ul
        className = "legend">
        <li 
          className = "unkown legend-item">
          missing Data
        </li>
        {legend}
        <li 
          className = "dot-weight">
          {this.props.device.mg/4000}mg / deviceWeight: {this.props.device.mg}mg
        </li>
      </ul>
    );
  }
});

module.exports = DeviceGraph;