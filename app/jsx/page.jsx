 "use strict";

var React = require('react');

var Header      = require('./header.jsx');
var DeviceGraph = require('./graph/deviceGraph.jsx');
var Select      = require('./select/select.jsx');
var config      = require('../config.json');
var data        = require('../device_data.json');


var Page = React.createClass({
  changed: function(value) {
    console.log('Select value changed: ', value);
  },
  render: function() {
    return (
      <div 
        className = "view">
        <Header />
        <p>Filter:</p>
        <Select
          name        = "device-type"
          placeholder = "Type"
          onChange    = {this.changed}
          url         = {config.urls.types}
          ref         = "deviceSelector" 
        />

        <Select
          name        = "manufacturer"
          placeholder = "Manufacturer's name"
          onChange    = {this.changed}
          url         = {config.urls.manufacturers}
          ref         = "manufacturerSelector"
        />

        <p>Select:</p>
        <Select
          name        = "manufacturer"
          placeholder = "Device"
          onChange    = {this.changed}
          url         = {config.urls.manufacturers}
          ref         = "manufacturerSelector"
        />
        <Select
          name        = "manufacturer"
          placeholder = "Component"
          onChange    = {this.changed}
          url         = {config.urls.manufacturers}
          ref         = "manufacturerSelector"
        />
        <Select
          name        = "manufacturer"
          placeholder = "Part"
          onChange    = {this.changed}
          url         = {config.urls.manufacturers}
          ref         = "manufacturerSelector"
        />

        <DeviceGraph 
          deviceName = {data.device_name} 
          device     = {data}
        />

        <div
          className = "actions">
          <p>If you have information about a device or just a part please insert it to the database.</p>
          <p>Also you can look at documents uploaded by others and insert the data from these documents into the database.</p>
          <a 
            className = "add-information"
            href      = "">
            Add new data
          </a>
          <a 
            className = "add-to-db"
            href      = "">
            Insert data from document
          </a>
        </div>
      </div>
    );
  }
});

module.exports = Page;