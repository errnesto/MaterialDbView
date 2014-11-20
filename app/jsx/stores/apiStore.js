var Reflux = require('reflux');
var apiActions = require('../actions/apiActions');
var ApiStore = Reflux.createStore({
	init: function() {
		this.state = {
			previews: [],
			detail: {},
			loading: false,
			error: null
		};
		this.listenTo(apiActions.load, this.onLoadEntries);
		this.listenTo(apiActions.success, this.onLoadEntriesSuccess);
		this.listenTo(apiActions.error, this.onLoadEntriesError);
		this.listenTo(apiActions.loadById, this.onLoadEntry);
		this.listenTo(apiActions.successLoadById, this.onLoadEntrySuccess);
	},
	/*******************
	preview list
	********************/
	onLoadEntries: function() {
		this.state.loading = true;
		this.trigger(this.state);
	},
	onLoadEntriesSuccess: function(data) {
		this.state.loading = false;
		this.state.error = null;
		this.state.previews = data;
		this.trigger(this.state);
	},
	onLoadEntriesError: function(data) {
		this.state.loading = false;
		this.state.error = data.error;
		this.trigger(this.state);
	},
	/*******************
	preview detail
	********************/
	onLoadEntry: function() {
		this.state.loading = true;
		this.trigger(this.state);
	},
	onLoadEntrySuccess: function(data) {
		this.state.loading = false;
		this.state.error = null;
		this.state.detail = data[0];
		this.trigger(this.state);
	}
});
module.exports = ApiStore;