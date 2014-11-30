var reqwest = require('reqwest');
var data    = require('../device_data.json');
var config  = require('../config');

var Api = {
	loadDevices: function(filter) {
		return data
	},

	loadComponent: function(filter) {
		return data.components[0]
	},

	loadPart: function(filter) {
		return data.components[0].parts[0]
	},
	
	loadById: function(id) {
		return reqwest({
			url: config.urls.manufacturers + '/' + id,
			type: 'json',
			crossOrigin: true
		});
	}
}
module.exports = Api;