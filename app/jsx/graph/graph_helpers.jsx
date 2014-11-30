var graph_helpers = {
  buildComponentRepresentation: function (numberOfDots, deviceWeight, components) {
    var componentList = [];
    var dotsUsed      = 0;

    if (components) {
      components.forEach(function (component) {
        var dots  = Math.ceil(numberOfDots * component.mg / deviceWeight);
        dotsUsed += dots;

        componentList.push({
          component:    component,
          numberOfDots: dots
        });
      });
    }

    // add unkown components
    componentList.push({
      component: {
        name: 'unkown'
      },
      numberOfDots: numberOfDots - dotsUsed
    });

    return componentList;
  }
};

module.exports = graph_helpers;