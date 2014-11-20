var Reflux = require('reflux');
var PreviewApi = require('../api');
var apiActions = Reflux.createActions([
	'load',
	'success',
	'error',
	'loadById',
	'successLoadById'
]);
apiActions.load.preEmit = function() {
	PreviewApi
		.load()
		.then(function(res) {
			console.log(res);
		})
		.then(apiActions.success, apiActions.error);
};
apiActions.loadById.preEmit = function(id) {
	PreviewApi
		.loadById(id)
		.then(apiActions.successLoadById, apiActions.errorDetail);
};
module.exports = apiActions;