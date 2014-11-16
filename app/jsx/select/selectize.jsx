"use strict";

var React = require("react");
var $     = require("jquery");

var selectize = require('./../../vendor/js/selectize.js');

var Selectize = React.createClass({

  propTypes: {
    options:          React.PropTypes.array.isRequired,
    valueAttribute:   React.PropTypes.string.isRequired,
    displayAttribute: React.PropTypes.string.isRequired,
    onChange:         React.PropTypes.func.isRequired
  },

  onChange: function(values) {
    this.props.onChange(values);
  },

  componentDidMount: function(select) {
    var $el = $(this.getDOMNode());
    $el.selectize({
      create:      true,
      sortField:   'text',
      options:     this.props.options,
      valueField:  this.props.valueAttribute,
      labelField:  this.props.displayAttribute,
      searchField: this.props.displayAttribute,
      onChange:    this.onChange
    });

  },

  render: function() {
    return React.DOM.select(this.props, this.props.children);
  }
});

module.exports = Selectize;