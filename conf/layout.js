var appConf = require('./app');

module.exports = {
  conf: {
    vendorScript: '<!-- ' + appConf.nameSpace + ': scripts_vendor -->',
    vendorStylesheet: '<!-- ' + appConf.nameSpace + ': stylesheets_vendor -->',
    appScript: '<!-- ' + appConf.nameSpace + ': scripts_app -->',
    appStylesheet: '<!-- ' + appConf.nameSpace + ': stylesheets_app -->'
  },
  vendor: [
    {
      name: 'angular',
      stylesheet: null,
      script: 'angular.min.js'
    }
  ]
};
