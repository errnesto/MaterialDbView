 "use strict";

var React = require('react');

var config     = require('../config.json');
var data       = require('../device_data.json');
var guiStore   = require('./stores/guiStore');
var guiActions = require('./actions/guiActions');

var Header         = require('./header.jsx');
var Select         = require('./select/select.jsx');
var DeviceGraph    = require('./graph/deviceGraph.jsx');
var ComponentGraph = require('./graph/componentGraph.jsx');
var PartGraph      = require('./graph/partGraph.jsx');
var Legend         = require('./graph/legend.jsx');



var Page = React.createClass({
  getInitialState: function () {
    return {
      guiState: {}
    }
  },

  componentDidMount: function() {
    this.unsubscribe = guiStore.listen(this.updateGui);
    window.addEventListener('click', guiActions.click);
  },

  componentWillUnmount: function() {
    this.unsubscribe();
  },

  updateGui: function (guiState) {
    this.setState({
      guiState: guiState
    });
  },

  changed: function(value) {
    console.log('Select value changed: ', value);
  },

  chooseGraph: function (graphType) {
    var graph;
    switch (graphType) {
      case 'device':
        graph = (
          <DeviceGraph 
            deviceName = {data.device_name} 
            device     = {data}
            guiState   = {this.state.guiState}
          />
        );
      break;

      case 'component':
        graph = (
          <ComponentGraph
            component    = {data.components[0]}
            numberOfDots = {4000}
            deviceWeight = {data.mg}
            guiState     = {this.state.guiState}
          />
        );
      break;

      case 'part':
        graph = (
          <PartGraph
            part         = {data.components[0].parts[0]}
            component    = {data.components[0]}
            numberOfDots = {4000}
            deviceWeight = {data.mg}
            guiState     = {this.state.guiState}
          />
        );
      break;
    }
    return graph
  },

  render: function() { 
    var graph = this.chooseGraph('part');

    return (
      <div 
        className = "view">
        <Header />
        <p>
          This database is to collect information about the materials in electronical devices.<br />
          Here you can get a quick look at the data already in the database
          or easily add new data.<br />
          You can access the full database with our <a href="http://localhost:1337/docs">api</a>
        </p>
        <h2>Filter:</h2>
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

        <h2>Select:</h2>
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

        {/* the graph */}
        <div
          className = "graph">
          {graph}
          <Legend
            device = {data} />
        </div>


        <div
          className = "actions">
          <p>If you have information about a device or just a part please insert it to the database.</p>
          <p>Also you can look at documents uploaded by others and insert the data from these documents into the database.</p>
          <a 
            className = "add-information"
            href      = "http://localhost:1337/docs"
            target    = "blank">
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