 "use strict";

var React = require('react');

var config     = require('json!../config.json');
var guiStore   = require('./stores/guiStore');
var apiStore   = require('./stores/apiStore');
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
      guiState: {},
      apiState: {}
    }
  },

  componentDidMount: function() {
    this.unsubscribeGuiStore = guiStore.listen(this.updateGui);
    this.unsubscribeApiStore = apiStore.listen(this.updateApi);

    window.addEventListener('click', guiActions.click);
  },

  componentWillUnmount: function() {
    this.unsubscribeGuiStore();
  },

  updateGui: function (guiState) {
    this.setState({ guiState: guiState });
  },
  updateApi: function (apiState) {
    this.setState({ apiState: apiState });
  },

  chooseGraph: function (graphType) {
    var graph;
    switch (graphType) {
      case 'device':
        graph = (
          <DeviceGraph 
            deviceName = {this.state.apiState.data.device_name} 
            device     = {this.state.apiState.data}
            guiState   = {this.state.guiState}
          />
        );
      break;

      case 'component':
        graph = (
          <ComponentGraph
            component    = {this.state.apiState.data}
            numberOfDots = {4000}
            guiState     = {this.state.guiState}
          />
        );
      break;

      case 'part':
        graph = (
          <PartGraph
            part         = {this.state.apiState.data}
            numberOfDots = {4000}
            guiState     = {this.state.guiState}
          />
        );
      break;
    }
    return graph
  },

  render: function() { 
    var graph = this.chooseGraph(this.state.apiState.graphType);

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
          ref         = "deviceSelector"
          options     = {[{id: 0, name: 'Computer'}]}
        />

        <Select
          name        = "manufacturer"
          placeholder = "Manufacturer's name"
          ref         = "manufacturerSelector"
          options     = {[{id: 0, name: 'Acer'}]}
        />

        <h2>Select:</h2>
        <Select
          name        = "device"
          placeholder = "Device"
          options     = {[{id: 0, name: 'One'}]}
        />
        <Select
          name        = "component"
          placeholder = "Component"
          options     = {[{id: 0, name: 'Hard Disk'}]}
        />
        <Select
          name        = "part"
          placeholder = "Part"
          options     = {[{id: 0, name: 'Disk'}]}
        />

        {/* the graph */}
        <div
          className = "graph">
          {graph}
          <Legend
            device = {this.state.apiState.data} />
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