"use strict";

var React   = require('react');
var helpers = require('../helpers.jsx');

var ComponentGraph = require('./componentGraph.jsx');

var DeviceGraph = React.createClass({
  mixins: [helpers],

  materials: {},

  componentWillReceiveProps: function (nextProps) {
    this.materials = {};
    this.findMaterials(nextProps.device);
  },

  findMaterials: function (obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key) && typeof obj[key] == 'object') {
        this.findMaterials(obj[key]);
        if(key == 'materials') {
          obj[key].forEach(function (material) {
            if (!this.materials[material.name])
              this.materials[material.name] = 0;
            this.materials[material.name] += +material.mg;
          }.bind(this));
        }
      }
    }
  },
 
  render: function() {  
    var legend    = [];
    for (var material in this.materials) {
      legend.push(
        <li
          className = {'legend-item ' + this.makeCssString(material)}
          key       = {material}>
          {material} &nbsp;
          <span
            className = "mg">
            {this.materials[material]}mg
          </span>
        </li>
      );
    }

    if(this.props.device) {
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
    } else {
      return null;
    }
  }
});

module.exports = DeviceGraph;