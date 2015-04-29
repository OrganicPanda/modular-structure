angular.module('NS', [
  // Vendors

  // App modules
  'NS.core',
  'NS.models',
  'NS.components',
  'NS.pages'
]);

angular.module('NS.core', [
  'NS.core.config',
  'NS.core.constants',
  'NS.core.styling',
  'NS.core.utils'
]);

angular.module('NS.models', [
  'NS.models.example'
]);

angular.module('NS.components', [
  'NS.components.example'
]);

angular.module('NS.pages', [
  'NS.pages.example'
]);
