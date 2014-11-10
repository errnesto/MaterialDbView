/**
 * @jsx React.DOM
 */

 "use strict";

var React = require('react');

var DeviceGraph = require('./graph/deviceGraph.jsx');


var Page = React.createClass({

  render: function() {  
    return (
      <div 
        className = "graph">

        <DeviceGraph 
          deviceName = "device" />
      </div>
    );
  }
});

module.exports = Page;