"use strict";

var React   = require('react');
var helpers = require('../helpers.jsx');

var ComponentGraph = require('./componentGraph.jsx');
var Legend         = require('./legend.jsx');

var DeviceGraph = React.createClass({
  mixins: [helpers],

  getInitialState: function () {
    return {
      selectedDot: null
    }
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

    return (
      <div 
        className = "graph">
        <div
          className = "device">
          {componetGraphList}
        </div>

        <Legend
          device = {this.props.device} />
      </div>
    );
  }
});

module.exports = DeviceGraph;