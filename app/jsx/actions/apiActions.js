var Reflux = require('reflux');
var MaterialApi = require('../api');
var apiActions = Reflux.createActions([
	'loadDevice',
  'loadComponent',
  'loadPart',
	'loadSuccess'
]);

apiActions.loadPart.preEmit = function() {
  var part = MaterialApi.loadPart();
  apiActions.loadSuccess('part', part)
};

apiActions.loadComponent.preEmit = function() {
  var component = MaterialApi.loadComponent();
  apiActions.loadSuccess('component', component)
};

apiActions.loadDevice.preEmit = function() {
	var device = MaterialApi.loadDevices();
	apiActions.loadSuccess('device', device)
};

module.exports = apiActions;