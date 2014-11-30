"use strict";

var React = require("react");

var Selectize = require("./selectize.jsx");

var Api = require('../actions/apiActions');

var Select = React.createClass({

  handleChange: function () {
    switch (this.props.name) {
      case 'device':
      Api.loadDevice();
      break;
    }
  },
  getInitialState: function() {
    return {value: ""};
  },
  render: function() {
    return (
      <Selectize
        name             = {this.props.name}
        placeholder      = {this.props.placeholder}
        type             = "text"
        value            = {this.state.value}
        onChange         = {this.handleChange}
        displayAttribute = "name"
        valueAttribute   = "id"
        options          = {this.props.options}
      />
    );
  }
});

module.exports = Select;