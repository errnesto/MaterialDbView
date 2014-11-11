"use strict";

var React   = require('react');

var PartGraph = require('./partGraph.jsx');

var ComponentGraph = React.createClass({

  render: function() {  
    return (
      <PartGraph 
        {...this.props} 
        partName = "partName" />
    );
  }
});

module.exports = ComponentGraph;