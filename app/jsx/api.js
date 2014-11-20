var reqwest = require('reqwest');
var config = require('../config');
var Api = {
	load: function() {
		return reqwest({
			url: config.urls.manufacturers,
			type: 'json',
			crossOrigin: true
		});
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