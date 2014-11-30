var Reflux = require('reflux');
var MaterialApi = require('../api');
var apiActions = Reflux.createActions([
	'loadDevice',
	'deviceLoaded'
]);
apiActions.loadDevice.preEmit = function() {
	var device = MaterialApi.loadDevices();
	apiActions.deviceLoaded(device)
};

module.exports = apiActions;