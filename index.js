var HEADING = '@import "~react-toolbox/lib/_colors"; \n $theme-building: true;';
var DEFAULT_NAME = 'theme.scss';
var path = require('path');
var fs = require('fs');

module.exports = function (source) {
  if (this.cacheable) this.cacheable();
  var callback  = this.async();
  var options   = this.options.toolbox || {};
  var fromBuild = options.fromBuild || true;
  var themeName = options.theme || DEFAULT_NAME;
  var themePath = path.resolve(themeName);
  var heading = HEADING;

  if (!fromBuild) {
    heading = heading.replace('/lib', '');
  }

  this.addDependency(themePath);

  fs.readFile(themePath, "utf-8", function(err, theme) {
    if(err) return callback(err);
    callback(null, heading + '\n' + theme + '\n' + source);
  });
};
