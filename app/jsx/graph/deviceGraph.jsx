"use strict";

var React   = require('react');
var helpers = require('../helpers.jsx');

var ComponentGraph = require('./componentGraph.jsx');

var DeviceGraph = React.createClass({
  mixins: [helpers],

  getInitialState: function () {
    return {
      selectedDot: null
    }
  },

  getDefaultProps: function () {
    return {
      materials: {}
    }
  },

  componentWillMount: function () {
    this.findMaterials(this.props.device.components);
  },

  componentDidMount: function () {
    window.addEventListener('click', this.handleClick);
  },

  handleClick: function (e) {
    this.selectDot('');
  },

  selectDot: function (group) {
    this.setState({
      selectedDot: group
    });
  },

  buildComponentRepresentation: function (numberOfDots, deviceWeight, components) {
    var componentList = [];
    var dotsUsed      = 0;

    if (components) {
      components.forEach(function (component) {
        var dots  = Math.ceil(numberOfDots * component.mg / deviceWeight);
        dotsUsed += dots;

        componentList.push({
          component:    component,
          numberOfDots: dots
        });
      });
    }

    // add unkown components
    componentList.push({
      component: {
        name: 'unkown'
      },
      numberOfDots: numberOfDots - dotsUsed
    });

    return componentList;
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
    var componentList = this.buildComponentRepresentation(4000, this.props.device.mg, this.props.device.components);

    var componetGraphList = componentList.map(function (compRep) {
      return (
        <ComponentGraph 
          key                     = {compRep.component.name}
          component               = {compRep.component}
          numberOfDots            = {compRep.numberOfDots}
          deviceWeight            = {this.props.device.mg}
          selectedDot             = {this.state.selectedDot}
          selectDot               = {this.selectDot}             
          buildPartRepresentation = {this.buildComponentRepresentation} />
      );
    }.bind(this));

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
      <div 
        className = "graph">
        <div
          className = "device">
          {componetGraphList}
        </div>
        <ul
          className = "legend">
          {legend}
          <li 
            className = "dot-weight">
            {this.props.device.mg/4000}mg
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = DeviceGraph;