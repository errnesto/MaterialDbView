var Reflux = require('reflux');
var apiActions = require('../actions/apiAction');
var ApiStore = Reflux.createStore({
	init: function() {
		this.state = {
			previews: [],
			detail: {},
			loading: false,
			error: null
		};
		this.listenTo(apiActions.load, this.onLoadPreviews);
		this.listenTo(apiActions.success, this.onLoadPreviewsSuccess);
		this.listenTo(apiActions.error, this.onLoadPreviewsError);
		this.listenTo(apiActions.loadById, this.onLoadPreviewById);
		this.listenTo(apiActions.successLoadById, this.onLoadPreviewByIdSuccess);
	},
	/*******************
	preview list
	********************/
	onLoadPreviews: function() {
		this.state.loading = true;
		this.trigger(this.state);
	},
	onLoadPreviewsSuccess: function(data) {
		this.state.loading = false;
		this.state.error = null;
		this.state.previews = data;
		this.trigger(this.state);
	},
	onLoadPreviewsError: function(data) {
		this.state.loading = false;
		this.state.error = data.error;
		this.trigger(this.state);
	},
	/*******************
	preview detail
	********************/
	onLoadPreviewById: function() {
		this.state.loading = true;
		this.trigger(this.state);
	},
	onLoadPreviewByIdSuccess: function(data) {
		this.state.loading = false;
		this.state.error = null;
		this.state.detail = data[0];
		this.trigger(this.state);
	}
});
module.exports = ApiStore;