require('es5-shim-sham'); // polyfills
var React = require('react');
var Page  = React.createFactory(require('../jsx/page.jsx'));

// add Page to html
var content = document.getElementById('content');
React.render(Page(null), content);