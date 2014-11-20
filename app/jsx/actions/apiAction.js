var Reflux = require('reflux');
var PreviewApi = require('../api');
var apiAction = Reflux.createActions([
	'load',
	'success',
	'error',
	'loadById',
	'successLoadById'
]);
apiAction.load.preEmit = function() {
	PreviewApi
		.load()
		.then(function(res) {
			console.log(res);
		})
		.then(apiAction.success, apiAction.error);
};
apiAction.loadById.preEmit = function(id) {
	PreviewApi
		.loadById(id)
		.then(apiAction.successLoadById, apiAction.errorDetail);
};
module.exports = previewActions;