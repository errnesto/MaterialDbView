/**
 * @jsx React.DOM
 */

 "use strict";

var React = require('react');

var DeviceGraph = require('./graph/deviceGraph.jsx');

var Select = require('./select/select.jsx');

var config = require('../config.json');

var Page = React.createClass({
	changed: function(value) {
		console.log('Select value changed: ', value);
	},
  render: function() {
    return (
      <div 
        className = "graph">

		<Select
		    name="device-type"
		    placeholder="Device Type"
		    onChange={this.changed}
		    url={config.urls.types}
		    ref="deviceSelector"
		/>

		<Select
		    name="manufacturer"
		    placeholder="Manufacturer's name"
		    onChange={this.changed}
		    url={config.urls.manufacturers}
		    ref="manufacturerSelector"
		/>

        <DeviceGraph 
          deviceName = "device" />
      </div>
    );
  }
});

module.exports = Page;