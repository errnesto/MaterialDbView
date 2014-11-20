"use strict";

var React = require("react");

var Selectize = require("./selectize.jsx");

var ApiStore = require('../stores/apiStore');
var Api = require('../actions/apiAction');

var Select = React.createClass({
  componentWillMount: function() {
    // replace with AJAX !!!
    this.options = [{id: "1", name: "Acer"}, {id: "2", name: "Asus"}, {id: "3", name: "Apple"}];
  },
  componentDidMount: function() {
    this.unsubscribe = ApiStore.listen(this.onStatusChange);
    Api.load();
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