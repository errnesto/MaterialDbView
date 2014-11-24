var helpers = {
  makeCssString: function (string) {
    var escaped = string.replace(/\W/g,'-');   
    return escaped.toLowerCase();
  }
};

module.exports = helpers;