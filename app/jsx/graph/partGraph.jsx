/**
 * @jsx React.DOM
 */

 "use strict";

var React    = require('react');

var Tooltip = require('./tooltip.jsx');

var PartGraph = React.createClass({
  render: function() {
    var materialList = [{
      name:    'gold',
      ammount:  5,
    },
    {
      name:    'tin',
      ammount:  3
    },
    {
      name:    'document',
      ammount:  2
    },
    {
      name:    'unkown',
      ammount:  100
    }];

    var dotList = [];
    materialList.forEach(function (material) {
      for (var i = 0; i < material.ammount; i++) {
        var dotKey = this.props.componentName + this.props.partName + material.name + i;
        var isSelected = (this.props.selectedDot == dotKey);

        dotList.push(
          <li 
            className = {'dot ' + material.name}
            key       = {dotKey}
            onClick   = {this.props.selectDot.bind(null, dotKey)} >

            {isSelected ? <Tooltip name = {this.props.name}/> : ''}
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