"use strict";

var React    = require('react');

var Tooltip = require('./tooltip.jsx');

var PartGraph = React.createClass({
  render: function() {
    var materialList = [{
      type:    'gold',
      name:    'Gold',
      ammount:  5,
    },
    {
      type:    'tin',
      name:    'Tin',
      ammount:  3
    },
    {
      type:    'document',
      name:    'Document 1',
      ammount:  1,
    },
    {
      type:    'document',
      name:    'Document 2',
      ammount:  1,
    },
    {
      type:    'unkown',
      name:    'Fill in',
      ammount:  1000
    }];

    var dotList = [];
    materialList.forEach(function (material, index) {
      for (var i = 0; i < material.ammount; i++) {
        var dotKey = this.props.componentName + this.props.partName + material.type + index + i;
        var isSelected = (this.props.selectedDot == dotKey);

        dotList.push(
          <li 
            className = {'dot ' + material.type}
            key       = {dotKey}
            onClick   = {this.props.selectDot.bind(null, dotKey)} >

            {isSelected ? <Tooltip data = {material}/> : ''}
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