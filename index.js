var THEMED = '@import "~react-toolbox/_colors"; \n $theme-building: true;';
var DEFAULT_NAME = 'theme.scss';
var path = require('path');
var fs = require('fs');

module.exports = function (source) {
  if (this.cacheable) this.cacheable();
  var callback = this.async();
  var themeName = this.options.toolboxTheme || DEFAULT_NAME;
  var themePath = path.resolve(themeName);

  this.addDependency(themePath);

  fs.readFile(themePath, "utf-8", function(err, theme) {
    if(err) return callback(err);
    callback(null, THEMED + '\n' + theme + '\n' + source);
  });
};
