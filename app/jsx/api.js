var reqwest = require('reqwest');
var data    = require('../device_data.json');
var config  = require('../config');

var Api = {
	loadDevices: function(filter) {
		return data
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