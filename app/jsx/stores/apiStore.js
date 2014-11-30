var Reflux = require('reflux');
var apiActions = require('../actions/apiActions');
var ApiStore = Reflux.createStore({
	init: function() {
		this.state = {
			graphType: null,
			data:      null
		};

		this.listenTo(apiActions.deviceLoaded, this.onDeviceLoaded);
	},
	
	onDeviceLoaded: function(data) {
		this.state.graphType = 'device';
		this.state.data      = data;
		this.trigger(this.state);
	}
});
module.exports = ApiStore;