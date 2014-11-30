var Reflux = require('reflux');
var guiActions = require('../actions/guiActions');

var ApiStore = Reflux.createStore({
	init: function() {
		this.state = {
			selectedDot: null
		};

		this.listenTo(guiActions.clickOnDot, this.onClickOnDot);
		this.listenTo(guiActions.click, this.onClick);
	},

	onClick: function() {
		this.state.selectedDot = '';
		this.trigger(this.state);
	},

	onClickOnDot: function(dotKey) {
		this.state.selectedDot = dotKey;
		this.trigger(this.state);
	}


});
module.exports = ApiStore;