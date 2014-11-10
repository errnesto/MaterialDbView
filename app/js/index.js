require('es5-shim-sham'); // polyfills
var React = require('react');
var Page  = require('../jsx/page.jsx');

// add Page to html
var content = document.getElementById('content');
React.renderComponent(Page(null), content);