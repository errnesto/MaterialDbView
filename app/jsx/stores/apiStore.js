var Reflux = require('reflux');
var apiActions = require('../actions/apiActions');
var ApiStore = Reflux.createStore({
	init: function() {
		this.state = {
			graphType: null,
			data:      null
		};

		this.listenTo(apiActions.loadSuccess, this.onLoadSuccess);
	},
	
	onLoadSuccess: function(graphType, data) {
		this.state.graphType = graphType;
		this.state.data      = data;
		this.trigger(this.state);
	}
});
module.exports = ApiStore;