"use strict";

var React = require("react");

var Selectize = require("./selectize.jsx");

var Select = React.createClass({
  componentWillMount: function() {
    // replace with AJAX !!!
    console.log(this.props.url);
    this.options = [{id: "1", name: "Acer"}, {id: "2", name: "Asus"}, {id: "3", name: "Apple"}];
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
        onChange         = {this.props.onChange}
        displayAttribute = "name"
        valueAttribute   = "id"
        options          = {this.options}
      />
    );
  }
});

module.exports = Select;